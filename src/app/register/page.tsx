"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import flag from "../../assets/flag.png";
import tirebackg from "../../assets/tirebackg.png";

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

      if (response.status === 200) {
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
        backgroundImage: `url(${tirebackg.src})`,
        backgroundColor: "#fffef5",
      }}
    >
      <div
        className="h-96 w-full rounded-b-3xl relative bg-right bg-contain bg-no-repeat"
        style={{ backgroundImage: `url(${flag.src})` }}
      ></div>

      <div className="w-full flex justify-center items-center absolute md:top-60 top-72 p-6">
        <form
          className="p-7 text-center rounded-xl shadow-4xl w-96 bg-black"
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
            className="text-black font-semibold p-2 rounded shadow-lg"
            style={{ backgroundColor: "#E2E2B6" }}
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
