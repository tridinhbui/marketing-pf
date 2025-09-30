import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "An Thuy Duong – Social Media Strategist & Content Creator",
  description: "Portfolio của An Thuy Duong - Social Media Marketing Coordinator với kinh nghiệm về Content Strategy, Community Engagement, và Analytics. MS in Corporate Communication, Northeastern University.",
  keywords: "social media marketing, content strategy, community engagement, analytics, An Thuy Duong, portfolio, Sorcea, Influki",
  authors: [{ name: "An Thuy Duong" }],
  openGraph: {
    title: "An Thuy Duong – Social Media Strategist & Content Creator",
    description: "Portfolio của An Thuy Duong - Social Media Marketing Coordinator với kinh nghiệm về Content Strategy, Community Engagement, và Analytics.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
