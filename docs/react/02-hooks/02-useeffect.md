---
sidebar_position: 2
title: useEffect (Effect)
---

# useEffect (Effect)

Digunakan untuk sinkronisasi dengan sistem luar (API, Timer, DOM).

## Import
```tsx
import { useEffect } from 'react';
```

## Rumus Dasar

```tsx
useEffect(() => {
  // Kode dijalankan disini
  
  return () => {
    // (Opsional) Kode pembersihan / cleanup
  }
}, [dependencies]); // Array ketergantungan
```

## Cheat Sheet Dependency

* `[]`: Jalan **sekali** pas mount (mirip `componentDidMount`).
* `[prop, state]`: Jalan setiap variabel di dalam kurung berubah.
* **(Tanpa Array)**: Jalan **setiap render** (Hati-hati loop!).
```