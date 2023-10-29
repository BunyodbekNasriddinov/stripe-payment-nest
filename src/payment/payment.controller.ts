import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { BookPaymentDto } from './payment.dto';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @HttpCode(200)
  @Post('book')
  async bookCreate(@Body() body: BookPaymentDto) {
    return this.paymentService.bookCreate(body.price);
  }
}
