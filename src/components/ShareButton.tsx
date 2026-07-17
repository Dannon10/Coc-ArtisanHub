"use client";

import { useState } from "react";
import { Share2, Check } from "lucide-react";

type ShareButtonProps = {
    title: string;
    text?: string;
    url?: string;
    fullWidth?: boolean;
};

export default function ShareButton({ title, text, url, fullWidth }: ShareButtonProps) {
    const [copied, setCopied] = useState(false);

    const handleShare = async () => {
        const shareUrl = url ?? window.location.href;

        if (navigator.share) {
            try {
                await navigator.share({ title, text, url: shareUrl });
            } catch {
                // user cancelled the share sheet, do nothing
            }
            return;
        }

        try {
            await navigator.clipboard.writeText(shareUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // clipboard write failed silently
        }
    };

    return (
        <button
            type="button"
            onClick={handleShare}
            className={`inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-border-strong ${fullWidth ? "w-full" : ""
                }`}
        >
            {copied ? <Check size={16} /> : <Share2 size={16} />}
            {copied ? "Link copied!" : "Share profile"}
        </button>
    );
}