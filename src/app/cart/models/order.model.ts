import {OrderItem} from './orderitem.model';

export class Order{
  userId: number;
  orderAddress: string;
  orderItems: OrderItem[];
}
