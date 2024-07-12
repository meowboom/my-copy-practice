"use client";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { Image, Loader2Icon, MousePointerSquareDashed } from "lucide-react";
import React, { FC, useState, useTransition } from "react";
import Dropzone, { FileRejection } from "react-dropzone";

interface Props {}

const page: FC<Props> = (props) => {
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<number>();
  const onDropRejected = () => {
    console.log("reject");
  };
  const onDropAccepted = () => {
    console.log("accepted");
  };
  const isUploading = false;
  const [isPending, startTransition] = useTransition();
  return (
    <div
      className={cn(
        "relative h-full flex-1 my-16 w-full rounded-xl bg-gray-900/5 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl flex justify-center flex-col items-center",
        { "ring-blue-900/10 bg-blue-900/10": isDragOver }
      )}
    >
      <div className="relative flex flex-col flex-1 items-center justify-center w-full">
        <Dropzone
          onDropRejected={onDropRejected}
          onDropAccepted={onDropAccepted}
          accept={{
            "image/png": [".png"],
            "image/jpeg": [".jpeg"],
            "image/jpg": [".jpg"],
          }}
          onDragEnter={() => setIsDragOver(true)}
          onDragLeave={() => setIsDragOver(false)}
        >
          {({ getRootProps, getInputProps }) => (
            <div
              className="h-full w-full flex flex-1 flex-col items-center justify-center"
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              {isDragOver ? (
                <MousePointerSquareDashed className="size-6 text-zinc-500 mb-2" />
              ) : isUploading || isPending ? (
                <Loader2Icon className="animate-spin size-6 text-zinc-500 mb-2" />
              ) : (
                <Image className="size-6 text-zinc-500 mb-2" />
              )}
              <div className="flex flex-col justify-center mg-2 text-sm text-zinc-700">
                {isUploading ? (
                  <div className="flex flex-col items-center">
                    <p>Uploading...</p>
                    <Progress
                      className="mt-2 w-40 bg-gray-300"
                      value={uploadProgress}
                    />
                  </div>
                ) : isPending ? (
                  <div className="flex flex-col items-center">
                    <p>Redirecting, please wait...</p>
                  </div>
                ) : isDragOver ? (
                  <p>
                    <span className="font-semibold">Drop file </span> to upload
                  </p>
                ) : (
                  <p>
                    <span className="font-semibold">Click to upload </span> or
                    drug and drop
                  </p>
                )}
              </div>
              {isPending ? null : (
                <p className=" text-xs text-zinc-500">PNG, JPG, JPEG </p>
              )}
            </div>
          )}
        </Dropzone>
      </div>
    </div>
  );
};

export default page;
