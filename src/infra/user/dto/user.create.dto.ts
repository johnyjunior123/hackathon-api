import { IsString, IsOptional, IsEmail, IsDateString, IsEnum } from 'class-validator';

enum Role {
    NORMAL,
    PRODUTOR,
    FOMENTADOR
}

export class CreateUserDto {
    @IsString()
    nome: string;

    @IsOptional()
    @IsString()
    cpf?: string;

    @IsOptional()
    @IsDateString()
    nascimento?: string;

    @IsEmail()
    email: string;

    @IsOptional()
    @IsString()
    contato?: string;

    @IsString()
    password: string;

    @IsOptional()
    @IsEnum(Role)
    role?: Role;
}