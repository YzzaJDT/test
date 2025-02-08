import React from 'react'
import LeftHome from '../Components/leftHome';
import RightHome from '../Components/RightHome';

function HomePage() {
  return (
    <div>
         <div className="flex items-center justify-center min-h-screen bg-black">
        <LeftHome />
        <RightHome />
    </div>
    </div>
   
  )
}

export default HomePage