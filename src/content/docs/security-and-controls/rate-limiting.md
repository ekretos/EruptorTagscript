---
title: Rate Limiting & Cooldowns
description: Prevent spam with per-user cooldowns, message deletion, and silent execution.
---

## Cooldowns: `{cooldown(seconds)}`

Prevents users from spamming the tag:

```tagscript
{cooldown(5)}
```

> **IMPORTANT RULE**: Cooldown duration **must** be enclosed in parentheses. `{cooldown:5}` is invalid syntax.

---

## Message Deletion: `{delete}`

Automatically deletes the user's triggering Discord message to keep text channels clean:

```tagscript
{delete}
{embed(title):Clean Trigger}
```

---

## Silent Mode: `{silent}`

Suppresses notifications and user pings in Discord:

```tagscript
{silent}
```
