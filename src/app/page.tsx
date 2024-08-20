"use client";  // Ensure this component is treated as client-side
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import profile from "../assets/profile.png";
import qr from "../assets/qr.png";
import link from "../assets/link.png";
import flag from "../assets/flag.png";
import raceback from "../assets/racebackg.png";
import track from "../assets/racetrack.png";
import foot from "../assets/footer.png";
import { FcApproval } from "react-icons/fc";
import tiremain from "../assets/tiremain.png";
import QRCode from "react-qr-code";

export default function Home() {
  const [user, setUser] = useState(null);
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchUserAndData = async () => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        const user = JSON.parse(storedUser);
        setUser(user);
  
        try {
          const response = await axios.get('http://192.168.28.63:5000/api/fetch/user', {
            params: {
              id: user._id,
            },
          });
  
          if (response.status === 200) {
            setData(response.data.data); // Assuming the API returns the data directly
          } else {
            console.error('Failed to fetch data');
          }
        } catch (error) {
          console.error('Error fetching data:', error.message);
        }
      } else {
        console.log('No user data found in localStorage');
      }
    };
  
    fetchUserAndData();
  }, [data]); // Dependency on `user` to refetch when it changes
  


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
          {data?.name}
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
              <tr style={{ backgroundColor: "#EEEEEE", color: "#134B70" }}>
                <td className="px-4 py-2 w-9/12">
                  <a
                    href="https://esl-games-demo.retsol.ph/basketball/user-form"
                    className="text-black hover:text-blue-800"
                  
                  >
                    Rexona Basketball
                  </a>
                </td>
                <td className="px-4 py-2 w-full flex justify-center items-center">
                {data?.station1 ? "yes" : "no"}
                </td>
              </tr>

              <tr style={{ backgroundColor: "#EEEEEE", color: "#134B70" }}>
                <td className="px-4 py-2 w-9/12">
                  <a
                    href="https://microsite-git-init-demo-renzoralphpua.vercel.app/microsite/videoplayer/sunsilk"
                    className="text-black hover:text-blue-800"
                    
                  >
                    With Sunsilk Commercial
                  </a>
                </td>
                <td className="px-4 py-2 w-full flex justify-center items-center">
                {data?.station2 ? "yes" : "no"}
                </td>
              </tr>

              <tr style={{ backgroundColor: "#EEEEEE", color: "#134B70" }}>
                <td className="px-4 py-2 w-9/12">
                  <a
                    href="https://microsite-git-init-demo-renzoralphpua.vercel.app/microsite/user-form/creamsilk"
                    className="text-black hover:text-blue-800"
                    
                  >
                    Without Sunsilk Commercial
                  </a>
                </td>
                <td className="px-4 py-2 w-full flex justify-center items-center">
                {data?.station3 ? "yes" : "no"}
                </td>
              </tr>

              <tr style={{ backgroundColor: "#EEEEEE", color: "#134B70" }}>
                <td className="px-4 py-2 w-9/12">
                  <a
                    href="https://feedback-loop-web.vercel.app/login"
                    className="text-black hover:text-blue-800"
                    
                  >
                    NCCC
                  </a>
                </td>
                <td className="px-4 py-2 w-full flex justify-center items-center">
                {data?.station4 ? "yes" : "no"}
                </td>
              </tr>
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
