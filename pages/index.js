import Layout from '../components/Layout'

export default function Home({ title, ...props }) {
  return (
    <Layout pageTitle={`${title}`}  />
  )
}

export async function getStaticProps() {

  return {
    props: {
      title: "Korir Desmond"
    },
  }
}

