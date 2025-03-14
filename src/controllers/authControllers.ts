import { Request, Response, NextFunction } from "express";
import { authSchema } from "../validations/authSchema";
import { authServices } from "../services/authServices";
import { userRepository } from "../repositories/userRepository";

export const authControllers = {
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = authSchema.parse(req.body);

      const { id } = await authServices.login({ email, password }, userRepository);

      res.status(200).json({ message: "login completed", id });
    } catch (error) {
      next(error);
    }
  },
};
