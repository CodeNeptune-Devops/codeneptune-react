import React from 'react'
import { FaInstagram, FaFacebookF, FaXTwitter, FaYoutube } from 'react-icons/fa6';

function Footer() {
  const socialLinks = [
    { icon: <FaInstagram />, url: "https://www.instagram.com" },
    { icon: <FaFacebookF />, url: "https://www.facebook.com" },
    { icon: <FaXTwitter />, url: "https://www.twitter.com" },
    { icon: <FaYoutube />, url: "https://www.youtube.com" },
  ];

  const educationData = [
    { name: "Email Marketing", href: "#" },
    { name: "Social Media Marketing", href: "#" },
    { name: "Search Engine Optimization", href: "#" },
    { name: "Product Development", href: "#" },
    { name: "Web Development", href: "#" },
  ];

  const businessData= [
    { name: "Digital Marketing Agency", href: "#" },
    { name: "SEO Agency", href: "#" },
    { name: "PPC Agency", href: "#" },
    { name: "Content Marketing Agency", href: "#" },
    { name: "Internet Marketing Agency", href: "#" },
    { name: "Locations", href: "#" },
    { name: "Industries We Serve", href: "#" },
  ];

  const developerAndItData = [
    { name: "Internet Marketing", href: "#" },
    { name: "Content Marketing", href: "#" },
    { name: "Social Media", href: "#" },
    { name: "Web Design", href: "#" },
    { name: "SEO", href: "#" },
    { name: "PPC", href: "#" },
    { name: "Amazon", href: "#" },
  ];

  const companyData = [
    { name: "About us", href: "#" },
    { name: "Contact us", href: "#" },
    { name: "SEO Checker", href: "#" },
    { name: "Tools", href: "#" },
    { name: "Marketing Guides", href: "#" },
    { name: "Careers", href: "#" },
  ];

  return (
    <footer className="w-full flex flex-col justify-center items-center z-[52] pt-16">
      <div className="w-full hidden lg:block bg-[#171717] text-white">
        <div className="max-w-7xl mx-auto w-full pt-20 py-5">
          <div className="flex justify-around items-start">
            <div className="flex flex-col justify-start items-start gap-8">
              <img src="/cn-footer-logo.svg" alt="Logo" className="w-48 h-full" />
              <div className="flex flex-col justify-start items-start text-[#CCCCCC] gap-5">
                <a
                  className="text-xs"
                  href="https://maps.app.goo.gl/Qy1xyxWiNiYJBj4A8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  No. 624, 3rd Floor – S2, Khivraj Building, 
                  <br />Anna Salai, Chennai – 600 006
                </a>
                <div className="flex justify-start items-center gap-1">
                  <span className="text-xs">Phone: </span>
                  <a className="text-xs" href="tel:+916382958105">
                    +91 63829 58105,
                  </a>
                  <a className="text-xs" href="tel:+919363640633">
                    +91 93636 40633
                  </a>
                </div>
                <div className="text-xs flex justify-start items-center gap-1">
                  <span>Email:</span>
                  <a href="mailto:info@codeneptune.com" className="cursor-pointer">
                    info@codeneptune.com
                  </a>
                </div>
              </div>
              <div className="flex justify-start items-center gap-1">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white p-2 rounded-full hover:bg-white hover:text-black text-xl transition-colors duration-300"
                    aria-label={`Open ${link.url}`}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-start items-start gap-5">
              <h5 className="text-md">Education</h5>
              <div className="flex flex-col justify-start text-[#CCCCCC] items-start gap-3">
                {educationData.map((item, index) => (
                  <a 
                    key={index} 
                    href={item.href} 
                    className="text-xs hover:bg-gradient-to-r hover:from-[#4A3AFF] hover:to-[#744EDF] hover:bg-clip-text hover:text-transparent"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-start items-start gap-5">
              <h5 className="text-md">Business</h5>
              <div className="flex flex-col justify-start items-start text-[#CCCCCC] gap-3">
                {businessData.map((item, index) => (
                  <a 
                    key={index} 
                    href={item.href} 
                    className="text-xs hover:bg-gradient-to-r hover:from-[#4A3AFF] hover:to-[#744EDF] hover:bg-clip-text hover:text-transparent"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-start items-start gap-5">
              <h5 className="text-md">Developer & IT</h5>
              <div className="flex flex-col justify-start items-start text-[#CCCCCC] gap-3">
                {developerAndItData.map((item, index) => (
                  <a 
                    key={index} 
                    href={item.href} 
                    className="text-xs hover:bg-gradient-to-r hover:from-[#4A3AFF] hover:to-[#744EDF] hover:bg-clip-text hover:text-transparent"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-start items-start gap-5">
              <h5 className="text-md">Company</h5>
              <div className="flex flex-col justify-start items-start gap-3 text-[#CCCCCC]">
                {companyData.map((item, index) => (
                  <a 
                    key={index} 
                    href={item.href} 
                    className="text-xs hover:bg-gradient-to-r hover:from-[#4A3AFF] hover:to-[#744EDF] hover:bg-clip-text hover:text-transparent"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:hidden bg-[#171717] text-white">
        <div className="max-w-7xl mx-auto w-full px-4 pt-20 py-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-around items-start gap-8">
            <div className="flex col-span-1 sm:col-span-2 md:col-span-4 flex-col justify-start items-start gap-8">
              <img src="/cn-footer-logo.svg" alt="Logo" className="w-48 h-full" />
              <div className="flex flex-col justify-start items-start text-[#CCCCCC] gap-5">
                <a
                  className="text-xs"
                  href="https://maps.app.goo.gl/Qy1xyxWiNiYJBj4A8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  No. 57/25, P.V. Kovil Street, Mylapore
                  <br /> Chennai, Tamil Nadu – 600004
                </a>
                <div className="flex justify-start items-center gap-1">
                  <span className="text-xs">Phone: </span>
                  <a className="text-xs" href="tel:+918000185888">
                    +91 80001 85888,
                  </a>
                  <a className="text-xs" href="tel:+916060087454">
                    +91 60600 87454
                  </a>
                </div>
                <div className="text-xs flex justify-start items-center gap-1">
                  <span>Email:</span>
                  <a href="mailto:info@cashzone.com" className="cursor-pointer">
                    info@cashzone.com
                  </a>
                </div>
              </div>
              <div className="flex justify-start items-center gap-1">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white p-2 rounded-full hover:bg-white hover:text-black text-xl transition-colors duration-300"
                    aria-label={`Open ${link.url}`}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex col-span-1 sm:col-span-1 md:col-span-2 flex-col justify-start items-start gap-5">
              <h5 className="text-md">Education</h5>
              <div className="flex flex-col justify-start text-[#CCCCCC] items-start gap-3">
                {educationData.map((item, index) => (
                  <a 
                    key={index} 
                    href={item.href} 
                    className="text-xs hover:bg-gradient-to-r hover:from-[#4A3AFF] hover:to-[#744EDF] hover:bg-clip-text hover:text-transparent"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex col-span-1 sm:col-span-1 md:col-span-2 flex-col justify-start items-start gap-5">
              <h5 className="text-md">Business</h5>
              <div className="flex flex-col justify-start items-start text-[#CCCCCC] gap-3">
                {businessData.map((item, index) => (
                  <a 
                    key={index} 
                    href={item.href} 
                    className="text-xs hover:bg-gradient-to-r hover:from-[#4A3AFF] hover:to-[#744EDF] hover:bg-clip-text hover:text-transparent"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex col-span-1 sm:col-span-1 md:col-span-2 flex-col justify-start items-start gap-5">
              <h5 className="text-md">Developer & IT</h5>
              <div className="flex flex-col justify-start items-start text-[#CCCCCC] gap-3">
                {developerAndItData.map((item, index) => (
                  <a 
                    key={index} 
                    href={item.href} 
                    className="text-xs hover:bg-gradient-to-r hover:from-[#4A3AFF] hover:to-[#744EDF] hover:bg-clip-text hover:text-transparent"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex col-span-1 sm:col-span-1 md:col-span-2 flex-col justify-start items-start gap-5">
              <h5 className="text-md">Company</h5>
              <div className="flex flex-col justify-start items-start gap-3 text-[#CCCCCC]">
                {companyData.map((item, index) => (
                  <a 
                    key={index} 
                    href={item.href} 
                    className="text-xs hover:bg-gradient-to-r hover:from-[#4A3AFF] hover:to-[#744EDF] hover:bg-clip-text hover:text-transparent"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#1D1D1D] text-white flex justify-center items-center py-8">
        <p className="text-xs">© Copyright <span className='font-bold'>CodeNeptune 2025</span>. All Rights Reserved </p>
      </div>
    </footer>
  )
}

export default Footer