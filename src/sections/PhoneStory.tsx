import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './phone-story.css';

import iconCoreSyncGo from '../assets/images/icon-coresyncgo.png';
import iconHabitNaro from '../assets/images/icon-habitnaro.png';
import iconSalvendi from '../assets/images/icon-salvendi.png';
import iconFitrize from '../assets/images/icon-fitrize.png';
import profile from '../assets/images/profile-2026.jpg';
import resume from '../assets/files/Mujtaba_Khan_iOS_Developer.pdf';

gsap.registerPlugin(ScrollTrigger);

const WHATSAPP = 'https://wa.me/919028230580?text=Hi%20Mujtaba!%20%F0%9F%91%8B%20I%27d%20like%20to%20talk%20about%20an%20app.';
const EMAIL = 'mailto:mujtabakhan@mujtabakhan.com?subject=App%20project';

const LINKEDIN = 'https://www.linkedin.com/in/mujtaba-khan-78228879';

// iOS-style app icons drawn as SVG (24×24 artboard, scaled by CSS)
const Ico = {
  messages: (
    <svg viewBox="0 0 24 24"><path fill="#fff" d="M12 4.5c-4.97 0-9 3.13-9 7 0 2.2 1.3 4.17 3.34 5.45-.15 1.2-.73 2.3-1.6 3.05 1.9.02 3.62-.66 4.83-1.76.78.17 1.6.26 2.43.26 4.97 0 9-3.13 9-7s-4.03-7-9-7z" /></svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24"><rect x="3.5" y="6.5" width="17" height="11.5" rx="2" fill="#fff" /><path d="M4.2 7.4l7.8 5.6 7.8-5.6" fill="none" stroke="#1a78f0" strokeWidth="1.5" strokeLinejoin="round" /></svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24"><path fill="#fff" d="M12 3.4a8.6 8.6 0 0 0-7.4 13l-1.2 4.3 4.4-1.15A8.6 8.6 0 1 0 12 3.4z" /><path fill="#25d366" d="M9.1 7.6c.2-.4.4-.4.6-.4h.5c.2 0 .4 0 .5.4l.7 1.7c.1.2.1.4 0 .5l-.4.6c-.1.2-.2.3 0 .5.4.7 1.3 1.6 2 2 .2.1.4.1.5 0l.6-.6c.2-.2.3-.2.5-.1l1.7.8c.2.1.3.2.3.4 0 .5-.2 1.3-.7 1.7-.5.4-1.3.6-2.3.3-1.2-.4-2.6-1.3-3.7-2.4S8 10.6 7.7 9.6c-.2-.9 0-1.6.5-2z" /></svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24"><path fill="#fff" d="M6.2 9.3h2.6V18H6.2zM7.5 5.2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM10.4 9.3h2.5v1.2c.4-.7 1.3-1.4 2.6-1.4 2.7 0 3.2 1.8 3.2 4.1V18h-2.6v-4.2c0-1 0-2.3-1.4-2.3s-1.7 1.1-1.7 2.2V18h-2.6z" /></svg>
  ),
  swift: (
    <svg viewBox="0 0 24 24"><path fill="#fff" d="M4.6 6.2c3.1 2.6 6.2 4.7 8.9 6.1-2.5-1.4-6.1-3.8-8.4-5.6 2 2.7 4.5 5.2 7.1 7-2.3.9-5.2.9-8-.4 2.6 2.5 6.4 3.8 10 2.6 1.6-.5 2.8.3 3.6.9-.1-1.2-.7-2.3-1.4-3 1.1-3.5-.4-7.3-3.4-9.9 1.3 2.3 1.8 4.7 1.4 6.6-2.9-1.4-6.4-3.6-9.8-4.3z" /></svg>
  ),
  flutter: (
    <svg viewBox="0 0 24 24"><path fill="#47c5fb" d="M14.1 2.8h5.2L8.6 13.5 6 10.9z" /><path fill="#47c5fb" d="M14.1 11.4h5.2l-4.6 4.6-2.6-2.6z" /><path fill="#00569e" d="M12.1 13.4l2.6 2.6 4.6 4.6h-5.2l-4.6-4.6z" /><path fill="#00b5f8" d="M9.5 16l2.6-2.6 2.6 2.6-2.6 2.6z" /></svg>
  ),
  xcode: (
    <svg viewBox="0 0 24 24"><rect x="5" y="4.5" width="14" height="15" rx="3" fill="none" stroke="#fff" strokeWidth="1.4" opacity=".55" /><path fill="#fff" d="M14.6 5.6l3.4 3.4-1.6 1.6-1-1-6.9 6.9a1.2 1.2 0 0 1-1.7-1.7l6.9-6.9-.6-.6z" /></svg>
  ),
  notes: (
    <svg viewBox="0 0 24 24"><rect x="0" y="0" width="24" height="7" fill="#ffd60a" /><path d="M4 11h16M4 14.5h16M4 18h11" stroke="#c9c9ce" strokeWidth="1" /></svg>
  ),
};

const JOURNEY = [
  { y: '2021 — NOW', c: 'upGrad', r: 'iOS Developer · ATLAS HR, Dashboard, VMS, Upgrad Living', now: true },
  { y: '2020 — 2021', c: 'Innovation Trust', r: 'iOS Developer · ISU Admin, Future Tech' },
  { y: '2019 — 2020', c: 'Dice Acceleration', r: 'iOS Developer · ATLAS Buzz, 10K+ downloads' },
  { y: '2016 — 2019', c: 'Hubmatrix Technologies', r: 'Junior iOS · Employee Connect, TEAMS FM' },
];

function mumbaiTime() {
  return new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata' }).format(new Date());
}

export default function PhoneStory() {
  const rootRef = useRef<HTMLElement>(null);
  const [time, setTime] = useState('09:41');
  const [curtain, setCurtain] = useState(true);

  // live Mumbai time
  useEffect(() => {
    setTime(mumbaiTime());
    const id = setInterval(() => setTime(mumbaiTime()), 30_000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const q = <T extends Element = HTMLElement>(s: string) => root.querySelector(s) as T;
    const screen = q('.ps-screen');

    // position of an element inside the phone screen (offsets ignore the 3D tilt)
    const rectIn = (el: HTMLElement) => {
      let x = 0, y = 0;
      let n: HTMLElement | null = el;
      while (n && n !== screen) { x += n.offsetLeft; y += n.offsetTop; n = n.offsetParent as HTMLElement | null; }
      return { x, y, w: el.offsetWidth, h: el.offsetHeight };
    };

    const ctx = gsap.context(() => {
      // ---- intro curtain (0 → 100) ----
      const counter = { v: 0 };
      const pct = q('.ps-curtain .pct');
      const bar = q('.ps-curtain .bar i');
      gsap.to(counter, {
        v: 100, duration: 1.4, ease: 'power2.inOut',
        onUpdate: () => { if (pct) pct.textContent = String(Math.round(counter.v)); if (bar) bar.style.width = counter.v + '%'; },
        onComplete: () => {
          gsap.to('.ps-curtain', { yPercent: -100, duration: 0.9, ease: 'expo.inOut', onComplete: () => setCurtain(false) });
          gsap.from('.ps-name h1', { yPercent: 30, opacity: 0, duration: 1.3, ease: 'expo.out', delay: 0.35 });
          gsap.from('.ps-phone-wrap', { y: 200, opacity: 0, duration: 1.5, ease: 'expo.out', delay: 0.5 });
        },
      });

      // phone screen is 276×596 inside a 300×620 body
      const NAV = 64; // keep the zoomed app below the site menu
      const small = window.innerWidth < 700;
      // phones: the app fills the screen; larger screens: the whole phone fits under the menu
      const zoomIn = small
        ? Math.min(window.innerWidth / 282, (window.innerHeight - NAV - 8) / 600)
        : Math.min(1.5, (window.innerHeight - NAV - 40) / 620);
      const zoomOut = Math.min(1, (window.innerWidth - 24) / 300, (window.innerHeight - 110) / 620);
      const apps: [string, string][] = [['#ps-csg', 'ic-csg'], ['#ps-hn', 'ic-hn'], ['#ps-sv', 'ic-sv'], ['#ps-fz', 'ic-fz'], ['#ps-jr', 'ic-jr'], ['#ps-ms', 'ic-ms']];
      const iconRect = (id: string) => rectIn(q('#' + id));
      apps.forEach(([sel, id]) => { const r = iconRect(id); gsap.set(sel, { left: r.x, top: r.y, width: r.w, height: r.h }); });
      gsap.set('.ps-phone-wrap', { y: '50vh', rotateX: 38, rotateY: -18, rotateZ: 8, scale: 0.7 });
      gsap.set('.csg-fit', { xPercent: 100 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.ps-stage', start: 'top top', end: 'bottom bottom', scrub: 1,
        },
      });

      const openApp = (sel: string, iconId: string, t: number, splashBg: string, uiBg: string, darkStatus: boolean) => {
        tl.to('#' + iconId, { scale: 0.84, filter: 'brightness(.7)', duration: 0.18 }, t)
          .to('#' + iconId, { scale: 1, filter: 'brightness(1)', duration: 0.12 }, t + 0.18)
          .set(sel, { opacity: 1, backgroundColor: splashBg }, t + 0.2)
          .to(sel, { left: 0, top: 0, width: 276, height: 596, borderRadius: 41, duration: 0.6, ease: 'power3.inOut' }, t + 0.2)
          .to('.ps-home', { scale: 0.9, opacity: 0, duration: 0.6, ease: 'power3.inOut' }, t + 0.2)
          .to(sel + ' .splash', { opacity: 0, duration: 0.25 }, t + 0.85)
          .to(sel + ' .ui', { opacity: 1, duration: 0.3 }, t + 0.75)
          .to(sel, { backgroundColor: uiBg, duration: 0.3 }, t + 0.75)
          .to('.ps-status', { color: darkStatus ? '#111' : '#fff', duration: 0.1 }, t + 0.6)
          .to('.ps-homebar', { backgroundColor: darkStatus ? '#111' : 'rgba(255,255,255,.85)', duration: 0.1 }, t + 0.6);
        // the camera dives into the app until it fills your screen
        tl.to('.ps-phone-wrap', { scale: zoomIn, y: NAV / 2, duration: 0.75, ease: 'power3.inOut' }, t + 0.15);
        return t + 1.1;
      };
      const closeApp = (sel: string, iconId: string, t: number) => {
        const r = iconRect(iconId);
        tl.to('.ps-homebar', { y: -6, width: 130, duration: 0.15 }, t)
          .to('.ps-homebar', { y: 0, width: 108, duration: 0.15 }, t + 0.15)
          .to(sel + ' .ui', { opacity: 0, duration: 0.2 }, t + 0.15)
          .to(sel, { left: r.x, top: r.y, width: r.w, height: r.h, borderRadius: 13, duration: 0.55, ease: 'power3.inOut' }, t + 0.15)
          .to(sel, { opacity: 0, duration: 0.15 }, t + 0.65)
          .to('.ps-home', { scale: 1, opacity: 1, duration: 0.55, ease: 'power3.inOut' }, t + 0.15)
          .to('.ps-status', { color: '#fff', duration: 0.1 }, t + 0.4)
          .to('.ps-homebar', { backgroundColor: 'rgba(255,255,255,.85)', duration: 0.1 }, t + 0.4);
        // pull back out to the home screen
        tl.to('.ps-phone-wrap', { scale: zoomOut, y: 22, duration: 0.7, ease: 'power3.inOut' }, t + 0.1);
        return t + 0.9;
      };
      const showCopy = (id: string, t: number) => {
        const wg = id.replace('#ps-c-', '#ps-w-');
        if (q(wg)) {
          tl.to('.ps-widget .wg', { autoAlpha: 0, duration: 0.2 }, t)
            .fromTo(wg, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.4, ease: 'power3.out' }, t + 0.2);
        }
      };
      // pause on the home screen so the widget can be read before the next app opens
      const dwell = 0.9;
      const count = (sel: string, to: number, t: number, dur = 1, fmt?: (n: number) => string) => {
        const o = { v: Number((q(sel)?.textContent || '0').replace(/[^\d]/g, '')) };
        const from = o.v;
        tl.fromTo(o, { v: from }, { v: to, duration: dur, ease: 'power2.out', onUpdate: () => { const el = q(sel); if (el) el.textContent = fmt ? fmt(o.v) : String(Math.round(o.v)); } }, t);
      };
      const inr = (n: number) => '₹' + Math.round(n).toLocaleString('en-IN');

      // ---- 01 Intro: name fades, phone turns to face you ----
      tl.addLabel('intro', 0)
        .to('.ps-name', { opacity: 0, scale: 0.9, filter: 'blur(8px)', duration: 1 }, 0)
        .to('.ps-corner', { opacity: 0, duration: 0.5 }, 0)
        .to('.ps-phone-wrap', { y: 22, x: 0, rotateX: 0, rotateY: 8, rotateZ: 0, scale: zoomOut, duration: 1.4, ease: 'power2.inOut' }, 0)
        .to('.ps-phone-wrap', { rotateY: 0, duration: 0.4 }, 1.4);

      // ---- 02 Apps ----
      tl.addLabel('apps', 1.5);
      // CoreSyncGo
      showCopy('#ps-c-csg', 1.5);
      let t = openApp('#ps-csg', 'ic-csg', 1.5 + dwell + 0.3, '#f6f5fa', '#f6f5fa', true);
      t += 0.5;
      tl.to('#ps-card-fit', { scale: 0.95, backgroundColor: '#f1effa', duration: 0.15 }, t)
        .to('#ps-card-fit', { scale: 1, duration: 0.15 }, t + 0.15)
        .to('.csg-fit', { xPercent: 0, duration: 0.5, ease: 'power3.inOut' }, t + 0.25)
        .to('.csg-home', { x: -70, opacity: 0.4, duration: 0.5, ease: 'power3.inOut' }, t + 0.25)
        .to('#ps-r1', { strokeDashoffset: 465 * 0.38, duration: 1, ease: 'power2.out' }, t + 0.7)
        .to('#ps-r2', { strokeDashoffset: 352 * 0.55, duration: 1, ease: 'power2.out' }, t + 0.8);
      count('#ps-steps', 2069, t + 0.7);
      showCopy('#ps-c-fit', t + 0.2);
      t = closeApp('#ps-csg', 'ic-csg', t + 2.1);

      // HabitNaro
      showCopy('#ps-c-hn', t + 0.1);
      t = openApp('#ps-hn', 'ic-hn', t + dwell, '#1f6f5c', '#eef6f2', true);
      t += 0.4;
      ['#ps-tk1', '#ps-tk2', '#ps-tk3'].forEach((tk, i) => {
        const tt = t + i * 0.45;
        tl.to(tk, { scale: 1, duration: 0.22, ease: 'back.out(3)' }, tt)
          .to('#ps-hr', { strokeDashoffset: 121 - (i + 1) * 9, duration: 0.3 }, tt)
          .to('#ps-bar-today', { height: 20 + (i + 1) * 22 + '%', duration: 0.3 }, tt);
        count('#ps-hpct', 38 + (i + 1) * 5, tt, 0.3, (n) => Math.round(n) + '%');
      });
      t += 1.5;
      tl.to('#ps-hn .ps-toast', { opacity: 1, y: 0, duration: 0.4, ease: 'back.out(2)' }, t);
      t = closeApp('#ps-hn', 'ic-hn', t + 1.2);

      // Salvendi
      showCopy('#ps-c-sv', t + 0.1);
      t = openApp('#ps-sv', 'ic-sv', t + dwell, '#0d0b07', '#0d0b07', false);
      t += 0.4;
      tl.fromTo('#ps-sv-new', { height: 0, opacity: 0 }, { height: 41, opacity: 1, duration: 0.4, ease: 'power2.out' }, t)
        .to('#ps-sv-track', { width: '57%', duration: 0.8, ease: 'power2.out' }, t + 0.2);
      count('#ps-sv-left', 42504, t + 0.2, 0.8, inr);
      count('#ps-sv-today', 570, t + 0.2, 0.8, inr);
      t += 1.3;
      tl.to('#ps-sv .ps-toast', { opacity: 1, y: 0, duration: 0.4, ease: 'back.out(2)' }, t);
      t = closeApp('#ps-sv', 'ic-sv', t + 1.2);

      // Fitrize
      showCopy('#ps-c-fz', t + 0.1);
      t = openApp('#ps-fz', 'ic-fz', t + dwell, '#0e0b1c', '#0e0b1c', false);
      t += 0.4;
      tl.to('#ps-fz-ring', { strokeDashoffset: 264 * 0.21, duration: 1, ease: 'power2.out' }, t)
        .to('#ps-fz-p', { width: '82%', duration: 0.8 }, t + 0.2)
        .to('#ps-fz-c', { width: '68%', duration: 0.8 }, t + 0.3)
        .to('#ps-fz-f', { width: '55%', duration: 0.8 }, t + 0.4);
      count('#ps-fz-kcal', 1900, t, 1);
      count('#ps-fz-pct', 79, t, 1, (n) => Math.round(n) + '%');
      t += 1.4;
      tl.to('#ps-fz .ps-toast', { opacity: 1, y: 0, duration: 0.4, ease: 'back.out(2)' }, t);
      t = closeApp('#ps-fz', 'ic-fz', t + 1.2);

      // ---- 03 Journey ----
      tl.addLabel('journey', t);
      showCopy('#ps-c-jr', t + 0.1);
      t = openApp('#ps-jr', 'ic-jr', t + dwell, '#000', '#000', false);
      root.querySelectorAll('.jr-item').forEach((el, i) => {
        tl.to(el, { opacity: 1, duration: 0.3 }, t + 0.2 + i * 0.4);
      });
      t += 2.4;
      t = closeApp('#ps-jr', 'ic-jr', t);

      // ---- 04 Contact ----
      tl.addLabel('contact', t);
      showCopy('#ps-c-ms', t + 0.1);
      t = openApp('#ps-ms', 'ic-ms', t + dwell, '#000', '#000', false);
      tl.to('#ps-b1', { opacity: 1, y: 0, scale: 1, duration: 0.3 }, t + 0.2)
        .to('#ps-typing', { opacity: 1, duration: 0.2 }, t + 0.7)
        .to('#ps-typing', { opacity: 0, height: 0, padding: 0, duration: 0.15 }, t + 1.3)
        .to('#ps-b2', { opacity: 1, y: 0, scale: 1, duration: 0.3 }, t + 1.35)
        .fromTo('.ms-actions', { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.4, ease: 'power3.out' }, t + 2.3)
        .to({}, { duration: 1.2 });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} id="story" className="ps" aria-label="Mujtaba Khan — iOS and Flutter developer">
      {curtain && (
        <div className="ps-curtain" aria-hidden="true">
          <div className="micro" style={{ color: 'var(--ps-mute)' }}>Mujtaba Khan — Portfolio</div>
          <div className="pct">0</div>
          <div className="bar"><i /></div>
        </div>
      )}

      <div className="ps-stage">
        <div className="ps-pin">
          <div className="ps-name">
            <p className="micro meta">iOS · Android · Flutter Developer — Mumbai · {time} IST</p>
            <h1>
              Mujtaba<br /><em>Khan</em>
              <span className="sr-only"> (Mujtaba Ul Hasan Khan), iOS, Android &amp; Flutter Developer in Mumbai</span>
            </h1>
          </div>

          <div className="ps-phone-wrap">
            <div className="ps-phone">
              <div className="ps-screen">
                <div className="ps-island" />
                <div className="ps-status"><span>9:41</span><span>●●● ▮</span></div>

                <div className="ps-home">
                  <div className="ps-clock"><div className="d">Monday, 16 November</div><div className="t">9:41</div></div>
                  <div className="ps-apps">
                    <div className="ps-app"><img id="ic-csg" src={iconCoreSyncGo} alt="" />CoreSyncGo</div>
                    <div className="ps-app"><img id="ic-hn" src={iconHabitNaro} alt="" />HabitNaro</div>
                    <div className="ps-app"><img id="ic-sv" src={iconSalvendi} alt="" />Salvendi</div>
                    <div className="ps-app"><img id="ic-fz" src={iconFitrize} alt="" />Fitrize</div>
                    <div className="ps-app"><i id="ic-jr" className="svg" style={{ background: '#fff' }}>{Ico.notes}</i>Journey</div>
                    <div className="ps-app"><i className="svg" style={{ background: 'linear-gradient(160deg,#fa9a3c,#f0331f)' }}>{Ico.swift}</i>Swift</div>
                    <div className="ps-app"><i className="svg" style={{ background: '#fff' }}>{Ico.flutter}</i>Flutter</div>
                    <div className="ps-app"><i className="svg" style={{ background: 'linear-gradient(160deg,#2fa6ff,#0a5fd6)' }}>{Ico.xcode}</i>Xcode</div>
                  </div>
                  <div className="ps-widget">
                    <div className="wg" id="ps-w-csg"><small>Indie app · Flutter</small><b>CoreSyncGo</b><p>Tasks, passwords, scanner, fitness and habits in one app.</p><div className="lk"><a href="https://apps.apple.com/us/app/coresync-go/id6761988704" target="_blank" rel="noopener noreferrer">App Store ↗</a><a href="https://play.google.com/store/apps/details?id=com.mujtaba.coresync" target="_blank" rel="noopener noreferrer">Google Play ↗</a></div></div>
                    <div className="wg" id="ps-w-hn"><small>Indie app · Flutter</small><b>HabitNaro</b><p>Habits that stick. Tick off your day, keep the streak.</p><div className="lk"><a href="https://apps.apple.com/in/app/habitnaro-habit-tracker/id6822220701" target="_blank" rel="noopener noreferrer">App Store ↗</a><a href="https://play.google.com/store/apps/details?id=com.mujtaba.habitnaro" target="_blank" rel="noopener noreferrer">Google Play ↗</a></div></div>
                    <div className="wg" id="ps-w-sv"><small>Indie app · Flutter</small><b>Salvendi</b><p>Money left and days until payday, at a glance.</p><div className="lk"><a href="https://apps.apple.com/in/app/salvendi/id6827112514" target="_blank" rel="noopener noreferrer">App Store ↗</a><a href="https://play.google.com/store/apps/details?id=com.mujtaba.salarysense" target="_blank" rel="noopener noreferrer">Google Play ↗</a></div></div>
                    <div className="wg" id="ps-w-fz"><small>Client app · Flutter</small><b>Fitrize</b><p>Calories, macros and workouts, synced with Health.</p></div>
                    <div className="wg" id="ps-w-jr"><small>10+ years · 4 companies</small><b>My journey</b><p>From Hubmatrix in Pune to the ATLAS apps at upGrad.</p></div>
                    <div className="wg" id="ps-w-ms"><small>Let's work together</small><b>Your app next?</b><p>Open Messages and say hi — let's plan it together.</p></div>
                  </div>
                  <div className="ps-dock">
                    <i id="ic-ms" style={{ background: 'linear-gradient(180deg,#6af07f,#1fbf3d)' }}>{Ico.messages}</i>
                    <a href={EMAIL} aria-label="Email Mujtaba" style={{ background: 'linear-gradient(180deg,#3fb0ff,#1268e8)' }}>{Ico.mail}</a>
                    <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Mujtaba" style={{ background: '#25d366' }}>{Ico.whatsapp}</a>
                    <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="Mujtaba on LinkedIn" style={{ background: '#0a66c2' }}>{Ico.linkedin}</a>
                  </div>
                </div>

                {/* CoreSyncGo */}
                <div className="ps-launch" id="ps-csg">
                  <div className="splash"><img src={iconCoreSyncGo} alt="" /></div>
                  <div className="ui">
                    <div className="csg-ui csg-home">
                      <div className="csg-top"><span>☰</span><span>CoreSync Go</span><span>🎓 &nbsp;👤</span></div>
                      <h3>Welcome, Mujtaba!</h3>
                      <p className="s">What would you like to do today?</p>
                      <div className="csg-grid">
                        <div className="csg-card"><div className="ic" style={{ background: '#e3f6ea', color: '#2f9e5b' }}><svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="#2f9e5b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7l1.5 1.5L8 6M4 13l1.5 1.5L8 12M4 19l1.5 1.5L8 18M11 7.5h9M11 13.5h9M11 19.5h9" /></svg></div><b>Todo</b><small>Manage your tasks</small></div>
                        <div className="csg-card"><div className="ic" style={{ background: '#e4eefe', color: '#3a7bec' }}><svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="#3a7bec" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="10.5" width="14" height="10" rx="2.2" fill="#3a7bec" /><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" /><circle cx="12" cy="15.5" r="1.3" fill="#fff" stroke="none" /></svg></div><b>Passwords</b><small>Secure vault</small></div>
                        <div className="csg-card" id="ps-card-fit"><div className="ic" style={{ background: '#fdebe4', color: '#e8673c' }}><svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="#e8673c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 19L19 5M14 5h5v5M10 19H5v-5" /></svg></div><b>Fitness</b><small>Track your fitness</small></div>
                        <div className="csg-card"><div className="ic" style={{ background: '#fde6ee', color: '#e0457b' }}><svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="#e0457b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="1.2" fill="#e0457b" /></svg></div><b>Habits</b><small>Build daily habits</small></div>
                        <div className="csg-card"><div className="ic" style={{ background: '#efe7fd', color: '#8a4ce0' }}><svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="#8a4ce0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 8V5.5A1.5 1.5 0 0 1 5.5 4H8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M20 16v2.5a1.5 1.5 0 0 1-1.5 1.5H16M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16M8.5 9h7M8.5 12h7M8.5 15h4" /></svg></div><b>Scanner</b><small>Scan documents</small></div>
                        <div className="csg-card"><div className="ic" style={{ background: '#e2f5f2', color: '#22a091' }}><svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="#22a091" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="6" height="6" rx="1" /><rect x="14" y="4" width="6" height="6" rx="1" /><rect x="4" y="14" width="6" height="6" rx="1" /><path d="M14 14h2v2h-2zM18 14h2M14 18v2h2M18 18h2v2" /></svg></div><b>QR / Barcode</b><small>Scan &amp; generate</small></div>
                      </div>
                    </div>
                    <div className="csg-fit">
                      <div className="nav"><span style={{ color: '#5b4bd6' }}>‹</span> Fitness Tracker</div>
                      <div className="csg-tabs"><span>Attendance</span><span>Water</span><span>Food</span><span className="on">Steps</span><span>Report</span></div>
                      <div className="ringwrap" style={{ width: 168, height: 168 }}>
                        <svg width="168" height="168" viewBox="0 0 168 168">
                          <circle cx="84" cy="84" r="74" fill="none" stroke="#eef0f4" strokeWidth="12" />
                          <circle cx="84" cy="84" r="56" fill="none" stroke="#eef0f4" strokeWidth="10" />
                          <circle id="ps-r1" cx="84" cy="84" r="74" fill="none" stroke="#34c759" strokeWidth="12" strokeLinecap="round" strokeDasharray="465" strokeDashoffset="465" transform="rotate(-90 84 84)" />
                          <circle id="ps-r2" cx="84" cy="84" r="56" fill="none" stroke="#2f8cf0" strokeWidth="10" strokeLinecap="round" strokeDasharray="352" strokeDashoffset="352" transform="rotate(-90 84 84)" />
                        </svg>
                        <div className="center"><b id="ps-steps" style={{ fontSize: 30, color: '#22a35a', fontWeight: 700 }}>0</b><small style={{ fontSize: 11, color: '#55555f' }}>/ 12000 steps</small></div>
                      </div>
                      <div className="csg-kpis">
                        <div><div className="d" style={{ background: '#e3f6ea' }}><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#2f9e5b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13" cy="4" r="1.6" fill="#2f9e5b" stroke="none" /><path d="M10 21l2.2-6.2L14.5 17v4M9 11.5l2.5-3.2 3 1.6 2 3M11.5 8.3l1 6.5" /></svg></div><b>2069</b><small>steps</small></div>
                        <div><div className="d" style={{ background: '#fff3dc' }}><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#e8a33c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="18" height="8" rx="1.5" /><path d="M7 8v3M11 8v4M15 8v3M19 8v3" /></svg></div><b>1.34</b><small>km</small></div>
                        <div><div className="d" style={{ background: '#e4eefe' }}><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#2f8cf0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="13.5" r="7" /><path d="M12 10v3.5l2 1.5M10 3h4" /></svg></div><b>21</b><small>mins</small></div>
                        <div><div className="d" style={{ background: '#fde6ee' }}><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#e0457b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21c3.6 0 6-2.4 6-5.6 0-3.5-2.6-5.4-3.7-8.4-.4 2-1.4 3.2-2.4 3.7.2-2.6-.9-5.2-3.4-6.7.2 3.4-2.5 5.5-2.5 9.4C6 18.6 8.4 21 12 21z" /></svg></div><b>65</b><small>kcal</small></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* HabitNaro */}
                <div className="ps-launch" id="ps-hn">
                  <div className="splash"><img src={iconHabitNaro} alt="" /></div>
                  <div className="ui">
                    <div className="hn-ui">
                      <div className="hd"><b>Habits</b><span>‹ &nbsp;Nov 2026&nbsp; ›</span></div>
                      <div className="hn-card">
                        <div className="t">November 2026</div><div className="st">Overall and daily progress</div>
                        <div className="hn-prog">
                          <div className="ringwrap" style={{ width: 74, height: 74, margin: 0 }}>
                            <svg width="74" height="74" viewBox="0 0 74 74"><circle cx="37" cy="37" r="31" fill="none" stroke="#e3ece8" strokeWidth="8" /><circle id="ps-hr" cx="37" cy="37" r="31" fill="none" stroke="#1f6f5c" strokeWidth="8" strokeLinecap="round" strokeDasharray="195" strokeDashoffset="121" transform="rotate(-90 37 37)" /></svg>
                            <div className="center"><b id="ps-hpct" style={{ fontSize: 17, fontWeight: 700 }}>38%</b></div>
                          </div>
                          <div className="hn-bars">{[40, 55, 35, 70, 60, 80].map((h, i) => <i key={i} style={{ height: h + '%' }} />)}<i id="ps-bar-today" style={{ height: '20%', background: '#1f6f5c' }} /></div>
                        </div>
                      </div>
                      <div className="hn-card">
                        <div className="t">Daily habits</div><div className="st">Tick off your day, every day</div>
                        <div style={{ marginTop: 6 }}>
                          <div className="hn-row h"><span /><span>T<br />12</span><span>F<br />13</span><span>S<br />14</span><span>S<br />15</span><span style={{ color: '#1f6f5c', fontWeight: 700 }}>M<br />16</span></div>
                          {[
                            ['Morning workout', [1, 1, 0, 1], 'ps-tk1'],
                            ['Read 20 pages', [1, 0, 1, 1], 'ps-tk2'],
                            ['Meditate 10 min', [0, 1, 1, 1], 'ps-tk3'],
                            ['10,000 steps', [1, 1, 1, 0], ''],
                          ].map(([name, days, tk]) => (
                            <div className="hn-row" key={name as string}>
                              <span>{name as string}</span>
                              {(days as number[]).map((d, i) => <i key={i} className={d ? 'ck' : 'ck off'}>✓</i>)}
                              {tk ? <i className="ck today"><b id={tk as string}>✓</b></i> : <i className="ck off" />}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="ps-toast" style={{ background: '#fff', color: '#0f2a22', boxShadow: '0 10px 30px rgba(15,42,34,.18)' }}><div className="ic" style={{ background: '#f5b70a' }}>✓</div><div><b>13-day streak</b><small>Keep it going</small></div></div>
                    <div className="ps-tabbar" style={{ background: '#fff', color: '#5c7169', borderTop: '1px solid #e3ece8' }}><div>⌁<br />Dashboard</div><div style={{ color: '#1f6f5c', fontWeight: 700 }}>◉<br />Habits</div><div>☰<br />To Do</div><div>⚑<br />Goals</div><div>⚙<br />Setup</div></div>
                  </div>
                </div>

                {/* Salvendi */}
                <div className="ps-launch" id="ps-sv">
                  <div className="splash"><img src={iconSalvendi} alt="" /></div>
                  <div className="ui">
                    <div className="sv-ui">
                      <div className="hd">Dashboard</div>
                      <h3>Good morning, Mujtaba</h3>
                      <div className="sub">15 days to payday · 1 Dec</div>
                      <div className="sv-card">
                        <div className="l">▣ Money left</div>
                        <div className="big" id="ps-sv-left">₹42,954</div>
                        <div className="sv-track"><i id="ps-sv-track" /></div>
                        <div className="cap">₹43,546 spent of ₹85,000 salary</div>
                      </div>
                      <div className="sv-stats">
                        <div><b id="ps-sv-today">₹120</b>Spent today</div>
                        <div><b>₹2,177</b>Daily average</div>
                        <div><b>₹29,254</b>Free to spend</div>
                      </div>
                      <div className="sv-list">
                        <div className="t">Recent</div>
                        <div className="sv-item" id="ps-sv-new" style={{ overflow: 'hidden' }}><div className="ic">🍴</div><div>Lunch with team<small>Eating out · just now</small></div><div className="amt" style={{ color: '#e8c15c' }}>−₹450</div></div>
                        <div className="sv-item"><div className="ic">☕</div><div>Tea and snacks<small>Eating out · 9:30 AM</small></div><div className="amt">−₹120</div></div>
                        <div className="sv-item"><div className="ic">🏠</div><div>House rent<small>Bills · 1 Nov</small></div><div className="amt">−₹22,000</div></div>
                      </div>
                    </div>
                    <div className="ps-toast" style={{ background: '#1f1a0e', color: '#f2ead7', border: '1px solid rgba(232,193,92,.35)' }}><div className="ic" style={{ background: '#e8c15c', color: '#1a1408' }}>₹</div><div><b>Expense added</b><small>₹28,804 free to spend after bills</small></div></div>
                  </div>
                </div>

                {/* Fitrize */}
                <div className="ps-launch" id="ps-fz">
                  <div className="splash"><img src={iconFitrize} alt="" /></div>
                  <div className="ui">
                    <div className="fz-ui">
                      <div className="brand">⚡ FITRIZE</div>
                      <div className="wb">WELCOME BACK</div>
                      <h3>Hello, Mujtaba</h3>
                      <div className="sub">Goal · Muscle gain · 2400 kcal · Protein 120g</div>
                      <div className="fz-btns"><span>+ Log meal</span><span>Ask coach</span></div>
                      <div className="fz-card">
                        <div><div className="l">Today · Calorie goal</div><div className="big"><span id="ps-fz-kcal">0</span><small> / 2400</small></div><div className="l">500 kcal remaining</div></div>
                        <div className="ringwrap" style={{ width: 96, height: 96, margin: 0 }}>
                          <svg width="96" height="96" viewBox="0 0 96 96"><circle cx="48" cy="48" r="42" fill="none" stroke="#2a2446" strokeWidth="9" /><circle id="ps-fz-ring" cx="48" cy="48" r="42" fill="none" stroke="#8b6cff" strokeWidth="9" strokeLinecap="round" strokeDasharray="264" strokeDashoffset="264" transform="rotate(-90 48 48)" /></svg>
                          <div className="center"><b id="ps-fz-pct" style={{ fontSize: 18, fontWeight: 800 }}>0%</b><small style={{ fontSize: 8, opacity: 0.6 }}>of goal</small></div>
                        </div>
                      </div>
                      <div className="fz-macros">
                        <div>Protein<b style={{ color: '#b9a6ff' }}>140g</b><div className="bar"><i id="ps-fz-p" style={{ background: '#8b6cff' }} /></div></div>
                        <div>Carbs<b>202g</b><div className="bar"><i id="ps-fz-c" style={{ background: '#5ac8fa' }} /></div></div>
                        <div>Fats<b>52g</b><div className="bar"><i id="ps-fz-f" style={{ background: '#ff9f0a' }} /></div></div>
                      </div>
                    </div>
                    <div className="ps-toast" style={{ background: '#1d1838', color: '#f1eefc', border: '1px solid rgba(139,108,255,.4)' }}><div className="ic" style={{ background: '#8b6cff' }}>🔥</div><div><b>12-day streak</b><small>Keep it alive</small></div></div>
                  </div>
                </div>

                {/* Journey */}
                <div className="ps-launch" id="ps-jr">
                  <div className="splash" style={{ background: '#fff' }}><i className="splash-ic" style={{ background: '#fff' }}>{Ico.notes}</i></div>
                  <div className="ui">
                    <div className="jr-ui">
                      <div className="hd"><span>‹ Notes</span><span>Share</span></div>
                      <h3>Journey</h3>
                      <div className="sub">10+ years · 4 companies · Mumbai &amp; Pune</div>
                      <div className="jr-list">
                        {JOURNEY.map((j) => (
                          <div key={j.c} className={'jr-item' + (j.now ? ' now' : '')}>
                            <div className="y">{j.y}</div><b>{j.c}</b><small>{j.r}</small>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <div className="ps-launch" id="ps-ms">
                  <div className="splash" style={{ background: 'linear-gradient(180deg,#6af07f,#1fbf3d)' }}><i className="splash-ic">{Ico.messages}</i></div>
                  <div className="ui">
                    <div className="ms-ui">
                      <div className="ms-top"><img className="av" src={profile} alt="" /><b>Mujtaba Khan ›</b></div>
                      <div className="ms-body">
                        <div className="ms-day">Today {time}</div>
                        <div className="bub in" id="ps-b1">Hi Mujtaba! 👋 I have an app idea — can you build it?</div>
                        <div className="typing" id="ps-typing"><i /><i /><i /></div>
                        <div className="bub out" id="ps-b2">Love it. iPhone, Android or both? Let's plan it together.</div>
                      </div>
                      <div className="ms-actions">
                        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="wa">WhatsApp</a>
                        <a href={EMAIL}>Email</a>
                        <a href={resume} download="Mujtaba_Khan_iOS_Developer.pdf">Résumé</a>
                      </div>
                      <div className="ms-input">iMessage</div>
                    </div>
                  </div>
                </div>

                <div className="ps-homebar" />
              </div>
            </div>
          </div>

          <div className="ps-corner micro">Scroll to unlock ↓</div>
        </div>
      </div>
    </section>
  );
}
