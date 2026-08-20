---
title: Auto-Responders & Assistants
description: Welcome messages, FAQ auto-responders, and dynamic chat cards.
---

## 1. Server Rules Helper (`rules`)
```tagscript
{cooldown(10)}
{embed(title):📜 Server Rules}
{embed(description):1. Be respectful to all members.\n2. No spam or self-promotion.\n3. Keep audio in designated voice channels.\n\nEnjoy your stay in **{server.name}**!}
{embed(color):0x5865F2}
```

---

## 2. Dynamic Server Welcome (`welcome`)
```tagscript
{embed(title):👋 Welcome to {server.name}!}
{embed(description):Welcome {user.mention}! You are member **#{server.memberCount}**.\n\nHead over to <#rules> and pick your roles!}
{embed(thumbnail):{user.avatar}}
{embed(color):0x5865F2}
```

---

## 3. Help Directory (`help`)
```tagscript
{cooldown(5)}
{embed(title):📖 Eruptor Commands & Tags}
{embed(description):• **Music:** `suggest`, `radio`, `chill`, `playerinfo`\n• **Filters:** `bassboost`, `slowed`, `deepbass`, `nightcore`\n• **Utility:** `ping`, `userinfo`, `serverinfo`}
{embed(color):0x5865F2}
```
