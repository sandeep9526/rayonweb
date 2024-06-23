import Link from 'next/link'
import { BsExclamationTriangleFill } from "react-icons/bs";

export default function NotFound() {
  return  <div className="container-xxl bg-primary p-0 hero-header">
  {/* 404 Start */}
  <div className="container-xxl py-5 wow fadeInUp " data-wow-delay="0.1s">
    <div className="container px-lg-5 not-found-page text-center">
      <div className="row justify-content-center">
        <div className="col-lg-6">
        <BsExclamationTriangleFill className="display-1 text-primary" />
          {/* <i className="bi bi-exclamation-triangle display-1 text-primary" /> */}
          <h1 className="display-1">404</h1>
          <h1 className="mb-4">Page Not Found</h1>
          <p className="mb-4">We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
          <Link className="btn btn-primary rounded-pill py-3 px-5" href="/">Go Back To Home</Link>
        </div>
      </div>
    </div>
  </div>
  {/* 404 End */}
</div>

}