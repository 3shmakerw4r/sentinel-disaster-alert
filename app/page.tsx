"use client";

import { useMemo, useState } from "react";

const hazards = [
  { name: "Flood", level: "Watch", note: "River levels rising", icon: "≈" },
  { name: "Wildfire", level: "Normal", note: "No active threat", icon: "△" },
  { name: "Earthquake", level: "Normal", note: "No recent local event", icon: "⌁" },
  { name: "Severe weather", level: "Advisory", note: "Storms after 6 PM", icon: "ϟ" },
];

const updates = [
  ["12 min ago", "Flood watch issued", "Des Plaines River basin"],
  ["34 min ago", "Weather advisory updated", "Lake County"],
  ["2 hr ago", "Sensor station checked in", "Station LF-04"],
];

export default function Home() {
  const [location, setLocation] = useState("Lake Forest, IL");
  const [query, setQuery] = useState("");
  const currentDate = useMemo(() => new Intl.DateTimeFormat("en-US", { weekday: "long", month: "long", day: "numeric" }).format(new Date()), []);

  function applyLocation(event: React.FormEvent) {
    event.preventDefault();
    if (query.trim()) { setLocation(query.trim()); setQuery(""); }
  }

  return <main>
    <header className="topbar">
      <a className="brand" href="#top"><span className="brand-mark">S</span><span>Sentinel</span></a>
      <nav aria-label="Primary navigation"><a className="active" href="#overview">Overview</a><a href="#hazards">Hazards</a><a href="#updates">Updates</a><a href="#about">About</a></nav>
      <span className="status-dot"><i /> System online</span>
    </header>

    <section className="hero" id="top">
      <div><p className="eyebrow">Community risk monitor</p><h1>Know what&apos;s happening.<br />Know what to do.</h1><p className="lede">Sentinel brings official hazard feeds and local sensor readings into one clear, practical view.</p></div>
      <form className="location-form" onSubmit={applyLocation}><label htmlFor="location">Check another location</label><div><input id="location" value={query} onChange={e => setQuery(e.target.value)} placeholder="City, state or ZIP" /><button>Check area</button></div></form>
    </section>

    <section className="dashboard" id="overview">
      <div className="area-heading"><div><p className="eyebrow">Current area</p><h2>{location}</h2></div><p>{currentDate}<br /><span>Updated a few seconds ago</span></p></div>
      <div className="summary-grid">
        <article className="overall-card"><div className="risk-gauge"><strong>WATCH</strong><span>Elevated awareness</span></div><div><p className="eyebrow">Overall status</p><h3>Stay aware today</h3><p>A flood watch and evening storms may affect travel. No immediate action is required.</p><a href="#hazards">Review safety guidance →</a></div></article>
        <article className="conditions-card"><p className="eyebrow">Local conditions</p><div className="temperature">72<span>°F</span></div><p>Cloudy with scattered storms</p><dl><div><dt>Rain</dt><dd>0.4 in</dd></div><div><dt>Wind</dt><dd>SW 14 mph</dd></div><div><dt>Humidity</dt><dd>78%</dd></div></dl></article>
      </div>

      <div className="section-title" id="hazards"><div><p className="eyebrow">Hazard overview</p><h2>What we&apos;re watching</h2></div><span>Prototype data</span></div>
      <div className="hazard-grid">{hazards.map(h => <article className="hazard-card" key={h.name}><span className="hazard-icon">{h.icon}</span><div><h3>{h.name}</h3><p>{h.note}</p></div><span className={`level ${h.level.toLowerCase()}`}>{h.level}</span></article>)}</div>

      <section className="updates" id="updates"><div className="section-title"><div><p className="eyebrow">Live log</p><h2>Recent updates</h2></div></div><div className="update-list">{updates.map(([time,title,place]) => <article key={time}><time>{time}</time><span className="update-marker" /><div><h3>{title}</h3><p>{place}</p></div></article>)}</div></section>
    </section>

    <footer id="about"><div><strong>Sentinel</strong><p>An open-source disaster awareness project.</p></div><p>Informational prototype — always follow official emergency guidance.</p></footer>
  </main>;
}
