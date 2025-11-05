import React from 'react';
import Lottie from 'lottie-react';

export default function Loader() {
  return (
    <div className="loader-overlay fixed inset-0 z-[9999] w-screen h-screen flex items-center justify-center bg-white bg-opacity-80">
      <Lottie
        animationData={require("../../../public/loader/loader.json")}
        className="w-32 h-32" 
        style={{ filter: 'hue-rotate(45deg) brightness(1.2)' }}
        loop
        autoplay
      />
    </div>
  );
}