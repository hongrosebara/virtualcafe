import { Header, Footer } from "@/components/common";
import Head from "next/head";

export default function Layout({ children }) {
  const GA_TAG_ID = "G-38DQ46SZMF";
  return (
    <>
      <Head>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TAG_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TAG_ID}', {
                  page_path: window.location.pathname,
                });
              `,
          }}
        />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
