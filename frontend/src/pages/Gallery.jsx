// src/pages/Gallery.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, PlayCircle, X } from "lucide-react";
import { Helmet } from "react-helmet-async";

const MEDIA = [
  // HERO — these appear in the slider
  {
    id: "IMG2",
    type: "image",
    src: "/media/gallery/IMG2.jpg",
    short: "Wrap & batts — envelope",
    hero: true,
    tags: ["wrap", "new-build", "envelope"],
  },
  {
    id: "IMG-20250908-WA0024",
    type: "image",
    src: "/media/gallery/IMG-20250908-WA0024.jpg",
    short: "Façade wrap & tapes",
    hero: true,
    tags: ["new-build", "wrap", "envelope"],
  },
  
  {
    id: "IMG-20250908-WA0046",
    type: "image",
    src: "/media/gallery/IMG-20250908-WA0046.jpg",
    short: "Façade wrap & tapes",
    hero: true,
    tags: ["new-build", "wrap", "envelope"],
  },
  {
    id: "IMG-20250908-WA0052",
    type: "image",
    src: "/media/gallery/IMG-20250908-WA0052.jpg",
    short: "Windows wrapped & sealed",
    hero: true,
    tags: ["new-build", "wrap", "windows"],
  },
  {
    id: "IMG33",
    type: "image",
    src: "/media/gallery/IMG33.jpg",
    short: "Façade wrap & tapes",
    hero: true,
    tags: ["new-build", "wrap", "envelope"],
  },
  {
    id: "IMG-20250908-WA0026",
    type: "image",
    src: "/media/gallery/IMG-20250908-WA0026.jpg",
    short: "Façade wrap & tapes",
    hero: true,
    tags: ["new-build", "wrap", "envelope"],
  },
  
{
    id: "IMG-20250908-WA0061",
    type: "image",
    src: "/media/gallery/IMG-20250908-WA0061.jpg",
    short: "Façade wrap & tapes",
    hero: true,
    tags: ["new-build", "wrap", "envelope"],
  },
  
  {
    id: "IMG-20250908-WA0064",
    type: "image",
    src: "/media/gallery/IMG-20250908-WA0064.jpg",
    short: "Upper-storey wrap",
    hero: true,
    tags: ["new-build", "wrap", "upper-storey"],
  },
    
  {
    id: "IMG-20250908-WA0063",
    type: "image",
    src: "/media/gallery/IMG-20250908-WA0063.jpg",
    short: "Façade wrap & tapes",
    hero: true,
    tags: ["new-build", "wrap", "envelope"],
  },
  {
    id: "IMG-20250908-WA0027",
    type: "image",
    src: "/media/gallery/IMG-20250908-WA0027.jpg",
    short: "Façade wrap & tapes",
    hero: true,
    tags: ["new-build", "wrap", "envelope"],
  },
  
  {
    id: "IMG-20250908-WA0083",
    type: "image",
    src: "/media/gallery/IMG-20250908-WA0083.jpg",
    short: "Façade detailing",
    hero: true,
    tags: ["new-build", "wrap", "flashing"],
  },
    
  {
    id: "IMG-20250908-WA0068",
    type: "image",
    src: "/media/gallery/IMG-20250908-WA0068.jpg",
    short: "Façade wrap & tapes",
    hero: true,
    tags: ["new-build", "wrap", "envelope"],
  },
    
  {
    id: "IMG-20250908-WA0069",
    type: "image",
    src: "/media/gallery/IMG-20250908-WA0069.jpg",
    short: "Façade wrap & tapes",
    hero: true,
    tags: ["new-build", "wrap", "envelope"],
  },
  {
    id: "IMG-20250908-WA0086",
    type: "image",
    src: "/media/gallery/IMG-20250908-WA0086.jpg",
    short: "Wrap — penetrations sealed",
    hero: true,
    tags: ["new-build", "wrap", "services"],
  },
  {
    id: "IMG-20250908-WA0093",
    type: "image",
    src: "/media/gallery/IMG-20250908-WA0093.jpg",
    short: "Townhouse row — wrap",
    hero: true,
    tags: ["new-build", "wrap", "multi-dwelling"],
  },
  {
    id: "IMG-20250908-WA0095",
    type: "image",
    src: "/media/gallery/IMG-20250908-WA0095.jpg",
    short: "Corner elevation — wrap",
    hero: true,
    tags: ["new-build", "wrap", "envelope"],
  },
  {
    id: "IMG-20250908-WA0072-hero",
    type: "image",
    src: "/media/gallery/IMG-20250908-WA0072.jpg",
    short: "Wrap & batten stage",
    hero: true,
    tags: ["new-build", "wrap", "batten"],
  },
  {
    id: "IMG-20250908-WA0023",
    type: "image",
    src: "/media/gallery/IMG-20250908-WA0023.jpg",
    short: "Façade progress",
    hero: true,
    tags: ["new-build", "wrap", "progress"],
  },
  {
    id: "IMG-20250908-WA0056",
    type: "image",
    src: "/media/gallery/IMG-20250908-WA0056.jpg",
    short: "Acoustic wall batts — media room",
    hero: true,
    tags: ["acoustic", "walls", "media-room"],
  },

  // GRID — the rest of the gallery
  {
  id: "IMG-20250908-WA0021",
  type: "image",
  src: "/media/gallery/IMG-20250908-WA0021.jpg",
  short: "Underfloor foilboard installation",
  alt: "ThermaFloor foilboard panels neatly fitted between joists for underfloor insulation at a residential site.",
  tags: ["underfloor", "foilboard", "residential"],
  },
  {
  id: "IMG-20250908-WA0062",
  type: "image",
  src: "/media/gallery/IMG-20250908-WA0062.jpg",
  short: "Wall wrap installation",
  alt: "Protective wall wrap installed on external framing to act as a weather barrier and improve building insulation performance.",
  tags: ["wrap", "wall", "new-build", "residential"],
  },
  {
  id: "IMG-20250908-WA0076",
  type: "image",
  src: "/media/gallery/IMG-20250908-WA0076.jpg",
  short: "Branded wall wrap installation",
  alt: "AHF Insulation branded wall wrap securely installed on upper level external framing for weather protection and insulation performance.",
  tags: ["wrap", "wall", "branding", "new-build", "residential"],
  },
  {
  id: "IMG-20250908-WA0028",
  type: "image",
  src: "/media/gallery/IMG-20250908-WA0028.jpg",
  short: "Wall & ceiling batts installation",
  alt: "Full coverage of thermal and acoustic batts installed in walls and ceiling framing of a new residential build.",
  tags: ["walls", "ceiling", "batts", "new-build", "residential"],
 },
  {
  id: "IMG-20250908-WA0044",
  type: "image",
  src: "/media/gallery/IMG-20250908-WA0044.jpg",
  short: "Underfloor polyester insulation",
  alt: "Polyester underfloor insulation laid snugly between joists to improve thermal efficiency and comfort in a residential home.",
  tags: ["underfloor", "polyester", "residential"],
},
  {
    id: "IMG-20250908-WA0085",
    type: "image",
    src: "/media/gallery/IMG-20250908-WA0085.jpg",
    short: "Mineral wool — garage boundary",
    alt: "Non-combustible mineral wool installed to the garage boundary wall in line with NCC fire separation.",
    tags: ["fire-resistant", "garage", "ncc"],
  },
  {
  id: "IMG-20250908-WA0074",
  type: "image",
  src: "/media/gallery/IMG-20250908-WA0074.jpg",
  short: "Upper level wall wrap installation",
  alt: "AHF Insulation branded white wall wrap installed on the upper level of a residential build, providing a weather barrier and insulation support.",
  tags: ["wrap", "wall", "new-build", "residential"],
  },

  {
  id: "IMG-20250908-WA0066",
  type: "image",
  src: "/media/gallery/IMG-20250908-WA0066.jpg",
  short: "Blue external wall wrap",
  alt: "Blue Solitex external wall wrap installed with sealed joints to provide a weather-tight barrier and enhance insulation performance.",
  tags: ["wrap", "wall", "blue", "new-build", "residential"],
  },
  {
  id: "IMG-20250908-WA0050",
  type: "image",
  src: "/media/gallery/IMG-20250908-WA0050.jpg",
  short: "Cathedral ceiling & wall batts",
  alt: "Thermal and acoustic batts installed in cathedral ceiling and wall framing of a new residential build for improved comfort and energy efficiency.",
  tags: ["ceiling", "walls", "batts", "new-build", "residential"],
  },
  
  {
  id: "IMG-20250908-WA0048",
  type: "image",
  src: "/media/gallery/IMG-20250908-WA0048.jpg",
  short: "Blue wall wrap on townhouse build",
  alt: "AHF Insulation branded blue wall wrap applied across a multi-unit townhouse project, providing weather protection and insulation performance.",
  tags: ["wrap", "wall", "blue", "new-build", "residential"],
  },

  {
  id: "IMG-20250908-WA0072",
  type: "image",
  src: "/media/gallery/IMG-20250908-WA0072.jpg",
  short: "White wall wrap on steel frame build",
  alt: "AHF Insulation branded white wall wrap installed on a steel frame residential project, providing weatherproofing and insulation support.",
  tags: ["wrap", "wall", "white", "new-build", "residential"],
  },

  {
  id: "IMG11",
  type: "image",
  src: "/media/gallery/IMG11.jpg",
  short: "Blue Solitex wall wrap install",
  alt: "Blue Solitex wall wrap fitted and taped to timber framing, providing a weather-tight seal and enhancing insulation performance in a new residential build.",
  tags: ["wrap", "wall", "blue", "new-build", "residential"],
  },
  {
  id: "IMG-20250908-WA0071",
  type: "image",
  src: "/media/gallery/IMG-20250908-WA0071.jpg",
  short: "White wall wrap on steel frame build",
  alt: "AHF Insulation branded white wall wrap installed on a steel frame residential structure, providing weatherproofing and insulation support.",
  tags: ["wrap", "wall", "white", "steel-frame", "new-build", "residential"],
  },

 {
  id: "IMG-20250908-WA0087",
  type: "image",
  src: "/media/gallery/IMG-20250908-WA0087.jpg",
  short: "Blue wall wrap with window detailing",
  alt: "AHF Insulation branded blue wall wrap installed with precise detailing around window openings for a weather-tight and energy-efficient seal.",
  tags: ["wrap", "wall", "blue", "new-build", "residential"],
},

  {
  id: "IMG-20250908-WA0089",
  type: "image",
  src: "/media/gallery/IMG-20250908-WA0089.jpg",
  short: "Upper level blue wall wrap",
  alt: "AHF Insulation branded blue wall wrap installed on the upper level of a residential build, with detailed sealing around window frames for weather protection and insulation performance.",
  tags: ["wrap", "wall", "blue", "upper-level", "new-build", "residential"],
  },
 
  {
  id: "IMG-20250908-WA0091",
  type: "image",
  src: "/media/gallery/IMG-20250908-WA0091.jpg",
  short: "Blue wall wrap with window seal",
  alt: "AHF Insulation branded blue wall wrap carefully detailed and sealed around window frames to ensure weatherproofing and energy efficiency in a new residential build.",
  tags: ["wrap", "wall", "blue", "window-detailing", "new-build", "residential"],
  },
  {
  id: "IMG-20250908-WA0094",
  type: "image",
  src: "/media/gallery/IMG-20250908-WA0094.jpg",
  short: "Blue wall wrap on upper level",
  alt: "AHF Insulation branded blue wall wrap installed on the upper level external walls, with clean detailing around window frames for a weather-tight finish.",
  tags: ["wrap", "wall", "blue", "upper-level", "window-detailing", "new-build", "residential"],
},

];


/* =========================== PAGE =========================== */

export default function Gallery() {
  const heroItems = useMemo(() => MEDIA.filter(m => m.hero), []);
  const gridItems = useMemo(() => MEDIA.filter(m => !m.hero), []);
  const [active, setActive] = useState(null); // lightbox item

  return (
    <>
      <Helmet>
        <title> AHF Gallery | AHF Insulation Melbourne</title>
        <meta
          name="description"
          content="Recent insulation projects across Melbourne: neat installs, clean job sites, quality materials. See the workmanship."
        />
        <link rel="canonical" href="https://www.ahfinsulation.com/gallery" />

        {/* Open Graph */}
        <meta property="og:title" content="AHF Insulation — Project Gallery" />
        <meta property="og:description" content="Browse completed insulation projects in Melbourne." />
        <meta property="og:url" content="https://www.ahfinsulation.com/gallery" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.ahfinsulation.com/og/gallery-hero.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* JSON-LD: Breadcrumbs (helps Google understand page hierarchy) */}
        <script type="application/ld+json">
          {`{
            "@context":"https://schema.org",
            "@type":"BreadcrumbList",
            "itemListElement":[
              {"@type":"ListItem","position":1,"name":"Home","item":"https://www.ahfinsulation.com/"},
              {"@type":"ListItem","position":2,"name":"Gallery","item":"https://www.ahfinsulation.com/gallery"}
            ]
          }`}
        </script>
      </Helmet>

    <div className="w-full">
      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-navy text-white">
        <div className="container mx-auto px-6 pt-16 pb-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold"
          >
            Witness the <span className="text-brand-blue">Insulation</span> We’ve Done
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-2xl mx-auto text-white/85"
          >
            Real projects across Melbourne — cleaner installs, higher R-values, quieter rooms.
          </motion.p>
        </div>

        {/* Slider */}
        <div className="container mx-auto px-6 pb-8">
          <HeroSlider items={heroItems} onOpen={setActive} />
        </div>

        {/* Decorative shapes (click-through so header stays clickable) */}
        <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-2xl bg-white/10 blur-md" />
        <div className="pointer-events-none absolute -bottom-10 -left-10 h-48 w-48 rotate-12 rounded-3xl bg-brand-blue/30 blur-[2px]" />
      </section>

      {/* MARQUEE */}
      <section className="bg-brand-mist">
        <div className="container mx-auto px-6 py-10">
          <Marquee items={MEDIA} />
        </div>
      </section>

      {/* MASONRY GRID */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-6">More from our sites</h2>

          {gridItems.length === 0 ? (
            <div className="text-center text-gray-500 py-20">No media yet.</div>
          ) : (
            <div className="columns-1 sm:columns-2 xl:columns-3 gap-5 [column-fill:_balance]">
              {gridItems.map((m) => (
                <MasonryTile key={m.id} item={m} onOpen={setActive} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {active && (
          <Lightbox onClose={() => setActive(null)}>
            {active.type === "image" ? (
              <img
                src={active.src}
                alt={active.alt || ""}
                className="max-h-[80vh] w-auto rounded-2xl shadow-2xl"
              />
            ) : (
              <video
                src={active.src}
                poster={active.poster}
                className="max-h-[80vh] w-auto rounded-2xl shadow-2xl"
                controls
                autoPlay
                loop
                muted
                playsInline
              />
            )}
            <div className="mt-3 text-center text-white/90 text-sm">{active.alt}</div>
          </Lightbox>
        )}
      </AnimatePresence>
    </div>
    </>
  );
}

/* ======================== COMPONENTS ======================== */

function HeroSlider({ items, onOpen }) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const vidsRef = useRef({});

  // Autoplay (pause on hover or when not visible)
  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), 5000);
    return () => clearInterval(id);
  }, [playing, items.length]);

  // Play active video, pause others
  useEffect(() => {
    Object.values(vidsRef.current).forEach((v) => v && v.pause && v.pause());
    const active = vidsRef.current[items[index]?.id];
    if (active && active.play) {
      active.currentTime = 0;
      active.play().catch(() => {});
    }
  }, [index, items]);

  // Progress bar animation key (reset each slide)
  const progressKey = `p-${index}`;

  return (
    <div
      className="relative overflow-hidden rounded-2xl bg-black/10"
      onMouseEnter={() => setPlaying(false)}
      onMouseLeave={() => setPlaying(true)}
    >
      <div className="relative h-[52vw] max-h-[520px] w-full">
        {/* Cross-fade slides */}
        {items.map((item, i) => {
          const isActive = i === index;
          return (
            <AnimatePresence key={item.id}>
              {isActive && (
                <motion.div
                  initial={{ opacity: 0.0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.01 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <button
                    className="group size-full"
                    onClick={() => onOpen?.(item)}
                    aria-label="Open media"
                  >
                    {item.type === "image" ? (
                      <img
                        src={item.src}
                        alt={item.alt || ""}
                        className="h-full w-full object-cover"
                        loading="eager"
                      />
                    ) : (
                      <div className="relative h-full w-full">
                        <video
                          ref={(el) => (vidsRef.current[item.id] = el)}
                          src={item.src}
                          poster={item.poster}
                          className="h-full w-full object-cover"
                          muted
                          loop
                          playsInline
                        />
                        <PlayCircle className="absolute inset-0 m-auto h-16 w-16 text-white/95 drop-shadow group-hover:scale-110 transition-transform" />
                      </div>
                    )}
                  </button>

                  {/* Caption strip */}
                  {item.alt ? (
                    <div className="pointer-events-none absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-4">
                      <div className="text-white/95 text-sm">{item.alt}</div>
                    </div>
                  ) : null}
                </motion.div>
              )}
            </AnimatePresence>
          );
        })}
      </div>

      {/* Controls */}
      <button
        aria-label="Previous"
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur hover:bg-black/60"
        onClick={() => setIndex((i) => (i - 1 + items.length) % items.length)}
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        aria-label="Next"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur hover:bg-black/60"
        onClick={() => setIndex((i) => (i + 1) % items.length)}
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 w-2 rounded-full transition ${
              index === i ? "bg-white" : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* Progress bar*/}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 overflow-hidden">
        {/** Key changes on slide, retriggering animation */}
        <motion.div
          key={progressKey}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear" }}
          className="h-full bg-gradient-to-r from-brand-blue to-brand-navy"
        />
      </div>
    </div>
  );
}

function Marquee({ items, speed = 40 }) {
  // duplicate items for seamless loop
  const list = [...items, ...items];

  return (
    <div className="relative overflow-hidden rounded-2xl bg-white shadow-inner">
      <motion.div
        className="flex gap-4 py-4"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: speed, ease: "linear" }}
        style={{ width: "200%" }}
      >
        {list.map((m, idx) => (
          <div
            key={`${m.id}-${idx}`}
            className="relative h-28 w-48 shrink-0 overflow-hidden rounded-xl bg-black/5"
            title={m.alt || ""}
          >
            {m.type === "image" ? (
              <img src={m.src} alt="" className="h-full w-full object-cover" loading="lazy" />
            ) : (
              <>
                {m.poster ? (
                  <img src={m.poster} alt="" className="h-full w-full object-cover" loading="lazy" />
                ) : (
                  <div className="h-full w-full bg-black/30" />
                )}
                <PlayCircle className="absolute inset-0 m-auto h-8 w-8 text-white drop-shadow" />
              </>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function MasonryTile({ item, onOpen }) {
  const isVideo = item.type === "video";
  return (
    <motion.button
      onClick={() => onOpen?.(item)}
      whileHover={{ y: -2 }}
      className="mb-5 w-full break-inside-avoid overflow-hidden rounded-2xl bg-white shadow hover:shadow-md text-left"
    >
      <div className="relative">
        {isVideo ? (
          <>
            {item.poster ? (
              <img src={item.poster} alt={item.alt || ""} className="w-full object-cover" loading="lazy" />
            ) : (
              <div className="aspect-[4/3] w-full bg-black/30" />
            )}
            <PlayCircle className="absolute inset-0 m-auto h-10 w-10 text-white drop-shadow" />
          </>
        ) : (
          <img src={item.src} alt={item.alt || ""} className="w-full object-cover" loading="lazy" />
        )}
      </div>
      {item.alt ? (
        <div className="p-3 text-sm text-brand-navy/90">{item.alt}</div>
      ) : null}
    </motion.button>
  );
}

function Lightbox({ children, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* Prevent backdrop click from closing when clicking content */}
      <div onClick={(e) => e.stopPropagation()} className="relative">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute -top-10 right-0 rounded-full bg-white/90 p-2 text-brand-navy shadow hover:bg-white"
        >
          <X className="h-5 w-5" />
        </button>
        {children}
      </div>
    </motion.div>
  );
}
