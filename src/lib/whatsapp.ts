export function buildWhatsappLink(whatsappNumber: string, artisanName: string): string {
  const message = `Hi ${artisanName}, I found your profile on artisanhub and I'd like to talk about a job.`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
