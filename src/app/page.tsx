"use client";

import { LoginForm } from "@/components/login/login-form";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { useUser } from "@alchemy/aa-alchemy/react";
import { redirect } from "next/navigation";

export default function Home() {
  const user = useUser();

  // Early return if user is logged in
  if (user) {
    return redirect("/home");
  }

  return (
    <div className="max-w-screen flex h-screen max-h-screen w-screen flex-col">
      <header className="border-gray-20 flex items-center border-b bg-primary-foreground px-6 py-4">
        <h1 className="text-xl font-semibold">Web3 App</h1>
        <div className="flex-grow" />
        <div className="mr-4">
          <ModeToggle />
        </div>
      </header>
      <main className="flex max-h-screen grow flex-col items-center justify-center gap-4 sm:p-8 md:p-4 lg:p-6 xl:p-8 2xl:p-24">
        <LoginForm />
      </main>
    </div>
  );
}