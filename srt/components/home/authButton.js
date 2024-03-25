import { getCurrentUser } from "@/lib/session";
import { LoginButton } from "./loginButton"
import { LogoutButton } from "./loginButton";

export default async function AuthButton() {
    let user = await getCurrentUser();
    if (!user) {
        return <LoginButton />;
    }
    else{
        return <LogoutButton />;
    }
}
