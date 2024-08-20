"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import profile from "../assets/profile.png"; // Ensure proper path
import qr from "../assets/qr.png"; // Ensure proper path
import link from "../assets/link.png";
import flag from "../assets/flag.png";
import raceback from "../assets/racebackg.png";
import track from "../assets/racetrack.png";
import foot from "../assets/footer.png";
import { FcApproval } from "react-icons/fc";
import tiremain from "../assets/tiremain.png";
import QRCode from "react-qr-code";

export default function Home() {
  // Initialize state for each row
  const [approvedRows, setApprovedRows] = useState({
    row1: false,
    row2: false,
    row3: false,
    row4: false,
  });

  const handleClick = (e, rowKey) => {
    e.preventDefault(); // Prevent immediate navigation
    setApprovedRows((prevState) => ({
      ...prevState,
      [rowKey]: true, // Mark the clicked row as approved
    }));
    window.open(e.currentTarget.href, "_blank");
    // Open link in new tab
  };

  const [qrCodeValue, setQrCodeValue] = useState("");
  const [storedItems, setStoredItems] = useState([]);

  /*   const storing = () => {
    
  } */

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items")) || [];
    setStoredItems(items);
    console.log(`Stored: ${storedItems}`);
  }, []);

  return (
    <main
      className="relative min-h-screen flex flex-col justify-between"
      style={{
        backgroundImage: `url(${track.src})`, // Set background image
        backgroundSize: "cover", // Make the image cover the div
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="h-48 w-full rounded-b-3xl"
        style={{
          // Set background image
          backgroundSize: "cover", // Make the image cover the div
          backgroundPosition: "center",
          opacity: "95%",
        }}
      >
        <div className="md:flex-col flex flex-row items-center justify-center gap-4 md:pt-11 pt-24">
          <Image
            className="md:h-48 md:w-48 h-32 w-32 shadow-xl sha"
            src={profile}
            alt="profile"
          />

          <h1 className="md:text-4xl text-2xl font-bold text-blue-900 md:text-black bg-slate-50 md:bg-transparent  bg-opacity-50 backdrop-blur-sm rounded-xl">
            {storedItems[storedItems.length - 1]}
          </h1>
        </div>
      </div>
      <div className="md:flex md:mt-36 mt-16 justify-between items-center md:w-full relative ">
        <div className="md:w-2/5 flex justify-center p-2 relative z-10">
          {/* <Image
            className="md:h-72 md:w-72 h-40 w-40 object-contain shadow-xl"
            src={qrCodeValue}
            alt="qr-code"
          /> */}

          <QRCode
            value={qrCodeValue}
            className="md:h-72 md:w-72 h-40 w-40 object-contain shadow-xl"
          />
        </div>
        <div className="w-full p-3 relative z-10">
          <table className="min-w-full border-collapse border border-gray-200 rounded-lg overflow-hidden">
            <thead
              className="rounded-2xl overflow-hidden"
              style={{ backgroundColor: "#134B70" }}
            >
              <tr className="text-center">
                <th className="px-4 py-2 p-2 text-xl text-white font-semibold md:w-3/12">
                  Status
                </th>{" "}
                <th className="px-4 py-2 p-2 text-xl  text-white font-semibold md:w-9/12">
                  Stations
                </th>
              </tr>
            </thead>
            <tbody className="text-center" style={{ color: "#134B70" }}>
              {[
                {
                  key: "row1",
                  name: "Floor Layout",
                },
                {
                  key: "row2",
                  name: "KRVR + POG",
                },
                {
                  key: "row3",
                  name: "Eveer Deen",
                },
                {
                  key: "row4",
                  name: "Woody + Buzz",
                },
                {
                  key: "row5",
                  name: "3MVAS",
                },
                {
                  key: "row6",
                  name: "StoreX",
                },
              ].map((row, index, array) => (
                <tr
                  key={row.key}
                  style={{ backgroundColor: "#EEEEEE", color: "#134B70" }}
                >
                  <td className="px-4 py-2 w-full flex justify-center items-center relative">
                    {/* Circle */}
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        approvedRows[row.key] ? "bg-green-500" : "bg-gray-300"
                      }`}
                    >
                      {approvedRows[row.key] && (
                        <FcApproval className="w-6 h-6" />
                      )}
                    </div>

                    {/* Connecting Line */}
                    {index < array.length - 1 && (
                      <div className="absolute left-1/2 transform -translate-x-1/2 top-8 w-px h-10 bg-gray-300"></div>
                    )}
                  </td>
                  <td className="px-4 py-2 w-9/12">
                    <a
                      //href={row.href}
                      className="text-black hover:text-blue-800 cursor-pointer"
                      // onClick={(e) => handleClick(e, row.key)}
                    >
                      {row.name}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/*  <Image src={track} alt="racetrack"></Image> */}
      </div>{" "}
      <div className="relative z-0">
        <Image
          src={foot}
          alt="foot"
          className="md:h-20 object-cover overflow-visible relative z-0 "
        />
      </div>
    </main>
  );
}
