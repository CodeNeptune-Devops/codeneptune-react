export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      }
    ],
    sitemap: "https://www.codeneptune.com/sitemap.xml",
    host: "https://www.codeneptune.com",
  };
}
