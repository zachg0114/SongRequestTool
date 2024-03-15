'use client';

import { useSearchParams } from 'next/navigation'
import { useState } from 'react';

import useVideo from './useVideo';


export default function ConfirmParam({ id }) {
    const [data, loading, error] = useVideo(id);

}
    