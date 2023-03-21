import 'tailwindcss/tailwind.css'

import { AppProps } from 'next/app'

import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";

import de from "../lang/de.json";
import en from "../lang/en.json";
import bg from "../lang/bg.json";

export default function App({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  
  const messages = {
    de,
    en,
    bg,
  };
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Component {...pageProps} />
    </IntlProvider>
  )
}
