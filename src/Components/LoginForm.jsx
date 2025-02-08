import React, {useState} from 'react'
import InstaLogo from "../assets/insta.png";
import fbLogo from "../assets/fb.png";
import googlePlay from "../assets/googlePlay.png";
import microsoft from "../assets/microsoft.png";

function LoginForm() {
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  
  const [inputValue, setInputValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  return (
    <div className="mt-12">
      <div className="bg-black text-white w-[340px] p-5 shadow-lg md:border md:border-[#343434] rounded ">
        <img
          src={InstaLogo}
          alt="Instagram Preview 1"
          className="mx-auto mb-7 mt-5"
        />
{/* ------ Phone number, username, or email --------------- */}
    <div className="relative w-full">
      {/* Floating Label */}
      <label
        className={`absolute left-2 text-xs text-gray-400 transition-all duration-200 ${
          isFocusedEmail || inputValue ? "-top-1 text-[10px] bg-[#121212] px-1" : "top-3"
        }`}>
        Phone number, username, or email
      </label>

      {/* Input Field */}
      <input
        type="text"
        required
        value={inputValue}
        onFocus={() => setIsFocusedEmail(true)}
        onBlur={() => setIsFocusedEmail(inputValue !== "")}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-full px-2 pt-4 pb-1 my-1 bg-[#121212] border border-[#555555] text-white text-xs rounded focus:outline-none placeholder-transparent"
      />
    </div>

    {/* ------Passsword input field --------------- */}
    <div className="relative w-full">
      {/* Floating Label */}
      <label
        className={`absolute left-2 text-xs text-gray-400 transition-all duration-200 ${
          isFocusedPassword || passwordValue ? "-top-1 text-[10px] bg-[#121212] px-1" : "top-3"
        }`}>
        Password
      </label>

      {/* Input Field */}
      <input
        type="password"
        required
        value={passwordValue}
        onFocus={() => setIsFocusedPassword(true)}
        onBlur={() => setIsFocusedPassword(passwordValue !== "")}
        onChange={(e) => setPasswordValue(e.target.value)}
        className="w-full px-2 pt-4 pb-1 my-1 bg-[#121212] border border-[#555555] text-white text-xs rounded focus:outline-none placeholder-transparent"
      />
    </div>

{/* login button */}
        <button 
        type='button'
        className="w-full bg-[#0069ad] hover:[#0069ad] text-[#a0abb2] font-semibold py-2 px-2 my-1 rounded-lg mt-2">
          Log in
        </button>

        <div className="flex items-center justify-center mt-3 mb-4">
          <div className="w-full h-[1px] bg-[#262626]"></div>
          <span className="px-3 text-xs text-[#a8a8a8]">OR</span>
          <div className="w-full h-[1px] bg-[#262626]"></div>
        </div>

{/* login button for facebook */}
        <button className="w-full flex items-center justify-center gap-2 text-white font-semibold py-2 my-3 rounded-md">
          <img src={fbLogo} alt="Facebook" className="h-5 w-5.5 rounded-lg " />
          <p className="text-sm text-[#0095f6] hover:text-white">Log in with Facebook</p>
        </button>
{/* Forgot Password */}
        <p className="text-sm text-center text-white hover:underline cursor-pointer">
          <a 
            href="https://www.instagram.com/accounts/password/reset/" >
            Forgot password?
          </a>
        </p>
        
      </div>

      <div className="bg-black text-white w-[340px] p-5 shadow-lg md:border md:border-[#343434] rounded mt-3">
        <div className="text-center text-gray-300 text-sm">
          Don't have an account? <span className="text-blue-500 cursor-pointer text-sm hover:underline">
            <a href="https://www.instagram.com/accounts/emailsignup/">
                Sign up
              </a> </span>
        </div>
    </div>


          <div className="text-center mt-5">
          <p className="text-white mb-5 text-sm">Get the app.</p>
            <div className="flex justify-center space-x-3 mt-2">
              <a href='https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D683B5430-8085-4A1D-A858-85A10DF51FCD%26utm_campaign%3DunifiedHome%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge&pli=1'>
                <img src={googlePlay} alt="Google Play" className="h-10" />
              </a>
              <a>
                <img src={microsoft} alt="Microsoft Store" className="h-10" />
              </a> 
            </div>
        </div>
    </div>
  )
}

export default LoginForm