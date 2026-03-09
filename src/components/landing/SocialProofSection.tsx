import { motion } from "framer-motion";
import { Star, Quote, PlayCircle } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import proofVideo from "@/assets/proof_video.mp4";
import physicalProof from "@/assets/before-fib.jpg";

const testimonials = [
  {
    text: "I was already preparing myself mentally for surgery. My doctor said the fibroid would only get worse. After using Utero Clear consistently, the pain reduced, the bleeding normalized, and surgery was no longer necessary.",
    name: "Blessing A.",
    location: "Lagos, Nigeria",
    rating: 5
  },

  {
    text: "I didn’t believe anything until I saw my scan. The fibroid had reduced significantly. My doctor kept asking what I did differently. That was the moment I knew this wasn’t another temporary solution.",
    name: "Ifunanya O.",
    location: "Enugu, Nigeria",
    rating: 5
  },
  {
    text: "For years, nothing happened. My cycle was irregular and I kept hearing ‘wait’. After treating the fibroid properly, my cycle became normal again. A few months later, I conceived.",
    name: "Chiamaka N.",
    location: "Owerri, Nigeria",
    rating: 5
  },
  {
    text: "I completed the protocol months ago. I’m not on any drug now. No pain. No heavy bleeding. Most importantly, the fibroid did not come back. I finally feel at peace in my body.",
    name: "Ronke T.",
    location: "Ibadan, Nigeria",
    rating: 5
  },
];

const whatsappProofs = [
  "https://fibroidtreatment.xyz/img/test.webp",
  "https://fibroidtreatment.xyz/img/testim.webp",
  "https://fibroidtreatment.xyz/img/testimo.webp",
  "https://fibroidtreatment.xyz/img/testimon.webp",
  "https://fibroidtreatment.xyz/img/testimony.webp",
  "https://fibroidtreatment.xyz/img/testimonial.webp",
];

const facebookStyleComments = [
  { name: "Mahmud Kayode", text: "Yes, I got it for my wife. She had multiple fibroids, and after using this, her pain reduced drastically and her tummy came down." },
  { name: "Fasoyinu Oyedamola", text: "Yes, it helped me when I was almost scheduled for surgery. It worked for me!" },
  { name: "Chinenye Uzo", text: "I had severe lower back pain and heavy bleeding every month because of fibroids. I’ve used this product for 2 months now, and my last period was normal!" },
];

const SocialProofSection = () => {
  return (
    <section className="bg-background py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Watch Nigerian Women Share Their Experience
          </h2>
          <p className="mt-4 text-muted-foreground">(Watch real results from real users)</p>
          
          <div className="mt-10 max-w-4xl mx-auto">
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
                  <img 
                    src="https://fibroidtreatment.xyz/img/testi.webp" 
                    alt="Testimonial Montage Thumbnail" 
                    className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-colors group-hover:bg-black/20">
                    <PlayCircle className="w-20 h-20 text-white fill-primary stroke-white group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="absolute bottom-6 left-6 text-left">
                    <div className="bg-primary px-3 py-1 rounded-full text-xs font-bold text-white mb-2 inline-block">VIDEO TESTIMONIAL</div>
                    <h3 className="text-white text-xl font-bold shadow-black drop-shadow-lg">Real Stories of Recovery</h3>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-2 md:p-4 overflow-hidden bg-zinc-950 border-white/10 shadow-2xl">
                <div className="aspect-[9/16] md:aspect-video w-full rounded-2xl overflow-hidden bg-black flex items-center justify-center">
                  <video 
                    controls 
                    autoPlay
                    className="w-full h-full object-contain"
                  >
                    <source src={proofVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </motion.div>



        {/* Featured Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card p-8 rounded-3xl border border-border shadow-sm relative overflow-hidden group hover:border-primary/30 transition-all"
            >
              <Quote className="absolute top-4 right-4 w-12 h-12 text-primary/10 group-hover:text-primary/20 transition-colors" />
              <div className="flex text-yellow-500 mb-4">
                {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-foreground italic leading-relaxed mb-6 text-lg">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-bold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visible Physical Transformation */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24 text-center"
        >
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-10">Visible Physical Transformation</h3>
            <div className="max-w-4xl mx-auto rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl relative group">
                <img src={physicalProof} alt="Before and After Transformation" className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-6 left-6 bg-destructive/90 text-white text-xs font-black px-4 py-2 rounded-full shadow-lg">BEFORE</div>
                <div className="absolute top-6 right-6 bg-primary/90 text-white text-xs font-black px-4 py-2 rounded-full shadow-lg">AFTER</div>
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-xl w-[90%] md:w-auto">
                    <p className="text-sm font-bold text-foreground">
                        Real patient results after 8 weeks of the Utero Clear protocol.
                    </p>
                </div>
            </div>
        </motion.div>

        {/* WhatsApp Proofs */}
        <div className="mb-20">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-center mb-10">WhatsApp & Customer Feedback</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {whatsappProofs.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl overflow-hidden border border-border bg-muted group cursor-pointer shadow-sm hover:shadow-lg transition-all"
              >
                <img src={src} alt="WhatsApp Testimonial" className="w-full h-auto group-hover:scale-110 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Facebook Style Comments */}
        <div className="max-w-2xl mx-auto bg-card rounded-3xl border border-border p-6 md:p-8 shadow-sm">
          <h3 className="font-bold text-lg mb-6 border-bottom pb-4 border-border">Community Comments</h3>
          <div className="space-y-6">
            {facebookStyleComments.map((c, i) => (
              <div key={i} className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-muted flex-shrink-0" />
                <div className="bg-muted/50 p-4 rounded-2xl flex-1">
                  <div className="font-bold text-sm text-primary mb-1">{c.name}</div>
                  <p className="text-sm text-foreground">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;

