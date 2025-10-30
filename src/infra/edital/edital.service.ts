import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEditalDto } from './dto/create-edital.dto';
import { UpdateEditalDto } from './dto/update.edital.dto';

@Injectable()
export class EditalService {
    constructor(private prisma: PrismaService) { }

    async create(data: CreateEditalDto) {
        return this.prisma.edital.create({
            data: {
                nome: data.nome,
                local: data.local,
                condicaoParticipacao: data.condicaoParticipacao,
                somenteResidentes: data.somenteResidentes ?? false,
                documentosNecessarios: data.documentosNecessarios,
                linkAcesso: data.linkAcesso,
            },
        });
    }

    async findAll() {
        return this.prisma.edital.findMany();
    }

    async findOne(id: number) {
        const edital = await this.prisma.edital.findUnique({ where: { id } });
        if (!edital) throw new NotFoundException('Edital não encontrado');
        return edital;
    }

    async update(id: number, data: UpdateEditalDto) {
        return this.prisma.edital.update({
            where: { id },
            data,
        });
    }

    async remove(id: number) {
        return this.prisma.edital.delete({ where: { id } });
    }
}