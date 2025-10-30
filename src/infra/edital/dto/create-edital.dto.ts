import { IsString, IsEnum, IsOptional, IsBoolean } from 'class-validator';

enum Condicao {
    FISICA,
    MEI,
    ME
}

export class CreateEditalDto {
    @IsString()
    nome: string;

    @IsString()
    local: string;

    @IsEnum(Condicao)
    condicaoParticipacao: Condicao;

    @IsOptional()
    @IsBoolean()
    somenteResidentes?: boolean;

    @IsOptional()
    @IsString()
    documentosNecessarios?: string;

    @IsOptional()
    @IsString()
    linkAcesso?: string;
}