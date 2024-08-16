"use client";
import React, { useState } from "react";
import Image from "next/image";
import profile from "../assets/profile.png"; // Ensure proper path
import qr from "../assets/qr.png"; // Ensure proper path
import link from "../assets/link.png";
import foot from "../assets/footer.png";
import { FcApproval } from "react-icons/fc";

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
    window.open(e.currentTarget.href, "_blank"); // Open link in new tab
  };

  return (
    <main className="relative min-h-screen flex flex-col justify-between">
      <div
        className="h-48 w-full rounded-b-3xl"
        style={{
          backgroundColor: "white",
          backgroundImage: `url(${link.src})`, // Set background image
          backgroundSize: "cover", // Make the image cover the div
          backgroundPosition: "center",
          opacity: "revert",
        }}
      >
        <div className="md:flex-col flex flex-row items-center justify-center gap-4 md:pt-11 pt-28">
          <Image
            className="md:h-48 md:w-48 h-32 w-32"
            src={profile}
            alt="profile"
          />
          <h1 className="md:text-4xl text-2xl font-bold text-blue-900 md:text-black bg-slate-50 md:bg-transparent  bg-opacity-50 backdrop-blur-sm rounded-xl">
            Kyle Corpuz
          </h1>
        </div>
      </div>
      <div className="md:flex md:mt-36 mt-16 justify-between items-center md:w-full relative ">
        <div className="md:w-2/5 flex justify-center p-2">
          <Image
            className="md:h-72 md:w-72 h-40 w-40 object-contain"
            src={qr}
            alt="qr-code"
          />
        </div>
        <div className="w-full p-3">
          <table
            className="min-w-full border-collapse border border-gray-200 rounded-lg overflow-hidden"
            style={{ backgroundColor: "#134B70" }}
          >
            <thead className="rounded-2xl overflow-hidden">
              <tr className="text-center">
                <th className="px-4 py-2 text-white font-semibold md:w-9/12">
                  Microsites
                </th>
                <th className="px-4 py-2 text-white font-semibold md:w-3/12">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="text-center" style={{ color: "#134B70" }}>
              <tr style={{ backgroundColor: "#EEEEEE", color: "#134B70" }}>
                <td className="px-4 py-2 w-9/12">
                  <a
                    href="https://esl-games-demo.retsol.ph/basketball/user-form"
                    className="text-black hover:text-blue-800"
                    onClick={(e) => handleClick(e, "row1")} // Specific row key
                  >
                    Rexona Basketball
                  </a>
                </td>
                <td className="px-4 py-2 w-full flex justify-center items-center">
                  {approvedRows.row1 && <FcApproval className="w-8 h-8" />}
                </td>
              </tr>

              <tr style={{ backgroundColor: "#EEEEEE", color: "#134B70" }}>
                <td className="px-4 py-2 w-9/12">
                  <a
                    href="https://microsite-git-init-demo-renzoralphpua.vercel.app/microsite/videoplayer/sunsilk"
                    className="text-black hover:text-blue-800"
                    onClick={(e) => handleClick(e, "row2")} // Specific row key
                  >
                    With Sunsilk Commercial
                  </a>
                </td>
                <td className="px-4 py-2 w-full flex justify-center items-center">
                  {approvedRows.row2 && <FcApproval className="w-8 h-8" />}
                </td>
              </tr>

              <tr style={{ backgroundColor: "#EEEEEE", color: "#134B70" }}>
                <td className="px-4 py-2 w-9/12">
                  <a
                    href="https://microsite-git-init-demo-renzoralphpua.vercel.app/microsite/user-form/creamsilk"
                    className="text-black hover:text-blue-800"
                    onClick={(e) => handleClick(e, "row3")} // Specific row key
                  >
                    Without Sunsilk Commercial
                  </a>
                </td>
                <td className="px-4 py-2 w-full flex justify-center items-center">
                  {approvedRows.row3 && <FcApproval className="w-8 h-8" />}
                </td>
              </tr>

              <tr style={{ backgroundColor: "#EEEEEE", color: "#134B70" }}>
                <td className="px-4 py-2 w-9/12">
                  <a
                    href="https://feedback-loop-web.vercel.app/login"
                    className="text-black hover:text-blue-800"
                    onClick={(e) => handleClick(e, "row4")} // Specific row key
                  >
                    NCCC
                  </a>
                </td>
                <td className="px-4 py-2 w-full flex justify-center items-center">
                  {approvedRows.row4 && <FcApproval className="w-8 h-8" />}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>{" "}
      <div className="relative">
        <Image src={foot} alt="foot" className="md:h-20 object-cover" />
      </div>
    </main>
  );
}
