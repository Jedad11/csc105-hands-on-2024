import React from "react";

function Gallery(){
    return(
        <div className="">
            <h1 className="text-4xl font-bold m-4 flex justify-center items-center">Gallery</h1>
            <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 justify-center items-center m-10">
                <div className="flex justify-center items-center">
                    <img src="src/images/6aofsvaglm_Medium_WW226365.jpg" alt="tiger" className="w-50 xl:w-100 sm:w-75 h-50 xl:h-100 sm:h-75 rounded-4xl m-5 xl:m-10 sm:m-7" />
                </div>
                <div className="flex justify-center items-center">
                    <img src="src/images/Corl0207_(28225976491).jpg" alt="shark" className="w-50 xl:w-100 sm:w-75 h-50 xl:h-100 sm:h-75 rounded-4xl m-5 xl:m-10 sm:m-7" />
                </div>
                <div className="flex justify-center items-center">
                    <img src="src/images/iStock-1338954116.jpg" alt="dog" className="w-50 xl:w-100 sm:w-75 h-50 xl:h-100 sm:h-75 rounded-4xl m-5 xl:m-10 sm:m-7" />
                </div>
                <div className="flex justify-center items-center">
                    <img src="src/images/Marmot-edit1.jpg" alt="marmot" className="w-50 xl:w-100 sm:w-75 h-50 xl:h-100 sm:h-75 rounded-4xl m-5 xl:m-10 sm:m-7" />
                </div>
                <div className="flex justify-center items-center">
                    <img src="src/images/Parrot-Care.jpg" alt="parrot" className="w-50 xl:w-100 sm:w-75 h-50 xl:h-100 sm:h-75 rounded-4xl m-5 xl:m-10 sm:m-7" />
                </div>
                <div className="flex justify-center items-center">
                    <img src="src/images/raptor-er-western-screech-owl-winston-portrait-jim-shane.jpg" alt="owl" className="w-50 xl:w-100 sm:w-75 h-50 xl:h-100 sm:h-75 rounded-4xl m-5 xl:m-10 sm:m-7" />
                </div>
            </div>
        </div>

        
    );
}

export default Gallery