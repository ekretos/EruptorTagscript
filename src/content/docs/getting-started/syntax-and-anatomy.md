---
title: Syntax & Anatomy
description: Complete specification of TagScript grammar, tokens, parameters, lexer decomposition, AST tree resolution, and parser precedence.
---

## The Anatomy of a Tag Expression

Every TagScript tag is enclosed in curly braces `{}` and decomposes into three fundamental components:

```text
{declaration(parameter):payload}
 │           │          │
 │           │          └── The input data, value, or query
 │           └───────────── Optional modifier, mode, or sub-property
 └───────────────────────── The tag name or parser identifier
```

---

## The 4 Core Tag Patterns

Depending on its purpose, a tag expression fits into one of four patterns:

### 1. Variables & Placeholders (No Parameter, No Payload)
Returns runtime environment values directly:
```tagscript
{user.username}
{track.title}
{player.volume}
```

### 2. Parameterized Tags (Parameter Only)
Passes behavioral options or target sub-attributes inside parentheses:
```tagscript
{cooldown(5)}
{permission(dj)}
{suggest(title)}
```

### 3. Payload Tags (Payload Only)
Provides raw text, arguments, or search queries after a colon:
```tagscript
{play:lofi hip hop beats}
{filter:nightcore}
{seek:90}
```

### 4. Full Tags (Parameter + Payload)
Combines parameter configuration with a data payload for maximum control:
```tagscript
{embed(title):Now Playing}
{embed(color):0x5865F2}
{if({player.playing}==true):Playing|Paused}
{tune(bass):0.85}
```

---

## Lexer, Tokenizer & AST Tree Resolution

TagScript does not interpret text with simplistic flat regex scans. It employs a **coordinate-based recursive descent tree tokenizer**:

1. **Tag Boundary Tokenization**:
   The engine scans strings for unescaped `{` and `}` delimiters.
2. **Decomposition**:
   - `declaration`: Tag identifier before any parameter (e.g. `embed` in `{embed(title):text}`).
   - `parameter`: Data within parentheses or dot notation (e.g. `title` in `{embed(title):text}`).
   - `payload`: Data following the colon `:` (e.g. `text` in `{embed(title):text}`).
3. **Bottom-Up (Inside-Out) Evaluation**:
   Nested tags are solved starting from the deepest inner leaf nodes up to the root parent node.

```tagscript
{embed(title):{if({player.playing}==true):🎶 Playing [{track.title}]({track.uri})|❌ Idle}}
```

### Evaluation Lifecycle:
1. **Pass 1 (Leaves):** Resolves `{player.playing}`, `{track.title}`, `{track.uri}` into literal runtime values.
2. **Pass 2 (Branch):** Evaluates the `{if(...):...|...}` conditional based on the boolean result.
3. **Pass 3 (Root):** Passes the resulting string into `{embed(title):...}` to update the embed payload.

---

## Parser Precedence & Execution Order

Parsers are executed intentionally in deterministic order within Eruptor's pipeline:

1. **Variables & StrictVars**: Transforms `{track.*}`, `{player.*}`, `{user.*}`, `{server.*}`.
2. **Logic & Control Flow**: Resolves `{if}`, `{random}`, `{5050}`, `{range}`, `{break}`.
3. **Strings & Formatting**: Resolves `{replace}`, `{slice}`, `{urlencode}`, `{upper}`, `{lower}`.
4. **Security & Cooldowns**: Evaluates `{permission}`, `{cooldown}`, `{deny}`, `{required}`.
5. **Live Search & Audio Engine**: Evaluates `{suggest}`, `{tune}`, `{filter}`, `{play}`, `{skip}`.
6. **Visual Construction**: Resolves `{embed}` and `{file}` without mutation clashes.

---

## Escaping Special Characters

TagScript uses `{`, `}`, `:`, and `|` as internal control characters. Escape them with a backslash `\` to treat them as literal text:

| Character | Role in TagScript | Escaped Syntax |
| :--- | :--- | :--- |
| `{` | Starts tag expression | `\{` |
| `}` | Closes tag expression | `\}` |
| `:` | Separates declaration from payload | `\:` |
| `\|` | Separates branches in `{if}` and `{5050}` | `\|` |
| `~` | Separates items in `{random}` and embed fields | `\~` |

---

## Next Steps
- Explore all runtime transformers in [Track & Song Metadata](/variables/track-and-song/).
