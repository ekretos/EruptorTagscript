# 🎵 Track & Song Placeholders

> **Access live metadata for the active audio track playing in the server.**

---

## 📌 Available Track Placeholders

Aliases: `{track}`, `{song}`

---

### `{track.title}`
- **Type:** `string`
- **Description:** Returns the title of the song currently playing.
- **Example Output:** `Bones`
- **Usage:**
  ```tagscript
  {embed(title):Now Playing: {track.title}}
  ```

---

### `{track.author}`
- **Type:** `string`
- **Description:** Returns the artist, creator, or channel name.
- **Example Output:** `Imagine Dragons`
- **Usage:**
  ```tagscript
  {embed(description):Artist: **{track.author}**}
  ```

---

### `{track.uri}` / `{track.url}`
- **Type:** `string`
- **Description:** Returns the official web URL to the audio source.
- **Example Output:** `https://www.youtube.com/watch?v=V2SVRJ6dcE4`
- **Usage:**
  ```tagscript
  {embed(description):Listen online: [Click Here]({track.uri})}
  ```

---

### `{track.thumbnail}`
- **Type:** `string` (Image URL)
- **Description:** Returns the high-resolution album art or YouTube video thumbnail.
- **Example Output:** `https://i.ytimg.com/vi/V2SVRJ6dcE4/maxresdefault.jpg`
- **Usage:**
  ```tagscript
  {embed(thumbnail):{track.thumbnail}}
  ```

---

### `{track.durationFormatted}`
- **Type:** `string`
- **Description:** Formatted duration of the track in `MM:SS` or `HH:MM:SS`.
- **Example Output:** `02:45`
- **Usage:**
  ```tagscript
  {embed(field):Duration~{track.durationFormatted}~true}
  ```

---

### `{track.positionFormatted}`
- **Type:** `string`
- **Description:** Formatted active playback progress position in `MM:SS`.
- **Example Output:** `01:15`
- **Usage:**
  ```tagscript
  {embed(field):Position~{track.positionFormatted}~true}
  ```

---

### `{track.remainingTime}`
- **Type:** `string`
- **Description:** Formatted time remaining before the track finishes playing.
- **Example Output:** `01:30`
- **Usage:**
  ```tagscript
  {embed(field):Remaining~{track.remainingTime}~true}
  ```

---

### `{track.requester}` / `{track.requesterMention}`
- **Type:** `string`
- **Description:** Username or Discord mention of the member who added this song.
- **Example Output:** `errordoc404` or `<@456130838183280651>`
- **Usage:**
  ```tagscript
  {embed(footer.text):Queued by {track.requester}}
  ```

---

### `{track.hasTrack}`
- **Type:** `boolean`
- **Description:** Returns `true` if a track is active in the player, `false` otherwise.
- **Example Output:** `true`
- **Usage:**
  ```tagscript
  {if({track.hasTrack}==true):🎶 Active Song: {track.title}|❌ No track loaded.}
  ```

---

## 💻 Full Interactive Example

```tagscript
{cooldown(3)}
{embed(title):🎶 Active Track}
{embed(description):**[{track.title}]({track.uri})**\nBy **{track.author}**}
{embed(thumbnail):{track.thumbnail}}
{embed(color):0x5865F2}
{embed(field):Progress~{track.positionFormatted} / {track.durationFormatted}~true}
{embed(field):Time Left~{track.remainingTime}~true}
{embed(field):Requested By~{track.requester}~true}
```
