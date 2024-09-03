import { Html, Head, Main, NextScript } from "next/document";
import Header from "./header";

export default function Document() {
  return (
    <Html lang="en " >
      <Head />
      <body className="bg-wdc-background">
        <Header />
        <Main />
        <NextScript />
      </body>

    </Html>
  );
}
