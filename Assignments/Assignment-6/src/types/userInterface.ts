export interface UserTypes {
  name: string;
  email: string;
  password: string;
  age?: number;
  role: "user" | "admin";
  experience?: number;
  createdAt?: Date;
}

export interface JWTPayload {
  id: string;
  role: "user" | "admin";
}
