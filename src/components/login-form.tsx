/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useActionState, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { loginPatient } from "@/services/auth/loginPatient";

export function LoginForm() {
  const [state, fromAction, isLoading] = useActionState(loginPatient, null);

  const getFieldError = (fieldName: string) => {
    if (state?.errors) {
      const error = state.errors.find((err: any) => err.field === fieldName);
      return error ? error.message : null;
    } else return null;
  };
  console.log("🚀 ~ LoginForm ~ state:", state);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form action={fromAction} className="space-y-5">
      <Field>
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="john@example.com"
          required
        />
        <FieldError>{getFieldError("email")}</FieldError>
      </Field>

      <Field>
        <FieldLabel htmlFor="password">Password</FieldLabel>
        <div className="relative">
          <Input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        <FieldError>{getFieldError("password")}</FieldError>
      </Field>

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Signing In...
          </>
        ) : (
          "Sign In"
        )}
      </Button>
    </form>
  );
}
