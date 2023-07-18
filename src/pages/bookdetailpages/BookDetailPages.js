import React from 'react'
import Navbar from '../../components/layouts/navbar/Navbar'
import DetailSectin from '../../components/layouts/detail-section/DetailSectin'
import Footer from "../../components/layouts/footer/Footer"

export default function BookDetailPages() {
  return (
    <section>
<Navbar darkThem={true}/>
    <DetailSectin/>
    <Footer/>
    </section>
  )
}
