---
title: Diagnostics & Best Practices
description: Systematic troubleshooting and diagnostic steps for Eruptor Bot administrators.
---

## Diagnostics Reference Table

| Symptom | Probable Cause | Corrective Action |
| :--- | :--- | :--- |
| `{cd:5}` printed as text in chat | Used colon instead of parentheses | Use `{cd(5)}` or `{cooldown(5)}` |
| `Expected property name in JSON` | Invalid string or special character in embed | Wrap conditionals inside `{embed(property):...}` |
| Tag not responding | Bot missing channel send permissions | Grant Send Messages and Embed Links permissions |
| Audio actions not triggering | User not in voice channel | Join a voice channel or add `{permission(voice):true}` |
| Else branch always executes | Falsy comparison string | Use explicit `{if({player.playing}==true):...\|...}` |

---

## Best Practices

1. **Test in Private Channel**: Always test complex tags in a dedicated staff or bot-testing channel before server-wide rollout.
2. **Apply Sensible Cooldowns**: Protect your bot from rate limits by attaching `{cooldown(3)}` to resource-intensive commands.
3. **Handle Idle Player State**: Always account for cases where `{player.playing}` is `false`.
