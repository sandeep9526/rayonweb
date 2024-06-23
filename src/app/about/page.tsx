import React from 'react'
import { FaCertificate } from "react-icons/fa";
import dynamic from 'next/dynamic';
import Loading from '../loading';

const AboutBannerSection = dynamic(() => import('@/components/About/AboutBannerSection'), { loading: () => <Loading/>, })
const AboutContantSection = dynamic(() => import('@/components/About/AboutContantSection'), { loading: () => <Loading/>, })
const SkillsSection = dynamic(() => import('@/components/Home/SkillsSection'), { loading: () => <Loading/>, })
const FactsSection = dynamic(() => import('@/components/Home/FactsSection'), { loading: () => <Loading/>, })
const TeamsSection = dynamic(() => import('@/components/Home/TeamsSection'), { loading: () => <Loading/>, })
const BackToTopBtn = dynamic(() => import('@/components/core/BackToTopBtn'), { loading: () => <Loading/>, })


const page = () => {
  return (
        <div className="container-xxl bg-white p-0">
            <AboutBannerSection />
    <SkillsSection />
  {/* About Start */}
  <AboutContantSection />
  {/* About End */}
  {/* Facts Start */}
  <FactsSection />
  {/* Facts End */}
  {/* Team Start */}
  <TeamsSection />
  {/* Team End */}
 {/* Back to Top */}
  <BackToTopBtn />
</div>

  )
}

export default page