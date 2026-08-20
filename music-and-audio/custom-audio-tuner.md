# 🎛️ Custom Audio Tuner (`{tune}` & `{eq}`)

> **Create custom audio effects, tune playback speeds, apply 8D rotation, and shape 15-band equalizer frequencies directly in TagScript.**

---

## 📌 Three Ways to Tune Audio

---

### Method 1: Multi Key-Value String
Set multiple audio parameters in a single tag:
```tagscript
{tune:speed=1.2, pitch=1.15, bass=0.6, 8d=0.25}
```

---

### Method 2: Parameterized Single-Property Tuning
Fine-tune specific acoustic properties:

| Tag | Parameter Description | Allowed Value Range |
| :--- | :--- | :--- |
| **`{tune(speed):1.25}`** | Audio speed multiplier | `0.1` – `3.0` |
| **`{tune(pitch):1.3}`** | Audio pitch multiplier | `0.1` – `3.0` |
| **`{tune(rate):0.9}`** | Sample rate multiplier | `0.1` – `3.0` |
| **`{tune(bass):0.85}`** | Low-frequency equalizer gain | `-0.25` – `1.0` |
| **`{tune(treble):0.5}`** | High-frequency equalizer gain | `-0.25` – `1.0` |
| **`{tune(8d):0.25}`** *(or `rotation`)* | 8D audio rotation frequency in Hz | `0.01` – `5.0` |
| **`{tune(lowpass):20}`** | LowPass filter smoothing | `1` – `100` |

---

### Method 3: 15-Band Equalizer Array (`{eq}`)
Pass exact gain values across all 15 frequency bands (from 25 Hz sub-bass to 16.0 kHz treble):

```tagscript
{eq:0.3, 0.25, 0.2, 0.1, 0, 0, 0, 0, 0, 0, 0, 0.1, 0.2, 0.3}
```

---

## 💻 Showcase 1: Slowed + Reverb Trigger (`slowed`)

```tagscript
{cooldown(5)}
{tune:speed=0.85, pitch=0.85, lowpass=20}
{embed(title):🌙 Slowed + Reverb Activated}
{embed(description):Applied custom audio tuning to **[{track.title}]({track.uri})**:\n• **Speed:** \`0.85x\`\n• **Pitch:** \`0.85x\`\n• **LowPass Cutoff:** \`20\`}
{embed(thumbnail):{track.thumbnail}}
{embed(color):0x9B59B6}
{embed(footer.text):Tuned for {user.username}}
```

---

## 💻 Showcase 2: Deep Bass + 8D Audio Trigger (`deepbass`)

```tagscript
{cooldown(5)}
{tune(bass):0.85}
{tune(8d):0.25}
{embed(title):🎛️ Deep Bass + 8D Tuner}
{embed(description):Applied custom **Bass (+0.85)** and **8D Rotation (0.25Hz)** to **[{track.title}]({track.uri})**!}
{embed(thumbnail):{track.thumbnail}}
{embed(color):0xE74C3C}
{embed(footer.text):Custom tuned by {user.username}}
```
