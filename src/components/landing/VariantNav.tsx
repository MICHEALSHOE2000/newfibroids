import { Link, useLocation } from "react-router-dom";

const VariantNav = () => {
  const { pathname } = useLocation();

  return (
    <div className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="container mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">A/B Preview Mode</p>
        <div className="flex items-center gap-2 text-xs font-bold">
          <Link
            to="/"
            className={`rounded-full px-3 py-1 ${pathname === "/" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"}`}
          >
            Version A
          </Link>
          <Link
            to="/version-b"
            className={`rounded-full px-3 py-1 ${pathname === "/version-b" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"}`}
          >
            Version B
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VariantNav;
