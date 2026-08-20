---
title: Economy & Interactive Games
description: Coin flips, random dice rollers, and interactive games in TagScript.
---

## 1. Coin Flip Game (`flip`)
```tagscript
{cooldown(3)}
{embed(title):🪙 Coin Toss}
{embed(description):{user.username} tossed a coin and it landed on **{5050:Heads|Tails}**!}
{embed(color):0xF1C40F}
```

---

## 2. Mystery Dice Roll (`roll`)
```tagscript
{cooldown(3)}
{embed(title):🎲 Dice Roll}
{embed(description):{user.username} rolled a **{range:1-6}**!}
{embed(color):0x3498DB}
```

---

## 3. Daily Reward Chest (`daily`)
```tagscript
{cooldown(86400)}
{embed(title):🎁 Daily Mystery Chest}
{embed(description):{user.mention}, you opened your daily chest and discovered:\n✨ **{random:100 Coins~500 XP~Rare Music Badge~1000 Gold Coins}**!}
{embed(thumbnail):{user.avatar}}
{embed(color):0x9B59B6}
```
