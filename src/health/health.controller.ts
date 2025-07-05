import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Controller('health')
export class HealthController {
  constructor(private dataSource: DataSource) {}

  @Get()
  async check() {
    try {
      // Виконуємо простий запит, щоб перевірити з'єднання з базою
      await this.dataSource.query('SELECT 1');
      return { status: 'ok' };
    } catch {
      // Якщо щось не так — повертаємо 503 Service Unavailable
      throw new HttpException(
        'Database connection failed',
        HttpStatus.SERVICE_UNAVAILABLE,
      );
    }
  }
}
