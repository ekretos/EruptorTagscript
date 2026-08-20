---
title: Server Utilities & Moderation
description: Ping checks, shard health diagnostics, and user info lookup cards.
---

## 1. Bot Ping & Shard Info (`ping`)
```tagscript
{cooldown(3)}
{embed(title):🏓 Pong!}
{embed(description):• **Shard:** `#{server.shardId}`\n• **Guild:** `{server.name}`\n• **Status:** `Operational 🟢`}
{embed(color):0x2ECC71}
```

---

## 2. User Profile Card (`userinfo`)
```tagscript
{cooldown(5)}
{embed(title):👤 User Profile — {user.username}}
{embed(thumbnail):{user.avatar}}
{embed(field):User ID~{user.id}~true}
{embed(field):Account Created~{slice(0,10):{user.createdAt}}~true}
{embed(field):Roles~{member.roles}~false}
{embed(color):{member.color}}
```
