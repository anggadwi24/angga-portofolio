// types/meta.ts
export interface Profile {
    _id: string;
    jobTitle: string;
    name: string;
    publishedAt?: string;
    image?: {
      asset: {
        url: string;
      };
    };
   
  }
  