---
title: Audio Playback Controls
description: Complete reference for skip, pause, resume, volume, loop, shuffle, and seek parsers in Eruptor.
---

## Overview

Eruptor provides dedicated tag parsers to control active audio playback in your server.

---

## Controls Reference

| Tag | Action | Description |
| :--- | :--- | :--- |
| **`{skip}`** | Skip Track | Skips the active track immediately. |
| **`{stop}`** | Stop & Disconnect | Clears the queue and disconnects the bot from voice. |
| **`{pause}`** | Pause Playback | Pauses the active audio stream. |
| **`{resume}`** | Resume Playback | Resumes a paused audio stream. |
| **`{shuffle}`** | Shuffle Queue | Randomly shuffles the waiting playlist. |
| **`{volume:val}`** | Set Volume | Adjusts playback volume (`0` to `200`). |
| **`{loop:mode}`** | Set Loop Mode | Loop modes: `none`, `track`, `queue`, `cycle`. |
| **`{seek:time}`** | Seek | Seeks to offset (e.g. `{seek:30}` or `{seek:01:30}`). |

---

## Example: Fast Forward Trigger

```tagscript
{cooldown(3)}
{seek:30}
{embed(title):⏩ Fast Forward}
{embed(description):Jumped ahead 30s in **[{track.title}]({track.uri})**!}
{embed(color):0x3498DB}
```
