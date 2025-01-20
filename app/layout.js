import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Goodify",
  description: "A Community Spreading Good Vibes",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "next14", "pwa", "next-pwa"],
  icons: [
    { rel: "apple-touch-icon", url: "/icons/gdf-icon-128.png" },
    { rel: "icon", url: "/icons/gdf-icon-128.png" },
  ],
};

export function generateViewport() {
  return {
    themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
    viewport:
      "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
