import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import FloatingDock from '@/components/FloatingDock';
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Your Name - Personal Portfolio',
  description: 'Professional portfolio showcasing skills and projects',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "gradient-bg min-h-screen")}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <FloatingDock />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}