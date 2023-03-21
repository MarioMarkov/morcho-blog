import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
         {/* Add hreflang links */}
         <link rel="alternate" href="http://example.com" hrefLang="x-default" />
         <link rel="alternate" href="http://example.com" hrefLang="en" />
         <link rel="alternate" href="http://example.com/ar" hrefLang="ar" />
         <link rel="alternate" href="http://example.com/fr" hrefLang="fr" />
         <link rel="alternate" href="http://example.com/nl-NL" hrefLang="nl-NL" />
      </Head>
      <body className="bg-white text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
