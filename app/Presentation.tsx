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
  { name: "Shah Tamim", id: "212-15-3783" },
  { name: "Al Mamun", id: "212-15-3852" },
  { name: "Rafiqul Islam", id: "212-15-3801" },
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
      <h2 style={{ fontSize: "clamp(1.5rem, 4vw, 2.2rem)", fontWeight: 900, color: dark ? "#fff" : N, lineHeight: 1.2 }}>{title}</h2>
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
        <p style={{ fontSize: "1.2rem", color: "#94a3b8", maxWidth: 500, marginBottom: 40 }}>An AI-Powered Comprehensive Dental Health Companion for Modern Oral Care.</p>
        <div style={{ display: "flex", gap: 24 }}>
          <div><p style={{ fontSize: 10, color: "#64748b", textTransform: "uppercase", marginBottom: 4 }}>Department</p><p style={{ fontSize: 13, fontWeight: 700 }}>Computer Science & Engineering</p></div>
          <div style={{ width: 1, background: "rgba(255,255,255,0.1)" }} />
          <div><p style={{ fontSize: 10, color: "#64748b", textTransform: "uppercase", marginBottom: 4 }}>Institution</p><p style={{ fontSize: 13, fontWeight: 700 }}>Daffodil International University</p></div>
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
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginTop: 40 }}>
          {TEAM.map((m, i) => (
            <Card key={i} style={{ textAlign: "center", padding: "40px 20px" }}>
              <div style={{ width: 64, height: 64, borderRadius: "50%", background: N, color: G, fontSize: 24, fontWeight: 900, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>{m.name[0]}</div>
              <p style={{ fontSize: 16, fontWeight: 900, color: N, marginBottom: 4 }}>{m.name}</p>
              <p style={{ fontSize: 12, color: SM, fontFamily: "monospace" }}>ID: {m.id}</p>
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
            <p style={{ fontSize: 11, fontWeight: 700, color: G, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}>Guided By</p>
            <h3 style={{ fontSize: "2rem", fontWeight: 900, color: N, marginBottom: 8 }}>Md Shamim Hossain</h3>
            <p style={{ fontSize: "1.1rem", color: TX, fontWeight: 600, marginBottom: 24 }}>Assistant Professor</p>
            <div style={{ height: 1, background: DV, width: 100, margin: "0 auto 24px" }} />
            <p style={{ fontSize: 13, color: SM, lineHeight: 1.6 }}>Department of Computer Science and Engineering<br/>Daffodil International University</p>
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
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          <Card><p style={{ fontSize: 40, marginBottom: 16 }}>🦷</p><h4 style={{ fontWeight: 900, marginBottom: 8 }}>The Problem</h4><p style={{ fontSize: 13, color: SM, lineHeight: 1.6 }}>Oral health is often neglected due to high costs, lack of awareness, and irregular checkups. Early detection of dental issues is crucial but often missed.</p></Card>
          <Card><p style={{ fontSize: 40, marginBottom: 16 }}>🚀</p><h4 style={{ fontWeight: 900, marginBottom: 8 }}>The Solution</h4><p style={{ fontSize: 13, color: SM, lineHeight: 1.6 }}>ToothCare+ provides an AI-driven scanning tool, real-time consultation via chat, and smart brushing tracking to promote preventive dental care.</p></Card>
        </div>
        <div style={{ marginTop: 24, padding: "20px", background: `${G}10`, borderRadius: 12, border: `1px solid ${G}30` }}>
          <p style={{ fontSize: 13, color: N, fontWeight: 600 }}>Objective: To democratize dental diagnostics through computer vision and improve daily oral hygiene habits.</p>
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
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            { t: "Frontend Layer", d: "Flutter Mobile App (iOS/Android)", i: "📱", g: "User Interface, Camera Integration, State Management" },
            { t: "API Layer", d: "Django REST Framework", i: "🔌", g: "Business Logic, Authentication, API Endpoints" },
            { t: "AI & Intelligence", d: "OpenAI GPT-4o Vision & LLM", i: "🧠", g: "Dental Scan Analysis, Smart Assistant" },
            { t: "Data & Storage", d: "PostgreSQL & Redis", i: "💾", g: "User Profiles, Scan History, Caching" }
          ].map((x, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 16, padding: "12px 20px", background: LB, border: `1px solid ${DV}`, borderRadius: 12 }}>
              <span style={{ fontSize: 24 }}>{x.i}</span>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 13, fontWeight: 900, color: N }}>{x.t} <span style={{ fontWeight: 400, color: G, marginLeft: 8 }}>{x.d}</span></p>
                <p style={{ fontSize: 11, color: SM }}>{x.g}</p>
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
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <Card>
            <p style={{ fontSize: 11, fontWeight: 700, color: G, marginBottom: 12 }}>Backend Stack</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["Docker", "Gunicorn", "Nginx", "PostgreSQL", "Redis", "Celery"].map(t => <Pill key={t} label={t} />)}
            </div>
          </Card>
          <Card>
            <p style={{ fontSize: 11, fontWeight: 700, color: G, marginBottom: 12 }}>Mobile Stack</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["Flutter SDK", "Firebase FCM", "App Store", "Play Store"].map(t => <Pill key={t} label={t} />)}
            </div>
          </Card>
        </div>
        <div style={{ marginTop: 24, textAlign: "center" }}>
          <p style={{ fontSize: 12, color: SM }}>Production environment hosted on VPS using Dockerized containers for scalability.</p>
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
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {[
            { i: "🛡️", t: "Security", d: "JWT Authentication & Role-based access control." },
            { i: "⚡", t: "Performance", d: "Redis caching & Celery for background tasks." },
            { i: "📐", t: "Scalability", d: "Modular app structure for future feature expansion." },
            { i: "📄", t: "API Docs", d: "Auto-generated Swagger/Redoc documentation." },
          ].map((x, i) => <Card key={i}><p style={{ fontSize: 20, marginBottom: 8 }}>{x.i}</p><p style={{ fontSize: 13, fontWeight: 900, color: N }}>{x.t}</p><p style={{ fontSize: 11, color: SM, marginTop: 4 }}>{x.d}</p></Card>)}
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
        <div style={{ display: "flex", gap: 24, height: "100%" }}>
          <div style={{ flex: 1 }}>
            <Card style={{ height: "100%" }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: G, marginBottom: 16 }}>The Process</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {["1. Image Capture", "2. Pre-processing", "3. GPT-4o Vision Analysis", "4. Result Categorization", "5. Recommendation Generation"].map((s, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 24, height: 24, borderRadius: "50%", background: G, color: "#fff", fontSize: 10, fontWeight: 900, display: "flex", alignItems: "center", justifyContent: "center" }}>{i+1}</div>
                    <span style={{ fontSize: 13, fontWeight: 600 }}>{s}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
            <Card><h4 style={{ fontSize: 13, fontWeight: 900 }}>Detections</h4><p style={{ fontSize: 11, color: SM }}>Cavities, Gingivitis, Plaque, Calculus, and general tooth alignment.</p></Card>
            <Card><h4 style={{ fontSize: 13, fontWeight: 900 }}>Accuracy</h4><p style={{ fontSize: 11, color: SM }}>Leveraging state-of-the-art vision models with dental-specific prompting.</p></Card>
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
        <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
          <div style={{ width: "100%", maxWidth: 500 }}>
            <div style={{ padding: "24px", background: N, borderRadius: 16, color: "#fff" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 24 }}>
                <p style={{ fontWeight: 700 }}>OTP Verification Flow</p>
                <span style={{ color: G }}>🔒 Secure</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {["Registration Request", "OTP Sent via Email", "OTP Validation (3m expiry)", "Token Generation (JWT)", "Profile Initialization"].map((s, i) => (
                  <div key={i} style={{ padding: "10px 14px", background: "rgba(255,255,255,0.05)", borderRadius: 8, fontSize: 12 }}>{s}</div>
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
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
          {[
            { t: "Users & Auth", f: ["User", "UserProfile", "OTP"] },
            { t: "Dental Data", f: ["ScanReport", "ScanImage", "ChatSession"] },
            { t: "Hygiene", f: ["BrushingSession", "DailyStreak", "Reminder"] },
            { t: "Infrastructure", f: ["Notification", "Subscription", "CMS"] },
            { t: "Commerce", f: ["Payment", "StripeWebhook", "Product"] },
            { t: "AI Logs", f: ["AssistantMessage", "AIUsageLog"] },
          ].map((x, i) => (
            <Card key={i}>
              <p style={{ fontSize: 11, fontWeight: 900, color: G, marginBottom: 8, textTransform: "uppercase" }}>{x.t}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {x.f.map(f => <span key={f} style={{ fontSize: 11, fontFamily: "monospace", color: N }}>• {f}</span>)}
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
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
          {features.map((x, i) => (
            <Card key={i}>
              <p style={{ fontSize: 20, marginBottom: 6 }}>{x.i}</p>
              <p style={{ fontSize: 11, fontWeight: 700, color: N, fontFamily: "monospace" }}>{x.f}</p>
              <p style={{ fontSize: 10, color: SM, marginTop: 4 }}>{x.d}</p>
            </Card>
          ))}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 10 }}>
          {["Provider","GetX","Dio","RxDart","GetIt","Firebase Messaging","FL Chart","Lottie","Camera","Table Calendar","RevenueCat"].map(t => <Pill key={t} label={t} />)}
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
        <Card><p style={{ fontSize: 11, fontWeight: 700, color: N, marginBottom: 8 }}>Routine Flow</p>
          <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
            {["Start Routine","→","Timer","→","Finish","→","Streak Updated","→","FCM Reminder"].map((s, i) => s === "→" ? <span key={i} style={{ color: G, fontWeight: 700 }}>→</span> : <Pill key={i} label={s} />)}
          </div>
        </Card>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {[
            { i: "🌅", t: "Morning Routine", d: "Start morning session, timer, mark complete, track per day." },
            { i: "🌙", t: "Evening Routine",  d: "Same flow for evening. Both needed for daily streak." },
            { i: "🔥", t: "Streak System",    d: "Both sessions done → streak +1. Missed day → reset to 1." },
            { i: "📅", t: "Calendar View",    d: "Fully/partially completed days. Monthly filter." },
          ].map((c, i) => <Card key={i}><p style={{ fontSize: 20, marginBottom: 6 }}>{c.i}</p><p style={{ fontSize: 12, fontWeight: 700, color: N }}>{c.t}</p><p style={{ fontSize: 11, color: SM, marginTop: 4 }}>{c.d}</p></Card>)}
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
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {[
            { i: "🗂️", t: "Session Management", d: "UUID-based sessions, soft-delete, multiple per user." },
            { i: "🖼️", t: "Image Upload",      d: "Dental photos attached, base64 → GPT-4o Vision." },
            { i: "🧠", t: "Context-Aware",     d: "Full history loaded per session for multi-turn chat." },
            { i: "📋", t: "Structured Response", d: "AI returns JSON: title, message, analysis, next_step." },
          ].map((c, i) => <Card key={i}><p style={{ fontSize: 20, marginBottom: 6 }}>{c.i}</p><p style={{ fontSize: 12, fontWeight: 700, color: N }}>{c.t}</p><p style={{ fontSize: 11, color: SM }}>{c.d}</p></Card>)}
        </div>
        <Card style={{ marginTop: 10 }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: N, marginBottom: 8 }}>Chat Preview</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ alignSelf: "flex-end", maxWidth: "75%", padding: "8px 12px", borderRadius: "12px 12px 4px 12px", background: N, color: "#fff", fontSize: 11 }}>My gums bleed when I brush. What should I do?</div>
            <div style={{ alignSelf: "flex-start", maxWidth: "80%", padding: "8px 12px", borderRadius: "12px 12px 12px 4px", background: LB, color: TX, fontSize: 11, border: `1px solid ${DV}` }}>Bleeding gums may indicate gingivitis. I recommend gentle brushing, flossing, and consulting a dentist.</div>
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
        <Card><p style={{ fontSize: 11, fontWeight: 700, color: N, marginBottom: 10 }}>Celery Beat Schedule</p>
          {[
            { task: "send_brushing_reminders",  schedule: "Every minute (*)", icon: "🪥" },
            { task: "toothbrush_change_reminder", schedule: "Daily at 14:11", icon: "🔄" },
            { task: "monthly_scan_task", schedule: "Daily at 15:08", icon: "📅" },
          ].map((t, i) => <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8, padding: "8px 10px", borderRadius: 6, background: LB }}><span style={{ fontSize: 18 }}>{t.icon}</span><div><p style={{ fontSize: 11, fontWeight: 700, color: N }}>{t.task}</p><p style={{ fontSize: 10, color: SM }}>{t.schedule}</p></div></div>)}
        </Card>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {[
            { i: "🔔", t: "Firebase FCM", d: "Push via Firebase Admin SDK using stored fcm_token." },
            { i: "📱", t: "In-App", d: "Notification model: title, body, is_read, created_at." },
            { i: "⚙️", t: "User Preferences", d: "Morning/evening times, toothbrush interval configurable." },
            { i: "��", t: "Timezone", d: "Celery uses Asia/Dhaka, reminders respect user's local time." },
          ].map((c, i) => <Card key={i}><p style={{ fontSize: 18, marginBottom: 4 }}>{c.i}</p><p style={{ fontSize: 11, fontWeight: 700, color: N }}>{c.t}</p><p style={{ fontSize: 10, color: SM }}>{c.d}</p></Card>)}
        </div>
      </Body>
    </Slide>
  );
}

/* S15 — Onboarding (Al Mamun) */
function S15() {
  const steps = [
    { n: "01", i: "📧", t: "Register", d: "Email + password → OTP sent" },
    { n: "02", i: "✅", t: "Verify OTP", d: "6-digit OTP (3 min expiry)" },
    { n: "03", i: "🎯", t: "Select Goals", d: "Choose from preset dental goals" },
    { n: "04", i: "⚙️", t: "Profile Setup", d: "Brushing times, toothbrush interval, scan day" },
    { n: "05", i: "🔔", t: "Notifications", d: "Configure reminder preferences" },
    { n: "06", i: "🏠", t: "Home Dashboard", d: "Full access unlocked" },
  ];
  return (
    <Slide>
      <SH num="15" label="Onboarding & UX" title="User Onboarding Flow" />
      <PB idx={3} />
      <Body>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {steps.map((s, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 14px", borderRadius: 8, background: "#fff", border: `1px solid ${DV}` }}>
              <div style={{ width: 28, height: 28, borderRadius: 6, background: N, color: G, fontSize: 11, fontWeight: 900, display: "flex", alignItems: "center", justifyContent: "center" }}>{s.n}</div>
              <span style={{ fontSize: 20 }}>{s.i}</span>
              <div style={{ flex: 1 }}><p style={{ fontSize: 12, fontWeight: 700, color: N }}>{s.t}</p><p style={{ fontSize: 11, color: SM }}>{s.d}</p></div>
            </div>
          ))}
        </div>
        <Card style={{ marginTop: 10 }}><p style={{ fontSize: 11, fontWeight: 700, color: N, marginBottom: 8 }}>UserProfileSetup Fields</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {["morning_enabled","morning_brushing_time","evening_enabled","evening_brushing_time","toothbrush_enabled","toothbrush_interval_days","monthly_scan_enabled","monthly_scan_day"].map(f => <span key={f} style={{ padding: "2px 8px", borderRadius: 4, fontSize: 10, fontFamily: "monospace", background: LB, color: N }}>{f}</span>)}
          </div>
        </Card>
      </Body>
    </Slide>
  );
}

/* S16 — Features (Al Mamun) */
function S16() {
  const features = [
    { i: "🦷", t: "AI Dental Scan", c: N }, { i: "💬", t: "AI Chat", c: N },
    { i: "🪥", t: "Brushing Tracker", c: N }, { i: "🔔", t: "Smart Reminders", c: N },
    { i: "📈", t: "Progress Charts", c: N }, { i: "🎯", t: "Goal Setting", c: N },
    { i: "🔐", t: "Secure Auth", c: N }, { i: "⭐", t: "Subscriptions", c: N },
    { i: "📄", t: "CMS Pages", c: N },
  ];
  return (
    <Slide>
      <SH num="16" label="Features Showcase" title="All Core Features" />
      <PB idx={3} />
      <Body>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
          {features.map((f, i) => (
            <Card key={i} style={{ textAlign: "center", padding: "16px 10px" }}>
              <p style={{ fontSize: 28, marginBottom: 8 }}>{f.i}</p>
              <p style={{ fontSize: 12, fontWeight: 700, color: N }}>{f.t}</p>
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
      <SH num="17" label="Technology Stack" title="Built With" dark />
      <PB idx={3} />
      <Body>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
          <div><p style={{ fontSize: 11, fontWeight: 700, color: G, marginBottom: 8 }}>📱 Mobile (Flutter)</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>{["Flutter 3.x","Dart","Provider","GetX","Dio","RxDart","GetIt","Firebase","FL Chart","Lottie","Camera","RevenueCat"].map(t => <span key={t} style={{ padding: "3px 8px", borderRadius: 4, fontSize: 10, background: "rgba(255,255,255,0.08)", color: "#cbd5e1", border: "1px solid rgba(255,255,255,0.12)" }}>{t}</span>)}</div>
          </div>
          <div><p style={{ fontSize: 11, fontWeight: 700, color: G, marginBottom: 8 }}>⚙️ Backend (Django)</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>{["Django 5.2","DRF","SimpleJWT","Celery","Redis","PostgreSQL","OpenAI","Firebase Admin","Stripe","Docker","Gunicorn","WhiteNoise"].map(t => <span key={t} style={{ padding: "3px 8px", borderRadius: 4, fontSize: 10, background: "rgba(255,255,255,0.08)", color: "#cbd5e1", border: "1px solid rgba(255,255,255,0.12)" }}>{t}</span>)}</div>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
          {[
            { i: "🤖", t: "AI", l: "OpenAI GPT-4o, Vision API" },
            { i: "☁️", t: "Cloud", l: "Firebase FCM, Google OAuth, Stripe" },
            { i: "🛠️", t: "DevOps", l: "Docker, Gunicorn, Redis, PostgreSQL" },
          ].map((g, i) => <div key={i} style={{ padding: "12px", borderRadius: 8, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}><p style={{ fontSize: 20, marginBottom: 6 }}>{g.i}</p><p style={{ fontSize: 12, fontWeight: 700, color: G }}>{g.t}</p><p style={{ fontSize: 10, color: "#64748b", marginTop: 4 }}>{g.l}</p></div>)}
        </div>
      </Body>
    </Slide>
  );
}

/* S18 — Thank You */
function S18() {
  return (
    <div style={{ height: "100%", display: "flex", overflow: "hidden", background: N }}>
      <div style={{ width: "55%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "40px 48px" }}>
        <div style={{ width: 50, height: 4, background: G, borderRadius: 2, marginBottom: 24 }} />
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: G, marginBottom: 12 }}>Thank You</p>
        <h1 style={{ fontSize: "clamp(2.5rem,5vw,3.5rem)", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: 16 }}>ToothCare+</h1>
        <p style={{ fontSize: "clamp(0.8rem,1.5vw,1rem)", color: "#94a3b8", marginBottom: 32, maxWidth: 360 }}>Smarter Dental Health, One Scan at a Time</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginBottom: 32 }}>
          {[["12+","Backend Modules"],["9+","Core Features"],["2","Platforms"]].map(([n,l]) => <div key={l} style={{ padding: "12px", borderRadius: 8, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", textAlign: "center" }}><p style={{ fontSize: 20, fontWeight: 900, color: G }}>{n}</p><p style={{ fontSize: 10, color: "#64748b" }}>{l}</p></div>)}
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 16 }}>
          <p style={{ fontSize: 10, color: "#64748b", marginBottom: 8, letterSpacing: "0.1em", textTransform: "uppercase" }}>Developed by</p>
          <div style={{ display: "flex", gap: 16 }}>{TEAM.map((m, i) => <div key={i}><p style={{ fontSize: 12, fontWeight: 700, color: "#fff" }}>{m.name}</p><p style={{ fontSize: 10, color: "#64748b", fontFamily: "monospace" }}>{m.id}</p></div>)}</div>
          <p style={{ fontSize: 11, color: "#64748b", marginTop: 16 }}>Supervised by <span style={{ color: G, fontWeight: 700 }}>Md Shamim Hossain</span></p>
        </div>
      </div>
      <div style={{ flex: 1, background: "rgba(255,255,255,0.03)", borderLeft: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: 120, height: 120, borderRadius: "50%", background: G, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 56, fontWeight: 900, color: N }}>✓</div>
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
