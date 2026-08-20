---
title: Track & Song Metadata
description: Exhaustive reference for the {track} and {song} transformer in Eruptor.
---

## Overview

The `{track}` transformer (and its alias `{song}`) exposes the full metadata of the active audio track playing in the server.

```yaml
Base Object: RythraTrack
Aliases: {track}, {song}
Null Behavior: Returns empty string ("") or default values when no track is active.
```

---

## Properties Reference

| Property | Type | Description | Example Output |
| :--- | :--- | :--- | :--- |
| `{track}` | `string` | Track Title (default string output) | `Bones` |
| `{track.title}` | `string` | Title of the audio track | `Bones` |
| `{track.author}` | `string` | Artist, channel, or creator name | `Imagine Dragons` |
| `{track.uri}` | `string` | Official web link / URL to the track | `https://www.youtube.com/watch?v=...` |
| `{track.url}` | `string` | Alias for `{track.uri}` | `https://www.youtube.com/watch?v=...` |
| `{track.thumbnail}` | `string` | Direct image URL to album artwork | `https://i.ytimg.com/vi/.../maxresdefault.jpg` |
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
| `{track.sourceName}` | `string` | Audio source provider (`youtube`, `spotify`, `soundcloud`) | `youtube` |

---

## Example Usage

### Now Playing Embed
```tagscript
{embed(title):🎵 Now Playing}
{embed(description):**[{track.title}]({track.uri})**\nBy **{track.author}**}
{embed(thumbnail):{track.thumbnail}}
{embed(field):Duration~{track.durationFormatted}~true}
{embed(field):Requested By~{track.requesterMention}~true}
{embed(color):0x5865F2}
```
