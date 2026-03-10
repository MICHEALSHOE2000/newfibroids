import { Leaf, ShieldCheck, HeartPulse, BadgeCheck } from "lucide-react";

const items = [
  { icon: Leaf, label: "Natural Herbal Support" },
  { icon: ShieldCheck, label: "Non-Surgical Approach" },
  { icon: HeartPulse, label: "Designed for Women's Hormone Balance" },
  { icon: BadgeCheck, label: "30-Day Guarantee" },
];

const TrustBadges = () => {
  return (
    <section className="border-y border-border bg-card/70 py-4">
      <div className="container mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 md:grid-cols-4">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-2 rounded-xl bg-background px-3 py-2 text-xs font-medium text-foreground md:text-sm">
            <item.icon className="h-4 w-4 text-primary" />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustBadges;
