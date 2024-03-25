'use client';

import { signIn } from "next-auth/react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import {Button} from "@nextui-org/react";


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
            <Button className="bg-black hover:bg-gray-500 text-white py-2 px-4 rounded border border-white mb-4" onClick={() => signOut()}>Logout</Button>
            <Link href="/admin">
                <Button key="admin" className="ml-2 bg-black hover:bg-gray-500 text-white py-2 px-4 rounded border border-white mb-4">Admin</Button>
            </Link>
        </div>
    );
    }
