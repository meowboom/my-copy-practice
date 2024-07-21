import { db } from "@/db";
import { notFound } from "next/navigation";
import React, { FC } from "react";
import DesignConfiguration from "./DesignConfiguration";

interface Props {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const page: FC<Props> = async ({ searchParams }) => {
  const { id } = searchParams;

  if (!id || typeof id !== "string") return notFound();

  const configuration = await db.configuration.findUnique({
    where: { id },
  });

  if (!configuration) return notFound();

  const { imageUrl, width, height } = configuration;
  // make db call

  return (
    <DesignConfiguration
      configId={configuration.id}
      imageDimensions={{ width, height }}
      imageUrl={imageUrl}
    />
  );
};

export default page;
