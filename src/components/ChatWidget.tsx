import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import profileImg from '../assets/images/profile-2026.jpg';

const WA_LINK =
  'https://wa.me/919028230580?text=' +
  encodeURIComponent("Hi Mujtaba! 👋 I saw your portfolio and I'd like to talk about an app.");
const DISMISS_KEY = 'mk-chat-dismissed';

function wasDismissed() {
  try {
    return sessionStorage.getItem(DISMISS_KEY) === '1';
  } catch {
    return false;
  }
}

// Floating WhatsApp launcher + a friendly greeting bubble that appears once the
// visitor has looked around (scrolled a bit or spent ~15s). Closing it keeps it
// closed for the rest of the visit.
export default function ChatWidget() {
  const [bubble, setBubble] = useState(false);
  const [dismissed, setDismissed] = useState(wasDismissed);
  const [inContact, setInContact] = useState(false);
  const [inStory, setInStory] = useState(true);

  // Stay hidden while the iPhone story at the top is playing
  useEffect(() => {
    const check = () => {
      const st = document.getElementById('story');
      const end = st ? st.offsetTop + st.offsetHeight - window.innerHeight * 0.5 : 0;
      setInStory(window.scrollY < end);
    };
    check();
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);
    return () => {
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
    };
  }, []);

  // Step out of the way while the visitor is in the Contact section (the planner is there)
  useEffect(() => {
    const el = document.getElementById('contact');
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInContact(e.isIntersecting), { threshold: 0.05 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (dismissed) return;
    const show = () => setBubble(true);
    // Greet once the visitor has finished the story and looked around a little
    const onScroll = () => {
      const st = document.getElementById('story');
      const end = st ? st.offsetTop + st.offsetHeight : window.innerHeight;
      if (window.scrollY > end) show();
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [dismissed]);

  const close = () => {
    setBubble(false);
    setDismissed(true);
    try {
      sessionStorage.setItem(DISMISS_KEY, '1');
    } catch {
      /* storage unavailable: just hide for now */
    }
  };

  const open = bubble && !dismissed && !inContact && !inStory;

  // The wrapper ignores clicks so the empty area around the bubble never blocks the page;
  // only the visible bubble and the launcher receive pointer events.
  return (
    <div
      className={`pointer-events-none fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 flex flex-col items-end gap-3 transition-opacity duration-500 ${
        inStory ? 'opacity-0 invisible' : 'opacity-100'
      }`}
    >
      {/* Greeting bubble */}
      <div
        role="dialog"
        aria-label="Chat with Mujtaba"
        aria-hidden={!open}
        className={`w-[calc(100vw-2rem)] max-w-[320px] origin-bottom-right rounded-2xl border border-foreground/10 bg-[hsl(40_50%_98%/0.98)] shadow-2xl shadow-black/50 transition-[opacity,transform] duration-300 ${
          open ? 'pointer-events-auto opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-3 scale-95 pointer-events-none'
        }`}
      >
        <div className="flex items-start gap-3 p-4">
          <span className="relative shrink-0">
            <img src={profileImg} alt="" className="w-11 h-11 rounded-full object-cover ring-2 ring-primary/50" />
            <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-400 ring-2 ring-[hsl(40_50%_98%)]" />
          </span>
          <div className="min-w-0 flex-1">
            <div className="text-sm font-semibold text-foreground">Mujtaba Khan</div>
            <p className="mt-1 text-[13px] leading-relaxed text-foreground/75">
              Hi 👋 Have an app idea or need help with one? Message me, happy to chat about it.
            </p>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Close chat message"
            className="-mr-1 -mt-1 p-1.5 rounded-lg text-foreground/50 hover:text-foreground hover:bg-foreground/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-2 px-4 pb-4">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 px-3 py-2.5 text-xs font-semibold text-white hover:brightness-110 transition"
          >
            <WhatsAppIcon className="w-4 h-4" /> Chat now
          </a>
          <a
            href="#planner"
            onClick={close}
            className="inline-flex items-center justify-center rounded-xl bg-foreground/[0.07] border border-foreground/15 px-3 py-2.5 text-xs font-semibold text-foreground hover:bg-foreground/10 transition-colors"
          >
            Plan my app
          </a>
        </div>
      </div>

      {/* Launcher */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="chat-launcher pointer-events-auto relative w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 text-white flex items-center justify-center shadow-lg shadow-green-600/40 hover:scale-110 active:scale-95 transition-transform"
      >
        <span className="absolute inset-0 rounded-full bg-green-400/50 animate-ping [animation-duration:2.5s]" aria-hidden="true" />
        <WhatsAppIcon className="relative w-7 h-7" />
        {open && (
          <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-red-500 text-[10px] font-bold flex items-center justify-center ring-2 ring-background">
            1
          </span>
        )}
      </a>
    </div>
  );
}
