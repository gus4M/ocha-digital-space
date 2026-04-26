export function WhatsAppFloatButton() {
  return (
    <a
      href="https://wa.me/5551993242572"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Entrar em contato pelo WhatsApp"
      className="fixed bottom-5 right-5 z-[60] inline-flex size-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-status transition-all duration-300 hover:scale-105 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2 focus-visible:ring-offset-background md:bottom-6 md:right-6 md:size-16"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className="size-7 md:size-8"
        fill="currentColor"
      >
        <path d="M16.01 3.2A12.68 12.68 0 0 0 5.2 22.5L3.48 28.8l6.45-1.69a12.66 12.66 0 0 0 6.08 1.55h.01A12.73 12.73 0 0 0 28.8 16.01 12.73 12.73 0 0 0 16.01 3.2Zm0 23.31h-.01a10.55 10.55 0 0 1-5.38-1.47l-.39-.23-3.82 1 1.02-3.72-.25-.38a10.53 10.53 0 1 1 8.83 4.8Zm5.78-7.89c-.32-.16-1.87-.92-2.16-1.03-.29-.11-.5-.16-.71.16-.21.32-.81 1.03-.99 1.24-.18.21-.37.24-.68.08-.32-.16-1.34-.49-2.55-1.57-.94-.84-1.58-1.88-1.76-2.2-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.54-.71-.55h-.61c-.21 0-.55.08-.84.4-.29.32-1.1 1.08-1.1 2.63 0 1.55 1.13 3.05 1.29 3.26.16.21 2.22 3.39 5.38 4.75.75.32 1.34.52 1.8.66.76.24 1.45.21 1.99.13.61-.09 1.87-.76 2.13-1.5.26-.74.26-1.37.18-1.5-.08-.13-.29-.21-.61-.37Z" />
      </svg>
    </a>
  );
}