// src/components/Cover/CoverWrapper.tsx
'use client'

import { useEffect, useState } from 'react';
import { client } from '@/lib/sanity';
import { Profile } from '../../types/profile';
import { profileQuery } from '../../lib/query';
import ClientCover from './ClientCover';
import Loading from '@/app/loading';
import CoverLoader from './CoverLoader';

export default function CoverWrapper() {
    const [profileData, setProfileData] = useState<Profile | null>(null);

    useEffect(() => {
        async function fetchData() {
            const data = await client.fetch(profileQuery);
            setProfileData(data);
        }
        fetchData();
    }, []);

    if (!profileData) {
        return <CoverLoader />;
    }

    return <ClientCover profileData={profileData} />;
}
