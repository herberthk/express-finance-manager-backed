import { Types } from 'mongoose'
export interface Token {
  name: string;
  id: Types.ObjectId;
}

export interface Register {
  name: string;
  email: string;
  password: string;
}

export interface Login {
  email: string;
  password: string;
}
export interface Login {
  email: string;
  password: string;
}
export interface CreateCompany {
  bank: string;
  name: string;
  email: string;
  phone: string;
  yt: string;
  twt: string;
  fb: string;
  desc: string;
  location: string;
  user: string;
  bankBal: number;
  cashBal: number;
}

export interface Transaction {
  id: string;
  amount: number;
  name: 'land' | 'vehicle' | 'machine';
  cash: number;
  bank: number;
  account: 'cash' | 'bank';
  type: 'sell' | 'buy';
  item: string;
  price: number;
  qty: number;
  sPrice: number;
}
