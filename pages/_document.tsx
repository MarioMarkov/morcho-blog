import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">

       <Head>
         {/* Add hreflang links */}
         <link rel="alternate" href="http://example.com" hrefLang="x-default" />
         <link rel="alternate" href="http://example.com" hrefLang="en" />
         <link rel="alternate" href="http://example.com/de" hrefLang="de" />
         <link rel="alternate" href="http://example.com/bg" hrefLang="bg" />
      </Head>
      <body className="bg-white text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
