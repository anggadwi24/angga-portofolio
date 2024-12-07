export const projectsQuery = `*[_type == "project"] {
    _id,
    title,
    slug,
    description,
    "imageUrl": image.asset->url,
    technologies,
    link,
    publishedAt
  }`

// lib/queries.ts
export const metaQuery = `*[_type == "meta"] {
  _id,
  title,
  description,
  keyword,
  favicon {
    asset-> {
      url
    }
  },
  thumbnail {
    asset-> {
      url
    }
  },
  publishedAt
}`

export const profileQuery = `*[_type == "profile"][0] {
  _id,
  jobTitle,
  name,
  image {
    asset-> {
      url
    }
  },
  publishedAt
}`;

