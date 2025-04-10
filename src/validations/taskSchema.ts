import { z } from "zod";

export const taskSchema = z
  .object({
    title: z
      .string({
        required_error: "title is required!",
        invalid_type_error: "title must be a string!",
      })
      .min(3, "title must have at least 3 characters!")
      .max(40, "max title length exceeded!"),

    description: z
      .string({
        required_error: "description is required!",
        invalid_type_error: "description must be a string!",
      })
      .min(3, "description must have at least 3 characters!")
      .max(255, "max description length exceeded!"),

    date: z
      .string({
        required_error: "date is required!",
        invalid_type_error: "date must be a string!",
      })
      .datetime("date must be UTC format!"),

    status: z
      .enum(["completed", "pending"], {
        invalid_type_error: "status must be a string!",
        required_error: "status is required and must be 'completed' or 'pending'!",
      })
      .optional(),
  })
  .strict();

export type TaskDataTypes = z.infer<typeof taskSchema>;
