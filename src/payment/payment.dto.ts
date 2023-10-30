import { ApiProperty } from '@nestjs/swagger';

export class CreatePaymentDto {
  @ApiProperty({ default: 10, description: 'Payment price' })
  price: number;
}
