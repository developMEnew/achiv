'use client';

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function GoogleSignInButton() {
  return (
    <Button
      className="w-full flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-900 border"
      onClick={() => signIn('google', { callbackUrl: '/' })}
    >
      <Image
        src="https://www.google.com/favicon.ico"
        alt="Google"
        width={20}
        height={20}
      />
      Continue with Google
    </Button>
  );
}