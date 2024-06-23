import React from 'react'
import Loading from "../loading";
import dynamic from "next/dynamic";

const ContactBanner = dynamic(() => import('@/components/contact/ContactBanner'), { loading: () => <Loading/>, })
const ContactContant = dynamic(() => import('@/components/contact/ContactContant'), { loading: () => <Loading/>, })
const BackToTopBtn = dynamic(() => import('@/components/core/BackToTopBtn'), { loading: () => <Loading/>, })


const page = () => {
  return (
    <div className="container-xxl bg-white p-0">
  {/* Spinner End */}
  {/* Navbar & Hero Start */}
  <ContactBanner />
  {/* Navbar & Hero End */}
  {/* Contact Start */}
  <ContactContant />
  {/* Contact End */}
  
  {/* Back to Top */}
  <BackToTopBtn />
</div>

  )
}

export default page