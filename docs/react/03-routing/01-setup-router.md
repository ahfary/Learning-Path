---
sidebar_position: 1
title: Setup & Konfigurasi
---

# Setup & Konfigurasi

React secara bawaan tidak punya fitur routing. Kita harus menginstall library standar industri: **React Router DOM**.

## 1. Instalasi
Buka terminal di folder project React Anda:

```bash
npm install react-router-dom
```

## 2. Bungkus Aplikasi

Agar router bisa bekerja, kita harus membungkus komponen `<App />` dengan `<BrowserRouter>`.
Biasanya dilakukan di file `main.tsx` atau `index.tsx`.

```tsx
// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // <--- Import ini
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Bungkus App di sini */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
```

## Konsep SPA (Single Page Application)

Kenapa harus repot-repot?

* **Website Biasa (MPA):** Klik link -> Browser minta halaman baru ke server -> Layar putih sebentar -> Halaman muncul.
* **React Router (SPA):** Klik link -> React cuma ganti komponen di tengah -> **Tidak ada loading putih (Instan)**.
```