import bcrypt from "bcrypt";

export const comparePassword = async (plainPassword: string, hashedPassword: string) => {
  return await bcrypt.compare(plainPassword, hashedPassword);
};

export const hashPassword = async (password: string) => {
  return await bcrypt.hash(password, 8);
};
