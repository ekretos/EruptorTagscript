# 🏰 Guild, Channel & Voice Placeholders

> **Access Discord server metadata, text channel topics, and voice channel user limits.**

---

## 📌 Server & Guild Placeholders (`{server}`, `{guild}`)

---

### `{server.name}`
- **Type:** `string`
- **Description:** Official name of the Discord server.
- **Example Output:** `Eruptor Music Lounge`

---

### `{server.id}`
- **Type:** `string` (Snowflake)
- **Description:** Discord Server / Guild ID.
- **Example Output:** `947967652675072051`

---

### `{server.memberCount}`
- **Type:** `number`
- **Description:** Total number of members (users + bots) in the server.
- **Example Output:** `1540`

---

### `{server.icon}`
- **Type:** `string` (Image URL)
- **Description:** Server icon image URL.
- **Usage:**
  ```tagscript
  {embed(thumbnail):{server.icon}}
  ```

---

## 📌 Voice Channel Placeholders (`{voice}`)

---

### `{voice.name}`
- **Type:** `string`
- **Description:** Name of the voice channel the user is connected to.
- **Example Output:** `Lounge Voice #1`

---

### `{voice.userLimit}`
- **Type:** `number`
- **Description:** Max users permitted in the voice channel (`0` if unlimited).
- **Example Output:** `10`

---

## 💻 Full Interactive Example: Server Info Tag

```tagscript
{cooldown(5)}
{embed(title):🏰 Server Information: {server.name}}
{embed(thumbnail):{server.icon}}
{embed(field):Server ID~{server.id}~true}
{embed(field):Total Members~{server.memberCount}~true}
{embed(field):Voice Channel~{if({voice.name}!=):{voice.name}|Not in voice}~true}
{embed(color):0x5865F2}
```
