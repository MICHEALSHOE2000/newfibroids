interface PrimaryCTAProps {
  href?: string;
  text: string;
  className?: string;
}

const PrimaryCTA = ({ href = "#order-form", text, className = "" }: PrimaryCTAProps) => {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full bg-primary px-7 py-4 text-center text-base font-bold text-primary-foreground shadow-lg transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${className}`}
    >
      {text}
    </a>
  );
};

export default PrimaryCTA;
