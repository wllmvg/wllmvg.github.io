import { useEffect, useRef, useState } from "react";
import { AnimatePresence, LayoutGroup, MotionConfig, motion } from "framer-motion";
import { ArrowUp, ArrowUpRight, Download, Mail } from "lucide-react";
import photo from "../assets/foto_perfil_william.png";
import { EMAIL, LINKS, certs, cvHref, path, projects, stack, ui, type Area, type Lang, type T } from "./content";

// Motion with mass: a slight settle, never a wobble.
// Projects without a public screenshot get a wireframe drawn in code, in the site's gray ramp.
const TILES = [2, 3, 4, 2, 5, 3, 4, 2, 3, 5, 2, 4, 3, 4, 2, 5, 3, 2];
function Wireframe({ id }: { id: string }) {
  if (id === "finance") return (
    <div className="wf-phone">
      <i className="wf-l" style={{ width: "55%" }} />
      <i className="wf-hero" />
      {[80, 60, 72, 45].map((w, i) => <i key={i} className={i === 1 ? "wf-l hi" : "wf-l"} style={{ width: w + "%" }} />)}
    </div>
  );
  return (
    <div className="wf-browser">
      <i className="wf-bar" />
      <div className="wf-grid">{TILES.map((g, i) => <i key={i} style={{ background: `var(--g${g})` }} />)}</div>
    </div>
  );
}

const settle = { type: "spring", duration: 0.45, bounce: 0.18 } as const;
const leave = { duration: 0.18, ease: [0.23, 1, 0.32, 1] } as const;
type Filter = "all" | Area;

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "es") return saved;
  } catch { /* storage blocked: fall through */ }
  return navigator.language?.toLowerCase().startsWith("es") ? "es" : "en";
}

export default function App() {
  const [lang, setLang] = useState<Lang>(initialLang);

  // Language change as a real crossfade: the old text fades out, swaps while invisible,
  // and the new text fades in. The swap runs on a timer, never on animation events,
  // so a paused timeline can't block it.
  const swapTimer = useRef<number | undefined>(undefined);
  const switchLang = (l: Lang) => {
    if (l === lang && swapTimer.current === undefined) return;
    const main = document.getElementById("main");
    if (!main?.animate) { setLang(l); return; }
    const calm = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ease = "cubic-bezier(0.23, 1, 0.32, 1)";
    window.clearTimeout(swapTimer.current);
    main.getAnimations().forEach((x) => x.cancel());
    main.animate(
      calm ? [{ opacity: 1 }, { opacity: 0 }]
           : [{ opacity: 1, filter: "blur(0)" }, { opacity: 0, filter: "blur(2px)" }],
      { duration: 180, easing: "ease-in", fill: "forwards" },
    );
    swapTimer.current = window.setTimeout(() => {
      swapTimer.current = undefined;
      setLang(l);
      requestAnimationFrame(() => {
        main.getAnimations().forEach((x) => x.cancel());
        const fadeIn = main.animate(
          calm ? [{ opacity: 0 }, { opacity: 1 }]
               : [{ opacity: 0, filter: "blur(2px)", transform: "translateY(6px)" }, { opacity: 1, filter: "blur(0)", transform: "none" }],
          { duration: 360, easing: ease },
        );
        // Safety net: never leave the page hidden if the browser pauses the timeline.
        window.setTimeout(() => fadeIn.finish(), 500);
      });
    }, 180);
  };
  const [filter, setFilter] = useState<Filter>("all");
  const [copied, setCopied] = useState(false);
  const [showTop, setShowTop] = useState(false);

  // Back-to-top appears once the hero is out of view.
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => {
    const calm = matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: calm ? "auto" : "smooth" });
  };
  const t = (x: T) => x[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    try { localStorage.setItem("lang", lang); } catch { /* ignore */ }
  }, [lang]);

  const shown = projects.filter((p) => filter === "all" || p.area === filter);
  const count = (f: Filter) => (f === "all" ? projects.length : projects.filter((p) => p.area === f).length);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch { /* clipboard denied: the mailto link still works */ }
  };

  const ext = { target: "_blank", rel: "noreferrer" };

  return (
    <MotionConfig reducedMotion="user">
      <a className="skip" href="#main">{t(ui.skip)}</a>

      <header className="top">
        <div className="top-in">
          <a className="mark" href="#top">W. Vega</a>
          <nav className="nav" aria-label="Sections">
            <a href="#thesis">{t(ui.nav.thesis)}</a>
            <a href="#work">{t(ui.nav.work)}</a>
            <a href="#path">{t(ui.nav.path)}</a>
            <a href="#contact">{t(ui.nav.contact)}</a>
          </nav>
          <div className="lang" role="group" aria-label="Language">
            {(["en", "es"] as const).map((l) => (
              <button key={l} aria-pressed={lang === l} onClick={() => switchLang(l)}>{l.toUpperCase()}</button>
            ))}
          </div>
          <a className="btn sm solid" href={cvHref(lang)} download>
            <Download size={15} aria-hidden /> CV
          </a>
        </div>
      </header>

      <main id="main" className="page">
        {/* Hero */}
        <section id="top" className="g hero" aria-label="William Vega">
          <h1 className="name">
            William<br />Vega
          </h1>
          <figure className="photo" style={{ margin: 0 }}>
            <img src={photo} alt={t(ui.photoAlt)} width={600} height={750} />
          </figure>

          <div className="bars" aria-hidden>
            {(["ios", "android", "web"] as const).map((b) => (
              <div key={b} className={`bar ${b}`}>
                {ui.bars[b]}
              </div>
            ))}
            <div className="cross">
              <span>{t(ui.whereNow)}</span>
            </div>
          </div>

          <div className="hero-copy">
            <p className="role">{t(ui.role)}</p>
            <p className="lede">{t(ui.lede)}</p>
            <p className="motto">“{t(ui.motto)}”</p>
          </div>
          <div className="hero-side">
            <p className="nowline">{t(ui.now)}: <b>{t(ui.role)}</b> {t(ui.nowLine)} · {t(ui.study)}</p>
            <p className="meta">{t(ui.location)}</p>
            <div className="ctas">
              <a className="btn solid" href={cvHref(lang)} download><Download size={18} aria-hidden />{t(ui.cv)}</a>
              <a className="btn" href={`mailto:${EMAIL}`}><Mail size={18} aria-hidden />{t(ui.email)}</a>
            </div>
          </div>
        </section>

        {/* Now */}
        <section className="g poster" aria-labelledby="now-h">
          <h2 id="now-h" className="ptitle mid" style={{ gridColumn: "1 / 13" }}>{t(ui.klTitle)}</h2>
          <div className="now-tag">
            <p className="who">{t(ui.role)}</p>
            <p className="small">{t(ui.klMeta)}</p>
          </div>
          <div className="now-body">
            <p className="lead">{t(ui.klBody)}</p>
            <ul className="chips">
              {["Swift", "SwiftUI", "Java", "Android", "iOS", "Git"].map((c) => <li key={c} className="chip">{c}</li>)}
            </ul>
            <p className="small">{t(ui.nda)}</p>
          </div>
        </section>

        {/* Thesis */}
        <section id="thesis" className="g poster" aria-labelledby="th-h">
          <h2 id="th-h" className="ptitle">{t(ui.thesisTitle)}</h2>
          <figure className="th-shot" style={{ margin: 0 }}>
            <img src="/screenshots/academic-platform.png" alt={t(ui.thesisTitle)} loading="lazy" width={1600} height={1000} />
          </figure>
          <div className="th-info">
            <p className="lead">{t(ui.thesisBody)}</p>
            <dl className="facts">
              {ui.facts.map((f) => (
                <div key={f.k.en} style={{ display: "contents" }}>
                  <dt>{t(f.k)}</dt>
                  <dd>{t(f.v)}</dd>
                </div>
              ))}
            </dl>
            <p className="small">{t(ui.thesisPrivate)}</p>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="g poster" aria-labelledby="work-h">
          <div className="work-head">
            <h2 id="work-h" className="ptitle" style={{ gridColumn: "auto" }}>{t(ui.workTitle)}</h2>
            <div className="filters" role="group" aria-label="Filter projects">
              {(["all", "web", "mobile", "desktop"] as const).map((f) => (
                <button key={f} aria-pressed={filter === f} onClick={() => { setFilter(f); requestAnimationFrame(() => document.querySelector(".filters")?.scrollIntoView({ block: "nearest" })); }}>
                  {t(ui.filters[f])}<sup>{count(f)}</sup>
                </button>
              ))}
            </div>
          </div>
          <LayoutGroup>
            <motion.ul className="work" layout transition={settle} style={{ minHeight: "min(420px, 60vh)" }}>
              <AnimatePresence mode="popLayout" initial={false}>
                {shown.map((p) => (
                  <motion.li
                    key={p.id}
                    layout
                    className="card"
                    initial={{ opacity: 0, transform: "translateY(24px)" }}
                    animate={{ opacity: 1, transform: "translateY(0px)" }}
                    exit={{ opacity: 0, transform: "scale(0.96)", transition: leave }}
                    transition={settle}
                  >
                    {p.img
                      ? <div className="shot"><img src={p.img} alt={`${p.name} screenshot`} loading="lazy" width={1440} height={900} /></div>
                      : <div className="noshot" aria-hidden><Wireframe id={p.id} /></div>}
                    <h3>{p.name} <small>{t(p.team ? ui.team : ui.solo)}</small></h3>
                    <p>{t(p.desc)}</p>
                    <p className="stk">{p.stack}</p>
                    <div className="links">
                      {p.live && <a className="lnk" href={p.live} {...ext}>{t(ui.live)} <ArrowUpRight size={16} aria-hidden /></a>}
                      {p.code && <a className="lnk" href={p.code} {...ext}>{t(ui.code)} <ArrowUpRight size={16} aria-hidden /></a>}
                    </div>
                  </motion.li>
                ))}
              </AnimatePresence>
            </motion.ul>
          </LayoutGroup>
        </section>

        {/* Stack */}
        <section className="g poster" aria-labelledby="stack-h">
          <h2 id="stack-h" className="ptitle mid">{t(ui.stackTitle)}</h2>
          <div className="stack">
            {stack.map((s) => (
              <div key={s.area.en}>
                <h3>{t(s.area)}</h3>
                <p>{s.items}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Path */}
        <section id="path" className="g poster" aria-labelledby="path-h">
          <h2 id="path-h" className="ptitle">{t(ui.pathTitle)}</h2>
          <ol className="path" style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {path.map((p) => (
              <li key={p.years + p.where} className={p.now ? "now" : undefined}>
                <span className="y">{p.years}</span>
                <span className="w">{t(p.what)}<span>{p.where}</span></span>
                <span className="n">{p.note ? t(p.note) : ""}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Certificates */}
        <section className="g poster" aria-labelledby="cert-h">
          <h2 id="cert-h" className="ptitle mid">{t(ui.certTitle)}</h2>
          <div className="certs">
            {certs.map((c) => (
              <a key={c.file} className="cert" href={`/certificates/${c.file}.pdf`} {...ext}>
                <div className="doc"><img src={`/certificates/${c.file}.jpg`} alt="" loading="lazy" /></div>
                <b>{t(c.name)}</b>
                <span>{c.org} · {c.year} · {t(ui.openPdf)} ↗</span>
              </a>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="g poster" aria-labelledby="contact-h">
          <h2 id="contact-h" className="ptitle">{t(ui.contactTitle)}</h2>
          <p className="lead" style={{ gridColumn: "1 / -1" }}>{t(ui.contactBody)}</p>
          <div className="mail">
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <button className="btn sm" onClick={copyEmail} aria-live="polite">{t(copied ? ui.copied : ui.copy)}</button>
          </div>
          <div className="contact-row">
            <a className="btn solid" href={cvHref(lang)} download><Download size={18} aria-hidden />{t(ui.cv)}</a>
            <a className="btn" href={LINKS.linkedin} {...ext}>LinkedIn <ArrowUpRight size={18} aria-hidden /></a>
            <a className="btn" href={LINKS.github} {...ext}>GitHub <ArrowUpRight size={18} aria-hidden /></a>
          </div>
        </section>

        <footer className="foot">
          <span>© 2026 William Felipe Melgarejo Vega</span>
        </footer>
      </main>

      <button
        className={showTop ? "totop on" : "totop"}
        onClick={toTop}
        aria-label={t(ui.toTop)}
        title={t(ui.toTop)}
        tabIndex={showTop ? 0 : -1}
        aria-hidden={!showTop}
      >
        <ArrowUp size={22} aria-hidden />
      </button>
    </MotionConfig>
  );
}
