# 🎨 Discord Embed Builder

> **Create rich, interactive visual cards with titles, thumbnails, colors, fields, and footers.**

---

## 📌 All Embed Properties

---

### `{embed(title):text}`
Sets the large bold header title.
```tagscript
{embed(title):🎶 Now Playing}
```

---

### `{embed(description):text}`
Sets the main text body (supports Discord markdown, mentions, links).
```tagscript
{embed(description):**[{track.title}]({track.uri})**\nBy **{track.author}**}
```

---

### `{embed(color):hex/number}`
Sets the left border accent color. Accepts hex strings or numbers.
```tagscript
{embed(color):0x5865F2}
{embed(color):#FF5733}
{embed(color):{member.color}}
```

---

### `{embed(thumbnail):url}`
Sets the top-right thumbnail image.
```tagscript
{embed(thumbnail):{track.thumbnail}}
```

---

### `{embed(image):url}`
Sets the large central body banner image.
```tagscript
{embed(image):https://example.com/banner.png}
```

---

### `{embed(field):Name~Value~inline}`
Adds custom grid fields.
- **Name:** Title of the field.
- **Value:** Body of the field.
- **inline:** `true` to align horizontally (up to 3 in a row) or `false` for full width.

```tagscript
{embed(field):Duration~{track.durationFormatted}~true}
{embed(field):Volume~{player.volume}%~true}
{embed(field):Queue~{player.queueSize} songs~true}
```

---

### `{embed(footer.text):text}` & `{embed(footer.icon_url):url}`
Sets the bottom small footer.
```tagscript
{embed(footer.text):Requested by {user.username}}
{embed(footer.icon_url):{user.avatar}}
```

---

## 💻 Full Interactive Embed Example

```tagscript
{cooldown(3)}
{embed(title):🎵 Music Status}
{embed(description):🎶 **[{track.title}]({track.uri})**\n👤 **{track.author}**}
{embed(thumbnail):{track.thumbnail}}
{embed(color):0x5865F2}
{embed(field):Duration~{track.durationFormatted}~true}
{embed(field):Volume~{player.volume}%~true}
{embed(field):Loop Mode~{player.loop}~true}
{embed(footer.text):Requested by {user.username}}
{embed(footer.icon_url):{user.avatar}}
```
