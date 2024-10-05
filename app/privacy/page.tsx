import React from 'react'

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
      <p className="mb-4">
        WebTech Solutions ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by WebTech Solutions.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
      <p className="mb-4">
        We collect information you provide directly to us, such as when you create an account, submit a contact form, or communicate with us.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
      <p className="mb-4">
        We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to comply with legal obligations.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Information Sharing and Disclosure</h2>
      <p className="mb-4">
        We do not share your personal information with third parties except as described in this privacy policy or with your consent.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to this Privacy Policy</h2>
      <p className="mb-4">
        We may update this privacy policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
      <p className="mb-4">
        If you have any questions about this Privacy Policy, please contact us at privacy@webtechsolutions.com.
      </p>
    </div>
  )
}