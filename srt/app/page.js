import { SearchBar } from "./components/searchBar";

export default function Home() {
  return (
    // 'sm:p-10' applies padding of '10' from the 'sm' breakpoint and up.
    // 'p-0' is the default padding for smaller screens (i.e., mobile devices).
    <main className="flex min-h-screen flex-col items-center justify-between p-0 sm:p-10 w-full">
      <section className="flex flex-col items-center justify-center w-full">
        <SearchBar />
      </section>
    </main>
  );
}
