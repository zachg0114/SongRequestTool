import Head from 'next/head';
import { SearchBar } from '@/components/home/searchBar';
import AuthButton from "@/components/home/authButton";
import UserProfile from "@/components/home/userProfile";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </Head>
      <main className="flex min-h-screen flex-col items-center sm:p-10 w-full relative bg-[#0e0217]">
        <Card className='border-none bg-background/60 dark:bg-default-100/50 m-8'>
          <CardHeader className='flex justify-center w-full'>
            <h2 className="text-4xl font-bold text-center w-full">DJ Song Request</h2>
          </CardHeader>
          <Divider />
          <CardBody>
            <h4 className="text-md sm:text-center sm:px-10">Type the name of your song into the search bar and hit search. Pick the option of the song that you'd like to request, and hit confirm on the next page to submit your request.</h4>
          </CardBody>
        </Card>
        <section className="flex flex-col items-center py-2">
          <SearchBar />
        </section>
        <Card className='mt-10'>
          <h3 className="md:text-2xl text-lg font-bold text-center sm:px-10 pb-4 pt-4">DJ Socials</h3>
          <Divider />
          <CardBody className='px-16 pt-8'>
            <div className="flex gap-3 scale-150">
              <UserProfile
                userName="DJ Chandi"
                userAt="@djchandii"
                userAtLink="https://www.instagram.com/djchandii/"
                avatarSrc="https://i.imgur.com/ILNA1Vj.jpeg"
              />
              <Divider orientation="vertical"/>
              {/* <UserProfile
                userName="vunsh"
                userAt="@vunsh"
                userAtLink="https://twitter.com/"
                avatarSrc="https://example.com/avatar.jpg"
              /> */}
            </div>
          </CardBody>
        </Card>
        <div className="mt-auto">
          <AuthButton />
        </div>
      </main>
    </>
  );
}