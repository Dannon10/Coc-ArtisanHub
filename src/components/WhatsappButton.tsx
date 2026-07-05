import { MessageCircle } from "lucide-react";
import { buildWhatsappLink } from "@/lib/whatsapp";

type Props = {
  whatsappNumber: string;
  artisanName: string;
  fullWidth?: boolean;
};

export default function WhatsappButton({ whatsappNumber, artisanName, fullWidth }: Props) {
  return (
    <a
      href={buildWhatsappLink(whatsappNumber, artisanName)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-whatsapp-hover ${
        fullWidth ? "w-full" : ""
      }`}
    >
      <MessageCircle size={16} strokeWidth={2.4} />
      Chat on WhatsApp
    </a>
  );
}
