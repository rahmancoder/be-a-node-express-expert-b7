export interface IUser {
  name: string; //varchar
  email: string; //varchar
  password: string; //text
  age: number; //int
  is_active?: boolean; //boolean
}
