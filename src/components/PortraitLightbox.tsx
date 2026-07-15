"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Lightbox from "@/components/Lightbox";

export default function PortraitLightbox({
    src,
    alt,
}: {
    src: string;
    alt: string;
}) {
    const [open, setOpen] = useState(false);

    const openLightbox = useCallback(() => setOpen(true), []);
    const close = useCallback(() => setOpen(false), []);

    return (
        <>
            <button
                type="button"
                onClick={openLightbox}
                aria-label={`View ${alt} full screen`}
                className="relative h-40 w-40 shrink-0 overflow-hidden rounded-2xl bg-black/40 transition-opacity hover:opacity-90 active:opacity-80"
                style={{ touchAction: "manipulation", WebkitTapHighlightColor: "transparent" }}
            >
                <Image src={src} alt={alt} fill className="object-cover pointer-events-none" draggable={false} />
            </button>

            {open && (
                <Lightbox
                    images={[src]}
                    activeIndex={0}
                    altPrefix={alt}
                    onClose={close}
                />
            )}
        </>
    );
}