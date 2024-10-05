import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p>&copy; 2023 WebTech Solutions. All rights reserved.</p>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-primary">Terms of Service</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}