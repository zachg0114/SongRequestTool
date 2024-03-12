import { SearchBar } from "./components/searchBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="flex flex-col items-center justify-center">
        <SearchBar />
      </section>
    </main>
  );
}
