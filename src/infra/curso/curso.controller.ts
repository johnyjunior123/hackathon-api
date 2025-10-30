import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { CursoService } from './curso.service';
import { CreateCursoDto } from './dto/create.curso.dto';
import { UpdateCursoDto } from './dto/update.curso.dto';

@Controller('cursos')
export class CursoController {
    constructor(private readonly cursoService: CursoService) { }

    @Post()
    create(@Body() data: CreateCursoDto) {
        return this.cursoService.create(data);
    }

    @Get()
    findAll() {
        return this.cursoService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.cursoService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateCursoDto) {
        return this.cursoService.update(id, data);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.cursoService.remove(id);
    }
}