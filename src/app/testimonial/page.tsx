import Loading from "../loading";
import dynamic from "next/dynamic";

const TestimonialBanner = dynamic(() => import('@/components/testimonial/TestimonialBanner'), { loading: () => <Loading/>, })
const TestimonialSection = dynamic(() => import('@/components/Home/TestimonialSection'), { loading: () => <Loading/>, })
const BackToTopBtn = dynamic(() => import('@/components/core/BackToTopBtn'), { loading: () => <Loading/>, })


const page = () => {
  return (
   <div className="container-xxl bg-white p-0">
  {/* Spinner Start */}
 
  {/* Spinner End */}
  {/* Navbar & Hero Start */}
 <TestimonialBanner />
  {/* Navbar & Hero End */}
  {/* Testimonial Start */}
  <TestimonialSection />
  {/* Testimonial End */}
  {/* Back to Top */}
  <BackToTopBtn />
</div>

  )
}

export default page