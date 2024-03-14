'use client';

import { useSearchParams } from 'next/navigation'
import { useState } from 'react';
import { Redirect } from 'next';

import getVideo from '@/lib/getVideo';


export default function ConfirmParam() {
    const searchParams = useSearchParams();
    const videoId = searchParams.get('id');
    const [videoResult, setVideoResults] = useState(null);

    if(!videoId) {
        return <Redirect to="/"/>
    }

        const data = getVideo(`https://youtube.com/watch?v=${videoId}`).then((data) => {
            setVideoResults(data);
            console.log(data)
        });


    return(
        <div>
            {videoResult && (
                <div>
                    <p>{data.title}</p>
                </div>
            )}
        </div>
    )

    
   

    
}
    