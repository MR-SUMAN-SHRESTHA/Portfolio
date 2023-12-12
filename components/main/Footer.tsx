import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
} from "react-icons/rx";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-center flex-wrap">

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Community</div>
                    <Link href="https://discord.gg/bTB2dUUE">
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxDiscordLogo/>
                        <span className="text-[15px] ml-[6px]">Discord</span>

                    </p>
                    </Link>
                    <Link href="https://github.com/MR-SUMAN-SHRESTHA">
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxGithubLogo/>
                        <span className="text-[15px] ml-[6px]">Github</span>
                    </p>
                    </Link>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Social Media</div>
                    <Link href="https://www.facebook.com/masters.suman">
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaFacebook/>
                        <span className="text-[15px] ml-[6px]">Facebook</span>
                    </p>
                    </Link>
                    <Link href="https://www.instagram.com/sumanbshrestha714/">
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxInstagramLogo/>
                        <span className="text-[15px] ml-[6px]">Instagram</span>
                    </p>
                    </Link>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">About</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <span className="text-[15px] ml-[6px]">Learn about me</span>
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <span className="text-[15px] ml-[6px]">sumanstha0614@gmail.com</span>
                    </p>
                </div>

            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy; Suman Shrestha . All rights reserved
            </div>

        </div>
    </div>
  )
}

export default Footer