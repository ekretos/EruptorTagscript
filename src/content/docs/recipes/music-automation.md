---
title: Music Automation Recipes
description: 10 copy-paste ready TagScript recipes for music automation, dynamic radio, and player HUD controls.
---

## 1. Smart Live Song Recommender (`suggest`)
```tagscript
{cooldown(5)}
{embed(title):{if({player.playing}==true):🎵 Dynamic Song Recommendation|🎵 Song Suggestion}}
{embed(description):{if({player.playing}==true):Currently Playing: **[{track.title}]({track.uri})** by **{track.author}**

🎧 **Recommended next for {user.username}:**
👉 {suggest}|No music is currently playing, {user}! Here is a recommended song:
👉 {suggest}}}
{embed(thumbnail):{track.thumbnail}}
{embed(color):0x5865F2}
{embed(footer.text):{if({player.playing}==true):Live recommendations via YouTube Music • {user.username}|Play a song to get live dynamic suggestions!}}
```

---

## 2. Instant Radio Auto-Play (`radio`)
```tagscript
{cooldown(5)}
{play:{suggest(raw)}}
{embed(title):📻 Instant Radio Mode}
{embed(description):Queued a recommended track for {user.username}:\n👉 **{suggest(raw)}**}
{embed(color):0x57F287}
{embed(footer.text):Radio initiated by {user.username}}
```

---

## 3. Live Player Status HUD (`playerinfo`)
```tagscript
{cooldown(3)}
{embed(title):📊 Live Player Status}
{embed(description):{if({player.playing}==true):🎶 **Now Playing:** [{track.title}]({track.uri})
👤 **Artist:** {track.author}
⏱️ **Progress:** {player.positionFormatted} / {track.durationFormatted} *(Remaining: {player.remainingTime})*
🔊 **Volume:** {player.volume}% | 🔁 **Loop:** {player.loop}
📑 **Queue:** {player.queueSize} tracks ({player.queueDuration})|❌ No music is currently playing in this server.}}
{embed(thumbnail):{track.thumbnail}}
{embed(color):0x5865F2}
{embed(footer.text):Requested by {user.username}}
```

---

## 4. Jump Forward 30s (`ff`)
```tagscript
{cooldown(3)}
{seek:30}
{embed(title):⏩ Fast Forward}
{embed(description):Skipped forward 30 seconds on **[{track.title}]({track.uri})**!}
{embed(color):0x3498DB}
```

---

## 5. Rewind 30s (`rw`)
```tagscript
{cooldown(3)}
{seek:-30}
{embed(title):⏪ Rewind}
{embed(description):Rewound 30 seconds on **[{track.title}]({track.uri})**!}
{embed(color):0x3498DB}
```

---

## 6. DJ Force-Skip (`skip`)
```tagscript
{cooldown(5)}
{permission(dj):true}
{skip}
{embed(title):⏭️ Track Skipped}
{embed(description):{user.username} skipped the current track.}
{embed(color):0x2ECC71}
```

---

## 7. Instant Lofi Chill Mode (`chill`)
```tagscript
{cooldown(10)}
{volume:50}
{filter:clear}
{play:lofi hip hop radio beats to relax}
{embed(title):☕ Chill Mode Activated}
{embed(description):Set volume to **50%**, reset audio filters, and queued **Lofi Beats** for {user.username}! 🎉}
{embed(color):0xFEE75C}
{embed(footer.text):Relax & enjoy the music}
```

---

## 8. Toggle Queue Loop (`loopqueue`)
```tagscript
{cooldown(3)}
{loop:queue}
{embed(title):🔁 Queue Loop Enabled}
{embed(description):The current queue will now repeat indefinitely.}
{embed(color):0x5865F2}
```

---

## 9. Clear Queue (`clearqueue`)
```tagscript
{cooldown(5)}
{permission(dj):true}
{embed(title):🗑️ Queue Cleared}
{embed(description):Cleared all waiting tracks from the queue.}
{embed(color):0xE74C3C}
```

---

## 10. Volume Booster (`boostvol`)
```tagscript
{cooldown(5)}
{permission(dj):true}
{volume:150}
{embed(title):🔊 Volume Boosted}
{embed(description):Set playback volume to **150%**!}
{embed(color):0xE67E22}
```
