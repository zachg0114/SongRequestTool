import AdminWrapper from "../components/adminWrapper";
import AdminQueue from '../components/adminQueue';

export default function Home() {
    return (
        <section className="bg-black p-4 relative">
            <AdminWrapper>
                <AdminQueue />
            </AdminWrapper>
        </section>
    );
}
