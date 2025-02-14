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


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
} 


export const metadata = {
  title: "Epistolove - Create Heartfelt Messages Instantly",
  description: "Craft personalized and romantic love letters with our AI Love Letter Generator. Perfect for expressing your feelings to your partner, crush, or loved ones. Try it now for free!",
  openGraph: {
    title: "Epistolove - Create Heartfelt Messages Instantly",
    description: "Craft personalized and romantic love letters with our AI Love Letter Generator. Perfect for expressing your feelings to your partner, crush, or loved ones. Try it now for free!",
    images: [
      {
        url: "https://media.istockphoto.com/id/636379014/photo/hands-forming-a-heart-shape-with-sunset-silhouette.jpg", // Add a relevant Open Graph image
        width: 1200,
        height: 630,
        alt: "Epistolove",
      },
    ],
    siteName: "Epistolove",
  },
  twitter: {
    card: "summary_large_image",
    title: "Epistolove - Create Heartfelt Messages Instantly",
    description: "Craft personalized and romantic love letters with our AI Love Letter Generator. Perfect for expressing your feelings to your partner, crush, or loved ones. Try it now for free!",
    images: ["https://media.istockphoto.com/id/636379014/photo/hands-forming-a-heart-shape-with-sunset-silhouette.jpg"], // Add a relevant Twitter image
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
