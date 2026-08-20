---
title: Custom Audio Filter Recipes
description: 10 copy-paste recipes for Slowed+Reverb, Deep Bass 8D, Nightcore, Vaporwave, Treble, and more.
---

## 1. Slowed + Reverb (`slowed`)
```tagscript
{cooldown(5)}
{tune:speed=0.85, pitch=0.85, lowpass=20}
{embed(title):🌙 Slowed + Reverb Activated}
{embed(description):Applied custom audio tuning to **[{track.title}]({track.uri})**:\n• **Speed:** \`0.85x\`\n• **Pitch:** \`0.85x\`\n• **LowPass:** \`20\`}
{embed(thumbnail):{track.thumbnail}}
{embed(color):0x9B59B6}
{embed(footer.text):Tuned for {user.username}}
```

---

## 2. Deep Bass + 8D Audio (`deepbass`)
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

---

## 3. Studio Nightcore (`nightcore`)
```tagscript
{cooldown(5)}
{filter:nightcore}
{embed(title):⚡ Nightcore Enabled}
{embed(description):Speed and pitch boosted on **[{track.title}]({track.uri})**!}
{embed(thumbnail):{track.thumbnail}}
{embed(color):0xEB459E}
```

---

## 4. Vaporwave (`vaporwave`)
```tagscript
{cooldown(5)}
{filter:vaporwave}
{embed(title):🌴 Vaporwave Enabled}
{embed(description):Applied vaporwave slowdown to **[{track.title}]({track.uri})**.}
{embed(color):0x9B59B6}
```

---

## 5. Underwater Filter (`underwater`)
```tagscript
{cooldown(5)}
{filter:underwater}
{embed(title):🌊 Underwater Mode}
{embed(description):Submerged audio filter enabled on **[{track.title}]({track.uri})**.}
{embed(color):0x3498DB}
```

---

## 6. 8D Surround Audio (`8d`)
```tagscript
{cooldown(5)}
{filter:8d}
{embed(title):🎧 8D Audio Activated}
{embed(description):Put on headphones! 8D audio rotation enabled.}
{embed(color):0x2ECC71}
```

---

## 7. Treble Boost (`treble`)
```tagscript
{cooldown(5)}
{tune(treble):0.75}
{embed(title):✨ Treble Boosted}
{embed(description):High-frequency audio presence enhanced.}
{embed(color):0x1ABC9C}
```

---

## 8. Pitch Shifter (`pitchup`)
```tagscript
{cooldown(5)}
{tune(pitch):1.4}
{embed(title):🎵 Pitch Shifted Up}
{embed(description):Pitch set to **1.4x**.}
{embed(color):0xF1C40F}
```

---

## 9. Double Time (`fast`)
```tagscript
{cooldown(5)}
{tune(speed):1.5}
{embed(title):⚡ 1.5x Speed}
{embed(description):Playback speed set to **1.5x**.}
{embed(color):0xE67E22}
```

---

## 10. Filter Reset (`filterreset` / `resetfilter`)
```tagscript
{cooldown(3)}
{filter:clear}
{embed(title):🔄 Audio Filters Reset}
{embed(description):Restored neutral sound stage on **[{track.title}]({track.uri})**.}
{embed(color):0x95A5A6}
```
