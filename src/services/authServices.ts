import { compare } from "bcrypt";
import { AppError } from "../errors/appError";
import { UserRepositoryTypes } from "./userServices";
import { AuthDataTypes } from "../validations/authSchema";

export const authServices = {
  async login({ email, password }: AuthDataTypes, repository: UserRepositoryTypes) {
    try {
      const user = await repository.getUserByEmail(email);

      if (!user) {
        throw new AppError("email or password invalid", 401);
      }

      const passwordCheck = await compare(password, user.password);

      if (!passwordCheck) {
        throw new AppError("email or password invalid", 401);
      }

      console.log(passwordCheck, user);

      return { id: user.id };
    } catch (error) {
      throw error;
    }
  },
};
