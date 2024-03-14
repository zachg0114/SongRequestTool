'use client';

import { useSearchParams } from 'next/navigation'
import { useState } from 'react';
import { Redirect } from 'next';

import getSearchResults from '../getSearch';
export default async function ConfirmParam() {
    const searchParams = useSearchParams();
    const confirm = searchParams.get('id');
    const [searchResults, setSearchResults] = useState(null);

    if(!confirm) {
        return <Redirect to="/"/>
    }

    


    
   

    
}
    