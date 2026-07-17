import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-border px-6 py-5">
      <Link href="/" className="font-display text-lg font-bold">
        Church of Christ Artisan Hub
      </Link>
      <Link
        href="/preacher"
        className="text-sm font-medium transition-colors hover:text-muted"
      >
        Preacher
      </Link>
    </header>
  );
}