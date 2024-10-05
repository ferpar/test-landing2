import React from 'react'

export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
      <p className="mb-4">
        Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the WebTech Solutions website (the "Service") operated by WebTech Solutions ("us", "we", or "our").
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Terms</h2>
      <p className="mb-4">
        By accessing the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">2. Use License</h2>
      <p className="mb-4">
        Permission is granted to temporarily download one copy of the materials (information or software) on WebTech Solutions's website for personal, non-commercial transitory viewing only.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">3. Disclaimer</h2>
      <p className="mb-4">
        The materials on WebTech Solutions's website are provided on an 'as is' basis. WebTech Solutions makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">4. Limitations</h2>
      <p className="mb-4">
        In no event shall WebTech Solutions or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on WebTech Solutions's website.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">5. Revisions and Errata</h2>
      <p className="mb-4">
        The materials appearing on WebTech Solutions's website could include technical, typographical, or photographic errors. WebTech Solutions does not warrant that any of the materials on its website are accurate, complete or current.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact Us</h2>
      <p className="mb-4">
        If you have any questions about these Terms, please contact us at terms@webtechsolutions.com.
      </p>
    </div>
  )
}