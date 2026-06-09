export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-neutral-400 dark:text-neutral-500">
        <p>Built with Next.js &amp; Tailwind CSS</p>
        <p>© {new Date().getFullYear()} Kyle Ramachandran</p>
      </div>
    </footer>
  );
}
