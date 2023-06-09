import localFont from "next/font/local";
import "./globals.css";

const pretendard = localFont({
  src: "../assets/font/PretendardVariable.woff2",
  display: "fallback",
  variable: "--font-pretendard",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <body>{children}</body>
    </html>
  );
}

export const metadata = {
  title: "R3F & NextJS@13 😊",
  description: "Customize Model with your own style!",
  metadataBase: new URL("https://r3f-nextjs.vercel.app/"),
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://r3f-nextjs.vercel.app/",
    title: "R3F & NextJS@13 😊",
    description: "Customize Model with your own style!",
  },
};
