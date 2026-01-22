---
sidebar_position: 1
title: Konsep Mobile First
---

# Konsep Mobile First

Tailwind menggunakan pendekatan **Mobile First**. Artinya:
> **"Desainlah untuk HP (layar kecil) terlebih dahulu sebagai standar (default), baru kemudian tambahkan gaya untuk layar yang lebih besar."**

## Daftar Prefix (Breakpoint)
Tailwind menyediakan 5 titik ukur standar:

| Prefix | Ukuran Layar | Peruntukan |
| :--- | :--- | :--- |
| **(Tanpa Prefix)** | < 640px | **HP (Potrait)** - Ini adalah style dasar. |
| `sm:` | >= 640px | HP Besar / Tablet Kecil (Landscape) |
| `md:` | >= 768px | **Tablet (iPad)** |
| `lg:` | >= 1024px | **Laptop Standar** |
| `xl:` | >= 1280px | Monitor Desktop |
| `2xl:` | >= 1536px | Monitor Ultrawide |



## Cara Baca Kode
Misal kita punya kode:
`w-full md:w-1/2`

Cara bacanya:
1.  **Default (`w-full`):** "Di HP, lebarnya 100%."
2.  **MD (`md:w-1/2`):** "Saat masuk ukuran Tablet (dan lebih besar), ubah lebarnya jadi 50%."

:::danger Kesalahan Umum
Jangan berpikir `sm:` itu untuk HP!
* ❌ Salah: `sm:w-full` (Ini artinya width full mulai dari 640px ke atas).
* ✅ Benar: `w-full` (Tanpa prefix = untuk HP).
:::