---
title: Live Music Recommendations
description: How the dynamic {suggest} recommendation engine works in Eruptor.
---

## The `{suggest}` Recommendation Engine

The `{suggest}` parser connects to YouTube Music in real-time to find smart, context-aware song recommendations based on what's currently playing in the guild.

---

## Formats & Modifiers

| Tag Syntax | Output Format | Example Output |
| :--- | :--- | :--- |
| `{suggest}` | Clickable Markdown Link | `**[Enemy](url)** by **Imagine Dragons**` |
| `{suggest(title)}` | Track Title only | `Enemy` |
| `{suggest(author)}` | Artist / Creator name only | `Imagine Dragons` |
| `{suggest(raw)}` | Plain text `Artist - Title` | `Imagine Dragons - Enemy` |
| `{suggest(uri)}` | Direct Track URL | `https://www.youtube.com/watch?...` |
| `{suggest:query}` | Recommendation based on custom seed query | `**[Track](url)** by **Artist**` |

---

## Example: Auto Suggestion Card

```tagscript
{cooldown(5)}
{embed(title):🎵 Next Recommended Track}
{embed(description):Based on **{track.author}**, we suggest:\n👉 {suggest}}
{embed(thumbnail):{track.thumbnail}}
{embed(color):0x5865F2}
```
