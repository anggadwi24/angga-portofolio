import { client } from '@/lib/sanity';
import { Profile } from '../types/profile';
import { profileQuery } from '../lib/query';
import Image from 'next/image';
import { profile } from 'console';
import CoverClient from './CoverClient';

async function getCoverData(): Promise<Profile | null> {
    return await client.fetch(profileQuery);
}

export default async function Cover() {
    const profileData = await getCoverData();

    if (!profileData) {
        return <div>No profile data found</div>;
    }

    return <CoverClient profileData={profileData} />;
}
