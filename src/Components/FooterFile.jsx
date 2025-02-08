import React from 'react'

function FooterFile() {
    const footerLinks = [
        { name: "Meta", url: "https://about.meta.com/" },
        { name: "About", url: "https://about.instagram.com/" },
        { name: "Blog", url: "https://about.instagram.com/blog" },
        { name: "Jobs", url: "https://www.metacareers.com/" },
        { name: "Help", url: "https://help.instagram.com/" },
        { name: "API", url: "https://developers.facebook.com/docs/instagram-api" },
        { name: "Privacy", url: "https://privacycenter.instagram.com/policy/" },
        { name: "Terms", url: "https://help.instagram.com/581066165581870" },
        { name: "Locations", url: "https://www.instagram.com/explore/locations/" },
        { name: "Instagram Lite", url: "https://www.instagram.com/web/lite/" },
        { name: "Threads", url: "https://www.threads.net/" },
        { name: "Contact Uploading & Non-Users", url: "https://help.instagram.com/494561080557017" },
        { name: "Meta Verified", url: "https://about.instagram.com/blog/announcements/meta-verified" }
      ];
  return (
    <footer className="bg-black text-gray-400 text-sm py-4 mt-10">
    <div className="container mx-auto px-4">
      {/* Links */}
      <div className="flex flex-wrap justify-center space-x-4 mb-2">
        {footerLinks.map((link, index) => (
          <a 
            key={index} 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:underline"
          >
            {link.name}
          </a>
        ))}
      </div>

      <div className="text-center">
        <span className="mr-2">English</span>
        <span>© 2025 Instagram from Meta</span>
      </div>
    </div>
  </footer>
  )
}

export default FooterFile