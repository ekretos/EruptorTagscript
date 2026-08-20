# 🌋 Eruptor TagScript & Trigger Engine — The Comprehensive Encyclopedia & Reference Manual

> **The Ultimate Handbook to Building Dynamic Tags, Audio Triggers, Custom Music Filters, and Discord Auto-Responders in Eruptor.**
> *Version: 2.5.0 • Target Runtime: Node.js & Bun • Engine: TagScript + Eruptor Custom Plugins*

---

# 📑 Master Table of Contents

- [Chapter 1: Deep Architectural Overview](#chapter-1-deep-architectural-overview)
  - [1.1 The Philosophy of Eruptor Tags & Triggers](#11-the-philosophy-of-eruptor-tags--triggers)
  - [1.2 Tags vs. Triggers Matrix](#12-tags-vs-triggers-matrix)
  - [1.3 The Execution Lifecycle](#13-the-execution-lifecycle)
  - [1.4 Lexer, Tokenizer & AST Tree Resolution](#14-lexer-tokenizer--ast-tree-resolution)
  - [1.5 Parser Precedence & Solving Mechanics](#15-parser-precedence--solving-mechanics)
- [Chapter 2: Exhaustive Transformers Reference](#chapter-2-exhaustive-transformers-reference)
  - [2.1 Track & Song Transformer (`{track}`, `{song}`)](#21-track--song-transformer-track-song)
  - [2.2 Lavalink Player Transformer (`{player}`)](#22-lavalink-player-transformer-player)
  - [2.3 Queue Transformer (`{queue}`)](#23-queue-transformer-queue)
  - [2.4 Audio Filter Transformer (`{filter}`)](#24-audio-filter-transformer-filter)
  - [2.5 User & Author Transformer (`{user}`, `{author}`)](#25-user--author-transformer-user-author)
  - [2.6 Guild Member & Target Transformer (`{member}`, `{target}`, `{mention}`)](#26-guild-member--target-transformer-member-target-mention)
  - [2.7 Guild & Server Transformer (`{server}`, `{guild}`)](#27-guild--server-transformer-server-guild)
  - [2.8 Channel Transformer (`{channel}`)](#28-channel-transformer-channel)
  - [2.9 Voice Channel Transformer (`{voice}`)](#29-voice-channel-transformer-voice)
  - [2.10 Message Arguments & String Transformers (`{message}`, `{args}`, `{1}`, `{2}`...)](#210-message-arguments--string-transformers)
- [Chapter 3: Exhaustive Parsers Reference](#chapter-3-exhaustive-parsers-reference)
  - [3.1 Control Flow & Conditionals (`{if}`, `{union}`, `{intersection}`, `{5050}`, `{random}`, `{range}`, `{break}`, `{stop}`)](#31-control-flow--conditionals)
  - [3.2 Variables & Scope (`{=}`, `{define}`, `{jsonvar}`, `{strictvars}`)](#32-variables--scope)
  - [3.3 String & Mathematical Manipulation (`{replace}`, `{slice}`, `{upper}`, `{lower}`, `{capitalize}`, `{ordinal}`, `{urlencode}`, `{urldecode}`, `{includes}`)](#33-string--mathematical-manipulation)
  - [3.4 Discord Embed Construction (`{embed}`)](#34-discord-embed-construction)
  - [3.5 Message & Cooldown Actions (`{cooldown}`, `{delete}`, `{silent}`, `{file}`, `{required}`, `{deny}`)](#35-message--cooldown-actions)
  - [3.6 Live Music Search & Suggestions (`{suggest}`, `{recommend}`, `{recs}`)](#36-live-music-search--suggestions)
  - [3.7 Music Playback & Queuing (`{play}`, `{playtop}`)](#37-music-playback--queuing)
  - [3.8 Music Playback Controls (`{skip}`, `{stop}`, `{pause}`, `{resume}`, `{shuffle}`, `{volume}`, `{loop}`, `{seek}`)](#38-music-playback-controls)
  - [3.9 Studio Audio Filter Presets (`{filter}`)](#39-studio-audio-filter-presets)
  - [3.10 Manual Audio Tuner & 15-Band Equalizer (`{tune}`, `{tuner}`, `{eq}`, `{equalizer}`)](#310-manual-audio-tuner--15-band-equalizer)
  - [3.11 Role, Voice & DJ Permissions (`{permission}`)](#311-role-voice--dj-permissions)
- [Chapter 4: The Audio Engine & Lavalink DSP Matrix](#chapter-4-the-audio-engine--lavalink-dsp-matrix)
  - [4.1 15-Band Equalizer Mechanics](#41-15-band-equalizer-mechanics)
  - [4.2 Timescale (Speed, Pitch, Rate) Equations](#42-timescale-speed-pitch-rate-equations)
  - [4.3 8D Audio Rotation & Biquad LowPass Filters](#43-8d-audio-rotation--biquad-lowpass-filters)
  - [4.4 Tremolo, Vibrato, Distortion & Karaoke Filters](#44-tremolo-vibrato-distortion--karaoke-filters)
- [Chapter 5: Embed Engineering & UI Layout Mastery](#chapter-5-embed-engineering--ui-layout-mastery)
  - [5.1 Color Space & Hex Handling](#51-color-space--hex-handling)
  - [5.2 Multi-Field Grid Layouts](#52-multi-field-grid-layouts)
  - [5.3 Thumbnail & Artwork Resolution](#53-thumbnail--artwork-resolution)
- [Chapter 6: Critical Gotchas, Anti-Patterns & Golden Rules](#chapter-6-critical-gotchas-anti-patterns--golden-rules)
  - [6.1 The AST Embed Action Overwrite Hazard](#61-the-ast-embed-action-overwrite-hazard)
  - [6.2 Cooldown Syntax Discrepancies](#62-cooldown-syntax-discrepancies)
  - [6.3 Null Safety & Falsy Parameter Handling](#63-null-safety--falsy-parameter-handling)
  - [6.4 Voice Connection States & Permissions](#64-voice-connection-states--permissions)
- [Chapter 7: 50+ Real-World Showcase Recipes](#chapter-7-50-real-world-showcase-recipes)
  - [7.1 Music Automation Recipes (1-10)](#71-music-automation-recipes)
  - [7.2 Custom Audio Filter Recipes (11-20)](#72-custom-audio-filter-recipes)
  - [7.3 Auto-Responder & Chat Assistant Recipes (21-30)](#73-auto-responder--chat-assistant-recipes)
  - [7.4 Server Utilities & Moderation Recipes (31-40)](#74-server-utilities--moderation-recipes)
  - [7.5 Economy, Fun & Interactive Games (41-50)](#75-economy-fun--interactive-games)
- [Chapter 8: Diagnostic & Troubleshooting Handbook](#chapter-8-diagnostic--troubleshooting-handbook)

---

# Chapter 1: Deep Architectural Overview

## 1.1 The Philosophy of Eruptor Tags & Triggers

Eruptor provides server administrators and power users with a Turing-complete, domain-specific markup language designed specifically for Discord bot automation.

The engine transforms static strings into dynamic, interactive experiences capable of:
1. Interacting with high-performance audio streams (Lavalink / Rythra).
2. Applying digital signal processing (DSP) filters in real time.
3. Reading deep guild, voice, member, and player state.
4. Constructing rich visual interfaces (Discord Embeds, Components V2, Buttons).
5. Protecting execution with granular role, permission, and voice gates.

---

## 1.2 Tags vs. Triggers Matrix

```
┌────────────────────────┬──────────────────────────────────┬──────────────────────────────────┐
│ Characteristic         │ Tags                             │ Triggers                         │
├────────────────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ Activation Trigger     │ Server Prefix (e.g. `!tagname`)  │ Natural message content          │
│ Invocation Scope       │ Command-based                    │ Phrase, First-word, Substring    │
│ MongoDB Collection     │ `tags`                           │ `triggers`                       │
│ Arguments Support      │ `{args}`, `{1}`, `{2}`...        │ Inherits entire message content  │
│ Auto-Delete Capability │ Optional via `{delete}`          │ Optional via `{delete}`          │
│ Execution Speed        │ O(1) Prefix check + DB lookup    │ O(1) Exact > O(N) Substring scan │
└────────────────────────┴──────────────────────────────────┴──────────────────────────────────┘
```

---

## 1.3 The Execution Lifecycle

```text
[ Incoming Discord Message (messageCreate) ]
                     │
                     ▼
           [ Filter Bots & DMs ]
                     │
                     ▼
        [ Fetch Guild MusicDB Config ]
                     │
        ┌────────────┴────────────┐
        │                         │
[ Prefix Match? ]         [ No Prefix? ]
        │                         │
        ▼                         ▼
 [ tagHandler ]           [ triggerHandler ]
        │                         │
        └────────────┬────────────┘
                     │
                     ▼
       [ Build Context Transformers ]
   ({player}, {track}, {user}, {filter}...)
                     │
                     ▼
    [ TagScript AST Lexer & Parsing ]
                     │
                     ▼
    [ Evaluate Conditions & Variables ]
                     │
                     ▼
    [ Execute Music & Audio Actions ]
  (Search, Play, Volume, Loop, Tune, Filter)
                     │
                     ▼
  [ Execute Discord Actions & Cooldowns ]
    (Cooldown, Delete, Permissions, Embed)
                     │
                     ▼
   [ Dispatch Formatted Embed / Message ]
```

---

## 1.4 Lexer, Tokenizer & AST Tree Resolution

TagScript does not interpret text as a flat regex. It uses a coordinate-based recursive descent tree tokenizer:

1. **Tag Boundary Tokenization**:
   The engine scans strings for unescaped `{` and `}` markers.
2. **Tag Decomposition**:
   - `declaration`: Tag identifier before any parameter (e.g., `embed` in `{embed(title):text}`).
   - `parameter`: Data in parentheses or dot notation (e.g., `title` in `{embed(title):text}`).
   - `payload`: Data after the colon `:` (e.g., `text` in `{embed(title):text}`).
3. **Bottom-Up Evaluation**:
   Nested tags are evaluated from the deepest leaves up to the root node.

---

## 1.5 Parser Precedence & Solving Mechanics

In Eruptor, parsers are ordered intentionally in [allParsers.ts](file:///d:/Ekretos/Eruptor/src/manager/allParsers.ts):

1. **Variables & StrictVars**: Transforms `{track.title}`, `{player.playing}`, `{user.username}`.
2. **Logic & Control Flow**: Resolves `{if}`, `{random}`, `{5050}`, `{range}`.
3. **Strings & Formatting**: Resolves `{replace}`, `{slice}`, `{urlencode}`.
4. **Security & Cooldowns**: Evaluates `{permission}`, `{cooldown}`, `{deny}`.
5. **Live Search & Audio**: Evaluates `{suggest}`, `{tune}`, `{filter}`, `{play}`.
6. **Visual Construction**: Resolves `{embed}` and `{file}` without mutation clashes.

---

# Chapter 2: Exhaustive Transformers Reference

Transformers expose read-only attributes from the live runtime.

---

## 2.1 Track & Song Transformer (`{track}`, `{song}`)

Exposes full metadata of the active track playing in the server.

```yaml
Base Object: RythraTrack
Aliases: {track}, {song}
Null Behavior: Returns empty string ("") or default values when no track is active.
```

### Attributes Table

| Property | Type | Description | Raw Example |
| :--- | :--- | :--- | :--- |
| `{track}` | `string` | Track Title (default string output) | `Bones` |
| `{track.title}` | `string` | Title of the audio track | `Bones` |
| `{track.author}` | `string` | Artist, channel, or creator name | `Imagine Dragons` |
| `{track.uri}` | `string` | Official web link / URL to the track | `https://www.youtube.com/watch?v=V2SVRJ6dcE4` |
| `{track.url}` | `string` | Alias for `{track.uri}` | `https://www.youtube.com/watch?v=V2SVRJ6dcE4` |
| `{track.thumbnail}` | `string` | Direct image URL to album artwork | `https://i.ytimg.com/vi/V2SVRJ6dcE4/maxresdefault.jpg` |
| `{track.duration}` | `number` | Total track duration in milliseconds | `165000` |
| `{track.durationFormatted}` | `string` | Formatted track duration (`MM:SS` or `HH:MM:SS`) | `02:45` |
| `{track.position}` | `number` | Active playback position in milliseconds | `45000` |
| `{track.positionFormatted}` | `string` | Formatted playback position (`MM:SS`) | `00:45` |
| `{track.remainingTime}` | `string` | Remaining time before track completes | `02:00` |
| `{track.isSeekable}` | `boolean` | Whether seeking forward/backward is allowed | `true` |
| `{track.isStream}` | `boolean` | Whether the track is a continuous live stream | `false` |
| `{track.hasTrack}` | `boolean` | `true` if a track is active, `false` otherwise | `true` |
| `{track.requester}` | `string` | Username of the member who added the track | `errordoc404` |
| `{track.requesterId}` | `string` | Snowflake User ID of the requester | `456130838183280651` |
| `{track.requesterMention}` | `string` | Formatted Discord mention of requester | `<@456130838183280651>` |
| `{track.identifier}` | `string` | Unique audio source identifier | `V2SVRJ6dcE4` |
| `{track.sourceName}` | `string` | Audio source provider (`youtube`, `spotify`) | `youtube` |

---

## 2.2 Lavalink Player Transformer (`{player}`)

Exposes the live state of the guild's Lavalink audio player instance.

```yaml
Base Object: RythraPlayer
Aliases: {player}
Null Behavior: Defaults to volume 0, loop none, playing false when idle.
```

### Attributes Table

| Property | Type | Description | Raw Example |
| :--- | :--- | :--- | :--- |
| `{player.playing}` | `boolean` | `true` if player is currently emitting audio | `true` |
| `{player.paused}` | `boolean` | `true` if player is paused | `false` |
| `{player.hasTrack}` | `boolean` | `true` if a track is loaded in current slot | `true` |
| `{player.volume}` | `number` | Active audio volume level (`0` to `200`) | `75` |
| `{player.loop}` | `string` | Loop mode (`none`, `track`, `queue`) | `track` |
| `{player.position}` | `number` | Current player position in ms | `124000` |
| `{player.positionFormatted}` | `string` | Formatted player position | `02:04` |
| `{player.state}` | `string` | WebSocket connection state (`CONNECTED`, `IDLE`) | `CONNECTED` |
| `{player.quality}` | `string` | Dynamic audio quality profile | `auto` |
| `{player.alwaysOn}` | `boolean` | 24/7 channel presence status | `false` |
| `{player.queueSize}` | `number` | Number of tracks waiting in queue | `4` |
| `{player.totalSize}` | `number` | Total tracks (current + queue) | `5` |
| `{player.queueDuration}` | `string` | Formatted total queue length | `16:30` |
| `{player.channelId}` | `string` | Voice Channel ID connected to | `947967652675072055` |
| `{player.textId}` | `string` | Text Channel ID bound for player responses | `947967652675072052` |

---

## 2.3 Queue Transformer (`{queue}`)

Inspects upcoming tracks, queue size, and total duration.

### Attributes Table

| Property | Type | Description | Raw Example |
| :--- | :--- | :--- | :--- |
| `{queue.size}` | `number` | Number of queued tracks (excluding current) | `8` |
| `{queue.totalSize}` | `number` | Total queue count including active song | `9` |
| `{queue.duration}` | `number` | Total queue duration in milliseconds | `1840000` |
| `{queue.durationFormatted}` | `string` | Formatted total queue duration | `30:40` |
| `{queue.isEmpty}` | `boolean` | `true` if queue has 0 waiting tracks | `false` |
| `{queue.first}` | `string` | Title of the next track up | `Levitating` |
| `{queue.last}` | `string` | Title of the last track in queue | `Blinding Lights` |
| `{queue.list}` | `string` | Formatted list of first 10 upcoming tracks | `1. Levitating\n2. Circles` |

---

## 2.4 Audio Filter Transformer (`{filter}`)

Provides live inspection into active equalizers and DSP presets.

### Attributes Table

| Property | Type | Description | Raw Example |
| :--- | :--- | :--- | :--- |
| `{filter}` / `{filter.current}` | `string` | Name of active filter or `None` | `Active` or `None` |
| `{filter.active}` | `boolean` | `true` if any equalizer/filter is on | `true` |
| `{filter.list}` | `string` | Comma-separated list of all 30 presets | `8d, bass, nightcore, pop...` |
| `{filter.count}` | `number` | Total count of supported presets | `30` |

---

## 2.5 User & Author Transformer (`{user}`, `{author}`)

Provides user information for the message sender.

### Attributes Table

| Property | Type | Description | Raw Example |
| :--- | :--- | :--- | :--- |
| `{user}` / `{user.mention}` | `string` | Formatted mention string | `<@456130838183280651>` |
| `{user.id}` | `string` | Discord Snowflake User ID | `456130838183280651` |
| `{user.username}` | `string` | User's Discord account username | `errordoc404` |
| `{user.tag}` | `string` | Username with legacy discriminator or tag | `errordoc404#0` |
| `{user.avatar}` | `string` | User's avatar image URL | `https://cdn.discordapp.com/...` |
| `{user.displayAvatar}` | `string` | Display avatar (server or global) | `https://cdn.discordapp.com/...` |
| `{user.bot}` | `boolean` | `true` if the account is a Discord bot | `false` |
| `{user.createdAt}` | `string` | ISO 8601 account creation date | `2018-06-15T12:00:00.000Z` |

---

## 2.6 Guild Member & Target Transformer (`{member}`, `{target}`, `{mention}`)

Provides guild-specific member properties (roles, permissions, nicknames).

### Attributes Table

| Property | Type | Description | Raw Example |
| :--- | :--- | :--- | :--- |
| `{member.displayName}` | `string` | Nickname or global display name | `Bhaukal 👑` |
| `{member.nickname}` | `string` | Server-specific nickname | `Bhaukal 👑` |
| `{member.color}` | `string` | Hex string of highest colored role | `#5865F2` |
| `{member.roles}` | `string` | Comma-separated list of role names | `Admin, DJ, VIP` |
| `{member.joinedTimestamp}` | `number` | Server join timestamp in ms | `1672531199000` |
| `{member.premiumSince}` | `string` | Server boosting date or empty string | `2023-01-01` |

---

## 2.7 Guild & Server Transformer (`{server}`, `{guild}`)

Provides metadata regarding the current Discord server.

### Attributes Table

| Property | Type | Description | Raw Example |
| :--- | :--- | :--- | :--- |
| `{server}` / `{server.name}` | `string` | Server name | `Eruptor Music Lounge` |
| `{server.id}` | `string` | Guild Snowflake ID | `947967652675072051` |
| `{server.memberCount}` | `number` | Total member count | `1540` |
| `{server.icon}` | `string` | Server icon URL | `https://cdn.discordapp.com/...` |
| `{server.ownerId}` | `string` | Server owner Discord Snowflake ID | `456130838183280651` |
| `{server.shardId}` | `number` | Gateway Shard ID serving this guild | `0` |

---

## 2.8 Channel Transformer (`{channel}`)

Provides metadata regarding the text channel where the tag was executed.

### Attributes Table

| Property | Type | Description | Raw Example |
| :--- | :--- | :--- | :--- |
| `{channel}` / `{channel.mention}` | `string` | Channel mention string | `<#947967652675072052>` |
| `{channel.name}` | `string` | Text channel name | `music-chat` |
| `{channel.id}` | `string` | Channel Snowflake ID | `947967652675072052` |
| `{channel.topic}` | `string` | Channel topic description | `24/7 Lofi & Chill` |

---

## 2.9 Voice Channel Transformer (`{voice}`)

Context for the voice channel the invoking user is connected to.

### Attributes Table

| Property | Type | Description | Raw Example |
| :--- | :--- | :--- | :--- |
| `{voice.name}` | `string` | Voice channel name | `Lounge Voice #1` |
| `{voice.id}` | `string` | Voice channel Snowflake ID | `947967652675072055` |
| `{voice.userLimit}` | `number` | Max users allowed (`0` if unlimited) | `10` |
| `{voice.bitrate}` | `number` | Channel audio bitrate in bps | `96000` |

---

## 2.10 Message Arguments & String Transformers

Captures arguments provided after tag names (e.g. `!tag arg1 arg2`).

| Property | Type | Description | Raw Example |
| :--- | :--- | :--- | :--- |
| `{message}` | `string` | Full raw message string | `!tag hello world` |
| `{args}` | `string` | Arguments after tag name | `hello world` |
| `{1}` | `string` | First argument word | `hello` |
| `{2}` | `string` | Second argument word | `world` |
| `{3}` | `string` | Third argument word | `extra` |

---

# Chapter 3: Exhaustive Parsers Reference

---

## 3.1 Control Flow & Conditionals

### `{if(condition):then|else}`
Evaluates mathematical, string, or boolean conditions.

- **Supported Operators**: `==`, `!=`, `>`, `<`, `>=`, `<=`
- **Implicit Truthiness**: `true`, `false`

```tagscript
<!-- Boolean Comparison -->
{if({player.playing}==true):🎶 Music is playing!|❌ Player is idle.}

<!-- Numeric Comparison -->
{if({player.volume}>100):⚠️ High Volume Warning!|🔊 Volume: {player.volume}%}

<!-- String Equality -->
{if({user.id}==456130838183280651):👑 Welcome Owner!|👋 Welcome User!}
```

---

### `{random:item1~item2~item3}`
Picks a random element from a tilde-delimited list.

```tagscript
🎲 You won a **{random:100 Coins~VIP Badge~Rare Mystery Box~1000 XP}**!
```

---

### `{5050:Heads|Tails}` *(or `{?}`)*
A fast 50/50 probability coin flip.

```tagscript
🪙 Coin landed on: **{5050:Heads|Tails}**!
```

---

### `{range:min-max}`
Generates a random integer inclusive between `min` and `max`.

```tagscript
🎯 Rolled a **{range:1-100}**!
```

---

### `{break(condition):message}` & `{stop(condition)}`
Halts execution if the condition evaluates to true.

```tagscript
{break({player.playing}==false):❌ You can only use this tag while music is playing!}
```

---

## 3.2 Variables & Scope

### `{=(varName):value}` *(or `{define(varName):value}`)*
Defines a reusable in-memory variable for the execution context.

```tagscript
{=(accent):0x5865F2}
{=(botName):Eruptor Music}
{embed(title):{botName}}
{embed(color):{accent}}
```

---

### `{jsonvar(varName):jsonString}`
Parses a JSON object into variable accessors.

```tagscript
{jsonvar(song):{"title": "Bones", "author": "Imagine Dragons"}}
Title: {song.title} | Artist: {song.author}
```

---

## 3.3 String & Mathematical Manipulation

### `{replace(search):replacement:source}`
Replaces substring matches inside text.

```tagscript
{replace( ):+:lofi hip hop beats}
<!-- Output: lofi+hip+hop+beats -->
```

---

### `{slice(start,end):string}`
Extracts substring slices by character index.

```tagscript
{slice(0,10):Supercalifragilistic}
<!-- Output: Supercalif -->
```

---

### `{urlencode:string}` & `{urldecode:string}`
Encodes and decodes URI strings for external links.

```tagscript
https://www.youtube.com/results?search_query={urlencode:{track.title} {track.author}}
```

---

## 3.4 Discord Embed Construction

Builds rich Discord embeds.

### Supported Embed Tags:
- `{embed(title):text}` — Sets the embed title.
- `{embed(description):text}` — Sets the embed description body.
- `{embed(color):hex/decimal}` — Sets embed sidebar color (e.g. `0x5865F2`, `#FF0000`, `16711680`).
- `{embed(thumbnail):url}` — Sets the top-right thumbnail image.
- `{embed(image):url}` — Sets the large central body image.
- `{embed(author.name):text}` — Sets the header author name.
- `{embed(author.icon_url):url}` — Sets the small author icon.
- `{embed(author.url):url}` — Makes the author name a clickable link.
- `{embed(footer.text):text}` — Sets the footer text.
- `{embed(footer.icon_url):url}` — Sets the small icon beside footer text.
- `{embed(field):Name~Value~inline}` — Adds custom field (`inline` is `true` or `false`).

```tagscript
{embed(title):🎵 Now Playing}
{embed(description):**[{track.title}]({track.uri})**\nBy **{track.author}**}
{embed(thumbnail):{track.thumbnail}}
{embed(color):0x5865F2}
{embed(footer.text):Requested by {user.username}}
{embed(footer.icon_url):{user.avatar}}
{embed(field):Duration~{track.durationFormatted}~true}
{embed(field):Volume~{player.volume}%~true}
{embed(field):Queue Length~{player.queueSize} tracks~true}
```

---

## 3.5 Message & Cooldown Actions

### `{cooldown(seconds)}` *(or `{cd(seconds)}`)*
Enforces per-user rate limiting on tag execution.
> **RULE**: Parameter **MUST** be in parentheses: `{cooldown(5)}`.

---

### `{delete}`
Automatically deletes the user's triggering Discord message.

---

### `{silent}`
Suppresses standard Discord mention pings and push notifications.

---

### `{file(filename.png):url}`
Attaches an external file or image buffer directly to the Discord response.

---

## 3.6 Live Music Search & Suggestions

### `{suggest}`
The live AI/YouTube Music recommendation engine.

| Tag Syntax | Output Format | Example Output |
| :--- | :--- | :--- |
| `{suggest}` | Clickable Markdown Link | `**[Enemy](url)** by **Imagine Dragons**` |
| `{suggest(title)}` | Title string only | `Enemy` |
| `{suggest(author)}` | Artist name only | `Imagine Dragons` |
| `{suggest(raw)}` | Plain `Artist - Title` | `Imagine Dragons - Enemy` |
| `{suggest(uri)}` | Direct Track URL | `https://www.youtube.com/watch?...` |
| `{suggest:custom query}` | Custom query search | `**[Track](url)** by **Artist**` |

---

## 3.7 Music Playback & Queuing

### `{play:query}` & `{playtop:query}`
Queues a track into the server's music player.

```tagscript
<!-- Queue at bottom -->
{play:lofi hip hop radio beats to relax}

<!-- Queue at top (plays next) -->
{playtop:urgent song title}

<!-- Dynamic Radio Queue -->
{play:{suggest(raw)}}
```

---

## 3.8 Music Playback Controls

| Tag | Function | Description |
| :--- | :--- | :--- |
| **`{skip}`** | Skip | Skips the active track to the next song. |
| **`{stop}`** | Stop | Destroys the player and disconnects from voice. |
| **`{pause}`** | Pause | Pauses active audio stream. |
| **`{resume}`** | Resume | Resumes paused audio stream. |
| **`{shuffle}`** | Shuffle | Randomly shuffles the waiting queue. |
| **`{volume:val}`** | Set Volume | Sets volume level (`0` to `200`). |
| **`{loop:mode}`** | Set Loop | Sets loop mode: `none`, `track`, `queue`, `cycle`. |
| **`{seek:time}`** | Seek | Seeks to timestamp (`01:30` or seconds `90`). |

---

## 3.9 Studio Audio Filter Presets

Applies pre-engineered DSP audio filters:

```tagscript
{filter:nightcore}
{filter:8d}
{filter:bass}
{filter:vaporwave}
{filter:clear} <!-- Resets all filters to neutral -->
```

### Complete Presets Directory (30 Presets):
`8d`, `bass`, `bassboost`, `nightcore`, `vaporwave`, `pop`, `soft`, `speed`, `slow`, `karaoke`, `party`, `earrape`, `equalizer`, `electronic`, `radio`, `tremolo`, `treblebass`, `vibrato`, `china`, `chipmunk`, `darthvader`, `daycore`, `doubletime`, `pitch`, `rate`, `glitch`, `underwater`, `robot`, `widen`, `distortion`, `clear`.

---

## 3.10 Manual Audio Tuner & 15-Band Equalizer

The **`{tune}`** parser allows creating custom DSP filter configurations directly in TagScript.

### Syntax 1: Multi-Key Tuning String
```tagscript
{tune:speed=1.2, pitch=1.15, bass=0.6, 8d=0.25}
```

### Syntax 2: Parameterized Tuning
- **`{tune(speed):1.25}`** — Playback speed multiplier (`0.1`–`3.0`).
- **`{tune(pitch):1.3}`** — Audio pitch multiplier (`0.1`–`3.0`).
- **`{tune(rate):0.9}`** — Sample rate multiplier (`0.1`–`3.0`).
- **`{tune(bass):0.85}`** — Low-end equalizer boost (`-0.25`–`1.0`).
- **`{tune(treble):0.5}`** — High-end equalizer boost (`-0.25`–`1.0`).
- **`{tune(8d):0.25}`** — 8D audio rotation frequency in Hz (`0.01`–`5.0`).
- **`{tune(lowpass):20}`** — LowPass smoothing cutoff (`1`–`100`).

### Syntax 3: 15-Band Equalizer Gains
Pass exact gains across all 15 frequency bands:
```tagscript
{eq:0.3, 0.25, 0.2, 0.1, 0, 0, 0, 0, 0, 0, 0, 0.1, 0.2, 0.3}
```

---

## 3.11 Role, Voice & DJ Permissions

Protect sensitive commands from unauthorized users:

```tagscript
{permission(dj):true}
{permission(voice):true}
{permission(roles):Admin,DJ,Moderator}
{permission(permissions):ManageGuild,Administrator}
```

---

# Chapter 4: The Audio Engine & Lavalink DSP Matrix

## 4.1 15-Band Equalizer Mechanics

Lavalink divides the human audible frequency spectrum into 15 distinct bands:

```
Band 0: 25 Hz   (Sub-Bass)
Band 1: 40 Hz   (Deep Bass)
Band 2: 63 Hz   (Punchy Bass)
Band 3: 100 Hz  (Warmth / Upper Bass)
Band 4: 160 Hz  (Low Midrange)
Band 5: 250 Hz  (Midrange Body)
Band 6: 400 Hz  (Vocals Low)
Band 7: 630 Hz  (Mid Vocal Presence)
Band 8: 1.0 kHz (Lead Instruments)
Band 9: 1.6 kHz (High Midrange)
Band 10: 2.5 kHz (Clarity)
Band 11: 4.0 kHz (Presence)
Band 12: 6.3 kHz (Treble / Shimmer)
Band 13: 10.0 kHz (High Treble / Air)
Band 14: 16.0 kHz (Ultra High Frequencies)
```

**Gain Scale**: `-0.25` (Complete Mute) to `1.0` (+100% Boost).

---

## 4.2 Timescale (Speed, Pitch, Rate) Equations

- **Nightcore Effect**: `speed = 1.25`, `pitch = 1.3`, `rate = 1.0`
- **Slowed + Reverb**: `speed = 0.85`, `pitch = 0.85`, `lowPass = 20`
- **Vaporwave**: `speed = 0.8`, `pitch = 0.75`
- **Chipmunk**: `pitch = 1.8`, `speed = 1.1`

---

# Chapter 5: Embed Engineering & UI Layout Mastery

## 5.1 Color Space & Hex Handling

Colors can be passed in any standard format:
1. **Hex String**: `#5865F2` or `0x5865F2`
2. **Decimal Integer**: `5793266`
3. **Dynamic Role Color**: `{member.color}`

---

## 5.2 Multi-Field Grid Layouts

Fields support inline grid columns (up to 3 inline fields per row in Discord):

```tagscript
{embed(field):👤 Artist~{track.author}~true}
{embed(field):⏱️ Duration~{track.durationFormatted}~true}
{embed(field):🔊 Volume~{player.volume}%~true}
```

---

# Chapter 6: Critical Gotchas, Anti-Patterns & Golden Rules

### 🚨 Golden Rule 1: Embed Action Overwrite Hazard
> **Never** define two full `{embed}` blocks inside an `{if}` condition:
>
> ❌ **WRONG (Causes 2nd embed to overwrite 1st):**
> ```tagscript
> {if(...): {embed(title):A}{embed(description):A} | {embed(title):B}{embed(description):B}}
> ```
>
> ✅ **CORRECT (Dynamic parameters inside single embed tags):**
> ```tagscript
> {embed(title):{if(...):Title A|Title B}}
> {embed(description):{if(...):Body A|Body B}}
> ```

---

### 🚨 Golden Rule 2: Cooldown Parentheses Requirement
> ❌ **WRONG:** `{cd:5}` or `{cooldown:5}`
> ✅ **CORRECT:** `{cd(5)}` or `{cooldown(5)}`

---

### 🚨 Golden Rule 3: Explicit Boolean Logic
> When comparing transformer properties in `{if}`, always compare explicitly:
> ✅ **CORRECT:** `{if({player.playing}==true):...|...}`

---

# Chapter 7: 50+ Real-World Showcase Recipes

---

### 7.1 Music Automation Recipes

#### Recipe 1: Smart Live Song Recommender (`suggest`)
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

#### Recipe 2: Instant Radio Auto-Play (`radio`)
```tagscript
{cooldown(5)}
{play:{suggest(raw)}}
{embed(title):📻 Instant Radio Mode}
{embed(description):Queued a recommended track for {user.username}:\n👉 **{suggest(raw)}**}
{embed(color):0x57F287}
{embed(footer.text):Radio initiated by {user.username}}
```

#### Recipe 3: Live Player HUD (`playerinfo` / `player info`)
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

#### Recipe 4: Jump Forward 30s (`ff`)
```tagscript
{cooldown(3)}
{seek:30}
{embed(title):⏩ Fast Forward}
{embed(description):Skipped forward 30 seconds on **[{track.title}]({track.uri})**!}
{embed(color):0x3498DB}
```

#### Recipe 5: Rewind 30s (`rw`)
```tagscript
{cooldown(3)}
{seek:-30}
{embed(title):⏪ Rewind}
{embed(description):Rewound 30 seconds on **[{track.title}]({track.uri})**!}
{embed(color):0x3498DB}
```

#### Recipe 6: DJ Force-Skip (`skip`)
```tagscript
{cooldown(5)}
{permission(dj):true}
{skip}
{embed(title):⏭️ Track Skipped}
{embed(description):{user.username} skipped the current track.}
{embed(color):0x2ECC71}
```

#### Recipe 7: Instant Lofi Chill Mode (`chill`)
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

#### Recipe 8: Toggle Queue Loop (`loopqueue`)
```tagscript
{cooldown(3)}
{loop:queue}
{embed(title):🔁 Queue Loop Enabled}
{embed(description):The current queue will now repeat indefinitely.}
{embed(color):0x5865F2}
```

#### Recipe 9: Clear Queue (`clearqueue`)
```tagscript
{cooldown(5)}
{permission(dj):true}
{embed(title):🗑️ Queue Cleared}
{embed(description):Cleared all waiting tracks from the queue.}
{embed(color):0xE74C3C}
```

#### Recipe 10: Volume Booster (`boostvol`)
```tagscript
{cooldown(5)}
{permission(dj):true}
{volume:150}
{embed(title):🔊 Volume Boosted}
{embed(description):Set playback volume to **150%**!}
{embed(color):0xE67E22}
```

---

### 7.2 Custom Audio Filter Recipes

#### Recipe 11: Slowed + Reverb (`slowed`)
```tagscript
{cooldown(5)}
{tune:speed=0.85, pitch=0.85, lowpass=20}
{embed(title):🌙 Slowed + Reverb Activated}
{embed(description):Applied custom audio tuning to **[{track.title}]({track.uri})**:\n• **Speed:** \`0.85x\`\n• **Pitch:** \`0.85x\`\n• **LowPass:** \`20\`}
{embed(thumbnail):{track.thumbnail}}
{embed(color):0x9B59B6}
{embed(footer.text):Tuned for {user.username}}
```

#### Recipe 12: Deep Bass + 8D Audio (`deepbass`)
```tagscript
{cooldown(5)}
{tune(bass):0.85}
{tune(8d):0.25}
{embed(title):🎛️ Deep Bass + 8D Tuner}
{embed(description):Applied custom **Bass (+0.85)** and **8D Rotation (0.25Hz)** to **[{track.title}]({track.uri})**!}
{embed(thumbnail):{track.thumbnail}}
{embed(color):0xE74C3C}
{embed(footer.text):Custom tuned by {user.username}}
```

#### Recipe 13: Studio Nightcore (`nightcore`)
```tagscript
{cooldown(5)}
{filter:nightcore}
{embed(title):⚡ Nightcore Enabled}
{embed(description):Speed and pitch boosted on **[{track.title}]({track.uri})**!}
{embed(thumbnail):{track.thumbnail}}
{embed(color):0xEB459E}
```

#### Recipe 14: Vaporwave Aesthetic (`vaporwave`)
```tagscript
{cooldown(5)}
{filter:vaporwave}
{embed(title):🌴 Vaporwave Enabled}
{embed(description):Applied vaporwave slowdown to **[{track.title}]({track.uri})**.}
{embed(color):0x9B59B6}
```

#### Recipe 15: Underwater Filter (`underwater`)
```tagscript
{cooldown(5)}
{filter:underwater}
{embed(title):🌊 Underwater Mode}
{embed(description):Submerged audio filter enabled on **[{track.title}]({track.uri})**.}
{embed(color):0x3498DB}
```

#### Recipe 16: 8D Surround Audio (`8d`)
```tagscript
{cooldown(5)}
{filter:8d}
{embed(title):🎧 8D Audio Activated}
{embed(description):Put on headphones! 8D audio rotation enabled.}
{embed(color):0x2ECC71}
```

#### Recipe 17: Treble Boost (`treble`)
```tagscript
{cooldown(5)}
{tune(treble):0.75}
{embed(title):✨ Treble Boosted}
{embed(description):High-frequency audio presence enhanced.}
{embed(color):0x1ABC9C}
```

#### Recipe 18: Pitch Shifter (`pitchup`)
```tagscript
{cooldown(5)}
{tune(pitch):1.4}
{embed(title):🎵 Pitch Shifted Up}
{embed(description):Pitch set to **1.4x**.}
{embed(color):0xF1C40F}
```

#### Recipe 19: Double Time (`fast`)
```tagscript
{cooldown(5)}
{tune(speed):1.5}
{embed(title):⚡ 1.5x Speed}
{embed(description):Playback speed set to **1.5x**.}
{embed(color):0xE67E22}
```

#### Recipe 20: Filter Reset (`filterreset` / `resetfilter`)
```tagscript
{cooldown(3)}
{filter:clear}
{embed(title):🔄 Audio Filters Reset}
{embed(description):Restored neutral sound stage on **[{track.title}]({track.uri})**.}
{embed(color):0x95A5A6}
```

---

### 7.3 Auto-Responder & Chat Assistant Recipes

#### Recipe 21: Server Rules Helper (`rules`)
```tagscript
{cooldown(10)}
{embed(title):📜 Server Rules}
{embed(description):1. Be respectful to all members.\n2. No spam or self-promotion.\n3. Keep audio in designated voice channels.\n\nEnjoy your stay in **{server.name}**!}
{embed(color):0x5865F2}
```

#### Recipe 22: Bot Ping & Shard Info (`ping`)
```tagscript
{cooldown(3)}
{embed(title):🏓 Pong!}
{embed(description):• **Shard:** \`#{server.shardId}\`\n• **Guild:** \`{server.name}\`\n• **Status:** \`Operational 🟢\`}
{embed(color):0x2ECC71}
```

#### Recipe 23: Help Directory (`help`)
```tagscript
{cooldown(5)}
{embed(title):📖 Eruptor Commands & Tags}
{embed(description):• **Music:** \`suggest\`, \`radio\`, \`chill\`, \`playerinfo\`\n• **Filters:** \`bassboost\`, \`slowed\`, \`deepbass\`, \`nightcore\`\n• **Utility:** \`ping\`, \`userinfo\`, \`serverinfo\`}
{embed(color):0x5865F2}
```

#### Recipe 24: Dynamic Server Welcome (`welcome`)
```tagscript
{embed(title):👋 Welcome to {server.name}!}
{embed(description):Welcome {user.mention}! You are member **#{server.memberCount}**.\n\nHead over to <#rules> and pick your roles!}
{embed(thumbnail):{user.avatar}}
{embed(color):0x5865F2}
```

#### Recipe 25: User Profile Card (`userinfo`)
```tagscript
{cooldown(5)}
{embed(title):👤 User Profile — {user.username}}
{embed(thumbnail):{user.avatar}}
{embed(field):User ID~{user.id}~true}
{embed(field):Account Created~{slice(0,10):{user.createdAt}}~true}
{embed(field):Roles~{member.roles}~false}
{embed(color):{member.color}}
```

---

# Chapter 8: Diagnostic & Troubleshooting Handbook

| Issue | Root Cause | Solution |
| :--- | :--- | :--- |
| **`{cd:5}` printed in chat** | Used colon instead of parentheses | Change `{cd:5}` to **`{cd(5)}`** or **`{cooldown(5)}`**. |
| **`Expected property name or '}' in JSON`** | Raw `{if}` inside payload triggered JSON parser | Update to `SafeEmbedParser` and embed `{if}` inside parameters. |
| **Else branch always overwriting Embed** | Two `{embed}` blocks inside `{if}` AST | Wrap `{if}` **inside** `{embed(title):{if(...):A\|B}}`. |
| **`{if():...}` printed as literal text** | Target variable returned empty string | Use explicit comparison: `{if({player.playing}==true):...\|...}`. |
| **`musicPlay` not connecting to voice** | Lavalink source formatting issue | Ensure `source: 'ytm'` is passed to Lavalink resolver. |
| **`setRythra is not a function`** | Raw Lavalink data pushed to queue | Use `client.rythra.search(...)` to create full `RythraTrack` instances. |

---

*© 2026 Eruptor Automation Engine. Built for high-performance Discord communities.*
