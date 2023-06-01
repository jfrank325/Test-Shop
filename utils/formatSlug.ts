export const formatSlug = (slug: String) => slug.toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');