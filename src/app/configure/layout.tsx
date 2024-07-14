import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Steps from "@/components/Steps";
import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const layout: FC<Props> = ({ children }) => {
  return (
    <MaxWidthWrapper className="flex-1 flex flex-col">
      <Steps />
      {children}
    </MaxWidthWrapper>
  );
};

export default layout;
