export default function Footer() {
  return (
    <footer className="bg-ink py-8 px-4 md:px-12 lg:px-20">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <span className="block text-[10px] tracking-[0.3em] text-stone-300 mb-1">
            MARTA GEA ALMUDÉVER
          </span>
          <span className="text-[10px] font-light text-stone-500 tracking-[0.15em]">
            Valencia, España
          </span>
        </div>
        <span className="text-[10px] font-light text-stone-500">© 2026</span>
      </div>
    </footer>
  );
}
