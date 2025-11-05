import { Inter } from "next/font/google";
import "./globals.css";
import { headers } from "next/headers";
import Layout from "@/components/layout/Layout";

// inter font style with optimized display for better load speed
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap", // Improves font loading performance
});

// no follow no index for vercel preview and default domains
export async function generateMetadata() {
  const h = await headers();
  const host = h.get("host") || "";
  const isNoIndex = host === "entrex-three.vercel.app" || host === "entrex-eta.vercel.app" || host === "entrex-gold.vercel.app";
  
  return {
    title: {
      default: "Code Neptune - Mobile App & Web Development Company",
      template: "%s | Code Neptune"
    },
    description: "Leading mobile app development and web development company. We create innovative digital solutions, custom apps, and responsive websites for businesses worldwide.",
    keywords: [
      "mobile app development", 
      "web development", 
      "custom apps", 
      "responsive websites", 
      "digital solutions", 
      "software development"
    ],
    authors: [{ name: "Code Neptune" }],
    creator: "Code Neptune",
    publisher: "Code Neptune",
    category: "Technology",
    icons: {
      icon: [
        { url: "/cn-favicon.png", sizes: "32x32", type: "image/png" },
        { url: "/cn-favicon.png", sizes: "16x16", type: "image/png" }
      ],
      shortcut: "/cn-favicon.png",
      apple: [
        { url: "/cn-apple-touch-icon.png", sizes: "180x180", type: "image/png" }
      ],
    },
    manifest: "/manifest.json",
    robots: isNoIndex
      ? { index: false, follow: false, nocache: true }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: `https://${host}`,
      title: "Code Neptune - Mobile App & Web Development Company",
      description: "Leading mobile app development and web development company. We create innovative digital solutions, custom apps, and responsive websites.",
      siteName: "Code Neptune",
      images: [
        {
          url: "/og-image.png", // You'll need to add this image
          width: 1200,
          height: 630,
          alt: "Code Neptune - Mobile App & Web Development",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Code Neptune - Mobile App & Web Development Company",
      description: "Leading mobile app development and web development company. We create innovative digital solutions, custom apps, and responsive websites.",
      images: ["/twitter-image.png"], // You'll need to add this image
    },
    alternates: {
      canonical: `https://${host}`,
    },
    verification: {
      // Add your verification codes here
      // google: "your-google-site-verification-code",
      // bing: "your-bing-verification-code",
    },
  };
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Enhanced favicon setup */}
        <link rel="icon" type="image/png" sizes="32x32" href="/cn-favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/cn-favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/cn-apple-touch-icon.png" />
        
        {/* Additional meta tags for better SEO */}
        <meta name="theme-color" content="#000000" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body
        className={`${inter.variable} font-sans`}
        style={{ fontFamily: "var(--font-inter), Inter, -apple-system, BlinkMacSystemFont, sans-serif" }}
      >
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}