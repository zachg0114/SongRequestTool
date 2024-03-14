import { SearchBar } from "./components/searchBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between sm:p-10 w-full m-0">
      <section className="flex flex-col items-center justify-center w-full m-0">
        <h1 className="text-4xl font-bold flex justify-center items-center px-4 sm:px-10 pt-8 m-0">(Insert Name Here) DJ Song Request</h1>
        <p className="flex justify-center items-center text-center px-4 sm:px-10 m-0 pt-4">Type the name of your song into the search bar and hit search. Pick the option of the song that you'd like to request, and hit confirm on the next page to submit your request.</p>
        <SearchBar />
      </section>
    </main>
  );
}
