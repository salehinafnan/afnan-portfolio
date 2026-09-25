import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="text-gradient pr-[0.08em] font-serif text-8xl italic">404</p>
      <h1 className="mt-4 text-xl font-medium tracking-tight text-neutral-600">This page could not be found.</h1>
      <Link
        href="/"
        className="mt-8 rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
      >
        Back home
      </Link>
    </main>
  );
}
