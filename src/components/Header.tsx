import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-border px-6 py-5">
      <Link href="/" className="font-display text-lg font-bold">
        Church of Christ Artisan Hub
      </Link>
    </header>
  );
}
