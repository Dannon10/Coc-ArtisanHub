import Header from "@/components/Header";
import BrowseSection from "@/components/BrowseSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 px-6 py-16">
        <div className="mx-auto text-center">
          <p className="tracked mb-4 text-xs font-medium uppercase text-gold">
            Our church community
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
            Our Skilled Members
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted">
            Discover talented artisans in our congregation. View their work and reach them on
            WhatsApp.
          </p>
        </div>

        <div className="mx-auto mt-10">
          <BrowseSection />
        </div>
      </main>

      <footer className="border-t border-border px-6 py-8 text-center">
        <p className="tracked text-xs text-muted">Supporting one another &middot; the Church of Christ family</p>
      </footer>
    </div>
  );
}
