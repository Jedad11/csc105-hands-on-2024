import React from "react";

function About(){
    return(
        <div className="flex flex-col sm:flex-row items-center justify-center w-full max-w-4xl mx-auto p-5">
  <img src="src/images/jedsada.jpg" alt="Me" 
       className="w-48 sm:w-48 xl:w-64 sm:m-5 xl:m-10" />
  
  <div className="text-center sm:text-left w-full sm:w-auto">
    <h1 className="text-4xl font-bold m-4">About Me</h1>
    <h2 className="text-2xl font-semibold m-4">CS@SIT student</h2>
    <p className="font-medium m-4">I'm from Ratwinit Bangkaeo</p>
    <p className="font-medium m-4">I live in Samutprakan</p>
    <button className="bg-green-900 text-white px-4 py-2 rounded-full shadow-md m-5">
      <a href="">Read More</a>
    </button>
  </div>
</div>


    );
}

export default About