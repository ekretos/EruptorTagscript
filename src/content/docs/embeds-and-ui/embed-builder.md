---
title: Discord Embed Builder
description: Comprehensive reference for building rich Discord Embeds in Eruptor TagScript.
---

## Overview

The `{embed}` parser constructs rich Discord embed objects.

---

## Embed Components Reference

| Tag Syntax | Target Area | Description |
| :--- | :--- | :--- |
| `{embed(title):text}` | Title | Sets main bold header text |
| `{embed(description):text}` | Description | Sets main message body markdown |
| `{embed(color):hex}` | Accent Color | Sets left sidebar color (Hex e.g. `0x5865F2`) |
| `{embed(thumbnail):url}` | Thumbnail | Sets top-right square artwork |
| `{embed(image):url}` | Body Image | Sets large full-width image |
| `{embed(author.name):text}` | Author Header | Sets small author header text |
| `{embed(author.icon_url):url}` | Author Icon | Sets small circular avatar |
| `{embed(author.url):url}` | Author Link | Makes author name clickable |
| `{embed(footer.text):text}` | Footer | Sets bottom footer text |
| `{embed(footer.icon_url):url}` | Footer Icon | Sets small icon next to footer text |
| `{embed(field):Name~Value~inline}` | Field Grid | Adds structured field (`true` or `false`) |

---

## Complete Music Card Example

```tagscript
{embed(title):🎵 Now Playing}
{embed(description):**[{track.title}]({track.uri})**\nBy **{track.author}**}
{embed(thumbnail):{track.thumbnail}}
{embed(color):0x5865F2}
{embed(footer.text):Requested by {user.username}}
{embed(footer.icon_url):{user.avatar}}
{embed(field):Duration~{track.durationFormatted}~true}
{embed(field):Volume~{player.volume}%~true}
{embed(field):Queue Size~{player.queueSize} tracks~true}
```
