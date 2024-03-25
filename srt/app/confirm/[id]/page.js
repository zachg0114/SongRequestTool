import VideoConfirm from '@/components/confirm/videoConfirm';

export default async function Home({params}) {
  const { id } = params;
  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-0 sm:p-10 w-full">
      <section className="flex flex-col items-center justify-center w-full">
         <VideoConfirm id={id} />
      </section>
    </main>
  );
}
