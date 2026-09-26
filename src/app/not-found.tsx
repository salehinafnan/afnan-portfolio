import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="font-serif text-8xl italic">
        <span className="text-gradient mx-[-0.12em] px-[0.12em] py-[0.1em]">404</span>
      </p>
      <h1 className="mt-4 text-xl font-medium tracking-tight text-fg-2">This page could not be found.</h1>
      <Link
        href="/"
        className="mt-8 rounded-full bg-btn px-6 py-3 text-sm font-medium text-btn-fg transition-colors hover:bg-btn-hover"
      >
        Back home
      </Link>
    </main>
  );
}
