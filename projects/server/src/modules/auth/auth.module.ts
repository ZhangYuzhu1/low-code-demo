import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'

import { Login } from 'src/entities/login'

import { UserModule } from '../user/user.module'
import { CodeModule } from '../code/code.module'
import { JwtAuthModule } from '../jwt/jwt.module'

import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'

@Module({
  imports: [
    UserModule,
    CodeModule,
    JwtAuthModule,
    // forwardRef(() => UserModule),
    TypeOrmModule.forFeature([Login]),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
