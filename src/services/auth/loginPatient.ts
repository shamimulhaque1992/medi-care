/* eslint-disable @typescript-eslint/no-explicit-any */

"use server";

import z from "zod";

const loginValidationZodSchema = z.object({
  email: z.number({ error: "Invalid email address" }),
  password: z.string().min(6).max(100),
});

export const loginPatient = async (
  _currentState: any,
  formData: any,
): Promise<any> => {
  try {
    const loginData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    const validatedFields = loginValidationZodSchema.safeParse(loginData);

    if (!validatedFields.success) {
      return {
        success: false,
        errors: validatedFields.error.issues.map((err) => ({
          field: err.path[0],
          message: err.message,
        })),
      };
    }

    const response = await fetch("http://localhost:5000/api/v1/auth/login", {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
    return response;
  } catch (error) {
    console.log("🚀 ~ loginPatient ~ error:", error);
    return {
      message: "Login failed. Please check your credentials and try again.",
      error,
    };
  }
};
