# 🔀 Conditional Logic (`{if}`)

> **Master dynamic branching, comparison operators, and nesting inside Eruptor TagScript.**

---

## 📌 The `{if}` Tag Syntax

```text
{if(left_side OPERATOR right_side):THEN_BRANCH|ELSE_BRANCH}
```

---

## ⚙️ Supported Comparison Operators

| Operator | Meaning | Example |
| :--- | :--- | :--- |
| `==` | Equal to | `{if({player.playing}==true):Playing|Paused}` |
| `!=` | Not equal to | `{if({track.title}!=):Song active|No song}` |
| `>` | Greater than | `{if({player.volume}>100):High Volume!|Normal}` |
| `<` | Less than | `{if({player.queueSize}<5):Short queue|Long}` |
| `>=` | Greater than or equal to | `{if({server.memberCount}>=1000):Large Server|Small}` |
| `<=` | Less than or equal to | `{if({player.volume}<=50):Quiet|Loud}` |

---

## 💡 Practical Examples

### 1. Check If Music Is Playing
```tagscript
{if({player.playing}==true):🎶 Music is playing!|❌ Player is idle.}
```

### 2. User ID Role Check
```tagscript
{if({user.id}==456130838183280651):👑 Server Owner|👤 Server Member}
```

### 3. Queue Size Check
```tagscript
{if({player.queueSize}>0):There are **{player.queueSize}** songs waiting.|Queue is empty!}
```

---

## 🚨 The Embed Overwrite Anti-Pattern

> **WARNING**: Never put two full `{embed}` blocks in an `{if}` branch, as both branches execute in the AST and overwrite each other!

- ❌ **WRONG:**
  ```tagscript
  {if({player.playing}==true):{embed(title):Playing}{embed(description):Yes}|{embed(title):Idle}{embed(description):No}}
  ```

- ✅ **CORRECT:**
  ```tagscript
  {embed(title):{if({player.playing}==true):Playing|Idle}}
  {embed(description):{if({player.playing}==true):Yes, music is on.|No music is playing.}}
  ```
