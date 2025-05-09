import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className="bg-gray-900 w-full mt-10">
      {/* Container keeps content from touching screen edges */}
      <div className="container mx-auto px-4 md:px-36 py-10 border-b border-white/30">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          
          {/* Column 1: Logo & Text */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-sm">
            <img src={assets.logo_dark} alt="logo" className="mb-4" />
            <p className="text-sm text-white/80">
            At LMS, we empower learners everywhere with expertly crafted courses, hands-on projects, and a supportive community—so you can upskill, stay ahead, and achieve your goals on your own schedule.
            
            </p>
          </div>

          {/* Column 2: Company Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="font-semibold text-white mb-4">Company</h2>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 3: Newsletter */}
          <div className="hidden md:flex flex-col items-center md:items-start text-center md:text-left max-w-sm">
            <h2 className="font-semibold text-white mb-4">Subscribe</h2>
            <p className="text-sm text-white/80 mb-4">
              Get the latest news, articles, and resources sent straight to your inbox.
            </p>
            <form className="flex items-center gap-2">
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input
                id="footer-email"
                type="email"
                placeholder="Enter your email"
                className="w-64 h-9 px-2 rounded bg-gray-800 text-gray-200 placeholder-gray-500 outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 h-9 px-4 rounded text-white font-medium hover:bg-blue-700 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center py-4 text-xs md:text-sm text-white/80">
        © 2025 LMS. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
