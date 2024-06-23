import React from 'react'
import Loading from "../loading";
import dynamic from "next/dynamic";

const TeamBanner = dynamic(() => import('@/components/Team/TeamBanner'), { loading: () => <Loading/>, })
const TeamsSection = dynamic(() => import('@/components/Home/TeamsSection'), { loading: () => <Loading/>, })
const BackToTopBtn = dynamic(() => import('@/components/core/BackToTopBtn'), { loading: () => <Loading/>, })
const page = () => {
  return (
   <div className="container-xxl bg-white p-0">
  {/* Spinner Start */}
  
  {/* Spinner End */}
  {/* Navbar & Hero Start */}
  <TeamBanner />
 
  {/* Navbar & Hero End */}
  {/* Team Start */}
 <TeamsSection />
  {/* Team End */}

  {/* Back to Top */}
  <BackToTopBtn />
</div>

  )
}

export default page