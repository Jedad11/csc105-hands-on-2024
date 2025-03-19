import React from "react";

function Navbar(){
    return(
        <nav className="flex justify-between items-center p-4">
            <h1 className="text-xl font-bold">Chetsadaphiphat</h1>
            <div className="flex space-x-6">
                <a href="#" className="font-bold">Home</a>
                <a href="#" className="font-bold">About me</a>
                <a href="#" className="font-bold">Gallery</a>
            </div>
            <button className="bg-green-900 text-white px-4 py-2 rounded-full shadow-md">
            Contact
            </button>
        </nav>
    );
}

export default Navbar