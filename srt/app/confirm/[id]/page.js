import { useRouter, useSearchParams } from 'next/navigation';
import ConfirmParam from '../../components/confirmParam';
import { SearchBar } from '../../components/searchBar';
import getVideo from '@/lib/getVideo';

export default async function Home({params}) {
  // const router = useRouter()

  const data = await getVideo(`https://youtube.com/watch?v=${params.id}`)

  console.log(data)

  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-0 sm:p-10 w-full">
      <section className="flex flex-col items-center justify-center w-full">
        {/* <ConfirmParam /> */}
      </section>
    </main>
  );
}
