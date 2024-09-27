import { join } from 'node:path'

import { validatePath } from 'utils'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ScheduleModule } from '@nestjs/schedule'
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler'
import { Module, RequestMethod } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import { ConfigModule, ConfigService } from '@nestjs/config'
import type { TypeOrmModuleOptions } from '@nestjs/typeorm'
import type { MiddlewareConsumer, NestModule } from '@nestjs/common'

import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core'
import allConfig from './config'
import { IpMiddleware } from './middleware/ip.middleware'
import { AuthMiddleware } from './middleware/auth.middleware'
import { AccessMiddleware } from './middleware/access.middleware'
import { LogModule } from './modules/log/log.module'
import { UserModule } from './modules/user/user.module'
import { RoleModule } from './modules/role/role.module'
import { CodeModule } from './modules/code/code.module'
import { RedisModule } from './modules/redis/redis.module'
import { EmailModule } from './modules/email/email.module'
import { ResponseInterceptor } from './interceptors/response.interceptor'
import { ThrottlerExceptionFilter } from './filter/throttler-exception.filter'
import { AuthModule } from './modules/auth/auth.module'

@Module({
  imports: [
    // Internal Modules
    AuthModule,
    LogModule,
    UserModule,
    RoleModule,
    CodeModule,
    RedisModule,
    EmailModule,

    // 定时任务
    ScheduleModule.forRoot(),
    // 请求限流
    ThrottlerModule.forRoot({ ttl: 10, limit: 30 }),

    // 环境配置
    ConfigModule.forRoot({
      envFilePath: ['.env.local', '.env.dev', '.env.staging', '.env.production', '.env'],
      isGlobal: true,
      cache: true,
      load: [...allConfig],
    }),
    // 数据库
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (cfgSrv: ConfigService) => cfgSrv.get<TypeOrmModuleOptions>('db'),
    }),
    // 静态资源服务
    ServeStaticModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (cfgSrv: ConfigService) => [
        {
          rootPath: join(__dirname, 'public'),
          serveRoot: validatePath(cfgSrv.get('app.basePath')),
        },
      ],
    }),
  ],
  providers: [
    { provide: APP_INTERCEPTOR, useClass: ResponseInterceptor },
    { provide: APP_GUARD, useClass: ThrottlerGuard },
    { provide: APP_FILTER, useClass: ThrottlerExceptionFilter },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(IpMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    })
    consumer.apply(AuthMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    })
    consumer.apply(AccessMiddleware)
      .exclude(
        { path: 'log/(.*)', method: RequestMethod.ALL },
      ).forRoutes({
        path: '*',
        method: RequestMethod.ALL,
      })
  }
}
