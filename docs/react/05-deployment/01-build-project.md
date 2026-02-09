---
sidebar_position: 1
title: Build Project
---

# Build Project

Browser (Chrome, Firefox) sebenarnya **tidak mengerti** apa itu JSX, TypeScript, atau React Component. Mereka hanya mengerti HTML, CSS, dan JS biasa.

Oleh karena itu, sebelum ditaruh di internet, kode kita harus **diterjemahkan** dulu. Proses ini disebut **Building**.

## Perintah Build
Buka terminal di folder proyek Anda, lalu jalankan:

```bash
npm run build
```

## Apa yang terjadi?

1. Vite/React akan membaca semua kode Anda.
2. Mengubah TypeScript menjadi JavaScript biasa.
3. Memperkecil ukuran file (Minify) agar website ngebut.
4. Hasil akhirnya akan muncul di folder baru bernama **`dist`** (atau `build`).

:::warning Jangan Edit Folder 'dist'!
Folder `dist` adalah hasil cetakan mesin. Jangan pernah mengedit kode di dalamnya, karena akan tertimpa setiap kali Anda build ulang. Editlah selalu di folder `src`.
:::

## Preview Hasil Build

Sebelum upload, ada baiknya kita tes dulu hasil build-nya di komputer sendiri:

```bash
npm run preview
```