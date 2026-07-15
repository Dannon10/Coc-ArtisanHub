"use client";

import { useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const SWIPE_THRESHOLD = 50; // minimum horizontal px to count as a swipe

export default function Lightbox({
    images,
    activeIndex,
    altPrefix,
    onClose,
    onPrev,
    onNext,
}: {
    images: string[];
    activeIndex: number;
    altPrefix: string;
    onClose: () => void;
    onPrev?: () => void;
    onNext?: () => void;
}) {
    const showNav = images.length > 1 && !!onPrev && !!onNext;

    const touchStartX = useRef<number | null>(null);
    const touchStartY = useRef<number | null>(null);

    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft" && onPrev) onPrev();
            if (e.key === "ArrowRight" && onNext) onNext();
        },
        [onClose, onPrev, onNext]
    );

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [handleKeyDown]);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
        touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null || touchStartY.current === null || !showNav) {
            touchStartX.current = null;
            touchStartY.current = null;
            return;
        }

        const deltaX = e.changedTouches[0].clientX - touchStartX.current;
        const deltaY = e.changedTouches[0].clientY - touchStartY.current;

        // Ignore mostly-vertical gestures (scroll/dismiss intent) — only treat clearly horizontal swipes as navigation
        if (Math.abs(deltaX) > SWIPE_THRESHOLD && Math.abs(deltaX) > Math.abs(deltaY)) {
            if (deltaX > 0) {
                onPrev?.();
            } else {
                onNext?.();
            }
        }

        touchStartX.current = null;
        touchStartY.current = null;
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            style={{ touchAction: "pan-y" }}
            onClick={onClose}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-foreground transition-colors hover:bg-black/80"
                style={{ WebkitTapHighlightColor: "transparent" }}
            >
                <X size={22} />
            </button>

            {showNav && (
                <button
                    type="button"
                    onClick={(e) => {
                        e.stopPropagation();
                        onPrev?.();
                    }}
                    aria-label="Previous image"
                    className="absolute left-2 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-foreground transition-colors hover:bg-black/80 sm:left-6 sm:flex"
                    style={{ WebkitTapHighlightColor: "transparent" }}
                >
                    <ChevronLeft size={24} />
                </button>
            )}

            <div
                className="relative h-[80vh] w-full max-w-4xl"
                onClick={(e) => e.stopPropagation()}
            >
                <Image
                    src={images[activeIndex]}
                    alt={`${altPrefix} ${activeIndex + 1}`}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    draggable={false}
                    priority
                />
            </div>

            {showNav && (
                <button
                    type="button"
                    onClick={(e) => {
                        e.stopPropagation();
                        onNext?.();
                    }}
                    aria-label="Next image"
                    className="absolute right-2 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-foreground transition-colors hover:bg-black/80 sm:right-6 sm:flex"
                    style={{ WebkitTapHighlightColor: "transparent" }}
                >
                    <ChevronRight size={24} />
                </button>
            )}

            {images.length > 1 && (
                <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-muted">
                    {activeIndex + 1} / {images.length}
                </p>
            )}
        </div>
    );
}