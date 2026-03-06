import React from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RegistrationForm } from "@/components/registration-form";

const RegistrationPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl sm:text-3xl font-bold tracking-tight">
            Create an account
          </CardTitle>
          <CardDescription className="text-sm sm:text-base">
            Enter your details below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent className="px-4 sm:px-6">
          <RegistrationForm />
          <div className="mt-6 text-center text-sm">
            <span className="text-muted-foreground">Already have an account? </span>
            <Link href="/login" className="font-medium text-primary hover:underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegistrationPage;