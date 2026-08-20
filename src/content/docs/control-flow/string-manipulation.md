---
title: String Manipulation
description: String transformers for replacing, slicing, casing, and encoding text in Eruptor.
---

## Overview

TagScript provides powerful built-in helpers for modifying string data.

---

## String Helpers Reference

### `{replace(search):replacement:source}`
Replaces substring matches inside target text.

```tagscript
{replace( ):+:lofi hip hop beats}
<!-- Result: lofi+hip+hop+beats -->
```

---

### `{slice(start,end):string}`
Extracts substring slices by character index.

```tagscript
{slice(0,10):Supercalifragilistic}
<!-- Result: Supercalif -->
```

---

### `{urlencode:string}` & `{urldecode:string}`
Encodes and decodes URL strings safely.

```tagscript
https://www.youtube.com/results?search_query={urlencode:{track.title} {track.author}}
```

---

### Case Modification
- **`{upper:text}`**: Converts string to ALL UPPERCASE.
- **`{lower:text}`**: Converts string to all lowercase.
- **`{capitalize:text}`**: Capitalizes the first letter of each word.
