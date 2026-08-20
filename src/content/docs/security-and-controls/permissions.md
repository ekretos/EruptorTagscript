---
title: Role & DJ Permissions
description: Granular access control, DJ role requirements, and voice channel gates in Eruptor.
---

## The `{permission}` Parser

Protect commands from unauthorized execution with built-in permission gates:

```tagscript
{permission(dj):true}
{permission(voice):true}
{permission(roles):Admin,DJ,Moderator}
{permission(permissions):ManageGuild,Administrator}
```

---

## Available Permission Gates

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `dj` | `boolean` | Requires user to have the DJ role or Administrator permission |
| `voice` | `boolean` | Requires user to be connected to a voice channel |
| `roles` | `string` | Comma-separated list of allowed Discord role names |
| `permissions` | `string` | Comma-separated list of required Discord permission flags |

---

## Example: Protected DJ Skip

```tagscript
{cooldown(5)}
{permission(dj):true}
{permission(voice):true}
{skip}
{embed(title):⏭️ Force Skipped}
{embed(description):{user.username} skipped the track with DJ permissions.}
{embed(color):0x2ECC71}
```
