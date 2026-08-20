---
title: Player & Queue State
description: Exhaustive reference for the {player} and {queue} transformers in Eruptor.
---

## The Player Transformer (`{player}`)

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

## The Queue Transformer (`{queue}`)

Inspects upcoming tracks, queue size, and total queue length.

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

## Example Usage

### Queue Overview Tag
```tagscript
{embed(title):📑 Server Music Queue}
{embed(description):{if({queue.isEmpty}==true):Queue is currently empty!|**Upcoming Tracks:**\n{queue.list}}}
{embed(field):Queue Size~{queue.size} songs~true}
{embed(field):Total Duration~{queue.durationFormatted}~true}
{embed(color):0x5865F2}
```
