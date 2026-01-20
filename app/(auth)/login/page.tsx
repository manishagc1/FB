"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useTransition, useState } from "react";
import { useRouter } from "next/navigation";
import { LoginData, loginSchema } from "../schema";
import { handleLogin } from "@/lib/actions/auth-actions";
import { Mail, Lock, Loader2 } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [serverError, setServerError] = useState("");
  const [pending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const submit = (values: LoginData) => {
    setServerError("");

    startTransition(async () => {
      const res = await handleLogin(values);
      res.success ? router.push("/") : setServerError(res.message);
    });
  };

  return (
  <div className="min-h-screen flex items-center justify-center bg-cyan-500 px-4">
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">
      <h1 className="text-2xl font-bold text-center text-cyan-600 mb-1">
        Flight Buddy ✈️
      </h1>
      <p className="text-sm text-center text-gray-500 mb-6">
        Login to continue your journey
      </p>

      {serverError && (
        <div className="mb-4 rounded-lg bg-red-100 text-red-600 px-4 py-2 text-sm">
          {serverError}
        </div>
      )}

      <form onSubmit={handleSubmit(submit)} className="space-y-4">
        {/* Email */}
        <div>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-5 w-5 text-cyan-500" />
            <input
              {...register("email")}
              placeholder="Enter your email"
              className="h-11 w-full pl-10 rounded-lg border border-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
          {errors.email && (
            <p className="text-xs text-red-500 mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-5 w-5 text-cyan-500" />
            <input
              type="password"
              {...register("password")}
              placeholder="Enter your password"
              className="h-11 w-full pl-10 rounded-lg border border-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
          {errors.password && (
            <p className="text-xs text-red-500 mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          disabled={pending || isSubmitting}
          className="h-11 w-full rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-semibold flex justify-center items-center gap-2 transition"
        >
          {(pending || isSubmitting) && (
            <Loader2 className="h-4 w-4 animate-spin" />
          )}
          Login
        </button>

        <p className="text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link
            href="/register"
            className="text-cyan-600 font-semibold hover:underline"
          >
            Create one
          </Link>
        </p>
      </form>
    </div>
  </div>
);
}