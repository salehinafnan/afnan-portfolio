"use client";

import Image, { type StaticImageData } from "next/image";
import { useRef } from "react";
import { FiMaximize2, FiX } from "react-icons/fi";

type Props = {
  image: StaticImageData;
  title: string;
  sizes?: string;
};

const ProjectPreview = ({
  image,
  title,
  sizes = "(min-width: 1152px) 552px, (min-width: 768px) 50vw, 100vw",
}: Props) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const close = () => dialogRef.current?.close();

  return (
    <>
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        aria-label={`Expand ${title} screenshot`}
        className="relative block aspect-2/1 w-full cursor-zoom-in overflow-hidden bg-neutral-900"
      >
        <Image
          src={image}
          alt=""
          fill
          sizes={sizes}
          placeholder="blur"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute inset-0 hidden items-center justify-center bg-black/25 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:flex">
          <span className="glass glass-media glass-blur rounded-full px-4 py-2 text-sm">Click to expand</span>
        </span>
        <span
          aria-hidden="true"
          className="glass glass-media glass-blur absolute right-3 bottom-3 rounded-full p-2 text-sm md:hidden"
        >
          <FiMaximize2 />
        </span>
      </button>

      <dialog
        ref={dialogRef}
        aria-label={`${title} screenshot`}
        className="lightbox"
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
      >
        <div className="glass glass-media relative cursor-default rounded-2xl p-2">
          <Image
            src={image}
            alt={`${title} screenshot`}
            sizes="(max-width: 1100px) 100vw, 1100px"
            placeholder="blur"
            className="h-auto max-h-[85dvh] w-auto max-w-[min(1100px,calc(100vw-3rem))] rounded-xl object-contain"
          />
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="glass glass-media glass-blur absolute top-4 right-4 flex size-10 items-center justify-center rounded-full text-lg transition-[background-color,scale] duration-300 ease-spring hover:bg-white/15 active:scale-90"
          >
            <FiX aria-hidden="true" />
          </button>
        </div>
      </dialog>
    </>
  );
};

export default ProjectPreview;
