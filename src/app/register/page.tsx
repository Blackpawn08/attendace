"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import flag from "../../assets/flag.png";
import tirebackg from "../../assets/tirebackg.png";
import knorrbg from "../../assets/knorr_bg.png";
import knorroverlay from "../../assets/knorr_overlay_1.png";
import LCbg from "../../assets/LC_background.jpg"; 
import LClogo from "../../assets/LC.png";

export default function Home() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      router.push("/");
    }
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const ftrimed = firstname.trim();
    const ltrimed = lastname.trim();

    try {
      const response = await axios.post(
        "https://node-mongodb-api-three.vercel.app/api/insert/user",
        {
          firstname: ftrimed,
          lastname: ltrimed,
        }
      );

      if (response.status === 200 || response.status === 201) {
        console.log(response.data.message);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        router.push("/");
      } else {
        console.error("Failed to insert user data");
      }
    } catch (error) {
      console.error("Error inserting user data:", error.message);
    }
  };

  return (
    <main
      className="relative min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
      style={{

        // LC
        // backgroundImage: `url(${LCbg.src})`, 
        // Knorr
        backgroundImage: `url(${knorrbg.src})`,
        backgroundColor: "#fffef5",
      }}
    >
      <div
        className=" w-full rounded-b-3xl relative bg-center md:bg-right bg-contain bg-no-repeat mt-4
         h-60 "

        //  set H to 60 for LC and md:bg to bg-center
        
        // LC
        // style={{ backgroundImage: `url(${LClogo.src})` }}
        // Knorr
        style={{ backgroundImage: `url(${knorroverlay.src})` }}
      ></div>

      <div className="w-full flex justify-center items-center absolute md:top-60 top-56 p-6">
        <form 
        // #182e78
          className="p-7 text-center rounded-xl shadow-4xl w-96 bg-[#008641]"
          onSubmit={handleSubmit}
        >
          <label className="block mb-2 font-medium text-white text-3xl">
            Enter your Name
          </label>

          <input
            type="text"
            className="border border-gray-300 p-2 rounded mb-4 w-full shadow-lg"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value.toUpperCase())}
            placeholder="First Name"
          />
          <input
            type="text"
            className="border border-gray-300 p-2 rounded mb-4 w-full shadow-lg"
            value={lastname}
            onChange={(e) => setLastname(e.target.value.toUpperCase())}
            placeholder="Last Name"
          />

          <button
            type="submit"
            className="text-white font-semibold p-2 rounded shadow-lg"
            //  Knorr 
            // style={{ backgroundColor: "#ED1C24" }}
            // LC       
            style={{ backgroundColor: "#ED1C24" }}
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
