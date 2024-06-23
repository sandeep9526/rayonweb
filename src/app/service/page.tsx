import dynamic from 'next/dynamic'
import React from 'react'
import Loading from '../loading'

const NewsletterSection = dynamic(() => import('@/components/Home/NewsletterSection'), { loading: () => <Loading/>, })
const ServiceSection = dynamic(() => import('@/components/Home/ServiceSection'), { loading: () => <Loading/>, })
const TestimonialSection = dynamic(() => import('@/components/Home/TestimonialSection'), { loading: () => <Loading/>, })
const BackToTopBtn = dynamic(() => import('@/components/core/BackToTopBtn'), { loading: () => <Loading/>, })
const ServiceBanner = dynamic(() => import('@/components/service/ServiceBanner'), { loading: () => <Loading/>, })

const page = () => {
  return (
    <div className="container-xxl bg-white p-0">
  {/* Spinner Start */}
 
  {/* Spinner End */}
  {/* Navbar & Hero Start */}
  <ServiceBanner />
  {/* Navbar & Hero End */}
  {/* Service Start */}
 <ServiceSection />
  {/* Service End */}
  {/* Newsletter Start */}
 <NewsletterSection />
  {/* Newsletter End */}
  {/* Testimonial Start */}
 <TestimonialSection />
  {/* Testimonial End */}
  {/* Footer Start */}
 
  {/* Footer End */}
  {/* Back to Top */}
 <BackToTopBtn />
</div>

  )
}

export default page