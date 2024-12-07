// types/meta.ts
export interface MetaData {
  _id: string;
  title: string;
  description: string;
  keyword: string;
  faviconUrl?: string;
  thumbnailUrl?: string;
  publishedAt?: string;
  favicon?: {
    asset: {
      url: string;
    };
  };
  thumbnail?: {
    asset: {
      url: string;
    };
  };
}
