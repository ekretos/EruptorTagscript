# 🎛️ Player & Queue Placeholders

> **Inspect live Lavalink audio player state, volume, loop modes, and queue metrics.**

---

## 📌 Player Placeholders (`{player}`)

---

### `{player.playing}`
- **Type:** `boolean`
- **Description:** Returns `true` if audio is currently streaming, `false` if paused or idle.
- **Usage:**
  ```tagscript
  {if({player.playing}==true):🟢 Playing|🔴 Idle / Paused}
  ```

---

### `{player.volume}`
- **Type:** `number`
- **Description:** Current playback volume level (`0`–`200`).
- **Example Output:** `75`
- **Usage:**
  ```tagscript
  🔊 Current Volume: **{player.volume}%**
  ```

---

### `{player.loop}`
- **Type:** `string`
- **Description:** Active loop state. Returns `none`, `track`, or `queue`.
- **Example Output:** `track`
- **Usage:**
  ```tagscript
  🔁 Loop Mode: `{player.loop}`
  ```

---

### `{player.queueSize}`
- **Type:** `number`
- **Description:** Total number of songs waiting in queue (excluding the active song).
- **Example Output:** `5`
- **Usage:**
  ```tagscript
  📑 Waiting in Queue: **{player.queueSize} tracks**
  ```

---

### `{player.queueDuration}`
- **Type:** `string`
- **Description:** Formatted total playtime of all waiting tracks combined.
- **Example Output:** `18:42`
- **Usage:**
  ```tagscript
  ⏱️ Total Queue Duration: `{player.queueDuration}`
  ```

---

## 📌 Queue Placeholders (`{queue}`)

---

### `{queue.first}`
- **Type:** `string`
- **Description:** Returns the title of the next upcoming song.
- **Example Output:** `Levitating`
- **Usage:**
  ```tagscript
  ⏭️ Up Next: **{queue.first}**
  ```

---

### `{queue.list}`
- **Type:** `string`
- **Description:** Formatted markdown list of the first 10 tracks in the queue.
- **Example Output:**
  ```text
  1. Levitating
  2. Blinding Lights
  3. Starboy
  ```
- **Usage:**
  ```tagscript
  {embed(field):Next 10 Songs~{queue.list}~false}
  ```

---

### `{queue.isEmpty}`
- **Type:** `boolean`
- **Description:** Returns `true` if no tracks are waiting in queue.
- **Usage:**
  ```tagscript
  {if({queue.isEmpty}==true):Queue is empty!|Queue has {player.queueSize} tracks.}
  ```

---

## 💻 Full Interactive Example

```tagscript
{cooldown(3)}
{embed(title):📊 Server Music Queue}
{embed(description):🎶 **Now Playing:** [{track.title}]({track.uri})\n🔊 Volume: {player.volume}% | 🔁 Loop: {player.loop}}
{embed(field):Up Next~{queue.first}~true}
{embed(field):Total Queue Time~{player.queueDuration}~true}
{embed(field):Upcoming Songs~{queue.list}~false}
{embed(color):0x5865F2}
```
