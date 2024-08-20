"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import profile from "../../assets/profile.png"; // Ensure proper path
import qr from "../../assets/qr.png"; // Ensure proper path
import link from "../../assets/link.png";
import foot from "../../assets/footer.png";
// import { Html5QrcodeScanner } from "html5-qrcode";

export default function Home() {
  // Initialize state for each row
  const [approvedRows, setApprovedRows] = useState({
    row1: false,
    row2: false,
    row3: false,
    row4: false,
  });

  // const [scanResult, setScanResult] = useState(null);

  // useEffect(() => {
  //   const scanner = new Html5QrcodeScanner("reader", {
  //     qrbox: {
  //       width: 250,
  //       height: 250,
  //     },
  //     fps: 5,
  //   });

  //   scanner.render(success, error);

  //   function success(result) {
  //     scanner.clear();
  //     setScanResult(result);
  //   }

  //   function error(err) {
  //     console.warn(err);
  //   }
  // }, []);

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
      >
        <div className="md:w-2/5 flex justify-center p-5 pt-20 md:pt-4">
          {/* <Image
            className="md:h-72 md:w-72 h-40 w-40 object-contain"
            // src={qr}
            alt="qr-code"
          /> */}
        </div>
      </div>
      <div className="md:flex flex-col  justify-between items-center md:w-full relative pt-14 ">
        <div className="w-full p-3 md:mt-10 md:w-2/4">
          <table
            className="min-w-full border-collapse border border-gray-200 rounded-lg overflow-hidden "
            style={{ backgroundColor: "#134B70" }}
          >
            <thead className="rounded-2xl overflow-hidden">
              <tr className="text-center">
                <th className="px-4 py-2 text-white font-semibold md:w-3/12">
                  Approvals
                </th>
                <th className="px-4 py-2 text-white font-semibold md:w-9/12">
                  Microsites
                </th>
              </tr>
            </thead>
            <tbody className="text-center" style={{ color: "#134B70" }}>
              <tr style={{ backgroundColor: "#EEEEEE", color: "#134B70" }}>
                <td className="px-4 py-2 ">
                  {" "}
                  <input type="radio" className="cursor-pointer w-4 h-4" />
                </td>
                <td className="px-4 py-2 w-full flex justify-center items-center">
                  <h1>Rexona Basketball</h1>
                </td>
              </tr>

              <tr style={{ backgroundColor: "#EEEEEE", color: "#134B70" }}>
                <td className="px-4 py-2">
                  {" "}
                  <input type="radio" className="cursor-pointer w-4 h-4" />
                </td>
                <td className="px-4 py-2 w-full flex justify-center items-center">
                  <h1>With Sunsilk Commercial</h1>
                </td>
              </tr>

              <tr style={{ backgroundColor: "#EEEEEE", color: "#134B70" }}>
                <td className="px-4 py-2 ">
                  {" "}
                  <input type="radio" className="cursor-pointer w-4 h-4" />
                </td>
                <td className="px-4 py-2 w-full flex justify-center items-center">
                  <h1>Without Sunsilk Commercial</h1>
                </td>
              </tr>

              <tr style={{ backgroundColor: "#EEEEEE", color: "#134B70" }}>
                <td className="px-4 py-2  ">
                  <input type="radio" className="cursor-pointer w-4 h-4 " />
                </td>
                <td className="px-4 py-2 w-full flex justify-center items-center">
                  <h1>NCCC</h1>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>{" "}
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
