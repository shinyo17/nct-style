import "../styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";
import Head from "next/head";

const SUIT = localFont({
  src: [
    {
      path: "./SUIT-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./SUIT-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./SUIT-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./SUIT-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./SUIT-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./SUIT-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./SUIT-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./SUIT-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "./SUIT-Heavy.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>NCT 취향표</title>
        <meta name="description" content="NCT 취향표" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:title" content="NCT 취향표" />
        <meta property="og:description" content="NCT 취향표" />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/bucketlistwithfirebase-e3efc.appspot.com/o/nct-style.png?alt=media&token=986c9364-4e6b-47df-9eb7-c9eac8aa3b74"
        />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="400" />
        <meta property="og:url" content="https://nct-style.vercel.app/" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="NCT 취향표" />
        <meta property="twitter:url" content="https://nct-style.vercel.app/" />
        <meta property="twitter:description" content="NCT 취향표" />
        <meta
          property="twitter:image"
          content="https://firebasestorage.googleapis.com/v0/b/bucketlistwithfirebase-e3efc.appspot.com/o/nct-style.png?alt=media&token=986c9364-4e6b-47df-9eb7-c9eac8aa3b74"
        />
      </Head>
      <main className={SUIT.className}>
        <Component {...pageProps} />
      </main>
    </div>
  );
}
