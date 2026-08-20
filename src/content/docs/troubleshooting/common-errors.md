---
title: Common Errors & Gotchas
description: Learn how to avoid common TagScript syntax traps and AST evaluation pitfalls.
---

## Common Gotchas & Fixes

### 1. Cooldown Syntax Traps
- ❌ **Wrong:** `{cd:5}` or `{cooldown:5}`
- ✅ **Correct:** `{cd(5)}` or `{cooldown(5)}`

---

### 2. Embed Overwrite Hazard
Never define two separate embed trees in an `{if}` block.

- ❌ **Wrong:**
  ```tagscript
  {if(...):{embed(title):A}{embed(description):A}|{embed(title):B}{embed(description):B}}
  ```
- ✅ **Correct:**
  ```tagscript
  {embed(title):{if(...):Title A|Title B}}
  {embed(description):{if(...):Body A|Body B}}
  ```

---

### 3. Explicit Boolean Comparisons
Always explicitly compare against `true` or `false` in conditionals:
- ✅ **Correct:** `{if({player.playing}==true):Playing|Idle}`
- ❌ **Incorrect:** `{if({player.playing}):Playing|Idle}`
