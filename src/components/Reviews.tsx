import React, { FC } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

interface IReviews {}

const Reviews: FC<IReviews> = () => {
  return (
    <MaxWidthWrapper className="relative max-w-5xl">
      <img
        aria-hidden="true"
        src="/what-people-are-buying.png"
        className="absolute select-none hidden xl:block -left-32 top-1/3"
      />
    </MaxWidthWrapper>
  );
};

export default Reviews;
