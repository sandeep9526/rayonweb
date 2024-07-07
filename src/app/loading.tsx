"use client"

import CustomImage from "@/components/core/CustomImage"

export default function Loading() {
    // Or a custom loading skeleton component
    return  <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
    <div className="spinner-grow text-primary ms-3" style={{ width: '3rem', height: '3rem' }} role="status">
      {/* <span className="sr-only">Loading...</span> */}
      <CustomImage src='/img/logo1.png' alt="Loading..." style={{ width: '50px', height: '50px' }} />
    </div>
  </div>
  }