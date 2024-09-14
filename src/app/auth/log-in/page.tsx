import { ArrowLeft } from "lucide-react";
import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SignInWithGoogleButton } from "./sign-in-with-google-button";
import { signInWithGoogleAction } from "./actions";

export const metadata: Metadata = {
  title: "Log In",
};
export default async function AuthLogInPage() {
  return (
    <div className="flex min-h-screen">
      <div className="hidden bg-gray-700 md:block md:w-1/2">
        <Image
          src="/placeholder.svg?height=1080&width=1080"
          width={1080}
          height={1080}
          alt="Abstract geometric pattern"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex w-full flex-col p-8 md:w-1/2">
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/"
            className="text-secondary-foreground flex items-center text-sm"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Link>
          <Link href="#" className="text-secondary-foreground text-sm">
            Contact Support
          </Link>
        </div>

        <div className="mx-auto flex w-full max-w-md flex-grow flex-col justify-center">
          <div className="mb-8 text-center">
            <span className="text-secondary-foreground text-2xl font-bold">
              Micro Saas Boilerplate
            </span>
          </div>

          <h2 className="mb-4 text-center text-2xl font-bold">
            Log in to your account
          </h2>

          <form action={signInWithGoogleAction}>
            <SignInWithGoogleButton />
          </form>
        </div>
        <div className="mt-8 text-center text-xs text-gray-500">
          ©{new Date().getFullYear()} SaaS Boilerplate. All rights reserved
        </div>
      </div>
    </div>
  );
}
