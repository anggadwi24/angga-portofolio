// types/meta.ts
export interface Project {
    _id: string;
    title: string;
    slug: {
      current: string;
    };
    description: string;
    image: {
      asset: {
        url: string;
      };
    };
    imageUrl: string;
    technologies: string[];
    link: string;
    publishedAt: string;
   
  }
  