import { Inter } from "next/font/google";
import "./globals.css";
import { headers } from "next/headers";
import Layout from "@/components/layout/Layout";
import ReactQueryProvider from "./providers";
import { ReduxProvider } from "@/store/provider";
import Script from "next/script";   // <-- ADD THIS

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata() {
  const h = await headers();
  const host = h.get("host") || "";
  const isNoIndex = host === "codeneptune-react.vercel.app/";

  return {
    title: {
      default: "Code Neptune - Mobile App & Web Development Company",
      template: "%s | Code Neptune",
    },
    description:
      "Leading mobile app development and web development company. We create innovative digital solutions, custom apps, and responsive websites for businesses worldwide.",
    keywords: [
      "mobile app development",
      "web development",
      "custom apps",
      "responsive websites",
      "digital solutions",
      "software development",
    ],
    authors: [{ name: "Code Neptune" }],
    creator: "Code Neptune",
    publisher: "Code Neptune",
    category: "Technology",
    icons: {
      icon: [
        { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      ],
      shortcut: "/cn-favicon.ico",
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
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
      description:
        "Leading mobile app development and web development company. We create innovative digital solutions, custom apps, and responsive websites.",
      siteName: "Code Neptune",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Code Neptune - Mobile App & Web Development",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Code Neptune - Mobile App & Web Development Company",
      description:
        "Leading mobile app development and web development company. We create innovative digital solutions, custom apps, and responsive websites.",
      images: ["/twitter-image.png"],
    },
    alternates: {
      canonical: "https://www.codeneptune.com",
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

        {/* Google Analytics (GA4) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-4WFWR3ERYM"
        />
        <Script id="ga-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4WFWR3ERYM');
          `}
        </Script>

        {/* Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Favicons */}
        <link rel="icon" href="/cn-favicon.ico" />
        <link rel="shortcut icon" href="/cn-favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        {/* Meta */}
        <meta name="theme-color" content="#000000" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>

      <body
        className={`${inter.variable} font-sans`}
        style={{
          fontFamily:
            "var(--font-inter), Inter, -apple-system, BlinkMacSystemFont, sans-serif",
        }}
      >
        <ReduxProvider>
          <ReactQueryProvider>
            <Layout>{children}</Layout>
          </ReactQueryProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
