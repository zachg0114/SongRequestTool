import AdminWrapper from "@/components/admin/adminWrapper";
import AdminQueue from '@/components/admin/adminQueue';

export default function Home() {
    return (
        <section className="bg-black p-4 relative">
            <AdminWrapper>
                <AdminQueue />
            </AdminWrapper>
        </section>
    );
}
