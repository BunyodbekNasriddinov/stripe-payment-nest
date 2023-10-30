import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectStripe } from 'nestjs-stripe';
import Stripe from 'stripe';

@Injectable()
export class PaymentService {
  constructor(@InjectStripe() private readonly stripeClient: Stripe) {}
  async create(price: number) {
    try {
      const paymentIntents = await this.stripeClient.paymentIntents.create({
        amount: price * 100,
        currency: 'usd',
      });
      return {
        status: 201,
        message: 'success',
        payment_intents: paymentIntents,
      };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
