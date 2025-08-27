"use server";

import { auth } from "@/lib/auth";
import { authClient } from "@/lib/auth-client";

export const signIn = async (email: string, password: string) => {
  try {
    await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });
    return {
      success: true,
      message: "Berhasil masuk",
    };
  } catch (error) {
    const e = error as Error;

    return {
      success: false,
      message: { error: e.message || "Kesalahan tidak diketahui" },
    };
  }
};

export const signUp = async () => {
  await auth.api.signUpEmail({
    body: {
      email: "muhammadkevinalvarel@gmail.com",
      password: "kevin2121",
      name: "Kevin Alvarel",
    },
  });
};

export const signOut = async () => {
  await authClient.signOut();
};
