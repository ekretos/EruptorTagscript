# 🛠️ Common Errors & Troubleshooting Handbook

> **Diagnose and resolve TagScript errors, cooldown issues, and playback warnings.**

---

## 📋 Common Error Lookup Table

| Error / Symptom | Root Cause | Exact Solution |
| :--- | :--- | :--- |
| **`{cd:5}` printed in chat** | Used colon instead of parentheses | Change `{cd:5}` to **`{cd(5)}`** or **`{cooldown(5)}`**. |
| **Embed fields overwrite previous embed** | Two `{embed}` tags placed in `{if}` branches | Wrap conditions inside single embed tags: `{embed(title):{if(...):A\|B}}`. |
| **`musicPlay` not connecting or playing** | Bot wasn't in voice or invalid search source | Ensure the user is in voice. The resolver uses `source: 'ytm'`. |
| **`{if(...)}` printed as raw text** | Variable returned null/empty | Use explicit comparison: `{if({player.playing}==true):...\|...}`. |
| **`setRythra is not a function`** | Raw search object pushed to queue | Ensure tracks are resolved via `client.rythra.search(...)`. |

---

## 🔍 How to Debug in Console

Enable verbose trigger logging in Eruptor by watching console output:
```text
[TRIGGER DEBUG] Guild: 947967652675072051 | Player exists: true | Playing: true
[TRIGGER RESPONSE] Actions: {"cooldown": {"cooldown": 5}, "musicFilter": "bass"}
```

If an action does not appear in `Actions: {...}`, verify the tag name against the supported parsers list in **[Syntax & Anatomy](file:///d:/Ekretos/Eruptor/docs/getting-started/syntax-and-anatomy.md)**.
