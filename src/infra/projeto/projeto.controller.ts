import { Controller, Get, Post, Body, Param, Patch, Delete, ParseIntPipe } from '@nestjs/common';
import { ProjetoService } from './projeto.service';
import { CreateProjetoDto } from './dto/projeto.create.dto';
import { UpdateProjetoDto } from './dto/projeto.update.dto';
import { CreateVoluntarioDto } from './dto/voluntario.create.dto';
import { CreateRecomendacaoDto } from './dto/recomendacao.create.dto';

@Controller('projetos')
export class ProjetoController {
    constructor(private readonly projetoService: ProjetoService) { }

    @Post()
    create(@Body() data: CreateProjetoDto) {
        return this.projetoService.create(data);
    }

    @Get()
    findAll() {
        return this.projetoService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.projetoService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateProjetoDto) {
        return this.projetoService.update(id, data);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.projetoService.remove(id);
    }

    @Post('voluntario')
    addVoluntario(@Body() data: CreateVoluntarioDto) {
        return this.projetoService.addVoluntario(data);
    }

    @Post('recomendar')
    recomendar(@Body() data: CreateRecomendacaoDto) {
        return this.projetoService.recomendar(data);
    }
}