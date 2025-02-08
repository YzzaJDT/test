import React from 'react'

function footer() {
  return (
    <footer className="bg-black text-gray-400 text-sm py-4 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center space-x-4 mb-2">
          {[
            "Meta", "About", "Blog", "Jobs", "Help", "API", "Privacy", "Terms", "Locations", 
            "Instagram Lite", "Threads", "Contact Uploading & Non-Users", "Meta Verified"
          ].map((item, index) => (
            <a key={index} href="#" className="hover:underline">{item}</a>
          ))}
        </div>
        <div className="text-center">
          <span className="mr-2">English ▼</span>
          <span>© 2025 Instagram from Meta</span>
        </div>
      </div>
    </footer>
  )
}

export default footer