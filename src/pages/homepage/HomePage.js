import React from 'react'
import Showcase from "../../components/layouts/showcase/Showcase"
import ProductListing from '../../components/layouts/productlisting/ProductListing'
import Footer from '../../components/layouts/footer/Footer'





export default function HomePage() {
  return (
    <section>
<Showcase></Showcase>
<ProductListing/>
<Footer/>
    </section>
  )
}
