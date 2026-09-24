import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="text-gradient text-6xl font-light tracking-tight">404</p>
      <h1 className="mt-4 text-xl font-light text-neutral-300">This page could not be found.</h1>
      <Link
        href="/"
        className="mt-8 rounded-full bg-neutral-100 px-6 py-3 font-medium text-neutral-900 transition-colors hover:bg-neutral-300"
      >
        Back home
      </Link>
    </main>
  );
}
