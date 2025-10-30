import { IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateProjetoDto {
    @IsString()
    nome: string;

    @IsOptional()
    @IsString()
    imagemUrl?: string;

    @IsOptional()
    @IsString()
    descricao?: string;

    @IsOptional()
    @IsNumber()
    valorNecessario?: number;

    @IsNumber()
    produtorId: number;
}