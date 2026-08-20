---
title: Guild & Channel Context
description: Reference for {server}, {guild}, {channel}, and {voice} transformers in Eruptor.
---

## Server & Guild Transformer (`{server}`, `{guild}`)

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

## Text Channel Transformer (`{channel}`)

Provides metadata regarding the text channel where the tag was executed.

### Attributes Table

| Property | Type | Description | Raw Example |
| :--- | :--- | :--- | :--- |
| `{channel}` / `{channel.mention}` | `string` | Channel mention string | `<#947967652675072052>` |
| `{channel.name}` | `string` | Text channel name | `music-chat` |
| `{channel.id}` | `string` | Channel Snowflake ID | `947967652675072052` |
| `{channel.topic}` | `string` | Channel topic description | `24/7 Lofi & Chill` |

---

## Voice Channel Transformer (`{voice}`)

Provides context for the voice channel the invoking user is currently connected to.

### Attributes Table

| Property | Type | Description | Raw Example |
| :--- | :--- | :--- | :--- |
| `{voice.name}` | `string` | Voice channel name | `Lounge Voice #1` |
| `{voice.id}` | `string` | Voice channel Snowflake ID | `947967652675072055` |
| `{voice.userLimit}` | `number` | Max users allowed (`0` if unlimited) | `10` |
| `{voice.bitrate}` | `number` | Channel audio bitrate in bps | `96000` |

---

## Example Usage

### Server Information Tag
```tagscript
{embed(title):🏰 {server.name}}
{embed(thumbnail):{server.icon}}
{embed(field):Total Members~{server.memberCount}~true}
{embed(field):Active Channel~{channel.name}~true}
{embed(field):Your Voice~{voice.name}~true}
{embed(color):0x5865F2}
```
