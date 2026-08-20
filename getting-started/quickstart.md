# ⚡ Quickstart: Build Your First Tag in 60 Seconds

> **Follow this step-by-step tutorial to create and deploy interactive tags and music triggers in Eruptor.**

---

## 🎯 What We Will Build
1. A **Custom Music Status Tag (`!np`)** that displays live song progress and volume.
2. A **Smart Song Suggestion Trigger (`suggest`)** that recommends songs dynamically from YouTube Music.
3. A **Custom Audio Tuner Trigger (`slowed`)** that slows down the track and adds low-pass reverb.

---

## 🛠️ Step 1: Create a Music HUD Tag

Let's build a clean `!np` command that shows what's currently playing, artist information, and a live progress bar.

### Tag Template Code:
```tagscript
{cooldown(3)}
{embed(title):📊 Now Playing}
{embed(description):{if({player.playing}==true):🎶 **Track:** [{track.title}]({track.uri})
👤 **Artist:** {track.author}
⏱️ **Progress:** {player.positionFormatted} / {track.durationFormatted} *(Remaining: {player.remainingTime})*
🔊 **Volume:** {player.volume}% | 🔁 **Loop Mode:** {player.loop}
📑 **Queue:** {player.queueSize} tracks ({player.queueDuration})|❌ No music is currently playing in this server.}}
{embed(thumbnail):{track.thumbnail}}
{embed(color):0x5865F2}
{embed(footer.text):Requested by {user.username}}
```

### How It Works:
- **`{cooldown(3)}`**: Prevents users from spamming the tag more than once every 3 seconds.
- **`{if({player.playing}==true):...|...}`**: If a song is playing, it outputs the song details; otherwise, it tells the user no song is active.
- **`{embed(...)}`**: Formats the response into a sleek Discord Embed.

---

## 🎵 Step 2: Create a Live Suggestion Trigger

Now let's create a trigger that runs whenever someone types `suggest` in any channel.

### Trigger Template Code:
```tagscript
{cooldown(5)}
{embed(title):{if({player.playing}==true):🎵 Dynamic Song Recommendation|🎵 Song Suggestion}}
{embed(description):{if({player.playing}==true):Currently Playing: **[{track.title}]({track.uri})** by **{track.author}**

🎧 **Recommended next for {user.username}:**
👉 {suggest}|No music is currently playing, {user}! Here is a recommended song:
👉 {suggest}}}
{embed(thumbnail):{track.thumbnail}}
{embed(color):0x5865F2}
{embed(footer.text):Live recommendations via YouTube Music}
```

### What Happens in Discord:
1. When a user types `suggest`, Eruptor looks at the currently playing artist (`{track.author}`).
2. It performs a live search on YouTube Music behind the scenes.
3. It filters out the current song and returns a new song recommendation with a clickable link.

---

## 🎛️ Step 3: Create a Custom Audio Filter Trigger

Let's build a trigger named `slowed` that alters the speed and acoustic frequency of the song in real time!

### Trigger Template Code:
```tagscript
{cooldown(5)}
{tune:speed=0.85, pitch=0.85, lowpass=20}
{embed(title):🌙 Slowed + Reverb Activated}
{embed(description):Applied custom audio tuning to **[{track.title}]({track.uri})**:\n• **Speed:** \`0.85x\`\n• **Pitch:** \`0.85x\`\n• **LowPass Cutoff:** \`20\`}
{embed(thumbnail):{track.thumbnail}}
{embed(color):0x9B59B6}
{embed(footer.text):Tuned for {user.username}}
```

---

## 📦 How to Save Triggers to MongoDB

You can add triggers directly using the provided deployment script:

```javascript
// addSuggestTrigger.js
const { MongoClient } = require('mongodb');

// Run with: node addSuggestTrigger.js
```

Once saved in your database, your bot is immediately live with all triggers!

---

## 📖 Continue Reading
Learn the core syntax rules in the **[Syntax & Anatomy Guide](file:///d:/Ekretos/Eruptor/docs/getting-started/syntax-and-anatomy.md)**.
