import { Shield, Truck, RotateCcw, Lock, Award } from "lucide-react";

const badges = [
  { icon: Lock, label: "Secure Checkout" },
  { icon: Truck, label: "Pay on Delivery" },
  { icon: RotateCcw, label: "60-Day Guarantee" },

  { icon: Shield, label: "FDA Approved" },
  { icon: Award, label: "GMP Certified" },
];

const TrustBadges = () => (
  <div className="bg-muted border-y border-border py-4">
    <div className="container mx-auto px-4 flex flex-wrap justify-center gap-6 md:gap-10">
      {badges.map((b) => (
        <div key={b.label} className="flex items-center gap-2 text-muted-foreground">
          <b.icon className="h-4 w-4 text-primary" />
          <span className="text-xs font-body font-semibold uppercase tracking-wide">{b.label}</span>
        </div>
      ))}
    </div>
  </div>
);

export default TrustBadges;
