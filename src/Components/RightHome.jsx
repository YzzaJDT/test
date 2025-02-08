import React from 'react'
import InstaLogo from "../assets/insta.png";
import fbLogo from "../assets/fb.png";
import homePhone from "../assets/home-phones.png";
import googlePlay from "../assets/googlePlay.png";
import microsoft from "../assets/microsoft.png";

function RightHome() {
  return (
    <div className="mt-10">
      <div className="bg-black text-white w-[340px] p-5 shadow-lg border border-[#343434] rounded ">
        <img
          src={InstaLogo}
          alt="Instagram Preview 1"
          className="mx-auto mb-7 mt-5"
        />
        <input
          type="text"
          placeholder="Phone number, username, or email"
          className="w-full px-2 py-2 my-1 bg-[#121212] border border-[#555555] text-white rounded focus:outline-none placeholder-[#a8a8a8] placeholder:text-xs"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-2 py-2 my-1 bg-[#121212] border border-[#555555] text-white rounded focus:outline-none placeholder-[#a8a8a8] placeholder:text-xs"
        />
        <button className="w-full bg-[#0069ad] hover:[#0069ad] text-[#a0abb2] font-semibold py-2 px-2 my-1 rounded-lg mt-2">
          Log in
        </button>

        <div className="flex items-center justify-center mt-3 mb-4">
          <div className="w-full h-[1px] bg-[#262626]"></div>
          <span className="px-3 text-xs text-[#a8a8a8]">OR</span>
          <div className="w-full h-[1px] bg-[#262626]"></div>
        </div>


        <button className="w-full flex items-center justify-center gap-2 text-white font-semibold py-2 my-3 rounded-md">
          <img src={fbLogo} alt="Facebook" className="h-5 w-5.5 rounded-lg " />
          <p className="text-sm text-[#0095f6] hover:text-white">Log in with Facebook</p>
        </button>
        <p className="text-sm text-center text-white hover:underline cursor-pointer">
          Forgot password?
        </p>
        
      </div>

        <div className="bg-black text-white w-[340px] p-5 shadow-lg border border-[#343434] rounded mt-3">
            <div className="text-center text-gray-300 text-sm">
            Don't have an account? <span className="text-blue-500 cursor-pointer text-sm">Sign up</span>
          </div> 
        </div>
          <div className="text-center mt-5">
          <p className="text-white mb-5 text-sm">Get the app.</p>
            <div className="flex justify-center space-x-3 mt-2">
              <img src={googlePlay} alt="Google Play" className="h-10" />
              <img src={microsoft} alt="Microsoft Store" className="h-10" />
            </div>
        </div>
    </div>
  )
}

export default RightHome