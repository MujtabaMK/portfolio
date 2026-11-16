import { useMemo, useState } from 'react';
import { Check, Mail, Sparkles, Lightbulb } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const WHATSAPP_NUMBER = '919028230580';
const EMAIL = 'mujtabakhan@mujtabakhan.com';

const platforms = ['iPhone app', 'Android app', 'Both iOS & Android', 'Not sure yet'];
const appTypes = ['Business / internal', 'E-commerce', 'Health & fitness', 'Productivity', 'Education', 'Social / community', 'Other'];
const featureList = ['Login & accounts', 'Payments', 'Push notifications', 'Maps & location', 'Chat', 'Admin dashboard', 'Offline mode', 'AI features'];
const stages = ['Just an idea', 'I have designs', 'Improve an existing app'];

const recommendation: Record<string, string> = {
  'iPhone app': 'Native Swift / SwiftUI for the smoothest iPhone experience.',
  'Android app': 'Flutter for Android, so adding iOS later is quick.',
  'Both iOS & Android': 'Flutter: one codebase for iOS and Android, so it ships faster.',
  'Not sure yet': "No problem. We'll pick the right stack together for your goals and budget.",
};

function Chip({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium border transition-[background-color,border-color,color,transform,box-shadow] duration-200 active:scale-95 ${
        selected
          ? 'bg-gradient-to-r from-primary to-accent border-transparent text-primary-foreground shadow-[0_0_18px_rgba(154,116,64,0.45)]'
          : 'bg-foreground/5 border-foreground/12 text-foreground/75 hover:text-foreground hover:border-primary/50 hover:bg-primary/10'
      }`}
    >
      {selected && <Check className="w-3.5 h-3.5" />}
      {label}
    </button>
  );
}

function Step({ n, title, hint, children }: { n: number; title: string; hint?: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-baseline gap-2.5 mb-3">
        <span className="text-xs font-mono text-primary">0{n}</span>
        <h4 className="text-sm sm:text-base font-semibold text-foreground">{title}</h4>
        {hint && <span className="text-[11px] text-foreground/60">{hint}</span>}
      </div>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

// "Plan your app" brief builder: visitors tap through a few choices, see a live
// message preview, and send it to me on WhatsApp or email in one tap.
export default function ProjectPlanner() {
  const [platform, setPlatform] = useState('');
  const [appType, setAppType] = useState('');
  const [features, setFeatures] = useState<string[]>([]);
  const [stage, setStage] = useState('');
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');

  const toggleFeature = (f: string) =>
    setFeatures((prev) => (prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]));

  const answered = [platform, appType, features.length ? 'x' : '', stage].filter(Boolean).length;
  const progress = Math.round((answered / 5) * 100);

  const message = useMemo(() => {
    const lines = [`Hi Mujtaba! 👋 I'd like to discuss an app project.`, ''];
    if (platform) lines.push(`• Platform: ${platform}`);
    if (appType) lines.push(`• Type: ${appType}`);
    if (features.length) lines.push(`• Features: ${features.join(', ')}`);
    if (stage) lines.push(`• Stage: ${stage}`);
    if (details.trim()) lines.push('', `About the project: ${details.trim()}`);
    if (name.trim()) lines.push('', `— ${name.trim()}`);
    return lines.join('\n');
  }, [platform, appType, features, stage, details, name]);

  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  const mailHref = `mailto:${EMAIL}?subject=${encodeURIComponent(
    `App project enquiry${appType ? ` (${appType})` : ''}`
  )}&body=${encodeURIComponent(message)}`;

  const pick = (setter: (v: string) => void, current: string) => (v: string) => setter(current === v ? '' : v);

  return (
    <div id="planner" className="scroll-mt-24 relative rounded-3xl p-[1px] bg-gradient-to-br from-primary/60 via-foreground/10 to-accent/60 mb-12 sm:mb-16">
      <div className="rounded-[calc(1.5rem-1px)] bg-[hsl(40_50%_98%/0.96)] p-5 sm:p-8 lg:p-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 sm:mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Takes 30 seconds
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground">
              Plan your <span className="text-gradient">app</span>
            </h3>
            <p className="text-sm text-foreground/60 mt-1">Tap what fits. I'll get a clear brief and reply with next steps.</p>
          </div>
          <div className="sm:w-48">
            <div className="flex justify-between text-[11px] text-foreground/55 mb-1.5">
              <span>Brief ready</span>
              <span className="font-mono text-foreground/80">{progress}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-foreground/10 overflow-hidden">
              <div
                className="h-full w-full origin-left rounded-full bg-gradient-to-r from-primary via-accent to-primary/60 transition-transform duration-500"
                style={{ transform: `scaleX(${progress / 100})` }}
              />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.35fr_1fr] gap-8 lg:gap-10">
          {/* Choices */}
          <div className="space-y-6">
            <Step n={1} title="What do you want to build?">
              {platforms.map((p) => (
                <Chip key={p} label={p} selected={platform === p} onClick={() => pick(setPlatform, platform)(p)} />
              ))}
            </Step>
            <Step n={2} title="What kind of app?">
              {appTypes.map((t) => (
                <Chip key={t} label={t} selected={appType === t} onClick={() => pick(setAppType, appType)(t)} />
              ))}
            </Step>
            <Step n={3} title="Features you need" hint="pick any">
              {featureList.map((f) => (
                <Chip key={f} label={f} selected={features.includes(f)} onClick={() => toggleFeature(f)} />
              ))}
            </Step>
            <Step n={4} title="Where are you now?">
              {stages.map((s) => (
                <Chip key={s} label={s} selected={stage === s} onClick={() => pick(setStage, stage)(s)} />
              ))}
            </Step>

            <div className="grid sm:grid-cols-[0.8fr_1.2fr] gap-3 pt-1">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name (optional)"
                aria-label="Your name"
                className="input-focus w-full rounded-xl bg-foreground/5 border border-foreground/12 px-4 py-3 text-sm text-foreground placeholder:text-foreground/55 outline-none"
              />
              <input
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="One line about your idea (optional)"
                aria-label="About your idea"
                className="input-focus w-full rounded-xl bg-foreground/5 border border-foreground/12 px-4 py-3 text-sm text-foreground placeholder:text-foreground/55 outline-none"
              />
            </div>
          </div>

          {/* Live preview */}
          <div className="lg:sticky lg:top-28 self-start">
            <div className="rounded-2xl overflow-hidden border border-foreground/10 bg-[#efeae2] shadow-[0_20px_50px_-30px_rgba(60,42,20,0.45)]">
              <div className="flex items-center gap-3 px-4 py-3 bg-[#008069]">
                <span className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-bold ring-2 ring-white/30">
                  MK
                </span>
                <div className="leading-tight">
                  <div className="text-sm font-semibold text-white">Mujtaba Khan</div>
                  <div className="text-[11px] text-white/75">iOS · Android · Flutter developer</div>
                </div>
              </div>
              <div className="p-4 min-h-[220px] bg-[radial-gradient(rgba(0,0,0,0.045)_1px,transparent_1px)] [background-size:14px_14px]">
                <div className="ml-auto max-w-[92%] rounded-2xl rounded-tr-md bg-[#d9fdd3] px-3.5 py-2.5 text-[13px] leading-relaxed text-[#111b21] whitespace-pre-line shadow-sm">
                  {message}
                  <div className="text-right text-[10px] text-[#667781] mt-1">now <span className="text-[#53bdeb]">✓✓</span></div>
                </div>
              </div>
            </div>

            {platform && (
              <div className="mt-4 flex gap-2.5 rounded-xl bg-primary/10 border border-primary/25 p-3 text-xs sm:text-sm text-foreground/85">
                <Lightbulb className="w-4 h-4 shrink-0 mt-0.5 text-primary" />
                <span>
                  <span className="font-semibold text-foreground">My suggestion: </span>
                  {recommendation[platform]}
                </span>
              </div>
            )}

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-2.5">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine relative overflow-hidden inline-flex items-center justify-center gap-2 px-4 py-3.5 whitespace-nowrap rounded-xl bg-[#25d366] text-[#073b1c] font-semibold text-sm shadow-lg shadow-green-600/25 hover:scale-[1.02] active:scale-95 transition-transform"
              >
                <WhatsAppIcon /> Send on WhatsApp
              </a>
              <a
                href={mailHref}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 whitespace-nowrap rounded-xl bg-foreground/[0.07] border border-foreground/15 text-foreground font-semibold text-sm hover:bg-foreground/10 hover:scale-[1.02] active:scale-95 transition-[transform,background-color]"
              >
                <Mail className="w-5 h-5" /> Send by Email
              </a>
            </div>
            <p className="mt-3 text-center text-[11px] text-foreground/60">
              Opens WhatsApp or your email app with this message ready. Nothing is sent until you hit send.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
