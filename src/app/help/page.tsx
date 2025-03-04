"use client"; // Ensure this component is treated as client-side
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import profile from "../../assets/profile.png";
import qr from "../../assets/qr.png";
import link from "../../assets/link.png";
import flag from "../../assets/flag.png";
import raceback from "../../assets/racebackg.png";
import track from "../../assets/racetrack.png";
import foot from "../../assets/foot.png";
import { FcApproval } from "react-icons/fc";
import tiremain from "../../assets/tiremain.png";
import QRCode from "react-qr-code";
import check from "../../assets/check.png";
import f2 from "../../assets/f3.jpg";
import gift from "../../assets/Knorr_gift.png";
// import gift from "../assets/gift.png";
import { CiLogout } from "react-icons/ci";

import knorrbg from "../../assets/knorr_bg.png";
import lcbg from "../../assets/LC_background.jpg";
export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [data, setData] = useState(null);
  const [qrCodeValue, setQrCodeValue] = useState(null);

  useEffect(() => {
    const fetchUserAndData = async () => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const user = JSON.parse(storedUser);
        console.log(storedUser);
        console.log(user);

        if (user._id === null || undefined) {
          localStorage.clear();
          router.push("/register");
        } else {
          setUser(user);
          setQrCodeValue(user._id);
          try {
            const response = await axios.get(
              "https://node-mongodb-api-three.vercel.app/api/fetch/user",
              {
                params: {
                  id: user._id,
                },
              }
            );

            if (response.status === 200 ) {
              setData(response.data.data);
            } else {
              localStorage.clear();
              router.push("/register");
              console.error("Failed to fetch data");
            }
          } catch (error) {
            localStorage.clear();
            router.push("/");
            console.error("Error fetching data:", error.message);
          }
        }
      } else {
        router.push("/register");
      }
    };

    const intervalId = setInterval(() => {
      fetchUserAndData();
      fetchUserAndData();
      console.log("Interval running every 5 seconds");
    }, 5000);

    // Cleanup interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [router]); // Dependency on `router` to refetch when it changes

  const resetUser = () => {
    
    router.push("/");
  };
  return (
    <main
      className="relative max-h-screen flex flex-col h-4/5"
      style={{
        // Set background image

        backgroundSize: "cover", // Make the image cover the div
        backgroundPosition: "center",
        opacity: "95%",
      }}
    >
      <div
        className="h-36 w-full rounded-b-3xl relative"
        style={{
          backgroundSize: "cover", // or 'contain', depending on your needs
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: "95%",
        }}
      >
        <button
          className="absolute m-3 bg-[#dcb74f] p-3 text-white rounded-md"
          onClick={resetUser}
        >
          <CiLogout className="font-extrabold" />
        </button>
        <div
          className="md:flex-col flex flex-col-reverse items-center justify-center gap-4 md:pt-11 pt-14 pb-10 shadow-xl"
          style={{
            borderBottomLeftRadius: "50%",
            borderBottomRightRadius: "50%",
            backgroundColor: "#ED1C24",
            // LC
            // backgroundImage: `url(${lcbg.src})`,
            // Knorr
            // Correct way to set background image
            backgroundImage: `url(${knorrbg.src})`, // Correct way to set background image
            backgroundSize: "cover", // Optional: to cover the entire div
            backgroundPosition: "center", // Optional: center the image
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* <Image
            className="md:h-48 md:w-48 h-20 w-20 shadow-2xl rounded-full "
            src={profile}
            alt="profile"
          /> */}

          <h1 className="md:text-4xl text-2xl font-bold text-[#dcb74f]  md:bg-transparent   ">
          Steps to follow
          </h1>
        </div>
      </div>
      
      <div className="md:flex md:mt-10 mt-2 justify-between items-center md:w-full relative p-4 ">
            <h1 className="text-sm/8 text-white ">
            <span className="font-black">Step 1:</span> Scan the QR code and register. <br/>
            <span className="font-black">Step 2:</span> Your e-stamp card will be scanned after each task. <br/>
            <span className="font-black">Step 3:</span> <span className="font-black">GO TO KRVR STATION.</span> Arrange products based on the latest Dressings and Spreads POG. <br/>
            <span className="font-black">Step 4:</span> <span className="font-black">GO TO D&S SHELVES. </span> Organize the actual shelf display for Dressings and Spreads. <br/>
            <span className="font-black">Step 5:</span> Complete both tasks to get a  <span className="font-black">Lady’s Choice Gift Pack!</span> <br/>
                
            </h1>
        {/*  <Image src={track} alt="racetrack"></Image> */}
      </div>{" "}
      {/* <div className="relative z-0">
        <Image src={foot} alt="foot" className=" object-cover  relative z-0 " />
      </div> */}
    </main>
  );
}
