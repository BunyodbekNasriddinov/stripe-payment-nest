import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './payment.dto';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @HttpCode(201)
  @Post('create')
  async create(@Body() body: CreatePaymentDto) {
    return this.paymentService.create(body.price);
  }
}
