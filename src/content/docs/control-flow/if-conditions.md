---
title: Conditional Logic ({if})
description: Deep-dive into TagScript conditionals, boolean checks, and comparison operators in Eruptor.
---

## The `{if}` Statement

The `{if}` parser evaluates mathematical, string, or boolean conditions and executes different branches based on truthiness:

```tagscript
{if(condition):then|else}
```

---

## Comparison Operators

| Operator | Meaning | Example |
| :--- | :--- | :--- |
| `==` | Equal to | `{if({player.playing}==true):Playing|Paused}` |
| `!=` | Not equal to | `{if({player.volume}!=100):Custom Volume|Default}` |
| `>` | Greater than | `{if({player.volume}>100):Loud|Normal}` |
| `<` | Less than | `{if({queue.size}<1):Empty|Has Tracks}` |
| `>=` | Greater than or equal to | `{if({player.queueSize}>=10):Large Queue|Small}` |
| `<=` | Less than or equal to | `{if({user.id}<=0):Invalid|Valid}` |

---

## Important Rules & Best Practices

### 1. Always Use Explicit Boolean Comparisons
Always compare explicitly against `true` or `false`:
- ✅ **Correct:** `{if({player.playing}==true):...|...}`
- ❌ **Avoid:** `{if({player.playing}):...|...}`

### 2. Wrap Conditionals Inside Embed Tags
Never place multiple `{embed}` calls inside an `{if}` statement. Instead, place the `{if}` inside the embed parameter:
- ✅ **Correct:** `{embed(title):{if({player.playing}==true):Now Playing|Player Idle}}`
- ❌ **Incorrect:** `{if({player.playing}==true):{embed(title):Now Playing}|{embed(title):Player Idle}}`
