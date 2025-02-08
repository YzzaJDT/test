import React from 'react';
import MobileMockup from './MobileMockup';
import LoginForm from '../Components/LoginForm';

function HomePage() {
  return (
    
    <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center bg-black w-full mx-auto min-h-screen">
      {/* PHONE ANIMATION will hide on small screens */}
      <div className="hidden md:block bg-black"> 
        <MobileMockup />
      </div>
      
      {/* LOGIN FORM */}
      <div className="md:mt-0 bg-black">
        <LoginForm />
      </div>
    </div>
  );
}

export default HomePage;
