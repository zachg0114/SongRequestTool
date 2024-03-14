import ConfirmParam from '../components/confirmParam';
import { SearchBar } from '../components/searchBar';
export default function Home() {
  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-0 sm:p-10 w-full">
      <section className="flex flex-col items-center justify-center w-full">
        <ConfirmParam />
      </section>
    </main>
  );
}
