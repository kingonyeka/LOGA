import * as Joi from 'joi';

export const validationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test')
    .default('development'),
  PORT: Joi.number().default(3000),

  DATABASE_URL: Joi.string().required(),
  REDIS_URL: Joi.string().required(),

  WHATSAPP_ACCESS_TOKEN: Joi.string().allow('').optional(),
  WHATSAPP_PHONE_NUMBER_ID: Joi.string().allow('').optional(),
  WHATSAPP_BUSINESS_ACCOUNT_ID: Joi.string().allow('').optional(),
  WHATSAPP_WEBHOOK_VERIFY_TOKEN: Joi.string().required(),

  GOOGLE_SERVICE_ACCOUNT_EMAIL: Joi.string().allow('').optional(),
  GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY: Joi.string().allow('').optional(),
  GOOGLE_SHEETS_SPREADSHEET_ID: Joi.string().allow('').optional(),
  GOOGLE_MAPS_API_KEY: Joi.string().allow('').optional(),

  JWT_SECRET: Joi.string().required(),
  JWT_EXPIRES_IN: Joi.string().default('1d'),

  SENTRY_DSN: Joi.string().allow('').optional(),

  LOGA_CHURCH_ADDRESS: Joi.string().allow('').optional(),
  LOGA_CHURCH_LAT: Joi.string().allow('').optional(),
  LOGA_CHURCH_LNG: Joi.string().allow('').optional(),
  ADMIN_NOTIFICATION_GROUP_ID: Joi.string().allow('').optional(),
});