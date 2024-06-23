import Loading from "./loading";
import dynamic from "next/dynamic";
const SkillsSection = dynamic(() => import('@/components/Home/SkillsSection'), { loading: () => <Loading/>, })
const AboutSection = dynamic(() => import('@/components/Home/AboutSection'), { loading: () => <Loading/>, })
const BannerSection = dynamic(() => import('@/components/Home/BannerSection'), { loading: () => <Loading/>, })
const FactsSection = dynamic(() => import('@/components/Home/FactsSection'), { loading: () => <Loading/>, })
const NewsletterSection = dynamic(() => import('@/components/Home/NewsletterSection'), { loading: () => <Loading/>, })
const ProjectsSection = dynamic(() => import('@/components/Home/ProjectsSection'), { loading: () => <Loading/>, })
const ServiceSection = dynamic(() => import('@/components/Home/ServiceSection'), { loading: () => <Loading/>, })
const TeamsSection = dynamic(() => import('@/components/Home/TeamsSection'), { loading: () => <Loading/>, })
const TestimonialSection = dynamic(() => import('@/components/Home/TestimonialSection'), { loading: () => <Loading/>, })
const BackToTopBtn = dynamic(() => import('@/components/core/BackToTopBtn'), { loading: () => <Loading/>, })

export default function Home() {
  return (
    <div className="container-xxl bg-white p-0">

  {/* Banner Start */}
  <BannerSection />
  {/* Banner End */}

  {/* Skills Start */}
  <SkillsSection />
  {/* Skills End */}

  {/* About Start */}
  <AboutSection />
  {/* About End */}

  {/* Facts Start */}
  <FactsSection />
  {/* Facts End */}

  {/* Service Start */}
  <ServiceSection />
  {/* Service End */}

  {/* Newsletter Start */}
  <NewsletterSection />
  {/* Newsletter End */}

  {/* Projects Start */}
  <ProjectsSection />
  {/* Projects End */}

  {/* Testimonial Start */}
  <TestimonialSection />
  {/* Testimonial End */}

  {/* Team Start */}
  <TeamsSection />
  {/* Team End */}

  {/* Back to Top */}
  <BackToTopBtn />
</div>

  );
}
