"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Lightbox from "@/components/Lightbox";

export default function GalleryLightbox({
    images,
    artisanName,
}: {
    images: string[];
    artisanName: string;
}) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const close = useCallback(() => setActiveIndex(null), []);

    const showPrev = useCallback(() => {
        setActiveIndex((current) => {
            if (current === null) return current;
            return (current - 1 + images.length) % images.length;
        });
    }, [images.length]);

    const showNext = useCallback(() => {
        setActiveIndex((current) => {
            if (current === null) return current;
            return (current + 1) % images.length;
        });
    }, [images.length]);

    return (
        <>
            <div className="grid grid-cols-3 gap-2">
                {images.map((image, index) => (
                    <button
                        key={image}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        className="relative aspect-square overflow-hidden rounded-xl bg-black/40 transition-opacity hover:opacity-90 active:opacity-80"
                        style={{ touchAction: "manipulation", WebkitTapHighlightColor: "transparent" }}
                    >
                        <Image
                            src={image}
                            alt={`${artisanName} work sample ${index + 1}`}
                            fill
                            className="object-cover pointer-events-none"
                            draggable={false}
                        />
                    </button>
                ))}
            </div>

            {activeIndex !== null && (
                <Lightbox
                    images={images}
                    activeIndex={activeIndex}
                    altPrefix={`${artisanName} work sample`}
                    onClose={close}
                    onPrev={showPrev}
                    onNext={showNext}
                />
            )}
        </>
    );
}