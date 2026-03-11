import proofVideo from "@/assets/proof_video.mp4";

const VideoTestimonialsSection = () => (
  <section className="bg-muted/30 py-12 md:py-20">
    <div className="container mx-auto max-w-6xl px-4">
      <h2 className="text-center font-display text-3xl font-bold md:text-4xl">Watch Real Women Share Their Stories</h2>
      <p className="mx-auto mt-3 max-w-3xl text-center text-muted-foreground">
        These are not generic reviews — these are personal stories from women who were looking for relief without surgery.
      </p>

      <div className="mx-auto mt-8 max-w-2xl">
        <div className="overflow-hidden rounded-2xl border border-border bg-black shadow-lg">
          <div className="relative aspect-video">
            <video
              src={proofVideo}
              className="h-full w-full object-contain object-bottom opacity-90"
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              controlsList="nodownload noplaybackrate noremoteplayback"
              disablePictureInPicture
              disableRemotePlayback
              onContextMenu={(event) => event.preventDefault()}
            />
          </div>
          <div className="bg-card p-4">
            <p className="font-semibold">Heavy bleeding story</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default VideoTestimonialsSection;
