import { Address } from "../entity/Address";

export interface User {
    id?: string;
    displayName?: string;
    username?: string;
    password?: string;
    email?: string;
    phone?: string;
    photo: string;
    address?: Address;
    isBlock: boolean;
  }