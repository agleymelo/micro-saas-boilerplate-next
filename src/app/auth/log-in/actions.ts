"use server"

import { signIn } from "~/server/auth"

export async function signInWithGoogleAction() {
  await signIn("google", {
    redirectTo: "/dashboard"
  })
}