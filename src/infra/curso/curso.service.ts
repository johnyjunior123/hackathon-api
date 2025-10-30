import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCursoDto } from './dto/create.curso.dto';
import { UpdateCursoDto } from './dto/update.curso.dto';

@Injectable()
export class CursoService {
    constructor(private prisma: PrismaService) { }

    async create(data: CreateCursoDto) {
        return this.prisma.curso.create({
            data: {
                nome: data.nome,
                imagemUrl: data.imagemUrl,
                descricao: data.descricao,
                qntdHoras: data.qntdHoras,
                certificado: data.certificado ?? false,
                produtor: { connect: { id: data.produtorId } },
            },
        });
    }

    async findAll() {
        return this.prisma.curso.findMany({
            include: { produtor: true },
        });
    }

    async findOne(id: number) {
        const curso = await this.prisma.curso.findUnique({
            where: { id },
            include: { produtor: true },
        });
        if (!curso) throw new NotFoundException('Curso não encontrado');
        return curso;
    }

    async update(id: number, data: UpdateCursoDto) {
        return this.prisma.curso.update({
            where: { id },
            data,
        });
    }

    async remove(id: number) {
        return this.prisma.curso.delete({ where: { id } });
    }
}