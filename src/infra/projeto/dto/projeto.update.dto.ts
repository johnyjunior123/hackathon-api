import { PartialType } from '@nestjs/mapped-types';
import { CreateProjetoDto } from './projeto.create.dto';

export class UpdateProjetoDto extends PartialType(CreateProjetoDto) { }