"use client"; // Ensure this component is treated as client-side
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import profile from "../assets/profile.png";
import qr from "../assets/qr.png";
import link from "../assets/link.png";
import flag from "../assets/flag.png";
import raceback from "../assets/racebackg.png";
import track from "../assets/racetrack.png";
import foot from "../assets/foot.png";
import { FcApproval } from "react-icons/fc";
import tiremain from "../assets/tiremain.png";
import QRCode from "react-qr-code";
import check from "../assets/check.png";
import f2 from "../assets/f3.jpg";

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

          if (response.status === 200) {
            setData(response.data.data);
          } else {
            console.error("Failed to fetch data");
          }
        } catch (error) {
          console.error("Error fetching data:", error.message);
        }
      } else {
        // Redirect to register if no user is found
        router.push("/register");
      }

      if(!user.name){
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

  return (
    <main
      className="relative max-h-screen flex flex-col  "
      style={{
        // Set background image

        backgroundSize: "cover", // Make the image cover the div
        backgroundPosition: "center",
        opacity: "95%",
      }}
    >
      <div
        className="h-48 w-full rounded-b-3xl relative"
        style={{
          backgroundSize: "cover", // or 'contain', depending on your needs
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: "95%",
        }}
      >
        <div
          className="md:flex-col flex flex-col-reverse items-center justify-center gap-4 md:pt-11 pt-14 pb-14 shadow-xl"
          style={{
            borderBottomLeftRadius: "50%",
            borderBottomRightRadius: "50%",
            backgroundColor: "#134B70",
            backgroundImage: `url(${f2.src})`, // Correct way to set background image
            backgroundSize: "cover", // Optional: to cover the entire div
            backgroundPosition: "center", // Optional: center the image
            backgroundRepeat: "no-repeat",
          }}
        >
          <Image
            className="md:h-48 md:w-48 h-32 w-32 shadow-2xl rounded-full "
            src={profile}
            alt="profile"
          />

          <h1 className="md:text-4xl text-2xl font-bold text-white  md:bg-transparent  ">
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

          {qrCodeValue && (
            <QRCode
              value={qrCodeValue}
              className="md:h-72 md:w-72 h-40 w-40 object-contain shadow-xl"
            />
          )}
        </div>
        <div className="w-full p-10 relative z-10 ">
          <table className="min-w-full border-collapse border border-gray-200 rounded-lg shadow-xl overflow-hidden">
            <thead
              className="rounded-2xl overflow-hidden"
              style={{ backgroundColor: "#134B70" }}
            >
              <tr className="text-center">
                <th className="px-4 py-2 p-2 text-xl text-white font-semibold md:w-3/12">
                  Stations
                </th>{" "}
                <th className="px-4 py-2 p-2 text-xl  text-white font-semibold md:w-9/12">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="text-center" style={{ color: "#134B70" }}>
              <tr style={{ backgroundColor: "#EEEEEE", color: "#134B70" }}>
                <td className="px-4 py-2 w-9/12">
                  <h1 className="text-black hover:text-blue-800 font-bold">
                    FLOOR LAYOUT
                  </h1>
                </td>
                <td className="px-4 py-2 w-full flex justify-center items-center">
                  {data?.station1.status == "scanned" ? (
                    <Image
                      className="md:h-18 md:w-18 h-8 w-8 bg-transparent rounded-full "
                      src={check}
                      alt="check"
                    />
                  ) : (
                    <h1 className="h-5 w-5 bg-red-700 hidden rounded-full" />
                  )}
                </td>
              </tr>

              <tr style={{ backgroundColor: "#EEEEEE", color: "#134B70" }}>
                <td className="px-4 py-2 w-9/12">
                  <h1 className="text-black hover:text-blue-800 font-bold">
                    KRVR + POG
                  </h1>
                </td>
                <td className="px-4 py-2 w-full flex justify-center items-center">
                  {data?.station2.status == "scanned" ? (
                    <Image
                      className="md:h-18 md:w-18 h-8 w-8 bg-transparent rounded-full "
                      src={check}
                      alt="check"
                    />
                  ) : (
                    <h1 className="h-5 w-5 bg-red-700 hidden rounded-full" />
                  )}
                </td>
              </tr>

              <tr style={{ backgroundColor: "#EEEEEE", color: "#134B70" }}>
                <td className="px-4 py-2 w-9/12">
                  <h1 className="text-black hover:text-blue-800 font-bold">
                    EVEER DEEN
                  </h1>
                </td>
                <td className="px-4 py-2 w-full flex justify-center items-center">
                  {data?.station3.status == "scanned" ? (
                    <Image
                      className="md:h-18 md:w-18 h-8 w-8 bg-transparent rounded-full "
                      src={check}
                      alt="check"
                    />
                  ) : (
                    <h1 className="h-5 w-5 bg-red-700 hidden rounded-full" />
                  )}
                </td>
              </tr>

              <tr style={{ backgroundColor: "#EEEEEE", color: "#134B70" }}>
                <td className="px-4 py-2 w-9/12">
                  <h1 className="text-black hover:text-blue-800 font-bold">
                    WOODY + BUZZ
                  </h1>
                </td>
                <td className="px-4 py-2 w-full flex justify-center items-center">
                  {data?.station4.status == "scanned" ? (
                    <Image
                      className="md:h-18 md:w-18 h-8 w-8 bg-transparent rounded-full "
                      src={check}
                      alt="check"
                    />
                  ) : (
                    <h1 className="h-5 w-5 bg-red-700 hidden rounded-full" />
                  )}
                </td>
              </tr>

              <tr style={{ backgroundColor: "#EEEEEE", color: "#134B70" }}>
                <td className="px-4 py-2 w-9/12">
                  <h1 className="text-black hover:text-blue-800 font-bold">
                    3MVAS
                  </h1>
                </td>
                <td className="px-4 py-2 w-full flex justify-center items-center">
                  {data?.station5.status == "scanned" ? (
                    <Image
                      className="md:h-18 md:w-18 h-8 w-8 bg-transparent rounded-full "
                      src={check}
                      alt="check"
                    />
                  ) : (
                    <h1 className="h-5 w-5 bg-red-700 hidden rounded-full" />
                  )}
                </td>
              </tr>

              <tr style={{ backgroundColor: "#EEEEEE", color: "#134B70" }}>
                <td className="px-4 py-2 w-9/12">
                  <h1 className="text-black hover:text-blue-800 font-bold">
                    STORE X
                  </h1>
                </td>
                <td className="px-4 py-2 w-full flex justify-center items-center">
                  {data?.station6.status == "scanned" ? (
                    <Image
                      className="md:h-18 md:w-18 h-8 w-8 bg-transparent rounded-full "
                      src={check}
                      alt="check"
                    />
                  ) : (
                    <h1 className="h-5 w-5 bg-red-700 hidden rounded-full" />
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/*  <Image src={track} alt="racetrack"></Image> */}
      </div>{" "}
      {/* <div className="relative z-0">
        <Image src={foot} alt="foot" className=" object-cover  relative z-0 " />
      </div> */}
    </main>
  );
}
