import { PlayCircle } from "lucide-react";
import proofVideo from "@/assets/proof_video.mp4";

const labels = [
  "Heavy bleeding story",
  "Scan improvement story",
  "Surgery fear story",
  "Pain relief story",
];

const VideoTestimonialsSection = () => (
  <section className="bg-muted/30 py-12 md:py-20">
    <div className="container mx-auto max-w-6xl px-4">
      <h2 className="text-center font-display text-3xl font-bold md:text-4xl">Watch Real Women Share Their Stories</h2>
      <p className="mx-auto mt-3 max-w-3xl text-center text-muted-foreground">
        These are not generic reviews — these are personal stories from women who were looking for relief without surgery.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {labels.map((label) => (
          <div key={label} className="overflow-hidden rounded-2xl border border-border bg-black shadow-lg">
            <div className="relative aspect-video">
              <video src={proofVideo} className="h-full w-full object-cover opacity-80" muted playsInline />
              <PlayCircle className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 text-white" />
            </div>
            <div className="bg-card p-4">
              <p className="font-semibold">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default VideoTestimonialsSection;
