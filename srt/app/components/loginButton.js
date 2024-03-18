'use client';

import { signIn } from "next-auth/react";
import { signOut } from "next-auth/react";

export function LoginButton() {
    return (
        <button className="bg-black hover:bg-gray-500 text-white py-2 px-4 rounded border border-white mb-4" onClick={() => signIn("google", { callbackUrl: '/admin' })}>Admin Login</button>
    );
    }

export function LogoutButton() {
    return (
        <button className="bg-black hover:bg-gray-500 text-white py-2 px-4 rounded border border-white mb-4" onClick={() => signOut()}>Logout</button>
    );
    }