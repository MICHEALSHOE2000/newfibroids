import proof1 from "@/assets/proof1.jpeg";
import proof2 from "@/assets/proof2.jpeg";
import proof6 from "@/assets/proof6.jpeg";

const chats = [
  { city: "Lagos", image: proof1 },
  { city: "Abuja", image: proof2 },
  { city: "Enugu", image: proof6 },
  { city: "Port Harcourt", image: proof1 },
  { city: "Ibadan", image: proof2 },
  { city: "Benin", image: proof6 },
];

const WhatsAppFeedback = () => (
  <section className="bg-white py-12 md:py-20">
    <div className="container mx-auto max-w-6xl px-4">
      <h2 className="text-center font-display text-3xl font-bold md:text-4xl">Real Messages from Women Across Nigeria</h2>
      <p className="mx-auto mt-3 max-w-3xl text-center text-muted-foreground">
        Women sharing improvements in bleeding, pain, pressure, scan feedback, and confidence.
      </p>
      <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
        {chats.map((chat, idx) => (
          <div key={`${chat.city}-${idx}`} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <img src={chat.image} alt={`WhatsApp ${chat.city}`} className="h-44 w-full object-cover" loading="lazy" />
            <div className="p-2 text-center text-xs font-semibold text-primary">{chat.city}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatsAppFeedback;
