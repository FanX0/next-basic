"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const LoginFormSchema = z.object({
  email: z.string(),
  password: z.string().min(8),
});

type LoginFormData = z.infer<typeof LoginFormSchema>;

const LoginPage = ({ searchParams }: any) => {
  const { push } = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const form = useForm<LoginFormData>({
    resolver: zodResolver(LoginFormSchema),
  });

  const callbackUrl = searchParams.callbackUrl || "/";
  const handleLoginUser = async (data: LoginFormData) => {
    try {
      setIsLoading(true);
      const res = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
        callbackUrl,
      });
      if (!res?.error) {
        push(callbackUrl);
        setIsLoading(false);
      } else {
        console.log(res);
        if (res.status === 401) {
          setError("Email or Password is Incorrect");
        }
        console.log(res.error);
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      {/* Tampilkan error jika ada */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      <form
        onSubmit={form.handleSubmit(handleLoginUser)}
        className="bg-red-700 flex flex-col p-8"
      >
        <h3 className="text-center p-2">Login</h3>

        <label className="p-2">
          Email:{" "}
          <input
            type="text"
            {...form.register("email")}
            className="text-black"
          />
        </label>
        <label className="p-2">
          Password:{" "}
          <input
            type={showPassword ? "text" : "password"}
            {...form.register("password")}
            className="text-black"
          />
        </label>
        <label className="p-2">
          <input
            type="checkbox"
            onChange={(event) => setShowPassword(event.target.checked)}
          />{" "}
          Show Password
        </label>
        <span className="text-red-500 p-2">
          {form.formState.errors.password?.message}
        </span>
        <button disabled={isLoading} className="bg-blue-500">
          {isLoading ? "Loading..." : "Login User"}
        </button>
      </form>
      <Link href="/register">Register</Link>
    </div>
  );
};

export default LoginPage;
