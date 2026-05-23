import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ArrowLeft,
  CheckCircle,
  XCircle,
  User,
  RotateCcw,
  Shield,
  Droplets,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ─── Gold palette ──────────────────────────────────────────────────────────────
const GOLD = "#D4AF37";
const GOLD_LIGHT = "#F0CE6A";
const GOLD_DIM = "rgba(212,175,55,0.5)";
const GOLD_FAINT = "rgba(212,175,55,0.12)";

// ─── Data ─────────────────────────────────────────────────────────────────────
// Drop square JPGs in public/staff/ named by staffId (e.g. BID-00001.jpg)
const staffData = [
  {
    id: 1,
    name: "C M Moin",
    position: "Founder & CEO",
    staffId: "BID-00001",
    serial: "000001-A",
    phone: "8801795711110",
    blood: "A+",
    nid: "",
    status: "Active",
  },
  {
    id: 2,
    name: "Musa Islam",
    position: "Coordinator",
    staffId: "BID-000012",
    serial: "000012-A",
    phone: "8801334943787",
    blood: "O+",
    nid: "9156498710",
    status: "Active",
  },
  {
    id: 3,
    name: "MD ZAMIL KHAN",
    position: "Sales Officer",
    staffId: "BID-000020",
    serial: "000020-A",
    phone: "8801831446222",
    blood: "B-",
    nid: "",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Nadim Ahmed",
    position: "Senior Customer Happiness Officer",
    staffId: "BID-000014",
    serial: "000014-A",
    phone: "8801828688144",
    blood: "A+",
    nid: "3311776045",
    status: "Active",
  },
  {
    id: 5,
    name: "Rakibul Hasan Joy",
    position: "Software Innovation & System Engineer",
    staffId: "BID-000016",
    serial: "000016-A",
    phone: "8801714532308",
    blood: "O+",
    nid: "1510361163",
    status: "Active",
  },
  {
    id: 6,
    name: "Md. Shoykod Hossain",
    position: "Assistant Sales Manager",
    staffId: "BID-000019",
    serial: "000019-A",
    phone: "8801334943788",
    blood: "AB+",
    nid: "1019492261",
    status: "Active",
  },
  {
    id: 7,
    name: "Md. Tanjil Islam",
    position: "Creative Media Producer Officer",
    staffId: "BID-000015",
    serial: "000015-A",
    phone: "8801846984686",
    blood: "B+",
    nid: "6001617437",
    status: "Active",
  },
];

// ─── Utilities ────────────────────────────────────────────────────────────────
function normalizePhone(raw) {
  let d = raw.replace(/[\s\-().+]/g, "");
  if (d.startsWith("880")) d = "0" + d.slice(3);
  return d;
}
function formatPhone(raw) {
  const l = normalizePhone(raw);
  return `+880 ${l.slice(1, 4)} ${l.slice(4, 7)} ${l.slice(7)}`;
}
function phoneMatches(stored, q) {
  if (!q) return true;
  const s = q.replace(/[\s\-().+]/g, "");
  const n = normalizePhone(stored);
  return (
    n.includes(s) || stored.includes(s) || ("880" + n.slice(1)).includes(s)
  );
}

const bloodPalette = {
  "A+": { bg: "rgba(239,68,68,0.15)", text: "#FCA5A5", dot: "#EF4444" },
  "A-": { bg: "rgba(239,68,68,0.15)", text: "#FCA5A5", dot: "#EF4444" },
  "B+": { bg: "rgba(249,115,22,0.15)", text: "#FDBA74", dot: "#F97316" },
  "B-": { bg: "rgba(249,115,22,0.15)", text: "#FDBA74", dot: "#F97316" },
  "O+": { bg: "rgba(59,130,246,0.15)", text: "#93C5FD", dot: "#3B82F6" },
  "O-": { bg: "rgba(59,130,246,0.15)", text: "#93C5FD", dot: "#3B82F6" },
  "AB+": { bg: "rgba(168,85,247,0.15)", text: "#C4B5FD", dot: "#A855F7" },
  "AB-": { bg: "rgba(168,85,247,0.15)", text: "#C4B5FD", dot: "#A855F7" },
};

// ─── Reusable glass styles ─────────────────────────────────────────────────────
const glassCard = {
  background: "rgba(255, 255, 255, 0.72)",
  backdropFilter: "blur(20px) saturate(150%)",
  WebkitBackdropFilter: "blur(20px) saturate(150%)",
  border: `1px solid rgba(212,175,55,0.22)`,
  boxShadow: [
    "0 20px 48px rgba(0,0,0,0.09)",
    "0 4px 12px rgba(0,0,0,0.05)",
    "inset 0 1px 0 rgba(255,255,255,1)",
    `inset 1px 0 0 rgba(212,175,55,0.06)`,
  ].join(", "),
};

const glassBack = {
  background: "linear-gradient(145deg, #1c150a 0%, #0d1b0e 45%, #0a0f07 100%)",
  backdropFilter: "blur(24px) saturate(160%)",
  WebkitBackdropFilter: "blur(24px) saturate(160%)",
  border: `1px solid rgba(212,175,55,0.13)`,
  boxShadow: [
    "0 32px 64px rgba(0,0,0,0.7)",
    `inset 0 1px 0 rgba(212,175,55,0.1)`,
    "inset 0 -1px 0 rgba(0,0,0,0.3)",
  ].join(", "),
};

// ─── Flip Card ────────────────────────────────────────────────────────────────
function StaffCard({ staff, index }) {
  const [flipped, setFlipped] = useState(false);
  const [imgErr, setImgErr] = useState(false);
  const phone = formatPhone(staff.phone);
  const blood = bloodPalette[staff.blood] ?? {
    bg: "rgba(255,255,255,0.08)",
    text: "#fff",
    dot: "#fff",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div style={{ perspective: "1400px" }}>
        <motion.div
          whileHover={{
            y: -9,
            transition: { duration: 0.22, ease: "easeOut" },
          }}
          className="cursor-pointer"
          onClick={() => setFlipped((f) => !f)}
        >
          <motion.div
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            style={{
              transformStyle: "preserve-3d",
              position: "relative",
              width: "100%",
              height: "420px",
            }}
          >
            {/* ══ FRONT ══════════════════════════════════════════════════════ */}
            <div
              style={{
                ...glassCard,
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
              className="absolute inset-0 rounded-[20px] overflow-hidden"
            >
              {/* Corner gold shimmer — top-left */}
              <div
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(212,175,55,0.11) 0%, transparent 42%)",
                }}
              />

              {/* Photo */}
              <div className="relative h-[262px] overflow-hidden">
                {!imgErr ? (
                  <img
                    src={`/staff/${staff.staffId}.jpg`}
                    alt={staff.name}
                    className="w-full h-full object-cover object-top"
                    onError={() => setImgErr(true)}
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, #f0f7f0 0%, #e8f5ea 100%)",
                    }}
                  >
                    <div
                      className="w-28 h-28 rounded-full flex items-center justify-center"
                      style={{
                        background: GOLD_FAINT,
                        border: `1px solid rgba(212,175,55,0.2)`,
                      }}
                    >
                      <User className="w-14 h-14" style={{ color: GOLD_DIM }} />
                    </div>
                  </div>
                )}

                {/* Status pill */}
                <div className="absolute top-3 right-3 z-20">
                  <span
                    className={`flex items-center gap-1.5 text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-md shadow-lg ${
                      staff.status === "Active"
                        ? "bg-emerald-500/75 text-white"
                        : "bg-red-500/75 text-white"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        staff.status === "Active"
                          ? "bg-white animate-pulse"
                          : "bg-white/50"
                      }`}
                    />
                    {staff.status}
                  </span>
                </div>

                {/* Photo → info fade (matches light page bg) */}
                <div
                  className="absolute bottom-0 inset-x-0 h-24 z-10 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.55) 55%, transparent 100%)",
                  }}
                />
              </div>

              {/* Info strip */}
              <div
                className="relative z-20 px-5 pt-3 pb-5"
                style={{
                  height: "158px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h3 className="font-bold text-gray-900 text-lg leading-tight truncate">
                    {staff.name}
                  </h3>
                  <p className="text-sm mt-0.5 leading-snug line-clamp-2 text-gray-500">
                    {staff.position}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <span
                    className="text-[11px] font-mono font-bold px-3 py-1.5 rounded-full"
                    style={{
                      color: GOLD,
                      border: `1px solid rgba(212,175,55,0.3)`,
                      background: "rgba(212,175,55,0.09)",
                    }}
                  >
                    {staff.staffId}
                  </span>
                  <span
                    className="flex items-center gap-1 text-xs italic"
                    style={{ color: "rgba(212,175,55,0.55)" }}
                  >
                    flip to verify <RotateCcw className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>

            {/* ══ BACK ═══════════════════════════════════════════════════════ */}
            <div
              style={{
                ...glassBack,
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
              className="absolute inset-0 rounded-[20px] overflow-hidden"
            >
              {/* Gold radial shimmer — top-left */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at 28% 12%, rgba(212,175,55,0.16) 0%, transparent 55%)",
                }}
              />

              {/* Gold dot-grid texture */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(212,175,55,0.12) 1px, transparent 1px)",
                  backgroundSize: "18px 18px",
                  opacity: 0.5,
                }}
              />

              {/* Liquid light streak */}
              <div
                className="absolute pointer-events-none"
                style={{
                  top: "-30%",
                  left: "60%",
                  width: "180px",
                  height: "300%",
                  background:
                    "linear-gradient(180deg, transparent 0%, rgba(212,175,55,0.03) 50%, transparent 100%)",
                  transform: "rotate(-25deg)",
                }}
              />

              {/* Content */}
              <div className="relative h-full p-5 flex flex-col">
                {/* Back header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1 mr-2 min-w-0">
                    <p
                      className="text-[9px] font-bold uppercase tracking-[0.2em] mb-1 flex items-center gap-1"
                      style={{ color: "rgba(212,175,55,0.6)" }}
                    >
                      <Shield className="w-2.5 h-2.5 flex-shrink-0" />
                      Bôr dé Güna · Staff Card
                    </p>
                    <h3 className="text-white font-bold text-base leading-snug truncate">
                      {staff.name}
                    </h3>
                    <p
                      className="text-xs mt-0.5 truncate"
                      style={{ color: "rgba(255,255,255,0.4)" }}
                    >
                      {staff.position}
                    </p>
                  </div>

                  <button
                    className="w-8 h-8 rounded-xl flex-shrink-0 flex items-center justify-center transition-all"
                    style={{
                      background: "rgba(212,175,55,0.08)",
                      border: "1px solid rgba(212,175,55,0.18)",
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setFlipped(false);
                    }}
                    title="Flip back"
                  >
                    <RotateCcw
                      className="w-3.5 h-3.5"
                      style={{ color: "rgba(212,175,55,0.55)" }}
                    />
                  </button>
                </div>

                {/* Gold divider */}
                <div
                  className="h-px mb-3"
                  style={{
                    background:
                      "linear-gradient(to right, transparent, rgba(212,175,55,0.35), transparent)",
                  }}
                />

                {/* Detail rows */}
                <div className="flex-1 flex flex-col justify-center space-y-[9px]">
                  {[
                    {
                      label: "Staff ID",
                      value: staff.staffId,
                      mono: true,
                      gold: true,
                    },
                    { label: "Serial", value: staff.serial, mono: true },
                    { label: "Phone", value: phone },
                    { label: "NID", value: staff.nid || "—", mono: true },
                  ].map(({ label, value, mono, gold }) => (
                    <div
                      key={label}
                      className="flex items-center justify-between py-[7px]"
                      style={{
                        borderBottom: "1px solid rgba(255,255,255,0.05)",
                      }}
                    >
                      <span
                        className="text-[10px] uppercase tracking-widest flex-shrink-0"
                        style={{ color: "rgba(255,255,255,0.3)" }}
                      >
                        {label}
                      </span>
                      <span
                        className={`text-[12px] ml-4 text-right ${mono ? "font-mono" : "font-medium"}`}
                        style={
                          gold
                            ? { color: GOLD_LIGHT, fontWeight: 700 }
                            : { color: "rgba(255,255,255,0.85)" }
                        }
                      >
                        {value}
                      </span>
                    </div>
                  ))}

                  {/* Blood group */}
                  <div className="flex items-center justify-between py-[7px]">
                    <span
                      className="text-[10px] uppercase tracking-widest flex items-center gap-1.5"
                      style={{ color: "rgba(255,255,255,0.3)" }}
                    >
                      <Droplets className="w-3 h-3" /> Blood
                    </span>
                    <span
                      className="flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-[3px] rounded-full"
                      style={{ background: blood.bg, color: blood.text }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: blood.dot }}
                      />
                      {staff.blood}
                    </span>
                  </div>
                </div>

                {/* Status footer */}
                <div
                  className="mt-3 pt-3"
                  style={{ borderTop: "1px solid rgba(212,175,55,0.1)" }}
                >
                  {staff.status === "Active" ? (
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 text-xs font-semibold">
                        Verified Active Member
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-red-400" />
                      <span className="text-red-400 text-xs font-semibold">
                        Inactive Member
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function StaffVerify() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return staffData;
    return staffData.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.staffId.toLowerCase().includes(q) ||
        phoneMatches(s.phone, q),
    );
  }, [query]);

  const activeCount = staffData.filter((s) => s.status === "Active").length;

  return (
    <>
      <Navbar />

      <main
        className="relative min-h-screen overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, #f7f8f5 0%, #ffffff 50%, #fefdf5 100%)",
        }}
      >
        {/* ── Ambient blobs for glassmorphism depth ───────────────────────── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ zIndex: 0 }}
        >
          <div
            className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(212,175,55,0.09) 0%, transparent 65%)",
              filter: "blur(50px)",
            }}
          />
          <div
            className="absolute bottom-0 -left-40 w-[600px] h-[600px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(34,197,94,0.06) 0%, transparent 65%)",
              filter: "blur(50px)",
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full"
            style={{
              background:
                "radial-gradient(ellipse, rgba(212,175,55,0.04) 0%, transparent 70%)",
              filter: "blur(70px)",
            }}
          />
        </div>

        {/* ── Hero ────────────────────────────────────────────────────────── */}
        <div
          className="relative border-b"
          style={{ borderColor: "rgba(212,175,55,0.15)", zIndex: 1 }}
        >
          <div className="container mx-auto px-4 py-8">
            {/* Title + Search: same row, space-between */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              {/* Left: title */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-4 h-4" style={{ color: GOLD }} />
                  <span
                    className="text-xs uppercase tracking-[0.15em] font-semibold"
                    style={{ color: GOLD_DIM }}
                  >
                    Staff Directory
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                  Staff <span style={{ color: GOLD }}>Verification</span>
                </h1>
                <p className="text-sm text-gray-500 mt-2 max-w-xs leading-relaxed">
                  Verify Bôr dé Güna team members by name, Staff ID, or phone
                  number
                </p>
              </div>

              {/* Right: search bar */}
              <div className="relative md:w-80 lg:w-96 flex-shrink-0">
                <div
                  className="absolute inset-0 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.88)",
                    backdropFilter: "blur(16px) saturate(1.4)",
                    WebkitBackdropFilter: "blur(16px) saturate(1.4)",
                    border: "1px solid rgba(212,175,55,0.25)",
                    boxShadow:
                      "0 4px 20px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,1)",
                  }}
                />
                <Search
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 z-10"
                  style={{ color: "rgba(212,175,55,0.5)" }}
                />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search name, ID, or phone…"
                  className="relative z-10 w-full pl-10 pr-9 py-3.5 bg-transparent outline-none text-sm text-gray-800 placeholder-gray-400"
                  style={{ caretColor: GOLD }}
                />
                <AnimatePresence>
                  {query && (
                    <motion.button
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.7 }}
                      transition={{ duration: 0.12 }}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 z-10 text-lg leading-none text-gray-400 hover:text-gray-600 transition-colors"
                      onClick={() => setQuery("")}
                    >
                      ×
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* ── Cards grid ──────────────────────────────────────────────────── */}
        <div
          className="relative container mx-auto px-4 pt-10 pb-16"
          style={{ zIndex: 1 }}
        >
          {filtered.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center py-24 text-center"
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mb-4"
                style={{
                  background: GOLD_FAINT,
                  border: "1px solid rgba(212,175,55,0.15)",
                }}
              >
                <User
                  className="w-10 h-10"
                  style={{ color: "rgba(212,175,55,0.4)" }}
                />
              </div>
              <p className="font-semibold text-lg text-gray-500">
                No staff found
              </p>
              <p className="text-sm mt-1 text-gray-400">
                Try a different name, ID, or phone.
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((staff, i) => (
                <StaffCard key={staff.id} staff={staff} index={i} />
              ))}
            </div>
          )}

          <p className="text-center text-[11px] mt-14 tracking-wide text-gray-300">
            Publicly accessible for identity verification only &nbsp;·&nbsp;
            &copy; Bôr dé Güna {new Date().getFullYear()}
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
