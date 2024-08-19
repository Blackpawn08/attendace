"use client";
import React, { useState } from "react";
import Image from "next/image";
import profile from "../../assets/profile.png"; // Ensure proper path
import qr from "../../assets/qr.png"; // Ensure proper path
import link from "../../assets/link.png";
import foot from "../../assets/footer.png";

export default function Home() {
  // Initialize state for each row
  const [approvedRows, setApprovedRows] = useState({
    row1: false,
    row2: false,
    row3: false,
    row4: false,
  });

  return (
    <main className="relative min-h-screen flex flex-col justify-between">
      <div
        className="h-48 w-full rounded-b-3xl flex justify-center pt-6"
        style={{
          backgroundColor: "white",
          backgroundImage: `url(${link.src})`, // Set background image
          backgroundSize: "cover", // Make the image cover the div
          backgroundPosition: "center",
          opacity: "revert",
        }}
      ></div>
      <div className="w-full flex justify-center items-center p-5 pt-20 md:pt-4">
        <form
          /*onSubmit={handleSubmit}*/ className="p-7 text-center rounded-xl shadow-lg"
          style={{ backgroundColor: "#134B70" }}
        >
          <label
            htmlFor="simpleInput"
            className="block mb-2 font-medium text-white text-2xl"
          >
            Enter your Name
          </label>
          <input
            type="text"
            id="simpleInput"
            className="border border-gray-300 p-2 rounded mb-4 w-full shadow-lg "
            //value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type here..."
          />
          <button
            type="submit"
            className=" text-black p-2 rounded shadow-lg "
            style={{ backgroundColor: "#E2E2B6" }}
          >
            Submit
          </button>
        </form>
      </div>
      <div className="relative">
        <Image
          src={foot}
          alt="foot"
          className="md:h-20 object-cover overflow-visible"
        />
      </div>
    </main>
  );
}
