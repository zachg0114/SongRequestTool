import { getCurrentUser } from '@/lib/session';
import { redirect } from 'next/navigation';

export default async function AdminWrapper({ children }) {
    const user = await getCurrentUser();
    if (!user) {
        return redirect('/')
    }
    return <div>{children}</div>
}