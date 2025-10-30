import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { EditalService } from './edital.service';
import { CreateEditalDto } from './dto/create-edital.dto';
import { UpdateEditalDto } from '../curso/dto/update.curso.dto';

@Controller('editais')
export class EditalController {
    constructor(private readonly editalService: EditalService) { }

    @Post()
    create(@Body() data: CreateEditalDto) {
        return this.editalService.create(data);
    }

    @Get()
    findAll() {
        return this.editalService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.editalService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateEditalDto) {
        return this.editalService.update(id, data);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.editalService.remove(id);
    }
}