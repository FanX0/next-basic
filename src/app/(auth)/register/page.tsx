"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const RegisterFormSchema = z.object({
  fullname: z.string().nonempty("Fullname wajib diisi"),
  email: z.string().email("Format email tidak valid"),
  password: z.string().min(8, "Password minimal 8 karakter"),
});

type RegisterFormData = z.infer<typeof RegisterFormSchema>;

const RegisterPage = () => {
  const { push } = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<RegisterFormData>({
    resolver: zodResolver(RegisterFormSchema),
  });

  const handleRegisterUser = async (data: RegisterFormData) => {
    try {
      setError("");
      setIsLoading(true);

      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errorData = await res.json();
        setError(errorData.error || "Registrasi gagal");
        return;
      }

      // Jika registrasi berhasil
      push("/login");
    } catch (error) {
      console.error("Error during registration:", error);
      setError("Terjadi kesalahan pada server");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        <form
          onSubmit={form.handleSubmit(handleRegisterUser)}
          className="bg-red-700 flex flex-col p-8"
        >
          <h3 className="text-center p-2 text-white">Register</h3>

          <label className="p-2 text-white">
            Fullname:{" "}
            <input
              type="text"
              {...form.register("fullname")}
              className="text-black"
            />
          </label>
          <label className="p-2 text-white">
            Email:{" "}
            <input
              type="text"
              {...form.register("email")}
              className="text-black"
            />
          </label>
          <label className="p-2 text-white">
            Password:{" "}
            <input
              type={showPassword ? "text" : "password"}
              {...form.register("password")}
              className="text-black"
            />
          </label>
          <label className="p-2 text-white">
            <input
              type="checkbox"
              onChange={(event) => setShowPassword(event.target.checked)}
            />{" "}
            Show Password
          </label>
          <span className="text-red-500 p-2">
            {form.formState.errors.password?.message}
          </span>
          <button
            disabled={isLoading}
            type="submit"
            className="bg-blue-500 text-white p-2 mt-4"
          >
            {isLoading ? "Loading..." : "Register User"}
          </button>
        </form>
        <Link href="/login">Login</Link>
      </div>
    </div>
  );
};

export default RegisterPage;
