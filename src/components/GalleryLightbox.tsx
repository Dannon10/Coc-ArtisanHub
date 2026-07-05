"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

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

    useEffect(() => {
        if (activeIndex === null) return;

        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === "Escape") close();
            if (e.key === "ArrowLeft") showPrev();
            if (e.key === "ArrowRight") showNext();
        }

        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [activeIndex, close, showPrev, showNext]);

    return (
        <>
            <div className="grid grid-cols-3 gap-2">
                {images.map((image, index) => (
                    <button
                        key={image}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        className="relative aspect-square overflow-hidden rounded-xl bg-black/40 transition-opacity hover:opacity-90"
                    >
                        <Image
                            src={image}
                            alt={`${artisanName} work sample ${index + 1}`}
                            fill
                            className="object-cover cursor-pointer"
                        />
                    </button>
                ))}
            </div>

            {activeIndex !== null && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                    onClick={close}
                >
                    <button
                        type="button"
                        onClick={close}
                        aria-label="Close"
                        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-foreground transition-colors hover:bg-black/80"
                    >
                        <X size={22} />
                    </button>

                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            showPrev();
                        }}
                        aria-label="Previous image"
                        className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-foreground transition-colors hover:bg-black/80 sm:left-6"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <div
                        className="relative h-[80vh] w-full max-w-4xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={images[activeIndex]}
                            alt={`${artisanName} work sample ${activeIndex + 1}`}
                            fill
                            className="object-contain"
                            sizes="100vw"
                            priority
                        />
                    </div>

                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            showNext();
                        }}
                        aria-label="Next image"
                        className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-foreground transition-colors hover:bg-black/80 sm:right-6"
                    >
                        <ChevronRight size={24} />
                    </button>

                    <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-muted">
                        {activeIndex + 1} / {images.length}
                    </p>
                </div>
            )}
        </>
    );
}