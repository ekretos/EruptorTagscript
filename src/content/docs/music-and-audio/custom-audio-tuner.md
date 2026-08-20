---
title: Custom Audio Tuner & DSP Matrix
description: In-depth technical guide to Lavalink DSP filtering, 15-band equalizer frequencies, timescale equations, and 8D rotation in Eruptor.
---

## Overview

The `{tune}` and `{eq}` parsers give server administrators and users complete access to Lavalink's digital signal processing (DSP) audio pipeline.

---

## 15-Band Equalizer Mechanics

Lavalink divides the human audible spectrum into 15 distinct frequency bands:

| Band Index | Center Frequency | Audio Character | Recommended Boost / Cut |
| :--- | :--- | :--- | :--- |
| **Band 0** | `25 Hz` | Sub-Bass (Deep Rumble) | `0.15` to `0.35` for EDM/Trap |
| **Band 1** | `40 Hz` | Deep Bass (Kick Drums) | `0.15` to `0.30` |
| **Band 2** | `63 Hz` | Punchy Bass (Bass Guitar) | `0.10` to `0.25` |
| **Band 3** | `100 Hz` | Warmth / Upper Bass | `0.05` to `0.15` |
| **Band 4** | `160 Hz` | Low Midrange (Snare Body) | `-0.05` to `0.10` |
| **Band 5** | `250 Hz` | Midrange Body | `0.0` (Neutral) |
| **Band 6** | `400 Hz` | Vocals Low Fundaments | `0.0` (Neutral) |
| **Band 7** | `630 Hz` | Mid Vocal Presence | `0.05` for vocal clarity |
| **Band 8** | `1.0 kHz` | Lead Instruments & Presence | `0.05` to `0.10` |
| **Band 9** | `1.6 kHz` | High Midrange (Vocal Bite) | `0.10` |
| **Band 10** | `2.5 kHz` | Crispness & Attack | `0.10` to `0.15` |
| **Band 11** | `4.0 kHz` | Presence & Definition | `0.15` |
| **Band 12** | `6.3 kHz` | Treble / High Shimmer | `0.20` |
| **Band 13** | `10.0 kHz` | High Treble & Air | `0.20` to `0.30` |
| **Band 14** | `16.0 kHz` | Ultra High Brilliance | `0.15` to `0.25` |

### Gain Scale
- Gain values range from **`-0.25`** (Complete attenuation / -100% mute) to **`1.0`** (+100% amplification).
- Setting `0.0` represents neutral flat response.

---

## The `{tune}` Parser Syntax

### Syntax 1: Multi-Key Key-Value String
```tagscript
{tune:speed=0.85, pitch=0.85, lowpass=20, 8d=0.25}
```

### Syntax 2: Parameterized Modifiers
- **`{tune(speed):1.25}`** &mdash; Playback speed multiplier (`0.1` to `3.0`).
- **`{tune(pitch):1.3}`** &mdash; Audio pitch multiplier (`0.1` to `3.0`).
- **`{tune(rate):0.9}`** &mdash; Sample rate multiplier (`0.1` to `3.0`).
- **`{tune(bass):0.85}`** &mdash; Low-end equalizer boost (`-0.25` to `1.0`).
- **`{tune(treble):0.5}`** &mdash; High-end equalizer boost (`-0.25` to `1.0`).
- **`{tune(8d):0.25}`** &mdash; 8D audio rotation frequency in Hz (`0.01` to `5.0`).
- **`{tune(lowpass):20}`** &mdash; LowPass smoothing cutoff (`1` to `100`).

---

## 15-Band Array Syntax (`{eq}`)

Pass gain multipliers separated by commas across all 15 bands:

```tagscript
<!-- Bass + Treble Boost Curve -->
{eq:0.3, 0.25, 0.2, 0.1, 0, 0, 0, 0, 0, 0, 0, 0.1, 0.2, 0.25, 0.3}
```

---

## Timescale DSP Formulas

| Acoustic Profile | Speed | Pitch | Rate | LowPass |
| :--- | :--- | :--- | :--- | :--- |
| **Nightcore** | `1.25` | `1.30` | `1.00` | Disabled |
| **Slowed + Reverb** | `0.85` | `0.85` | `1.00` | `20` |
| **Vaporwave** | `0.80` | `0.75` | `1.00` | Disabled |
| **Chipmunk** | `1.10` | `1.80` | `1.00` | Disabled |
| **Darth Vader** | `0.90` | `0.60` | `1.00` | Disabled |
| **Double Time** | `2.00` | `1.00` | `1.00` | Disabled |
