---
sidebar_position: 2
title: Hosting ke Vercel
---

# Hosting ke Vercel

Vercel adalah platform hosting terbaik untuk React/Next.js saat ini. Gratis, cepat, dan otomatis.

## Cara 1: Via GitHub (Otomatis / CI/CD)
Ini cara paling profesional. Setiap kali Anda `git push`, website otomatis terupdate.

1.  Push kode Anda ke **GitHub**.
2.  Buka [Vercel.com](https://vercel.com) dan Login (bisa pakai akun GitHub).
3.  Klik tombol **"Add New..."** -> **"Project"**.
4.  Pilih repositori GitHub Anda, klik **Import**.
5.  Di halaman konfigurasi:
    * **Framework Preset:** Pilih `Vite` (atau `Create React App`).
    * **Root Directory:** Biarkan `./` (kecuali folder react Anda ada di dalam subfolder).
6.  Klik **Deploy**.

Tunggu sebentar, dan... **Selamat! Website Anda sudah online!** 🎉
Anda akan dapat domain gratis seperti `nama-projek.vercel.app`.

## Cara 2: Manual (Drag & Drop)
Jika malas pakai GitHub, Anda bisa upload manual folder `dist`.

1.  Jalankan `npm run build` di komputer.
2.  Pastikan folder `dist` sudah muncul.
3.  Install **Vercel CLI**: `npm i -g vercel`.
4.  Ketik `vercel deploy` di terminal, lalu ikuti petunjuknya.
    * Atau buka dashboard Vercel dan cari menu upload manual (sekarang agak tersembunyi, lebih disarankan cara 1).

:::danger Masalah 404 pada Refresh (SPA Issue)
Jika Anda menggunakan **React Router**, kadang saat user me-refresh halaman `/about`, akan muncul error 404.
* **Di Vercel:** Biasanya sudah otomatis aman.
* **Di Netlify:** Anda wajib membuat file bernama `_redirects` di folder `public` isinya:
    `/* /index.html  200`
:::