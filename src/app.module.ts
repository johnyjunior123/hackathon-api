import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ProjetoModule } from './infra/projeto/projeto.module';
import { UserModule } from './infra/user/user.module';
import { CursoModule } from './infra/curso/curso.module';

@Module({
  imports: [PrismaModule, ProjetoModule, UserModule, CursoModule],
})
export class AppModule { }
