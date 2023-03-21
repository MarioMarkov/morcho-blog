import { PortableText } from '@portabletext/react'
import Link from 'next/link'

import styles from './BlogHeader.module.css'

import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";

import { Gb } from "react-flags-select";
import { De } from "react-flags-select";
import { Bg } from "react-flags-select";


export default function BlogHeader({
  title,
  description,
  level,
}: {
  title: string
  description?: any[]
  level: 1 | 2
}) {
  const { locales } = useRouter();
  const intl = useIntl();
  const chooseLang = intl.formatMessage({ id: "page.home.chooselang" });

  

  switch (level) {
    case 1:
      return (
        <header className="mt-16 mb-10 flex flex-col items-center md:mb-12 md:flex-row md:justify-between">
          <h1 className="text-6xl font-bold leading-tight tracking-tighter md:pr-8 md:text-8xl">
            {title}
          </h1>
          <h4
            className={`mt-5 text-center text-lg md:pl-8 md:text-left ${styles.portableText}`}
          >
            <span className='font-semibold'> { chooseLang } </span>

            {[...locales].map((locale) => (
            <Link style={{textDecoration: "none"}} key={locale} href="/" locale={locale}>
            
               {locale === "en" ? <Gb className='inline'> </Gb>: 
               locale === "bg" ? <Bg className='inline'> </Bg> : 
               <De className='inline'> </De>}  {" "}
               
            </Link>
           
          ))}
        
          </h4>
        </header>
      )

    case 2:
      return (
        <header>
          <h2 className="mt-8 mb-20 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
            <Link href="/" className="hover:underline">
              {title}
            </Link>
          </h2>
        </header>
      )

    default:
      throw new Error(
        `Invalid level: ${
          JSON.stringify(level) || typeof level
        }, only 1 or 2 are allowed`
      )
  }
}