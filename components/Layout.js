import Head from 'next/head'
import Header from './Header'

export default function Layout({ children, pageTitle, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://uploads-ssl.webflow.com/591e9525f13786217f2e347e/css/nad-is.webflow.39e5a42e4.min.css" rel="stylesheet" type="text/css" />
        <title>{pageTitle}</title>
      </Head>
      <section className="layout">
          <Header />
        <div className="content">{children}</div>
      </section>
      <footer>Built by me!</footer>
    </>
  )
}
