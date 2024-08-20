"use client";
import React, { useState, useEffect } from "react";
//import { useRouter } from "next/router";
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

  const [qrCodeValue, setQrCodeValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  //const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedItems = JSON.parse(localStorage.getItem("items")) || [];

    const updatedItems = [...storedItems, inputValue];
    console.log(`Test: ${updatedItems}`);
    localStorage.setItem("items", JSON.stringify(updatedItems));
    setInputValue("");
    // router.push("/");
  };
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
          backgroundImage: `url(${flag.src})`, // Set background image
          backgroundSize: "contain", // Make the image cover the div
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
        }}
      >
        {" "}
        {/*  {qrCodeValue != "" && <QRCode value={qrCodeValue} />} */}
        {qrCodeValue != "" && <QRCode value={qrCodeValue} />}
      </div>

      <div className="w-full flex justify-center items-center absolute md:top-60 top-72 ">
        <form
          /*onSubmit={handleSubmit}*/ className="p-7 text-center rounded-xl shadow-4xl w-96 "
          style={{ backgroundColor: "#134B70" }}
          onSubmit={handleSubmit}
        >
          <label
            htmlFor="simpleInput"
            className="block mb-2 font-medium text-white text-3xl"
          >
            Enter your Name
          </label>
          <input
            type="text"
            id="simpleInput"
            className="border border-gray-300 p-2 rounded mb-4 w-full shadow-lg "
            value={inputValue}
            /*  onChange={(e) => {
              setQrCodeValue(e.target.value);
            }}
            placeholder="Type here..." */
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type here..."
          />

          <button
            type="submit"
            className=" text-black font-semibold p-2 rounded shadow-lg "
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
