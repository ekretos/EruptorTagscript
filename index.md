# 🌋 Welcome to Eruptor Documentation

> **The definitive documentation for Eruptor Bot’s TagScript & Dynamic Trigger Engine.**
> Built for server owners, bot administrators, and community developers who want to create immersive music triggers, custom audio tuners, and intelligent Discord auto-responders.

---

## 🧭 Navigation & Core Modules

### 🚀 Getting Started
- **[Introduction & Philosophy](file:///d:/Ekretos/Eruptor/docs/getting-started/introduction.md)** — Core concepts, architecture, and Tags vs. Triggers.
- **[Quickstart Guide](file:///d:/Ekretos/Eruptor/docs/getting-started/quickstart.md)** — Build and deploy your first tag in 60 seconds.
- **[Syntax & Anatomy](file:///d:/Ekretos/Eruptor/docs/getting-started/syntax-and-anatomy.md)** — Tokens, declarations, parameters, payloads, and escaping.

### 🧩 Variables & Placeholders (Transformers)
- **[Track & Song Metadata](file:///d:/Ekretos/Eruptor/docs/variables/track-and-song.md)** — `{track.title}`, `{track.author}`, `{track.thumbnail}`, `{track.durationFormatted}`, etc.
- **[Player & Queue Status](file:///d:/Ekretos/Eruptor/docs/variables/player-and-queue.md)** — `{player.playing}`, `{player.volume}`, `{queue.list}`, `{player.remainingTime}`, etc.
- **[User & Member Context](file:///d:/Ekretos/Eruptor/docs/variables/user-and-member.md)** — `{user.username}`, `{member.roles}`, `{member.color}`, `{user.avatar}`, etc.
- **[Guild & Channel Context](file:///d:/Ekretos/Eruptor/docs/variables/guild-and-channel.md)** — `{server.name}`, `{channel.mention}`, `{voice.name}`, `{server.memberCount}`, etc.

### 🔀 Control Flow & Logic
- **[Conditional Logic (`{if}`)](file:///d:/Ekretos/Eruptor/docs/control-flow/if-conditions.md)** — Deep-dive into operators, boolean evaluations, and nesting.
- **[Logic & Math Functions](file:///d:/Ekretos/Eruptor/docs/control-flow/logic-and-math.md)** — Randomizers (`{random}`), coin flips (`{5050}`), ranges, and math.

### 🎨 Visuals & Embed Design
- **[Embed Builder](file:///d:/Ekretos/Eruptor/docs/embeds-and-ui/embed-builder.md)** — Title, description, colors, thumbnails, author, footer, and fields.
- **[UI Engineering & Layouts](file:///d:/Ekretos/Eruptor/docs/embeds-and-ui/ui-engineering.md)** — Multi-column grid layouts and color psychology.

### 🎵 Music & Audio Engine
- **[Playback & Queuing](file:///d:/Ekretos/Eruptor/docs/music-and-audio/playback-and-queuing.md)** — `{play}`, `{playtop}`, and voice auto-connection.
- **[Live Music Recommendations](file:///d:/Ekretos/Eruptor/docs/music-and-audio/live-suggestions.md)** — `{suggest}` dynamic YouTube Music search engine.
- **[Audio Controls](file:///d:/Ekretos/Eruptor/docs/music-and-audio/playback-controls.md)** — `{skip}`, `{pause}`, `{resume}`, `{volume}`, `{loop}`, `{seek}`.
- **[Studio Audio Presets](file:///d:/Ekretos/Eruptor/docs/music-and-audio/audio-presets.md)** — All 30 built-in presets (`nightcore`, `8d`, `bass`, `vaporwave`).
- **[Custom Audio Tuner (`{tune}` & `{eq}`)](file:///d:/Ekretos/Eruptor/docs/music-and-audio/custom-audio-tuner.md)** — 15-band EQ and DSP parameters (`speed`, `pitch`, `bass`, `8d`, `lowpass`).

### 🛡️ Security & Cooldowns
- **[Role, Voice & DJ Permissions](file:///d:/Ekretos/Eruptor/docs/security-and-controls/permissions.md)** — Granular access control via `{permission}`.
- **[Rate Limiting & Message Actions](file:///d:/Ekretos/Eruptor/docs/security-and-controls/rate-limiting.md)** — Cooldowns (`{cooldown(n)}`), `{delete}`, and `{silent}`.

### 📚 Ready-to-Use Recipes
- **[Music Automation Recipes](file:///d:/Ekretos/Eruptor/docs/recipes-and-showcases/music-recipes.md)** — 20+ copy-paste music triggers.
- **[Custom Audio Filter Recipes](file:///d:/Ekretos/Eruptor/docs/recipes-and-showcases/filter-recipes.md)** — Slowed+reverb, deep 8D bass, nightcore, etc.
- **[Auto-Responder & Chat Assistant Recipes](file:///d:/Ekretos/Eruptor/docs/recipes-and-showcases/auto-responders.md)** — FAQ, welcome cards, and assistant bots.

### 🛠️ Troubleshooting
- **[Common Errors & Diagnostic Guide](file:///d:/Ekretos/Eruptor/docs/troubleshooting/common-errors.md)** — Fix AST parsing bugs, cooldown syntax errors, and player issues.

---

*Powered by Eruptor Bot • Designed for GitBook, Mintlify, and Astro Starlight.*
