import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "@/components/Logo";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import InstagramIcon from "@/components/ui/InstagramIcon";
import { Heart } from "@/components/decor/Doodles";
import { BOOKING_LINK } from "@/lib/whatsapp";
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  SITE_EMAIL,
  SITE_LOCATION,
} from "@/lib/site";
import { NAV_LINKS } from "@/lib/content";

const INFO_LINKS = [
  { label: "Upcoming Sessions", href: "#sessions" },
  { label: "A Day at Play & Pause", href: "#day" },
  { label: "Why Parents Love Us", href: "#why" },
  { label: "Booking & Payment", href: BOOKING_LINK },
];

const SOCIALS = [
  { label: "Instagram", href: INSTAGRAM_URL, Icon: InstagramIcon },
  { label: "WhatsApp", href: BOOKING_LINK, Icon: WhatsAppIcon },
  { label: "Email", href: `mailto:${SITE_EMAIL}`, Icon: Mail },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-cream pt-16">
      <div className="site-container">
        <div className="grid gap-10 border-t border-border pt-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-[13.5px] leading-relaxed text-charcoal-soft">
              Play. Create. Learn. Pause. Connect. Curated creative experiences for little ones
              from 1.5 years onwards and the amazing moms who do it all.
            </p>
            <div className="mt-5 flex gap-2.5">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-card text-brand-brown shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:text-coral-deep"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Quick links">
            <h3 className="font-display text-base font-semibold text-brand-brown">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-[13.5px] text-charcoal-soft transition-colors hover:text-coral-deep"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Information">
            <h3 className="font-display text-base font-semibold text-brand-brown">Information</h3>
            <ul className="mt-4 space-y-2.5">
              {INFO_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-[13.5px] text-charcoal-soft transition-colors hover:text-coral-deep"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-display text-base font-semibold text-brand-brown">Let&apos;s Connect</h3>
            <ul className="mt-4 space-y-3.5">
              <li className="flex items-start gap-3 text-[13.5px] text-charcoal-soft">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-coral" />
                {SITE_LOCATION}
              </li>
              <li>
                <a
                  href={BOOKING_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-[13.5px] text-charcoal-soft transition-colors hover:text-coral-deep"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-coral" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_EMAIL}`}
                  className="flex items-start gap-3 text-[13.5px] text-charcoal-soft transition-colors hover:text-coral-deep"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-coral" />
                  {SITE_EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-3 text-[13.5px] text-charcoal-soft">
                <InstagramIcon className="mt-0.5 h-4 w-4 shrink-0 text-coral" />
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-coral-deep"
                >
                  {INSTAGRAM_HANDLE}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border py-7 text-center sm:flex-row sm:text-left">
          <p className="inline-flex items-center gap-1.5 text-[13px] text-charcoal-soft">
            © 2026 Play &amp; Pause. Made with
            <Heart className="h-3.5 w-3.5 text-coral" />
            in Jaipur.
          </p>
          <p className="text-[13px] text-charcoal-muted">
            Curated playdates &amp; creative experiences.
          </p>
        </div>
      </div>
    </footer>
  );
}
