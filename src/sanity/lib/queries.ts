export const ALL_POSTS_QUERY = `
  *[_type == "blogPost"] | order(publishedAt desc) {
    "slug": slug.current,
    title,
    "date": publishedAt,
    category,
    excerpt,
    "image": mainImage.asset->url
  }
`;

export const POST_BY_SLUG_QUERY = `
  *[_type == "blogPost" && slug.current == $slug][0] {
    "slug": slug.current,
    title,
    "date": publishedAt,
    category,
    excerpt,
    "image": mainImage.asset->url,
    body,
    author
  }
`;

export const ALL_SLUGS_QUERY = `
  *[_type == "blogPost"] { "slug": slug.current }
`;
