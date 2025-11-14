export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        // You can keep this or remove it — it's just to mimic the structure
        userAgent: "*",
        disallow: " ",
      },
    ],
    sitemap: "https://www.codeneptune.com/sitemap.xml",
    host: "https://www.codeneptune.com",
  };
}
