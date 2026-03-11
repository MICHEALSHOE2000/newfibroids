import proofVideo from "@/assets/proof_video.mp4";

const VideoTestimonialsSection = () => (
  <section className="bg-muted/30 py-12 md:py-20">
    <div className="container mx-auto max-w-4xl px-4">
      <h2 className="text-center font-display text-3xl font-bold md:text-4xl">Watch Real Women Share Their Stories</h2>
      <p className="mx-auto mt-3 max-w-3xl text-center text-muted-foreground">
        This is a real patient story from a woman who was looking for relief without surgery.
      </p>

      <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-black shadow-lg">
        <div className="relative aspect-video">
          <video
            src={proofVideo}
            className="h-full w-full object-contain bg-black"
            controls
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
        <div className="mt-2 bg-card p-4">
          <p className="font-semibold">Heavy bleeding and surgery fear story</p>
        </div>
      </div>
    </div>
  </section>
);

export default VideoTestimonialsSection;
