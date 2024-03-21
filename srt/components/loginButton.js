'use client';

import { signIn } from "next-auth/react";
import { signOut } from "next-auth/react";
import Link from "next/link";

export function LoginButton() {
    return (
        <button className="bg-black hover:bg-gray-500 text-white py-2 px-4 rounded border border-white mb-4" onClick={() => signIn("google", { callbackUrl: '/admin' })}>Admin Login</button>
    );
    }

export function LogoutButton() {
    const handleAdmin = () => {
        console.log('dwaodnawiond')
        redirect('/admin')
    }
    return (
        <div>
            <button className="bg-black hover:bg-gray-500 text-white py-2 px-4 rounded border border-white mb-4" onClick={() => signOut()}>Logout</button>
            <Link href="/admin">
                <button key="admin" className="ml-2 bg-black hover:bg-gray-500 text-white py-2 px-4 rounded border border-white mb-4">Admin</button>
            </Link>
        </div>
    );
    }
