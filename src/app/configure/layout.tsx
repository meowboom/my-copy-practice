import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const layout: FC<Props> = ({ children }) => {
  return (
    <MaxWidthWrapper className="flex-1 flex flex-col">
      {children}
    </MaxWidthWrapper>
  );
};

export default layout;
