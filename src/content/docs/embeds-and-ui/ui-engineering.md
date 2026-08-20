---
title: UI Layouts & Design Mastery
description: Best practices for responsive multi-field Discord grid layouts, colors, and typography.
---

## Multi-Field Grid Layouts

Discord supports up to 3 inline fields per row. If more than 3 inline fields are consecutive, they automatically wrap to a new line.

```tagscript
{embed(field):👤 Artist~{track.author}~true}
{embed(field):⏱️ Duration~{track.durationFormatted}~true}
{embed(field):🔊 Volume~{player.volume}%~true}
```

---

## Color Handling

You can pass colors in three formats:
1. **Hexadecimal with `0x`**: `0x5865F2`
2. **Hexadecimal with `#`**: `#5865F2`
3. **Dynamic User Color**: `{member.color}` (uses user's highest role color)

---

## Progress Bar Design Pattern

You can craft dynamic ASCII playback progress bars using `{slice}` and mathematical expressions:

```tagscript
🔘▬▬▬▬▬▬▬▬▬ ({player.positionFormatted} / {track.durationFormatted})
```
