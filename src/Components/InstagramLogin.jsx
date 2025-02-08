// import React from "react";
// import InstaLogo from "../assets/insta.png";
// import fbLogo from "../assets/fb.png";
// import homePhone from "../assets/home-phones.png";
// import googlePlay from "../assets/googlePlay.png";
// import microsoft from "../assets/microsoft.png";
// import footer from "./footer";

// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";
// import screenShot1 from '../assets/screenshot1.png';
// import screenShot2 from '../assets/screenshot2.png';

// const images = [screenShot1, screenShot2];
// const InstagramLogin = () => {

//   const [index, setIndex] = useState(0);
  
//     useEffect(() => {
//       const interval = setInterval(() => {
//         setIndex((prevIndex) => (prevIndex + 1) % images.length);
//       }, 3000);
//       return () => clearInterval(interval);
//     }, []);

//   return (
//     <div>
//     <div className="flex items-center justify-center min-h-screen bg-black">
//       {/* Left Side - Mobile Preview */}
//       <div className="relative flex flex-col items-center h-screen bg-black">
//       <div className="hidden md:flex relative">
//         {/* Phone Frame */}
//         <img
//           src={homePhone}
//           alt="Instagram Preview 1"
//           className="h-[640px] mt-10"
//         />
        
//         {/* Slideshow inside the phone screen */}
//         <div className="absolute top-[10%] left-[14%] w-[75%] h-[80%] overflow-hidden rounded-lg">
//           <motion.img
//             key={index}
//             src={images[index]}
//             alt="Slideshow"
//             className="absolute w-full h-full object-contain ml-10"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1 }}
//           />
//         </div>
//       </div>
//     </div>

//       {/* Right Side - Login Form */}
//     <div className="">
//       <div className="bg-black text-white w-[340px] p-5 shadow-lg border border-[#343434] rounded ">
//         <img
//           src={InstaLogo}
//           alt="Instagram Preview 1"
//           className="mx-auto mb-7 mt-5"
//         />
//         <input
//           type="text"
//           placeholder="Phone number, username, or email"
//           className="w-full px-2 py-2 my-1 bg-[#121212] border border-[#555555] text-white rounded focus:outline-none placeholder-[#a8a8a8] placeholder:text-xs"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full px-2 py-2 my-1 bg-[#121212] border border-[#555555] text-white rounded focus:outline-none placeholder-[#a8a8a8] placeholder:text-xs"
//         />
//         <button className="w-full bg-[#0069ad] hover:[#0069ad] text-[#a0abb2] font-semibold py-2 px-2 my-1 rounded-lg mt-2">
//           Log in
//         </button>

//         <div className="flex items-center justify-center mt-3 mb-4">
//           <div className="w-full h-[1px] bg-[#262626]"></div>
//           <span className="px-3 text-xs text-[#a8a8a8]">OR</span>
//           <div className="w-full h-[1px] bg-[#262626]"></div>
//         </div>


//         <button className="w-full flex items-center justify-center gap-2 text-white font-semibold py-2 my-3 rounded-md">
//           <img src={fbLogo} alt="Facebook" className="h-5 w-5.5 rounded-lg " />
//           <p className="text-sm text-[#0095f6] hover:text-white">Log in with Facebook</p>
//         </button>
//         <p className="text-sm text-center text-white hover:underline cursor-pointer">
//           Forgot password?
//         </p>
        
//       </div>

//         <div className="bg-black text-white w-[340px] p-5 shadow-lg border border-[#343434] rounded mt-3">
//             <div className="text-center text-gray-300 text-sm">
//             Don't have an account? <span className="text-blue-500 cursor-pointer text-sm">Sign up</span>
//           </div> 
//         </div>
//           <div className="text-center mt-5">
//           <p className="text-white mb-5 text-sm">Get the app.</p>
//             <div className="flex justify-center space-x-3 mt-2">
//               <img src={googlePlay} alt="Google Play" className="h-10" />
//               <img src={microsoft} alt="Microsoft Store" className="h-10" />
//             </div>
//         </div>


//     </div>
//     </div>
//     <footer className="bg-black text-gray-400 text-sm py-4">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-wrap justify-center space-x-4 mb-2">
//           {[
//             "Meta", "About", "Blog", "Jobs", "Help", "API", "Privacy", "Terms", "Locations", 
//             "Instagram Lite", "Threads", "Contact Uploading & Non-Users", "Meta Verified"
//           ].map((item, index) => (
//             <a key={index} href="#" className="hover:underline">{item}</a>
//           ))}
//         </div>
//         <div className="text-center">
//           <span className="mr-2">English ▼</span>
//           <span>© 2025 Instagram from Meta</span>
//         </div>
//       </div>
//     </footer>
//     </div>
//   );
// };

// export default InstagramLogin;

      