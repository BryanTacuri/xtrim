export interface ResponseDate {
  data: Data;
  message: string;
}

export interface Data {
  account_number: string;
  city: string;
  id: number;
  money: number;
  username: string;
}
