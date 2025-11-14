export default async function sitemap() {
  const baseUrl = "https://www.codeneptune.com";

  // -----------------------------
  // STATIC ROUTES
  // -----------------------------
  const staticRoutes = [
    "",
    "about",
    "contact",
    "blog",

    // Services
    "mobile-app-development-company",
    "android-app-development-company-in-chennai",
    "flutter-app-development-company-in-india",
    "website-development-company",
    "ecommerce-website-development-company",
    "devops-consulting-company",
    "ui-ux-design-services",
  ];

  // -----------------------------
  // FETCH DYNAMIC BLOG POSTS FROM WORDPRESS
  // -----------------------------
  let blogSlugs = [];

  try {
    const wpRes = await fetch(
      `${baseUrl}/blog/wp-json/wp/v2/posts?per_page=100`,
      {
        next: { revalidate: 3600 } // revalidate sitemap every 1 hour
      }
    );

    const posts = await wpRes.json();

    blogSlugs = posts.map((post) => ({
      slug: post.slug,
      updated: post.modified,
    }));
  } catch (err) {
    console.error("Error fetching WordPress posts:", err);
  }

  // -----------------------------
  // FORMAT STATIC ROUTES
  // -----------------------------
  const staticUrls = staticRoutes.map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // -----------------------------
  // FORMAT DYNAMIC BLOG POSTS
  // -----------------------------
  const blogUrls = blogSlugs.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updated || new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [...staticUrls, ...blogUrls];
}
