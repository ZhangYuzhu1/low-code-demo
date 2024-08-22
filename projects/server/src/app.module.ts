import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import allConfig from './config'
import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [

    // 环境配置
    ConfigModule.forRoot({
      envFilePath: ['.env.local', '.env.dev', '.env.staging', '.env.production', '.env'],
      isGlobal: true,
      cache: true,
      load: [...allConfig],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
