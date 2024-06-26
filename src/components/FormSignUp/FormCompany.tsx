"use client";
import React, { useState } from "react";
import { SignUp } from "@/types/signup";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import Image from "next/image";

const CompanyPage = (props: SignUp) => {
  const [company, setCompany] = useState<String>("");

  return (
    <div className="flex h-dvh flex-col items-center justify-center space-y-8 bg-signup bg-cover bg-fixed bg-bottom bg-no-repeat pb-8 pt-16">
      <Image
        src={"/images/image31.png"}
        width={200}
        height={130}
        alt="This is logo."
        className="min-[500px]:w-[100px] sm:h-[80px] sm:w-[120px] md:h-[90px] md:w-[150px]"
      />
      <div className="w-[50vh] space-y-8">
        <div className="flex space-x-2">
          <div className="rounded-md bg-white p-4">
            <Image
              src={"/images/icon/icon-hand.png"}
              width={30}
              height={30}
              alt="This is hand icon."
            />
          </div>
          <input
            type="text"
            placeholder="Enter name enthusiast or company"
            className="w-full rounded-md px-4 py-2 focus:border-white"
            onChange={(event) => {
              setCompany(event.target.value);
            }}
          />
        </div>
        <div className="flex justify-between">
          <button
            className={`font-semi-bold flex items-center rounded-md bg-gray-5 px-8 py-2 text-title-lg text-white`}
            onClick={() => {
              props.setActiveStep(1);
            }}
          >
            <BsChevronLeft />
            Prev
          </button>
          <button
            className={`font-semi-bold flex items-center rounded-md bg-gray-5 px-8 py-2 text-title-lg text-white ${
              company === ""
                ? "disable"
                : "bg-gradient-to-b from-blue-1 to-green-2"
            }`}
            onClick={() => {
              props.setActiveStep(3);
            }}
          >
            Next
            <BsChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyPage;
