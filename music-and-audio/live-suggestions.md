# 🎧 Live Music Recommendations (`{suggest}`)

> **Dynamically discover and suggest songs live from YouTube Music based on what is currently playing.**

---

## 🌟 How It Works

When `{suggest}` is executed:
1. Eruptor detects the artist and genre of the currently playing song (`{track.author}`).
2. It sends a live query through Lavalink's YouTube Music search engine.
3. It automatically filters out the currently playing song so users get fresh recommendations.
4. It formats the song into a clickable markdown link.

---

## 📌 All Output Modes

| Tag Expression | Output Format | Example Result |
| :--- | :--- | :--- |
| **`{suggest}`** | Clickable Markdown Link | `**[Enemy](url)** by **Imagine Dragons**` |
| **`{suggest(title)}`** | Song Title only | `Enemy` |
| **`{suggest(author)}`** | Artist Name only | `Imagine Dragons` |
| **`{suggest(raw)}`** | Plain `Artist - Title` (great for `{play}`) | `Imagine Dragons - Enemy` |
| **`{suggest(uri)}`** | Direct Track URL | `https://www.youtube.com/watch?...` |
| **`{suggest:query}`** | Custom query recommendation | `**[Believer](url)** by **Imagine Dragons**` |

---

## 💻 Example 1: Suggestion HUD Trigger (`suggest`)

```tagscript
{cooldown(5)}
{embed(title):{if({player.playing}==true):🎵 Dynamic Recommendation|🎵 Song Suggestion}}
{embed(description):{if({player.playing}==true):Currently Playing: **[{track.title}]({track.uri})** by **{track.author}**

🎧 **Recommended next for {user.username}:**
👉 {suggest}|No music is currently playing, {user}! Here is a recommended track:
👉 {suggest}}}
{embed(thumbnail):{track.thumbnail}}
{embed(color):0x5865F2}
{embed(footer.text):Live recommendations via YouTube Music}
```

---

## 💻 Example 2: Instant Radio Trigger (`radio`)
Automatically queues the recommended song directly into the player!

```tagscript
{cooldown(5)}
{play:{suggest(raw)}}
{embed(title):📻 Instant Radio Mode}
{embed(description):Queued a live recommendation for {user.username}:\n👉 **{suggest(raw)}**}
{embed(color):0x57F287}
{embed(footer.text):Radio triggered by {user.username}}
```
