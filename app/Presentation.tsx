"use client";
import React, { useState, useEffect, useCallback } from "react";

/* ══════════════════════════════════════════════════════════════════
   CONSTANTS & THEME
   ══════════════════════════════════════════════════════════════════ */
const N = "#0f172a"; // Night
const G = "#22c55e"; // Green
const SM = "#64748b"; // Small/Muted
const LB = "#f8fafc"; // Light Background
const TX = "#1e293b"; // Text
const DV = "#e2e8f0"; // Divider

const TEAM = [
  { name: "ARFIN MIAH", id: "CSE2202026112", img: "/images/ARFIN MIAH CSE2202026112.jpeg" },
  { name: "MD. MUNAYAM HOSSAIN", id: "CSE2202026072", img: "/images/MD. MUNAYAM HOSSAIN CSE2202026072.jpeg" },
  { name: "MD. SHAH TAMIM", id: "CSE2202026020", img: "/images/MD. SHAH TAMIM CSE2202026020.png" },
  { name: "MD. AL MAMUN", id: "CSE2201025124", img: "/images/MD AL MAMAUN CSE2201025124.png" },
];

/* ══════════════════════════════════════════════════════════════════
   COMPONENTS
   ══════════════════════════════════════════════════════════════════ */
function Slide({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div style={{ height: "100%", background: dark ? N : "#fff", color: dark ? "#fff" : TX, padding: "40px 48px", position: "relative", overflow: "hidden" }}>
      {children}
    </div>
  );
}

function SH({ num, label, title, dark }: { num: string; label: string; title: string; dark?: boolean }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
        <span style={{ fontSize: 11, fontWeight: 900, color: G, letterSpacing: "0.15em", textTransform: "uppercase" }}>{label}</span>
        <div style={{ height: 1, flex: 1, background: dark ? "rgba(255,255,255,0.1)" : DV }} />
        <span style={{ fontFamily: "monospace", fontSize: 11, color: dark ? "rgba(255,255,255,0.4)" : SM }}>{num.padStart(2, "0")}</span>
      </div>
      <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: dark ? "#fff" : N, lineHeight: 1.1, letterSpacing: "-0.02em" }}>{title}</h2>
    </div>
  );
}

function PB({ idx }: { idx: number }) {
  const steps = ["Strategy", "Engine", "Mobile", "Results"];
  return (
    <div style={{ display: "flex", gap: 8, marginBottom: 32 }}>
      {steps.map((s, i) => (
        <div key={s} style={{ flex: 1 }}>
          <div style={{ height: 3, background: i <= idx ? G : DV, borderRadius: 2, marginBottom: 6 }} />
          <span style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", color: i === idx ? G : SM, letterSpacing: "0.05em" }}>{s}</span>
        </div>
      ))}
    </div>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return <div style={{ height: "calc(100% - 140px)", position: "relative" }}>{children}</div>;
}

function Card({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{ background: LB, border: `1px solid ${DV}`, borderRadius: 12, padding: "16px 20px", ...style }}>
      {children}
    </div>
  );
}

function Pill({ label }: { label: string }) {
  return (
    <span style={{ padding: "4px 10px", borderRadius: 6, background: "rgba(34, 197, 94, 0.1)", color: G, fontSize: 10, fontWeight: 700, border: `1px solid rgba(34, 197, 94, 0.2)` }}>
      {label}
    </span>
  );
}

/* ══════════════════════════════════════════════════════════════════
   SLIDES S1 — S10
   ══════════════════════════════════════════════════════════════════ */

/* S1 — Title */
function S1() {
  return (
    <div style={{ height: "100%", display: "flex", background: N, color: "#fff", overflow: "hidden" }}>
      <div style={{ flex: 1, padding: "60px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ width: 40, height: 4, background: G, marginBottom: 24 }} />
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.3em", color: G, textTransform: "uppercase", marginBottom: 12 }}>Capstone Project Presentation</p>
        <h1 style={{ fontSize: "4.5rem", fontWeight: 900, lineHeight: 1, marginBottom: 20 }}>ToothCare<span style={{ color: G }}>+</span></h1>
        <p style={{ fontSize: "1.4rem", color: "#94a3b8", maxWidth: 650, marginBottom: 48, lineHeight: 1.6 }}>An AI-Powered Comprehensive Dental Health Companion for Modern Oral Care.</p>
        <div style={{ display: "flex", gap: 32 }}>
          <div><p style={{ fontSize: 12, color: "#64748b", textTransform: "uppercase", marginBottom: 6, letterSpacing: "0.1em" }}>Department</p><p style={{ fontSize: 16, fontWeight: 700 }}>Computer Science & Engineering</p></div>
          <div style={{ width: 1, background: "rgba(255,255,255,0.15)" }} />
          <div><p style={{ fontSize: 12, color: "#64748b", textTransform: "uppercase", marginBottom: 6, letterSpacing: "0.1em" }}>Institution</p><p style={{ fontSize: 16, fontWeight: 700 }}>Daffodil International University</p></div>
        </div>
      </div>
    </div>
  );
}

/* S2 — Team */
function S2() {
  return (
    <Slide>
      <SH num="02" label="Introduction" title="The Development Team" />
      <PB idx={0} />
      <Body>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginTop: 20 }}>
          {TEAM.map((m, i) => (
            <Card key={i} style={{ textAlign: "center", padding: "24px 12px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ width: 120, height: 140, borderRadius: 12, background: "#e2e8f0", overflow: "hidden", marginBottom: 16, border: `1px solid ${DV}` }}>
                <img src={m.img} alt={m.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <p style={{ fontSize: 14, fontWeight: 900, color: N, marginBottom: 4, height: 40, display: "flex", alignItems: "center", justifyContent: "center" }}>{m.name}</p>
              <p style={{ fontSize: 11, color: SM, fontFamily: "monospace", letterSpacing: "0.05em" }}>{m.id}</p>
            </Card>
          ))}
        </div>
      </Body>
    </Slide>
  );
}

/* S3 — Supervisor */
function S3() {
  return (
    <Slide>
      <SH num="03" label="Introduction" title="Project Supervision" />
      <PB idx={0} />
      <Body>
        <div style={{ display: "flex", justifyContent: "center", marginTop: 40 }}>
          <div style={{ width: "100%", maxWidth: 600, padding: "40px", background: LB, border: `1px solid ${DV}`, borderRadius: 16, textAlign: "center" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: G, textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 20 }}>Guided By</p>
            <h3 style={{ fontSize: "2.8rem", fontWeight: 900, color: N, marginBottom: 12 }}>Md Shamim Hossain</h3>
            <p style={{ fontSize: "1.4rem", color: TX, fontWeight: 600, marginBottom: 32 }}>Assistant Professor</p>
            <div style={{ height: 2, background: G, width: 80, margin: "0 auto 32px" }} />
            <p style={{ fontSize: 15, color: SM, lineHeight: 1.8 }}>Department of Computer Science and Engineering<br/>Daffodil International University</p>
          </div>
        </div>
      </Body>
    </Slide>
  );
}

/* S4 — Overview */
function S4() {
  return (
    <Slide>
      <SH num="04" label="Overview" title="Project Motivation" />
      <PB idx={0} />
      <Body>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginTop: 20 }}>
          <Card style={{ padding: "32px" }}>
            <p style={{ fontSize: 56, marginBottom: 20 }}>🦷</p>
            <h4 style={{ fontSize: 24, fontWeight: 900, marginBottom: 12 }}>The Problem</h4>
            <p style={{ fontSize: 16, color: SM, lineHeight: 1.7 }}>Oral health is often neglected due to high costs, lack of awareness, and irregular checkups. Early detection of dental issues is crucial but often missed by traditional means.</p>
          </Card>
          <Card style={{ padding: "32px" }}>
            <p style={{ fontSize: 56, marginBottom: 20 }}>🚀</p>
            <h4 style={{ fontSize: 24, fontWeight: 900, marginBottom: 12 }}>The Solution</h4>
            <p style={{ fontSize: 16, color: SM, lineHeight: 1.7 }}>ToothCare+ provides an AI-driven scanning tool, real-time consultation via chat, and smart brushing tracking to promote preventive dental care for everyone.</p>
          </Card>
        </div>
        <div style={{ marginTop: 32, padding: "24px 32px", background: `${G}10`, borderRadius: 16, border: `2px solid ${G}30`, textAlign: "center" }}>
          <p style={{ fontSize: 18, color: N, fontWeight: 800 }}>Objective: To democratize dental diagnostics through computer vision and improve daily oral hygiene habits globally.</p>
        </div>
      </Body>
    </Slide>
  );
}

/* S5 — Architecture */
function S5() {
  return (
    <Slide>
      <SH num="05" label="System Architecture" title="High-Level Overview" />
      <PB idx={0} />
      <Body>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 10 }}>
          {[
            { t: "Frontend Layer", d: "Flutter Mobile App", i: "📱", g: "User Interface, Camera Integration, State Management (Provider/GetX)" },
            { t: "API Layer", d: "Django REST Framework", i: "🔌", g: "Business Logic, Authentication (JWT), RESTful Endpoints" },
            { t: "AI & Intelligence", d: "OpenAI GPT-4o Vision", i: "🧠", g: "Dental Scan Analysis, Smart Chat Assistant, JSON Output" },
            { t: "Data & Storage", d: "PostgreSQL & Redis", i: "💾", g: "Relational Data, Session Caching, Background Task Queues" }
          ].map((x, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 24, padding: "16px 28px", background: LB, border: `1px solid ${DV}`, borderRadius: 16 }}>
              <span style={{ fontSize: 32 }}>{x.i}</span>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 18, fontWeight: 900, color: N }}>{x.t} <span style={{ fontWeight: 600, color: G, marginLeft: 12, fontSize: 14 }}>{x.d}</span></p>
                <p style={{ fontSize: 14, color: SM, marginTop: 2 }}>{x.g}</p>
              </div>
            </div>
          ))}
        </div>
      </Body>
    </Slide>
  );
}

/* S6 — Deployment */
function S6() {
  return (
    <Slide>
      <SH num="06" label="Deployment" title="Cloud & Infrastructure" />
      <PB idx={0} />
      <Body>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginTop: 20 }}>
          <Card style={{ padding: "32px" }}>
            <p style={{ fontSize: 14, fontWeight: 900, color: G, marginBottom: 20, textTransform: "uppercase", letterSpacing: "0.1em" }}>Backend Infrastructure</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              {["Docker", "Gunicorn", "Nginx", "PostgreSQL", "Redis", "Celery", "Redis Stack", "WhiteNoise"].map(t => (
                <span key={t} style={{ padding: "8px 16px", borderRadius: 8, background: "#f1f5f9", color: N, fontSize: 13, fontWeight: 700, border: `1px solid ${DV}` }}>{t}</span>
              ))}
            </div>
          </Card>
          <Card style={{ padding: "32px" }}>
            <p style={{ fontSize: 14, fontWeight: 900, color: G, marginBottom: 20, textTransform: "uppercase", letterSpacing: "0.1em" }}>Mobile Ecosystem</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              {["Flutter SDK 3.x", "Dart", "Firebase FCM", "RevenueCat", "App Store Connect", "Play Console"].map(t => (
                <span key={t} style={{ padding: "8px 16px", borderRadius: 8, background: "#f1f5f9", color: N, fontSize: 13, fontWeight: 700, border: `1px solid ${DV}` }}>{t}</span>
              ))}
            </div>
          </Card>
        </div>
        <div style={{ marginTop: 40, textAlign: "center" }}>
          <p style={{ fontSize: 16, color: SM, fontStyle: "italic" }}>"A high-availability architecture designed for seamless scalability and cross-platform reliability."</p>
        </div>
      </Body>
    </Slide>
  );
}

/* S7 — Backend */
function S7() {
  return (
    <Slide>
      <SH num="07" label="Backend Development" title="Robust Engine with Django" />
      <PB idx={1} />
      <Body>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 10 }}>
          {[
            { i: "🛡️", t: "Security", d: "JWT Authentication, encrypted data transmission, and granular RBAC permissions." },
            { i: "⚡", t: "Performance", d: "Optimized PostgreSQL queries, Redis result caching, and asynchronous task processing." },
            { i: "📐", t: "Scalability", d: "Dockerized micro-service ready architecture with decoupled business logic layers." },
            { i: "📄", t: "API Docs", d: "Comprehensive interactive documentation using Swagger UI and Redocly for developers." },
          ].map((x, i) => (
            <Card key={i} style={{ padding: "24px" }}>
              <p style={{ fontSize: 32, marginBottom: 12 }}>{x.i}</p>
              <p style={{ fontSize: 20, fontWeight: 900, color: N }}>{x.t}</p>
              <p style={{ fontSize: 14, color: SM, marginTop: 8, lineHeight: 1.6 }}>{x.d}</p>
            </Card>
          ))}
        </div>
      </Body>
    </Slide>
  );
}

/* S8 — AI Scan */
function S8() {
  return (
    <Slide>
      <SH num="08" label="AI Dental Scan" title="Computer Vision Integration" />
      <PB idx={1} />
      <Body>
        <div style={{ display: "flex", gap: 32, height: "100%", marginTop: 10 }}>
          <div style={{ flex: 1.2 }}>
            <Card style={{ height: "100%", padding: "32px" }}>
              <p style={{ fontSize: 14, fontWeight: 900, color: G, marginBottom: 24, textTransform: "uppercase" }}>Analysis Pipeline</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {["1. High-Res Image Capture", "2. Dynamic Pre-processing", "3. GPT-4o Vision Integration", "4. Semantic Disease Detection", "5. Actionable Clinical Advice"].map((s, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <div style={{ width: 32, height: 32, borderRadius: "50%", background: G, color: "#fff", fontSize: 14, fontWeight: 900, display: "flex", alignItems: "center", justifyContent: "center" }}>{i+1}</div>
                    <span style={{ fontSize: 16, fontWeight: 700 }}>{s}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20 }}>
            <Card style={{ padding: "24px" }}><h4 style={{ fontSize: 18, fontWeight: 900, marginBottom: 10 }}>AI Detections</h4><p style={{ fontSize: 14, color: SM, lineHeight: 1.6 }}>Identifies Cavities, Gingivitis, Plaque, Calculus, and alignment issues with high confidence using contextual prompting.</p></Card>
            <Card style={{ padding: "24px" }}><h4 style={{ fontSize: 18, fontWeight: 900, marginBottom: 10 }}>Vision Intelligence</h4><p style={{ fontSize: 14, color: SM, lineHeight: 1.6 }}>Processes raw image data into structured JSON results for consistent frontend rendering and history tracking.</p></Card>
          </div>
        </div>
      </Body>
    </Slide>
  );
}

/* S9 — Auth */
function S9() {
  return (
    <Slide>
      <SH num="09" label="Security" title="Authentication & Verification" />
      <PB idx={1} />
      <Body>
        <div style={{ display: "flex", justifyContent: "center", marginTop: 30 }}>
          <div style={{ width: "100%", maxWidth: 600 }}>
            <div style={{ padding: "40px", background: N, borderRadius: 24, color: "#fff", boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 32, alignItems: "center" }}>
                <p style={{ fontSize: 20, fontWeight: 800 }}>OTP Verification Flow</p>
                <span style={{ padding: "6px 14px", background: `${G}30`, color: G, borderRadius: 20, fontSize: 12, fontWeight: 700 }}>🔒 SECURE PROTOCOL</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "1. Registration Request (Email/Phone)",
                  "2. Secure OTP Sent via SMTP/FCM",
                  "3. Server-side Validation (3m expiry)",
                  "4. RSA-Signed JWT Generation",
                  "5. Encrypted Profile Initialization"
                ].map((s, i) => (
                  <div key={i} style={{ padding: "14px 20px", background: "rgba(255,255,255,0.06)", borderRadius: 12, fontSize: 14, fontWeight: 600, border: "1px solid rgba(255,255,255,0.05)" }}>{s}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Body>
    </Slide>
  );
}

/* S10 — Database */
function S10() {
  return (
    <Slide>
      <SH num="10" label="Database Design" title="Schema & Relationships" />
      <PB idx={1} />
      <Body>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginTop: 10 }}>
          {[
            { t: "Users & Auth", f: ["User (Custom)", "UserProfile", "OTPVerification"] },
            { t: "Dental Analytics", f: ["ScanReport", "ScanImage", "ChatSession"] },
            { t: "Hygiene Tracker", f: ["BrushingSession", "DailyStreak", "Reminder"] },
            { t: "Core Engine", f: ["Notification", "Subscription", "CMSPage"] },
            { t: "Finance", f: ["PaymentLog", "StripeEvent", "ProductPlan"] },
            { t: "Intelligence", f: ["AssistantLog", "TokenUsageLog", "Prompts"] },
          ].map((x, i) => (
            <Card key={i} style={{ padding: "20px" }}>
              <p style={{ fontSize: 13, fontWeight: 900, color: G, marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.05em" }}>{x.t}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {x.f.map(f => <span key={f} style={{ fontSize: 13, fontFamily: "monospace", color: N, fontWeight: 600 }}>• {f}</span>)}
              </div>
            </Card>
          ))}
        </div>
      </Body>
    </Slide>
  );
}

/* S11 — Flutter App Structure (Shah Tamim) */
function S11() {
  const features = [
    { f: "auth", i: "🔐", d: "Login, register, OTP, social auth" },
    { f: "scan", i: "🔬", d: "Camera upload, report view" },
    { f: "brushing", i: "🪥", d: "Start/finish routine, streak" },
    { f: "ai_assistant", i: "💬", d: "Chat UI, session list" },
    { f: "home", i: "🏠", d: "Dashboard, quick actions" },
    { f: "progress", i: "📈", d: "Charts, trends, stats" },
  ];
  return (
    <Slide>
      <SH num="11" label="Mobile App" title="Flutter App Structure" />
      <PB idx={2} />
      <Body>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginTop: 10 }}>
          {features.map((x, i) => (
            <Card key={i} style={{ padding: "20px" }}>
              <p style={{ fontSize: 32, marginBottom: 10 }}>{x.i}</p>
              <p style={{ fontSize: 16, fontWeight: 900, color: N, fontFamily: "monospace" }}>{x.f}</p>
              <p style={{ fontSize: 13, color: SM, marginTop: 6, lineHeight: 1.4 }}>{x.d}</p>
            </Card>
          ))}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 20 }}>
          {["Provider","GetX","Dio","RxDart","GetIt","Firebase Messaging","FL Chart","Lottie","Camera","Table Calendar","RevenueCat"].map(t => (
            <span key={t} style={{ padding: "6px 14px", borderRadius: 8, background: "#f1f5f9", color: N, fontSize: 13, fontWeight: 700, border: `1px solid ${DV}` }}>{t}</span>
          ))}
        </div>
      </Body>
    </Slide>
  );
}

/* S12 — Brushing Tracker (Shah Tamim) */
function S12() {
  return (
    <Slide>
      <SH num="12" label="Brushing Tracker" title="Smart Routine Tracking" />
      <PB idx={2} />
      <Body>
        <Card style={{ padding: "24px", marginBottom: 24 }}>
          <p style={{ fontSize: 14, fontWeight: 900, color: N, marginBottom: 16, textTransform: "uppercase" }}>Interactive Routine Flow</p>
          <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
            {["Start Routine","→","Timer","→","Finish","→","Streak Updated","→","FCM Reminder"].map((s, i) => s === "→" ? <span key={i} style={{ color: G, fontWeight: 900, fontSize: 20 }}>→</span> : <span key={i} style={{ padding: "10px 18px", borderRadius: 10, background: G, color: "#fff", fontSize: 14, fontWeight: 800 }}>{s}</span>)}
          </div>
        </Card>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          {[
            { i: "🌅", t: "Morning Routine", d: "Start morning session, interactive timer, mark complete, track per day." },
            { i: "🌙", t: "Evening Routine",  d: "Same flow for evening. Both sessions needed for daily streak progress." },
            { i: "🔥", t: "Streak System",    d: "Both sessions done → streak +1. Missed day → reset to initial 1." },
            { i: "📅", t: "Calendar View",    d: "Visualize fully/partially completed days with monthly filtering." },
          ].map((c, i) => <Card key={i} style={{ padding: "24px" }}><p style={{ fontSize: 32, marginBottom: 12 }}>{c.i}</p><p style={{ fontSize: 18, fontWeight: 900, color: N }}>{c.t}</p><p style={{ fontSize: 14, color: SM, marginTop: 8, lineHeight: 1.5 }}>{c.d}</p></Card>)}
        </div>
      </Body>
    </Slide>
  );
}

/* S13 — AI Chat Assistant (Shah Tamim) */
function S13() {
  return (
    <Slide>
      <SH num="13" label="AI Chat Assistant" title="Dental AI Chatbot" />
      <PB idx={2} />
      <Body>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 10 }}>
          {[
            { i: "🗂️", t: "Session Management", d: "UUID-based sessions, soft-delete support, multiple threads per user." },
            { i: "🖼️", t: "Image Upload",      d: "Dental photos attached to chat, base64 processed → GPT-4o Vision." },
            { i: "🧠", t: "Context-Aware",     d: "Full conversation history loaded per session for accurate multi-turn chat." },
            { i: "📋", t: "Structured Output", d: "AI returns JSON schema: title, message, analysis, and next clinical steps." },
          ].map((c, i) => <Card key={i} style={{ padding: "24px" }}><p style={{ fontSize: 32, marginBottom: 12 }}>{c.i}</p><p style={{ fontSize: 18, fontWeight: 900, color: N }}>{c.t}</p><p style={{ fontSize: 14, color: SM, marginTop: 6, lineHeight: 1.5 }}>{c.d}</p></Card>)}
        </div>
        <Card style={{ marginTop: 24, padding: "24px" }}>
          <p style={{ fontSize: 14, fontWeight: 900, color: N, marginBottom: 16, textTransform: "uppercase" }}>Real-time Chat Preview</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ alignSelf: "flex-end", maxWidth: "75%", padding: "12px 20px", borderRadius: "18px 18px 4px 18px", background: N, color: "#fff", fontSize: 14, fontWeight: 500 }}>My gums bleed when I brush. What should I do?</div>
            <div style={{ alignSelf: "flex-start", maxWidth: "80%", padding: "12px 20px", borderRadius: "18px 18px 18px 4px", background: LB, color: TX, fontSize: 14, border: `1px solid ${DV}`, lineHeight: 1.5 }}>Bleeding gums may indicate gingivitis. I recommend gentle brushing, flossing daily, and consulting a dentist if it persists.</div>
          </div>
        </Card>
      </Body>
    </Slide>
  );
}

/* S14 — Notifications (Shah Tamim) */
function S14() {
  return (
    <Slide>
      <SH num="14" label="Notifications" title="Smart Reminder System" />
      <PB idx={2} />
      <Body>
        <div style={{ display: "flex", gap: 24, height: "100%", marginTop: 10 }}>
          <Card style={{ flex: 1.2, padding: "32px" }}>
            <p style={{ fontSize: 14, fontWeight: 900, color: N, marginBottom: 24, textTransform: "uppercase" }}>Celery Beat Schedule</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { task: "send_brushing_reminders",  schedule: "Every minute (*)", icon: "🪥" },
                { task: "toothbrush_change_reminder", schedule: "Daily at 14:11", icon: "🔄" },
                { task: "monthly_scan_task", schedule: "Daily at 15:08", icon: "📅" },
              ].map((t, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 16, padding: "14px 20px", borderRadius: 12, background: LB, border: `1px solid ${DV}` }}>
                  <span style={{ fontSize: 32 }}>{t.icon}</span>
                  <div>
                    <p style={{ fontSize: 15, fontWeight: 900, color: N }}>{t.task}</p>
                    <p style={{ fontSize: 13, color: SM, marginTop: 2 }}>{t.schedule}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { i: "🔔", t: "Firebase FCM", d: "Push notifications via Firebase Admin SDK." },
              { i: "📱", t: "In-App Alerts", d: "Live notification model with read/unread state." },
              { i: "⚙️", t: "User Config", d: "Configurable times for all routine reminders." },
            ].map((c, i) => <Card key={i} style={{ padding: "20px" }}><p style={{ fontSize: 24, marginBottom: 8 }}>{c.i}</p><p style={{ fontSize: 16, fontWeight: 900, color: N }}>{c.t}</p><p style={{ fontSize: 13, color: SM, marginTop: 4 }}>{c.d}</p></Card>)}
          </div>
        </div>
      </Body>
    </Slide>
  );
}

/* S15 — Onboarding (Al Mamun) */
function S15() {
  const steps = [
    { n: "01", i: "📧", t: "Register", d: "Email + password → Secure OTP sent" },
    { n: "02", i: "✅", t: "Verify OTP", d: "6-digit OTP validation (3 min expiry)" },
    { n: "03", i: "🎯", t: "Select Goals", d: "Choose from preset dental health goals" },
    { n: "04", i: "⚙️", t: "Profile Setup", d: "Brushing times, scan day preferences" },
    { n: "05", i: "🔔", t: "Notifications", d: "Configure smart reminder preferences" },
    { n: "06", i: "🏠", t: "Home Unlocked", d: "Full dashboard access granted" },
  ];
  return (
    <Slide>
      <SH num="15" label="Onboarding & UX" title="User Onboarding Flow" />
      <PB idx={3} />
      <Body>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 10 }}>
          {steps.map((s, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 24px", borderRadius: 16, background: "#fff", border: `1px solid ${DV}` }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: N, color: G, fontSize: 14, fontWeight: 900, display: "flex", alignItems: "center", justifyContent: "center" }}>{s.n}</div>
              <span style={{ fontSize: 32 }}>{s.i}</span>
              <div style={{ flex: 1 }}><p style={{ fontSize: 16, fontWeight: 900, color: N }}>{s.t}</p><p style={{ fontSize: 13, color: SM, marginTop: 2 }}>{s.d}</p></div>
            </div>
          ))}
        </div>
        <Card style={{ marginTop: 20, padding: "20px" }}><p style={{ fontSize: 14, fontWeight: 900, color: N, marginBottom: 12, textTransform: "uppercase" }}>Profile Setup Schema</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {["morning_enabled","morning_brushing_time","evening_enabled","evening_brushing_time","toothbrush_enabled","toothbrush_interval_days","monthly_scan_enabled","monthly_scan_day"].map(f => <span key={f} style={{ padding: "4px 10px", borderRadius: 6, fontSize: 12, fontFamily: "monospace", background: LB, color: N, fontWeight: 600 }}>{f}</span>)}
          </div>
        </Card>
      </Body>
    </Slide>
  );
}

/* S16 — Features (Al Mamun) */
function S16() {
  const features = [
    { i: "🦷", t: "AI Dental Scan" }, { i: "💬", t: "AI Chat" },
    { i: "🪥", t: "Brushing Tracker" }, { i: "🔔", t: "Smart Reminders" },
    { i: "📈", t: "Progress Charts" }, { i: "🎯", t: "Goal Setting" },
    { i: "🔐", t: "Secure Auth" }, { i: "⭐", t: "Subscriptions" },
    { i: "📄", t: "CMS Pages" },
  ];
  return (
    <Slide>
      <SH num="16" label="Features Showcase" title="All Core Features" />
      <PB idx={3} />
      <Body>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginTop: 10 }}>
          {features.map((f, i) => (
            <Card key={i} style={{ textAlign: "center", padding: "28px 16px", background: "#fff", transition: "transform 0.2s" }}>
              <p style={{ fontSize: 48, marginBottom: 16 }}>{f.i}</p>
              <p style={{ fontSize: 16, fontWeight: 900, color: N }}>{f.t}</p>
            </Card>
          ))}
        </div>
      </Body>
    </Slide>
  );
}

/* S17 — Tech Stack (Al Mamun) */
function S17() {
  return (
    <Slide dark>
      <SH num="17" label="Technology Stack" title="Built With Modern Tools" dark />
      <PB idx={3} />
      <Body>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 24 }}>
          <div><p style={{ fontSize: 14, fontWeight: 900, color: G, marginBottom: 16, textTransform: "uppercase" }}>📱 Mobile (Flutter)</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>{["Flutter 3.x","Dart","Provider","GetX","Dio","RxDart","GetIt","Firebase","FL Chart","Lottie","Camera","RevenueCat"].map(t => <span key={t} style={{ padding: "6px 12px", borderRadius: 8, background: "rgba(255,255,255,0.06)", color: "#e2e8f0", border: "1px solid rgba(255,255,255,0.1)", fontSize: 13, fontWeight: 600 }}>{t}</span>)}</div>
          </div>
          <div><p style={{ fontSize: 14, fontWeight: 900, color: G, marginBottom: 16, textTransform: "uppercase" }}>⚙️ Backend (Django)</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>{["Django 5.x","DRF","SimpleJWT","Celery","Redis","PostgreSQL","OpenAI","Firebase Admin","Stripe","Docker","Gunicorn","WhiteNoise"].map(t => <span key={t} style={{ padding: "6px 12px", borderRadius: 8, background: "rgba(255,255,255,0.06)", color: "#e2e8f0", border: "1px solid rgba(255,255,255,0.1)", fontSize: 13, fontWeight: 600 }}>{t}</span>)}</div>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
          {[
            { i: "🤖", t: "AI Intelligence", l: "GPT-4o, Vision API, Advanced Prompting" },
            { i: "☁️", t: "Cloud Services", l: "Firebase FCM, Google Auth, Stripe" },
            { i: "🛠️", t: "Infrastructure", l: "Docker, Gunicorn, Redis Stack, PostgreSQL" },
          ].map((g, i) => <div key={i} style={{ padding: "20px", borderRadius: 16, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}><p style={{ fontSize: 32, marginBottom: 12 }}>{g.i}</p><p style={{ fontSize: 18, fontWeight: 900, color: G }}>{g.t}</p><p style={{ fontSize: 13, color: "#94a3b8", marginTop: 6, lineHeight: 1.4 }}>{g.l}</p></div>)}
        </div>
      </Body>
    </Slide>
  );
}

/* S18 — Thank You */
function S18() {
  return (
    <div style={{ height: "100%", display: "flex", overflow: "hidden", background: N }}>
      <div style={{ width: "55%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "40px 64px" }}>
        <div style={{ width: 60, height: 6, background: G, borderRadius: 3, marginBottom: 32 }} />
        <p style={{ fontSize: 14, fontWeight: 900, letterSpacing: "0.3em", textTransform: "uppercase", color: G, marginBottom: 16 }}>Final Summary</p>
        <h1 style={{ fontSize: "5rem", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: 20 }}>ToothCare<span style={{ color: G }}>+</span></h1>
        <p style={{ fontSize: "1.4rem", color: "#94a3b8", marginBottom: 48, maxWidth: 450, lineHeight: 1.6 }}>Smarter Dental Health, One Scan at a Time. Thank you for your attention.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, marginBottom: 48 }}>
          {[["15+","API Endpoints"],["9","Core Features"],["2","Platforms"]].map(([n,l]) => <div key={l} style={{ padding: "20px 12px", borderRadius: 16, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", textAlign: "center" }}><p style={{ fontSize: 28, fontWeight: 900, color: G }}>{n}</p><p style={{ fontSize: 12, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 4 }}>{l}</p></div>)}
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 32 }}>
          <p style={{ fontSize: 12, color: "#64748b", marginBottom: 16, letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700 }}>Project Contributors</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>{TEAM.map((m, i) => <div key={i}><p style={{ fontSize: 14, fontWeight: 900, color: "#fff" }}>{m.name}</p><p style={{ fontSize: 12, color: "#64748b", fontFamily: "monospace" }}>{m.id}</p></div>)}</div>
          <p style={{ fontSize: 15, color: "#94a3b8", marginTop: 32, fontWeight: 500 }}>Supervised by <span style={{ color: G, fontWeight: 900 }}>Md Shamim Hossain</span></p>
        </div>
      </div>
      <div style={{ flex: 1, background: "rgba(255,255,255,0.02)", borderLeft: "1px solid rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: 160, height: 160, borderRadius: "50%", background: G, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 80, fontWeight: 900, color: N, boxShadow: `0 0 60px ${G}40` }}>✓</div>
      </div>
    </div>
  );
}

/* ════════════════════��═════════════════════════════════════════════
   MAIN SHELL
══════════════════════════════════════════════════════════════════ */
const SLIDES = [S1,S2,S3,S4,S5,S6,S7,S8,S9,S10,S11,S12,S13,S14,S15,S16,S17,S18];
const META = [
  {t:"Title",o:0},{t:"Team",o:0},{t:"Supervisor",o:0},{t:"Overview",o:0},{t:"Architecture",o:0},{t:"Deployment",o:0},
  {t:"Backend",o:1},{t:"AI Scan",o:1},{t:"Auth",o:1},{t:"Database",o:1},
  {t:"Flutter",o:2},{t:"Brushing",o:2},{t:"AI Chat",o:2},{t:"Notifications",o:2},
  {t:"Onboarding",o:3},{t:"Features",o:3},{t:"Tech Stack",o:3},{t:"Thank You",o:3},
];

export default function Presentation() {
  const [c, setC] = useState(0);
  const [k, setK] = useState(0);
  const [d, setD] = useState<"r"|"l">("r");
  const go = useCallback((i: number) => { if (i===c||i<0||i>=SLIDES.length) return; setD(i>c?"r":"l"); setK(x=>x+1); setC(i); }, [c]);
  useEffect(() => { const h = (e:KeyboardEvent) => { if (["ArrowRight","ArrowDown"," "].includes(e.key)) { e.preventDefault(); go(c+1); } if (["ArrowLeft","ArrowUp"].includes(e.key)) { e.preventDefault(); go(c-1); } }; window.addEventListener("keydown",h); return ()=>window.removeEventListener("keydown",h); }, [c,go]);
  const S = SLIDES[c];
  const m = META[c];
  const p = ((c+1)/SLIDES.length)*100;
  return (
    <div style={{ display:"flex", flexDirection:"column", height:"100dvh", background:"#f4f6fa", overflow:"hidden" }}>
      <div style={{ height:4, background:"#e2e8f0" }}><div style={{ height:"100%", width:`${p}%`, background:`linear-gradient(90deg,${N},${G})`, transition:"width .3s" }} /></div>
      <div style={{ flex:1, position:"relative", overflow:"hidden" }}>
        <div key={k} style={{ position:"absolute", inset:0, animation:`${d==="r"?"si":"sil"} .35s ease forwards` }}>
          <S />
        </div>
      </div>
      <div style={{ height:48, background:N, borderTop:`1px solid ${N}`, display:"flex", alignItems:"center", justifyContent:"space-between", padding:"0 20px" }}>
        <span style={{ fontFamily:"monospace", fontSize:12, color:"#64748b" }}><span style={{color:"#fff",fontWeight:700}}>{String(c+1).padStart(2,"0")}</span> / {String(SLIDES.length).padStart(2,"0")}</span>
        <div style={{ display:"flex", gap:6 }}>{SLIDES.map((_,i)=><button key={i} onClick={()=>go(i)} title={META[i].t} style={{width:i===c?20:8,height:8,borderRadius:99,border:"none",cursor:"pointer",background:i===c?G:(META[i].o===m.o?`${N}60`:"#334155"),transition:"all .2s"}} />)}</div>
        <div style={{ display:"flex", gap:8 }}>
          <button onClick={()=>go(c-1)} disabled={c===0} style={{width:32,height:32,borderRadius:"50%",border:"none",background:"rgba(255,255,255,0.1)",color:"#fff",cursor:c===0?"not-allowed":"pointer",opacity:c===0?0.3:1}}>◀</button>
          <button onClick={()=>go(c+1)} disabled={c===SLIDES.length-1} style={{width:32,height:32,borderRadius:"50%",border:"none",background:G,color:N,cursor:c===SLIDES.length-1?"not-allowed":"pointer",opacity:c===SLIDES.length-1?0.3:1}}>▶</button>
        </div>
      </div>
      <style>{`@keyframes si{from{opacity:0;transform:translateX(30px)}to{opacity:1;transform:translateX(0)}}@keyframes sil{from{opacity:0;transform:translateX(-30px)}to{opacity:1;transform:translateX(0)}}`}</style>
    </div>
  );
}
