"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import profile from "../../assets/profile.png"; // Ensure proper path
import qr from "../../assets/qr.png"; // Ensure proper path
import link from "../../assets/link.png";
import foot from "../../assets/footer.png";
import flag from "../../assets/flag.png";
import raceback from "../../assets/racebackg.png";
import track from "../../assets/racetrack.png";
import tirebackg from "../../assets/tirebackg.png";
import QRCode from "react-qr-code";

export default function Home() {
  // Initialize state for each row
  const [approvedRows, setApprovedRows] = useState({
    row1: false,
    row2: false,
    row3: false,
    row4: false,
  });

  return (
    <main
      className="relative min-h-screen flex flex-col "
      style={{
        backgroundImage: `url(${tirebackg.src})`, // Set background image
        backgroundSize: "cover", // Make the image cover the div
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        /* backgroundColor: "#e8e4c9", */
        backgroundColor: "#fffef5",
      }}
    >
      <div
        className="h-96 w-full rounded-b-3xl relative  "
        style={{
          backgroundColor: "white",
          backgroundImage: `url(${link.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${flag.src})`, // Set background image
          backgroundSize: "contain", // Make the image cover the div
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="w-full flex justify-center items-center p-5 pt-20 md:pt-4">
        <form className="p-7 text-center rounded-xl shadow-lg" style={{ backgroundColor: "#134B70" }}>
          <label
            htmlFor="simpleInput"
            className="block mb-2 font-medium text-white text-3xl"
          >
            Enter your Name
          </label>
         <input
            type="text"
            id="simpleInput"
            className="border border-gray-300 p-2 rounded mb-4 w-full shadow-lg"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value.toUpperCase()); // Call toUpperCase() method
            }}
            placeholder="Type here..."
          />

          <button
            onClick={test}
            className="text-black p-2 rounded shadow-lg"
            style={{ backgroundColor: "#E2E2B6" }}
          >
            Submit
          </button>
        </form>
      </div>
      {/* <div className="relative">
        <Image
          src={foot}
          alt="foot"
          className="md:h-20 object-cover overflow-visible"
        />
      </div> */}
    </main>
  );
}
