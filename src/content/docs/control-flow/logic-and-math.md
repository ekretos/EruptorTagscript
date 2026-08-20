---
title: Logic & Math Functions
description: Randomizers, ranges, math operations, and variables in Eruptor TagScript.
---

## Randomizers

### `{random:item1~item2~item3}`
Picks a random item from a tilde-delimited (`~`) list of options:

```tagscript
🎲 You received a **{random:100 Coins~VIP Role~Mystery Gift~500 XP}**!
```

---

### `{5050:Heads|Tails}` *(or `{?}`)*
A fast 50/50 probability coin flip:

```tagscript
🪙 Coin landed on: **{5050:Heads|Tails}**!
```

---

### `{range:min-max}`
Generates a random integer inclusive between `min` and `max`:

```tagscript
🎯 You rolled a **{range:1-100}**!
```

---

## Flow Control: Break & Stop

### `{break(condition):message}` & `{stop(condition)}`
Halts tag execution immediately if the condition evaluates to true.

```tagscript
{break({player.playing}==false):❌ You can only use this command while music is playing!}
```

---

## Variable Definitions & Scope

### `{=(varName):value}` *(or `{define(varName):value}`)*
Defines an in-memory reusable variable within the execution context:

```tagscript
{=(themeColor):0x5865F2}
{=(botName):Eruptor Studio}

{embed(title):{botName}}
{embed(color):{themeColor}}
```

---

### `{jsonvar(varName):jsonString}`
Parses JSON data to create dynamic property accessors:

```tagscript
{jsonvar(song):{"title": "Bones", "artist": "Imagine Dragons"}}
Playing: {song.title} by {song.artist}
```
