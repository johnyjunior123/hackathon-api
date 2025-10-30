import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProjetoDto } from './dto/projeto.create.dto';
import { UpdateProjetoDto } from './dto/projeto.update.dto';
import { CreateVoluntarioDto } from './dto/voluntario.create.dto';
import { CreateRecomendacaoDto } from './dto/recomendacao.create.dto';

@Injectable()
export class ProjetoService {
    constructor(private prisma: PrismaService) { }

    async create(data: CreateProjetoDto) {
        return this.prisma.projeto.create({
            data: {
                nome: data.nome,
                imagemUrl: data.imagemUrl,
                descricao: data.descricao,
                valorNecessario: data.valorNecessario,
                produtor: { connect: { id: data.produtorId } },
            },
        });
    }

    async findAll() {
        return this.prisma.projeto.findMany({
            include: { produtor: true, voluntarios: true, recomendacoes: true },
        });
    }

    async findOne(id: number) {
        const projeto = await this.prisma.projeto.findUnique({
            where: { id },
            include: { voluntarios: { include: { user: true } }, recomendacoes: true },
        });
        if (!projeto) throw new NotFoundException('Projeto não encontrado');
        return projeto;
    }

    async update(id: number, data: UpdateProjetoDto) {
        return this.prisma.projeto.update({
            where: { id },
            data,
        });
    }

    async remove(id: number) {
        return this.prisma.projeto.delete({ where: { id } });
    }

    async addVoluntario(data: CreateVoluntarioDto) {
        return this.prisma.voluntario.create({
            data: {
                funcao: data.funcao,
                user: { connect: { id: data.userId } },
                projeto: { connect: { id: data.projetoId } },
            },
        });
    }

    async recomendar(data: CreateRecomendacaoDto) {
        return this.prisma.recomendacao.create({
            data: {
                user: { connect: { id: data.userId } },
                projeto: { connect: { id: data.projetoId } },
            },
        });
    }
}