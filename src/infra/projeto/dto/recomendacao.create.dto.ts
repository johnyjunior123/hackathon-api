import { IsNumber } from 'class-validator';

export class CreateRecomendacaoDto {
    @IsNumber()
    userId: number;

    @IsNumber()
    projetoId: number;
}