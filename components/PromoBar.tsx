export function PromoBar() {
  return (
    <div className="bg-[#2945b8] text-white">
      <div className="section-shell flex min-h-12 items-center justify-center gap-2 text-center text-[15px] font-semibold">
        <span>Power your business with the Intuit Business Credit Card.</span>
        <a
          className="font-bold underline decoration-white/70 underline-offset-4 transition hover:decoration-white"
          href="https://quickbooks.intuit.com/business-credit-card/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </a>
      </div>
    </div>
  );
}
