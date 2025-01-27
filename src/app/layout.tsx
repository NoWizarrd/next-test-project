
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "components/header/Header";
import { ThemeProvider } from "next-themes";

const RobotoFont = Roboto({
  variable: "--font-roboto",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700"]
})

export const metadata: Metadata = {
  title: "Next test app",
  description: "Test project for learn Next",
  openGraph: {
    type: "website",
    url: "https://next-test-project.netlify.app/",
    title: "Next test app",
    description: "Test project for learn Next"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${RobotoFont.variable} antialiased`}
      >
        <ThemeProvider enableSystem={false} defaultTheme="light" attribute="class">
            <Header/>
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
