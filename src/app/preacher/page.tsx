import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Phone } from "lucide-react";
import Header from "@/components/Header";
import { preacher } from "@/data/preacher";

export default function PreacherPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />

            <main className="flex-1 px-6 py-10">
                <div className="mx-auto max-w-2xl">
                    <Link
                        href="/"
                        className="mb-8 inline-flex items-center gap-2 text-sm text-muted hover:text-foreground"
                    >
                        <ArrowLeft size={16} />
                        Back
                    </Link>

                    <div className="flex flex-col items-center gap-6 border-b border-border pb-10 text-center">
                        <div className="relative h-40 w-40 flex-shrink-0 overflow-hidden rounded-2xl bg-black/40">
                            <Image src={preacher.photo} alt={preacher.name} fill className="object-cover" />
                        </div>
                        <div>
                            <p className="tracked mb-3 text-xs font-medium uppercase text-gold">
                                Preacher
                            </p>
                            <h1 className="font-display text-3xl font-bold sm:text-4xl">{preacher.name}</h1>
                        </div>

                        <a
                            href={`tel:${preacher.phoneNumber.startsWith("234") ? "0" + preacher.phoneNumber.slice(3) : preacher.phoneNumber}`}
                            className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
                        >
                            <Phone size={16} />
                            Call {preacher.name.split(" ")[0]}
                        </a>
                    </div>

                    <div className="pt-10">
                        <p className="tracked mb-3 text-xs font-medium uppercase text-muted">About</p>
                        <p className="text-sm leading-relaxed text-foreground/90">{preacher.bio}</p>
                    </div>
                </div>
            </main>
        </div>
    );
}