# 🔬 Syntax & Anatomy of Eruptor Tags

> **Understand the structure, tokens, parameters, and grammar of the TagScript language.**

---

## 🧩 The Anatomy of a Tag Expression

Every TagScript tag is enclosed in curly braces `{}` and follows this universal structure:

```text
{declaration(parameter):payload}
 │           │          │
 │           │          └── The input data, value, or query
 │           └───────────── Optional modifier, mode, or sub-property
 └───────────────────────── The tag name or parser identifier
```

---

## 📌 The 4 Core Tag Patterns

Depending on what the tag does, it will fit into one of these four patterns:

### 1. Variables & Placeholders (No Parameter, No Payload)
Returns a value directly from the environment:
```tagscript
{user.username}
{track.title}
{player.volume}
```

### 2. Parameterized Tags (Parameter Only)
Modifies behavior using parentheses:
```tagscript
{cooldown(5)}
{permission(dj)}
{suggest(title)}
```

### 3. Payload Tags (Payload Only)
Provides input text or arguments after a colon:
```tagscript
{play:lofi hip hop beats}
{filter:nightcore}
{seek:90}
```

### 4. Full Tags (Parameter + Payload)
Combines both a parameter and a payload for maximum control:
```tagscript
{embed(title):Now Playing}
{embed(color):0x5865F2}
{if({player.playing}==true):Playing|Paused}
{tune(bass):0.85}
```

---

## 🔤 Escaping Special Characters

TagScript uses `{`, `}`, `:`, and `|` as internal delimiters. If you want to include these characters as literal text without triggering parser logic, escape them:

| Special Character | Purpose in TagScript | How to Escape |
| :--- | :--- | :--- |
| `{` | Starts a tag expression | `\{` |
| `}` | Closes a tag expression | `\}` |
| `:` | Separates declaration from payload | `\:` |
| `\|` | Separates branches in `{if}` and `{5050}` | `\|` |

---

## 🪆 Tag Nesting & Evaluation Order

Tags can be nested infinitely inside other tags. The engine uses a **Bottom-Up (Inside-Out)** evaluation model:

```tagscript
{embed(title):{if({player.playing}==true):🎶 Playing [{track.title}]({track.uri})|❌ Idle}}
```

### How the Engine Evaluates This:
1. **Step 1:** Resolves inner leaf variables `{player.playing}`, `{track.title}`, and `{track.uri}`.
2. **Step 2:** Resolves the `{if}` condition based on the resolved boolean.
3. **Step 3:** Passes the final result string to `{embed(title):...}`.

---

## ⚠️ The Golden Rules of Syntax

1. **Cooldowns ALWAYS use parentheses:**
   - ✅ Correct: `{cooldown(5)}`
   - ❌ Wrong: `{cooldown:5}` or `{cd:5}`

2. **Wrap Conditions INSIDE Embed Tags:**
   - ✅ Correct: `{embed(title):{if(...):Title A|Title B}}`
   - ❌ Wrong: `{if(...): {embed(title):A} | {embed(title):B}}`

3. **Explicit Boolean Comparisons:**
   - ✅ Correct: `{if({player.playing}==true):...|...}`
   - ❌ Wrong: `{if({player.playing}):...|...}`

---

## 📖 Next Chapter
Explore all available context placeholders in **[Track & Song Metadata](file:///d:/Ekretos/Eruptor/docs/variables/track-and-song.md)**!
