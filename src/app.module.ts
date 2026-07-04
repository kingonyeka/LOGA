import { Module } from '@nestjs/common';
import { AppConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { RedisModule } from './redis/redis.module';

// Feature/infra modules — uncomment as each one is wired up:
// import { QueueModule } from './queues/queue.module';
// import { WhatsappModule } from './modules/whatsapp/whatsapp.module';
// import { ConversationModule } from './modules/conversation/conversation.module';
// import { MembersModule } from './modules/members/members.module';
// import { HealthModule } from './modules/health/health.module';

@Module({
  imports: [
    AppConfigModule,
    DatabaseModule,
    RedisModule,
    // QueueModule,
    // WhatsappModule,
    // ConversationModule,
    // MembersModule,
    // HealthModule,
  ],
})
export class AppModule {}