"use server";

import { loginUser, registerUser } from "@/lib/api/auth";
import { cookies } from "next/headers";

type RegisterFormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type LoginFormData = {
  email: string;
  password: string;
};

// Register
export const handleRegister = async (formData: RegisterFormData) => {
  try {
    const res = await registerUser(formData);
    return {
      success: true,
      message: res.message,
      data: res.data,
    };
  } catch (err: unknown) {
    return {
      success: false,
      message: err instanceof Error ? err.message : "Something went wrong",
    };
  }
};

// Login
export const handleLogin = async (formData: LoginFormData) => {
  try {
    const res = await loginUser(formData);

    // Set cookies
    const cookieStore = await cookies();

    cookieStore.set("token", res.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24, // 1 day
    });

    cookieStore.set("user", JSON.stringify(res.data), {
      httpOnly: false,
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    return {
      success: true,
      message: res.message,
      data: res.data,
    };
  } catch (err: unknown) {
    return {
      success: false,
      message: err instanceof Error ? err.message : "Something went wrong",
    };
  }
};
