import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { MetaData } from '../types/meta'
import { metaQuery } from './query'

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: "2024-01-01",
    useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source);
}


export async function getMetaData(): Promise<MetaData> {
    const data = await client.fetch(metaQuery)
  
    // Mengambil item pertama jika hasil adalah array
    const firstItem = Array.isArray(data) ? data[0] : data
  
    if (!firstItem) {
      throw new Error('No meta data found')
    }
  
    return {
      ...firstItem,
      faviconUrl: firstItem.favicon?.asset?.url,
      thumbnailUrl: firstItem.thumbnail?.asset?.url,
    }
  }
  