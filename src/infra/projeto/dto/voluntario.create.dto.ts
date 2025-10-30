import { IsString, IsNumber } from 'class-validator';

export class CreateVoluntarioDto {
    @IsNumber()
    userId: number;

    @IsNumber()
    projetoId: number;

    @IsString()
    funcao: string;
}