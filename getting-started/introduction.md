# 🌟 Introduction to Eruptor Engine

> **Learn how Eruptor combines TagScript with Lavalink audio to turn your Discord server into an automated, interactive music hub.**

---

## 💡 What is Eruptor's Tag & Trigger Engine?

Eruptor provides a dual-layer automation platform. It allows anyone—regardless of programming background—to write dynamic scripts that run inside Discord messages. 

Whether you want to create an auto-DJ that suggests songs, build interactive player cards, or tune equalizer frequencies with custom commands, Eruptor's engine makes it effortless.

---

## ⚡ Tags vs. Triggers: What's the Difference?

In Eruptor, there are two distinct ways a script is triggered:

### 1. **Tags (Prefix-Based Commands)**
Tags act like custom bot commands that start with your server's prefix (e.g. `!np`, `!radio`, `!stats`).
- **Invocation:** `!<tagname> [arguments]`
- **Arguments:** Passed explicitly to the tag using `{args}`, `{1}`, `{2}`, etc.
- **Primary Use Case:** Custom server commands, utility lookups, role assigners.

### 2. **Triggers (Natural Language Auto-Responders)**
Triggers run automatically when members type specific words or phrases in chat without needing a command prefix.
- **Invocation:** Typing `suggest`, `chill`, `player info`, etc.
- **Matching Priority:** Exact phrase match ➔ First word match ➔ Keyword match.
- **Primary Use Case:** Smart chat auto-responses, voice channel helpers, interactive music games.

---

## 📊 Comparison Matrix

| Feature | **Tags** | **Triggers** |
| :--- | :--- | :--- |
| **Trigger Type** | Command prefix (`!tag`) | Chat message (`phrase` or `word`) |
| **Database Storage** | MongoDB `tags` | MongoDB `triggers` |
| **Argument Handling** | Numbered positional `{1}`, `{2}` | Inherits full message |
| **Response Format** | Embeds, Text, Files | Embeds, Text, Files |
| **Audio Controls** | Play, Skip, Loop, Volume, Tune | Play, Skip, Loop, Volume, Tune |
| **Cooldowns** | Supported (`{cooldown(n)}`) | Supported (`{cooldown(n)}`) |

---

## 🔄 The Life of a Tag: From Message to Execution

Here is the exact step-by-step lifecycle when a message is sent in your server:

```text
1. Member sends message in a text channel
   │
2. Eruptor checks if author is a bot (bots are ignored)
   │
3. Check prefix:
   ├── If message starts with Prefix ➔ Lookup in `Tag` database
   └── If no Prefix ➔ Lookup in `Trigger` database
   │
4. Eruptor constructs live Context Transformers:
   ├── {track}  ➔ Current track title, artist, thumbnail, URI
   ├── {player} ➔ Volume, playback state, queue length, time remaining
   ├── {filter} ➔ Active DSP filter preset, available filter list
   ├── {user}   ➔ Username, avatar, user ID, discriminator
   └── {server} ➔ Member count, server name, server icon
   │
5. TagScript AST Interpreter parses the template:
   ├── Resolves nested variables ({track.title}, {player.volume})
   ├── Evaluates conditions ({if({player.playing}==true):...|...})
   └── Resolves dynamic live search ({suggest}, {random})
   │
6. Side-Effects & Actions are executed:
   ├── Audio Actions (Play song, apply {tune}, set {volume})
   └── Discord Actions (Check permissions, trigger cooldown, delete message)
   │
7. Eruptor sends the formatted Embed or Message back to the channel!
```

---

## 🚀 Next Steps

Ready to build your first tag? Jump into the **[Quickstart Guide](file:///d:/Ekretos/Eruptor/docs/getting-started/quickstart.md)**!
