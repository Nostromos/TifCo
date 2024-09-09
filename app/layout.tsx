import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: "%s | TifCo",
    default: "TifCo",
  },
  description: "The official dashboard for all fans & simps of TifCo.",
  metadataBase: new URL('https://instagram.com/supsui'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
