import { buildWhatsappLink } from "@/lib/whatsapp";

type WhatsappButtonProps = {
    whatsappNumber: string;
    artisanName: string;
    fullWidth?: boolean;
};

function WhatsAppIcon({ size = 16 }: { size?: number }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12.001 2C6.478 2 2 6.477 2 12c0 1.876.52 3.63 1.42 5.128L2 22l4.996-1.31A9.94 9.94 0 0 0 12.001 22c5.522 0 10-4.477 10-10S17.523 2 12.001 2zm0 18.03a8.01 8.01 0 0 1-4.087-1.116l-.293-.174-3.02.79.806-2.941-.19-.303A8.02 8.02 0 1 1 20.02 12c0 4.427-3.593 8.03-8.019 8.03z" />
        </svg>
    );
}

export default function WhatsappButton({
    whatsappNumber,
    artisanName,
    fullWidth,
}: WhatsappButtonProps) {
    const href = buildWhatsappLink(whatsappNumber, artisanName);

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-2 rounded-full border border-white px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-whatsapp/10 ${
                fullWidth ? "w-full" : ""
            }`}
        >
            <WhatsAppIcon />
            Chat on WhatsApp
        </a>
    );
}