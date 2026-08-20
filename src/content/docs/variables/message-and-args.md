---
title: Message & Arguments
description: How to capture positional arguments, full text, and substrings in Eruptor tags.
---

## Overview

When creating prefix-based tags (e.g. `!tag hello world`), you can capture parameters provided by the user using positional argument placeholders.

---

## Properties Table

| Property | Type | Description | Raw Example |
| :--- | :--- | :--- | :--- |
| `{message}` | `string` | Full raw message string | `!tag hello world` |
| `{args}` | `string` | Arguments after tag name | `hello world` |
| `{1}` | `string` | First argument word | `hello` |
| `{2}` | `string` | Second argument word | `world` |
| `{3}` | `string` | Third argument word | `extra` |
| `{4+}` | `string` | All arguments starting from index 4 onwards | `and more words` |

---

## Example Usage

### Custom Echo Command
```tagscript
{cooldown(3)}
{embed(title):📢 Announcement}
{embed(description):{args}}
{embed(footer.text):Announced by {user.username}}
{embed(color):0x5865F2}
```
