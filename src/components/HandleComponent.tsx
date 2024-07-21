import React, { FC } from "react";

interface IHandleComponent {}

const HandleComponent: FC<IHandleComponent> = () => {
  return (
    <div className="size-5 rounded-full shadow border bg-white border-zinc-200 transition hover:bg-primary" />
  );
};

export default HandleComponent;
