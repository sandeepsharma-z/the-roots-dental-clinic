import { Facebook, Instagram, Youtube } from "lucide-react";

const socials = [
  { label: "Facebook", href: "https://facebook.com", icon: Facebook },
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "YouTube", href: "https://youtube.com", icon: Youtube },
];

const FloatingSocialBar = () => {
  return (
    <aside className="fixed left-3 top-1/2 z-40 hidden -translate-y-1/2 md:flex flex-col gap-2">
      {socials.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="dental-gradient flex h-11 w-11 items-center justify-center rounded-full text-primary-foreground shadow-lg shadow-primary/25 transition-transform duration-300 hover:scale-105"
        >
          <Icon size={18} />
        </a>
      ))}
    </aside>
  );
};

export default FloatingSocialBar;
