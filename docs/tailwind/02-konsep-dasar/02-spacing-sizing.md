---
sidebar_position: 2
title: Spacing & Sizing
---

# Spacing & Sizing

Salah satu fitur terbaik Tailwind adalah sistem skala jarak yang konsisten.

## 1. Rumus "Kali Empat"
Tailwind menggunakan angka 1, 2, 3, dst sebagai pengali **4 pixel**.

* `1` = 4px
* `2` = 8px
* `4` = 16px
* `10` = 40px

## 2. Margin (`m`) & Padding (`p`)
Simbolnya sangat intuitif:
* `m` = Margin (luar)
* `p` = Padding (dalam)

Kita bisa menambahkan arah:
* `t` (top), `b` (bottom), `l` (left), `r` (right).
* `x` (kiri-kanan), `y` (atas-bawah).

**Contoh:**
* `p-4`: Padding 16px di semua sisi.
* `mx-auto`: Margin kiri-kanan otomatis (buat rata tengah).
* `mt-8`: Margin atas 32px.

```html
<div class="p-8 bg-gray-100">
  <div class="bg-white p-4 rounded-lg shadow-md">
    Kartu dengan padding
  </div>
</div>
```

## 3. Width (`w`) & Height (`h`)

Mengatur lebar dan tinggi elemen.

### Ukuran Pasti (Fixed)

* `w-16` (64px), `h-16` (64px).

### Persentase (Pecahan)

Sangat berguna untuk layout grid/kolom.

* `w-1/2`: Lebar 50%.
* `w-full`: Lebar 100%.
* `h-screen`: Tinggi 100% layar (Viewport Height).

```html
<div class="w-full h-screen bg-black text-white flex justify-center items-center">
  <p>Saya di tengah layar gelap</p>
</div>