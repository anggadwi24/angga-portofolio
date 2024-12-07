import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { getMetaData } from '../lib/sanity'
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getMetaData()
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keyword,
    icons: meta.faviconUrl ? [{ rel: "icon", url: meta.faviconUrl }] : [],
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: meta.thumbnailUrl ? [meta.thumbnailUrl] : [],
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      images: meta.thumbnailUrl ? [{ url: meta.thumbnailUrl }] : [],
    },

    // Tambahkan properti metadata lainnya sesuai kebutuhan
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const meta = await getMetaData();
  return (
    <html lang="en">
      <Head>
        {meta.faviconUrl && (
          <>
            <link rel="icon" href={meta.faviconUrl} />
            <link rel="apple-touch-icon" href={meta.faviconUrl} />
          </>
        )}
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
