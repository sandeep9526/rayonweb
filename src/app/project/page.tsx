import React from 'react'
import Loading from "../loading";
import dynamic from "next/dynamic";

const ProjectBanner = dynamic(() => import('@/components/project/ProjectBanner'), { loading: () => <Loading/>, })
const ProjectsSection = dynamic(() => import('@/components/Home/ProjectsSection'), { loading: () => <Loading/>, })
const BackToTopBtn = dynamic(() => import('@/components/core/BackToTopBtn'), { loading: () => <Loading/>, })

const page = () => {
  return (
   <div className="container-xxl bg-white p-0">
  {/* Spinner Start */}
 
  {/* Spinner End */}
  {/* Navbar & Hero Start */}
  <ProjectBanner />
  {/* Navbar & Hero End */}
  {/* Projects Start */}
  <ProjectsSection />
  {/* Projects End */}
  {/* Back to Top */}
  <BackToTopBtn />
</div>

  )
}

export default page