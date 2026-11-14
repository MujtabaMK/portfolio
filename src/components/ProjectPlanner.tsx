import { useMemo, useState } from 'react';
import { Check, Mail, Sparkles, Lightbulb } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const WHATSAPP_NUMBER = '919028230580';
const EMAIL = 'mujtabakhan@mujtabakhan.com';

const platforms = ['iPhone app', 'Android app', 'Both iOS & Android', 'Not sure yet'];
const appTypes = ['Business / internal', 'E-commerce', 'Health & fitness', 'Productivity', 'Education', 'Social / community', 'Other'];
const featureList = ['Login & accounts', 'Payments', 'Push notifications', 'Maps & location', 'Chat', 'Admin dashboard', 'Offline mode', 'AI features'];
const stages = ['Just an idea', 'I have designs', 'Improve an existing app'];
const timelines = ['ASAP', '1–3 months', 'Flexible'];

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
          ? 'bg-gradient-to-r from-primary to-accent border-transparent text-white shadow-[0_0_18px_rgba(124,58,237,0.45)]'
          : 'bg-white/5 border-white/12 text-white/75 hover:text-white hover:border-primary/50 hover:bg-primary/10'
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
        <h4 className="text-sm sm:text-base font-semibold text-white">{title}</h4>
        {hint && <span className="text-[11px] text-white/45">{hint}</span>}
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
  const [timeline, setTimeline] = useState('');
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');

  const toggleFeature = (f: string) =>
    setFeatures((prev) => (prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]));

  const answered = [platform, appType, features.length ? 'x' : '', stage, timeline].filter(Boolean).length;
  const progress = Math.round((answered / 5) * 100);

  const message = useMemo(() => {
    const lines = [`Hi Mujtaba! 👋 I'd like to discuss an app project.`, ''];
    if (platform) lines.push(`• Platform: ${platform}`);
    if (appType) lines.push(`• Type: ${appType}`);
    if (features.length) lines.push(`• Features: ${features.join(', ')}`);
    if (stage) lines.push(`• Stage: ${stage}`);
    if (timeline) lines.push(`• Timeline: ${timeline}`);
    if (details.trim()) lines.push('', `About the project: ${details.trim()}`);
    if (name.trim()) lines.push('', `— ${name.trim()}`);
    return lines.join('\n');
  }, [platform, appType, features, stage, timeline, details, name]);

  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  const mailHref = `mailto:${EMAIL}?subject=${encodeURIComponent(
    `App project enquiry${appType ? ` (${appType})` : ''}`
  )}&body=${encodeURIComponent(message)}`;

  const pick = (setter: (v: string) => void, current: string) => (v: string) => setter(current === v ? '' : v);

  return (
    <div id="planner" className="scroll-mt-24 relative rounded-3xl p-[1px] bg-gradient-to-br from-primary/60 via-white/10 to-accent/60 mb-12 sm:mb-16">
      <div className="rounded-[calc(1.5rem-1px)] bg-[hsl(240_25%_6%/0.94)] p-5 sm:p-8 lg:p-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 sm:mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Takes 30 seconds
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Plan your <span className="text-gradient">app</span>
            </h3>
            <p className="text-sm text-white/60 mt-1">Tap what fits. I'll get a clear brief and reply with next steps.</p>
          </div>
          <div className="sm:w-48">
            <div className="flex justify-between text-[11px] text-white/55 mb-1.5">
              <span>Brief ready</span>
              <span className="font-mono text-white/80">{progress}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full w-full origin-left rounded-full bg-gradient-to-r from-primary via-accent to-fuchsia-500 transition-transform duration-500"
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
            <Step n={5} title="Timeline">
              {timelines.map((t) => (
                <Chip key={t} label={t} selected={timeline === t} onClick={() => pick(setTimeline, timeline)(t)} />
              ))}
            </Step>

            <div className="grid sm:grid-cols-[0.8fr_1.2fr] gap-3 pt-1">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name (optional)"
                aria-label="Your name"
                className="input-focus w-full rounded-xl bg-white/5 border border-white/12 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none"
              />
              <input
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="One line about your idea (optional)"
                aria-label="About your idea"
                className="input-focus w-full rounded-xl bg-white/5 border border-white/12 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none"
              />
            </div>
          </div>

          {/* Live preview */}
          <div className="lg:sticky lg:top-28 self-start">
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0b141a]">
              <div className="flex items-center gap-3 px-4 py-3 bg-[#1f2c34]">
                <span className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-bold">
                  MK
                </span>
                <div className="leading-tight">
                  <div className="text-sm font-semibold text-white">Mujtaba Khan</div>
                  <div className="text-[11px] text-white/55">iOS · Android · Flutter developer</div>
                </div>
              </div>
              <div className="p-4 min-h-[220px] bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.12),transparent_50%)]">
                <div className="ml-auto max-w-[92%] rounded-2xl rounded-tr-md bg-[#005c4b] px-3.5 py-2.5 text-[13px] leading-relaxed text-white whitespace-pre-line shadow-lg">
                  {message}
                  <div className="text-right text-[10px] text-white/55 mt-1">now ✓✓</div>
                </div>
              </div>
            </div>

            {platform && (
              <div className="mt-4 flex gap-2.5 rounded-xl bg-primary/10 border border-primary/25 p-3 text-xs sm:text-sm text-white/85">
                <Lightbulb className="w-4 h-4 shrink-0 mt-0.5 text-primary" />
                <span>
                  <span className="font-semibold text-white">My suggestion: </span>
                  {recommendation[platform]}
                </span>
              </div>
            )}

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-2.5">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine relative overflow-hidden inline-flex items-center justify-center gap-2 px-4 py-3.5 whitespace-nowrap rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold text-sm shadow-lg shadow-green-600/25 hover:scale-[1.02] active:scale-95 transition-transform"
              >
                <WhatsAppIcon /> Send on WhatsApp
              </a>
              <a
                href={mailHref}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 whitespace-nowrap rounded-xl bg-white/[0.07] border border-white/15 text-white font-semibold text-sm hover:bg-white/10 hover:scale-[1.02] active:scale-95 transition-[transform,background-color]"
              >
                <Mail className="w-5 h-5" /> Send by Email
              </a>
            </div>
            <p className="mt-3 text-center text-[11px] text-white/45">
              Opens WhatsApp or your email app with this message ready. Nothing is sent until you hit send.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
