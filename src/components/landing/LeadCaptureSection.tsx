import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LeadCaptureSection = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="rounded-3xl border border-border bg-card p-6 md:p-8">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Free Guide: 7 Warning Signs Your Fibroid May Be Growing Faster Than You Think
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Get the quick guide on your phone so you can make informed decisions early.
          </p>

          {/* Integration note: connect this form to CRM or WhatsApp automation endpoint when available. */}
          <form className="mt-6 grid gap-4">
            <div>
              <Label htmlFor="lead-name">Name</Label>
              <Input id="lead-name" name="name" placeholder="Your full name" required />
            </div>
            <div>
              <Label htmlFor="lead-phone">Phone number</Label>
              <Input id="lead-phone" name="phone" placeholder="08012345678" required />
            </div>
            <div>
              <Label htmlFor="lead-email">Email (optional)</Label>
              <Input id="lead-email" name="email" type="email" placeholder="you@example.com" />
            </div>
            <Button type="submit" className="mt-2 rounded-full py-6 font-bold">
              Send Me the Free Guide
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureSection;
