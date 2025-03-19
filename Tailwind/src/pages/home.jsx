import React from "react";

function Home(){
    return(
        <div className="flex sm:flex-row items-center justify-center m-5 sm:m-10 xl:m-10">
  <div className="m-5 sm:m-10">
    <h2 className="font-semibold text-2xl m-2 sm:m-4 xl:m-4">Hello, it's me</h2>
    <h1 className="text-4xl font-bold m-2 sm:m-4 xl:m-4">Chetsadapiphat Dangdeelert</h1>
    <h2 className="text-2xl font-semibold m-2 sm:m-4 xl:m-4">I'm CS@SIT student</h2>
    <p className="font-semibold m-2 sm:m-4 xl:m-4">
      My nickname is Ice but you can call me Jed
    </p>

    <div className="flex justify-center sm:justify-start">
      <img
        src="src/icons/Facebook_Logo_(2019).png"
        alt="icon"
        className="w-10 h-10 m-2 sm:w-12 sm:h-12 sm:m-3 xl:w-16 xl:h-16 xl:m-5"
      />
      <img
        src="src/icons/Instagram_icon.png"
        alt="icon"
        className="w-10 h-10 m-2 sm:w-12 sm:h-12 sm:m-3 xl:w-16 xl:h-16 xl:m-5"
      />
      <img
        src="src/icons/Gmail_icon_(2020).svg.png"
        alt="icon"
        className="w-10 h-10 m-2 sm:w-12 sm:h-12 sm:m-3 xl:w-16 xl:h-16 xl:m-5"
      />
    </div>

    <button className="bg-green-900 text-white px-4 py-2 rounded-full shadow-md m-5">
      <a href="">My Portfolio</a>
    </button>
  </div>

  <img src="src/images/17 IMG_5414.jpg" alt="Me" className="w-40 sm:w-48 xl:w-64 sm:m-5 xl:m-10" />
</div>
    );
}

export default Home