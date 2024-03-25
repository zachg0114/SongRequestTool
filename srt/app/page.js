import { SearchBar } from '@/components/home/searchBar';
import AuthButton from "@/components/home/authButton";
import UserProfile from "@/components/home/userProfile";

export default function Home() {  
  return (
    <main className="flex min-h-screen flex-col items-center sm:p-10 w-full relative"> {/* Ensure this is relative */}
      <section className="flex flex-col items-center justify-center w-full">
        <h2 className="text-4xl font-bold text-center px-4 sm:px-10 pt-8">DJ Song Request</h2>
        <h4 className="text-center px-4 sm:px-10 pt-4">Type the name of your song into the search bar and hit search. Pick the option of the song that you'd like to request, and hit confirm on the next page to submit your request.</h4>
        <SearchBar />
      </section>
      <h3 className="text-2xl font-bold text-center px-4 sm:px-10 pt-40 pb-4">DJ Socials</h3>
      <div className="flex flex-col items-center space-y-4 py-4">
        <UserProfile
          userName="Zach"
          userAt="@johndoe"
          userAtLink="https://twitter.com/"
          avatarSrc="https://example.com/avatar.jpg"
        />
        <UserProfile
          userName="vunsh"
          userAt="@vunshoes"
          userAtLink="https://twitter.com/"
          avatarSrc="https://example.com/avatar.jpg"
        />
      </div>
      <div className="mt-auto">
        <AuthButton />
      </div>
    </main>
  );
}
