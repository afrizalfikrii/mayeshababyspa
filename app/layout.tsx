import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mayesha Baby Spa - Mom, Kids & Baby Spa Karanganyar | Pijat Bayi, Baby Spa, Pijat Ibu",
  description: "Mayesha Baby Spa menyediakan layanan Baby Spa, Pijat Bayi, Kids Massage, Pijat Laktasi, dan Mom Treatment di Karanganyar. Terapis bidan profesional. Home Care tersedia. Buka setiap hari 08.30-16.30 WIB.",
  keywords: [
    "baby spa karanganyar",
    "pijat bayi karanganyar",
    "baby massage karanganyar",
    "pijat laktasi karanganyar",
    "mom spa karanganyar",
    "baby spa tegalwinangun",
    "terapi bayi karanganyar",
    "pijat ibu hamil karanganyar",
    "baby swim karanganyar",
    "mayesha baby spa",
    "spa bayi solo",
    "pijat bayi solo",
  ],
  authors: [{ name: "Mayesha Baby Spa" }],
  creator: "Mayesha Baby Spa",
  publisher: "Mayesha Baby Spa",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mayeshababyspa.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Mayesha Baby Spa - Mom, Kids & Baby Spa Karanganyar",
    description: "Layanan Baby Spa, Pijat Bayi, Kids Massage, Pijat Laktasi, dan Mom Treatment dengan terapis bidan profesional. Home Care tersedia.",
    url: 'https://mayeshababyspa.vercel.app',
    siteName: 'Mayesha Baby Spa',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 800,
        alt: 'Mayesha Baby Spa Logo',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Mayesha Baby Spa - Mom, Kids & Baby Spa Karanganyar",
    description: "Layanan Baby Spa, Pijat Bayi, Kids Massage, Pijat Laktasi, dan Mom Treatment dengan terapis bidan profesional.",
    images: ['/logo.png'],
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Nanti tambahkan Google Search Console verification code di sini
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Mayesha Baby Spa",
              "image": "https://mayeshababyspa.vercel.app/logo.png",
              "description": "Baby Spa, Pijat Bayi, Kids Massage, Pijat Laktasi, dan Mom Treatment dengan terapis bidan profesional di Karanganyar",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jl. Musi Tegalwinangun Rt 02 Rw 13 Tegalgede",
                "addressLocality": "Karanganyar",
                "addressRegion": "Jawa Tengah",
                "postalCode": "57714",
                "addressCountry": "ID"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -7.6167,
                "longitude": 110.9833
              },
              "url": "https://mayeshababyspa.vercel.app",
              "telephone": "+6281325641896",
              "priceRange": "10K - 175K",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "08:30",
                "closes": "16:30"
              },
              "sameAs": [
                "https://www.instagram.com/mayeshababyspa"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
