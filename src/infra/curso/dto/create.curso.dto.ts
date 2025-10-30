import { IsString, IsOptional, IsNumber, IsBoolean } from 'class-validator';

export class CreateCursoDto {
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
    qntdHoras?: number;

    @IsOptional()
    @IsBoolean()
    certificado?: boolean;

    @IsNumber()
    produtorId: number;
}