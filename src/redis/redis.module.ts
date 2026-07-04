import { Module, Global } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RedisService } from './redis.service';

@Global()
@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: 'REDIS_URL',
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        configService.get<string>('redis.url'),
    },
    RedisService,
  ],
  exports: [RedisService],
})
export class RedisModule {}