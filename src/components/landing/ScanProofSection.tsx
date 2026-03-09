import { motion } from "framer-motion";
import { Play } from "lucide-react";
import proof1 from "@/assets/proof1.jpeg";
import proof2 from "@/assets/proof2.jpeg";
import proof3 from "@/assets/proof3.jpeg";
import proof4 from "@/assets/proof4.jpeg";
import proof5 from "@/assets/proof5.jpeg";
import proof6 from "@/assets/proof6.jpeg";
import proofVideo from "@/assets/proof_video.mp4";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const ScanProofSection = () => {
  const proofImages = [
    proof1, proof2, proof3, proof4, proof5, proof6
  ];

  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Visible Proof</span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-foreground">
            Real Results, Real Women
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            See the actual ultrasound scans and testimonials from Nigerian women who have successfully used Utero Clear.
          </p>
        </motion.div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex justify-center"
        >
          <div className="w-full max-w-3xl rounded-3xl overflow-hidden border border-border shadow-lg bg-card p-2 md:p-4 hover:shadow-xl transition-all duration-500 hover:border-primary/50 group">
            <h3 className="font-display text-xl md:text-2xl font-bold text-center mb-4 pt-2 group-hover:text-primary transition-colors">Watch This Success Story</h3>
            <div className="relative aspect-[9/16] md:aspect-video rounded-2xl overflow-hidden shadow-inner bg-black flex justify-center ring-2 ring-transparent group-hover:ring-primary/20 transition-all duration-500">
              <video 
                controls 
                className="w-full h-full object-contain"
                poster={proof1}
              >
                <source src={proofVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </motion.div>

        <h3 className="text-center font-display text-2xl font-bold text-foreground mb-8">Medical Scans & Testimonials</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {proofImages.map((src, i) => (
            <Dialog key={i}>
              <DialogTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-xl overflow-hidden bg-card border border-border shadow-sm cursor-pointer hover:shadow-lg transition-all group"
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img 
                      src={src} 
                      alt={`Customer proof ${i + 1}`}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1" 
                      loading="lazy"
                    />
                  </div>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl bg-transparent border-none shadow-none text-white p-0 flex justify-center items-center h-[90vh]">
                <img 
                  src={src} 
                  alt={`Customer proof ${i + 1} magnified`} 
                  className="max-h-full max-w-full object-contain rounded-md" 
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ScanProofSection;
