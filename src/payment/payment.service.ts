import { Injectable } from '@nestjs/common';
import { InjectStripe } from 'nestjs-stripe';
import Stripe from 'stripe';

@Injectable()
export class PaymentService {
  constructor(@InjectStripe() private readonly stripeClient: Stripe) {}
  async bookCreate(price: number) {
    const paymentIntents = await this.stripeClient.paymentIntents.create({
      amount: price * 100,
      currency: 'usd',
    });
    return paymentIntents.client_secret;
  }
}
