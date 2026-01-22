---
sidebar_position: 1
title: Hover, Focus, & Active
---

# Hover, Focus, & Active

Tailwind memudahkan kita mengakses state elemen cukup dengan menambahkan **prefix** nama state-nya.

## 1. Hover (`hover:`)
Gaya ini aktif saat **kursor mouse berada di atas elemen**.
* Wajib untuk: Tombol, Link, dan Kartu.

```html
<button class="bg-blue-500 hover:bg-blue-700 text-white p-3 rounded transition">
  Simpan Data
</button>
```

:::tip Pro Tip: Transition
Selalu tambahkan class `transition` agar perubahan warnanya halus (ada animasinya), tidak kaget/instan.
:::

## 2. Focus (`focus:`)

Gaya ini aktif saat elemen **sedang dipilih** (biasanya Input Form saat kita mau ngetik).

* Wajib untuk: Accessibility (agar user tahu dia sedang ngetik di mana).

```html
<input 
  type="text" 
  class="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none p-2 rounded"
  placeholder="Nama Lengkap"
/>
```

## 3. Active (`active:`)

Gaya ini aktif saat elemen **sedang ditekan** (klik tahan).

* Memberikan efek "pencet" yang realistis pada tombol.

```html
<button class="bg-green-500 active:bg-green-800 active:scale-95 transform transition text-white p-3">
  Klik Tahan Saya!
</button>