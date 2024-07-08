"use client";
import { cn } from "@/lib/utils";
import React, { FC, useState } from "react";

interface Props {}

const page: FC<Props> = (props) => {
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  return (
    <div
      className={cn(
        "relative h-full flex-1 my-16 w-full rounded-xl bg-gray-900/5 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl flex justify-center flex-col items-center",
        { "ring-blue-900/10 bg-blue-900/10": isDragOver }
      )}
    ></div>
  );
};

export default page;
