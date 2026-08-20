---
title: Playback & Queuing
description: How to trigger music playback, queue tracks, and handle voice auto-connections in Eruptor.
---

## Queuing Tracks: `{play}` and `{playtop}`

### `{play:query}`
Appends a track or playlist to the end of the server's music queue. If the bot is not currently connected to voice, it will automatically join the author's voice channel.

```tagscript
{play:lofi hip hop radio beats to relax}
```

---

### `{playtop:query}`
Queues a track directly to the **top** of the queue, making it play immediately after the current song finishes.

```tagscript
{playtop:urgent request song}
```

---

### Dynamic Auto-Play with `{suggest}`
You can chain `{suggest}` directly into `{play}` to create intelligent radio stations:

```tagscript
{play:{suggest(raw)}}
```
