"use client";

import React from "react";
import Image from "next/image";
import { CustomButtonProps } from "@/types";

export const CustomButton = ({
  title,
  type,
  containerStyles,
  isDisabled,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      disabled={isDisabled}
      className={`custom-btn ${containerStyles}`}
      type="button"
      onClick={handleClick}
    >
      <span className="flex-1">{title}</span>
    </button>
  );
};
