import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/user.create.dto';
import { UpdateUserDto } from './dto/user.updte.dto';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) { }

    async create(data: CreateUserDto) {
        return this.prisma.user.create({
            data: {
                nome: data.nome,
                cpf: data.cpf,
                nascimento: data.nascimento,
                email: data.email,
                contato: data.contato,
                password: data.password,
                role: data.role,
            },
        });
    }

    async findAll() {
        return this.prisma.user.findMany({
            include: { empresa: true, endereco: true, projetos: true, cursos: true },
        });
    }

    async findOne(id: number) {
        const user = await this.prisma.user.findUnique({
            where: { id },
            include: { empresa: true, endereco: true, projetos: true, cursos: true },
        });
        if (!user) throw new NotFoundException('Usuário não encontrado');
        return user;
    }

    async update(id: number, data: UpdateUserDto) {
        return this.prisma.user.update({
            where: { id },
            data,
        });
    }

    async remove(id: number) {
        return this.prisma.user.delete({ where: { id } });
    }
}