---
sidebar_position: 2
title: Membuat Tombol Toggle
---

# Membuat Tombol Toggle

Agar user bisa berpindah mode, kita butuh sedikit JavaScript. Script ini juga akan menyimpan pilihan user di `localStorage` agar saat di-refresh tidak kembali ke default.

## 1. UI Tombol (HTML)
Buat tombol sederhana dengan ikon Matahari/Bulan.

```html
<button id="theme-toggle" class="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg">
  <span id="theme-icon">🌙 Mode Gelap</span>
</button>
```

## 2. Logika (JavaScript)

Copy script ini dan letakkan di bagian bawah `<body>` atau di file JS terpisah.

```javascript
// 1. Cek Preferensi Awal (Saved di LocalStorage atau System)
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

// 2. Event Listener Tombol
const toggleBtn = document.getElementById('theme-toggle');
const icon = document.getElementById('theme-icon');

toggleBtn.addEventListener('click', function() {
  const html = document.documentElement;
  
  // Toggle Class 'dark' di <html>
  html.classList.toggle('dark');
  
  // Simpan Pilihan ke LocalStorage
  if (html.classList.contains('dark')) {
    localStorage.theme = 'dark';
    icon.textContent = '☀️ Mode Terang';
  } else {
    localStorage.theme = 'light';
    icon.textContent = '🌙 Mode Gelap';
  }
});
```

:::success Hasil
Sekarang website Anda memiliki fitur Dark Mode profesional yang:

1. Bisa di-switch manual.
2. Mengingat pilihan user (Persist).
3. Otomatis mengikuti sistem saat pertama kali dibuka.
:::