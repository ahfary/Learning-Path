---
sidebar_position: 1
title: Apa itu Tailwind CSS?
---

# Apa itu Tailwind CSS?

Tailwind CSS adalah framework CSS yang mengusung konsep **Utility-First**.

Jika di **Bootstrap** kita diberikan komponen siap pakai (seperti `btn-primary` yang sudah ada warnanya), di **Tailwind** kita diberikan "kelas-kelas kecil" untuk membangun desain sendiri dengan cepat.

## Perbedaan Pola Pikir

### 1. Traditional CSS (Bikin Class Sendiri)
Kita harus bolak-balik antara file HTML dan CSS.
```html
<div class="chat-notification">
  <div class="chat-icon"></div>
  <div class="chat-message">Pesan Baru!</div>
</div>
```

```css
/* CSS */
.chat-notification { display: flex; align-items: center; }
.chat-icon { width: 20px; height: 20px; }
```

### 2. Tailwind CSS (Utility Classes)

Kita menulis style langsung di HTML menggunakan kelas bawaan. Tidak perlu file CSS terpisah!

```html
<div class="flex items-center p-4 bg-white shadow-lg rounded-lg">
  <div class="w-12 h-12 bg-blue-500 rounded-full"></div>
  <div class="ml-4 font-bold text-gray-900">Pesan Baru!</div>
</div>

```

## Kelebihan Utama

1. **Tidak perlu pusing mikir nama class** (Selamat tinggal `wrapper-inner-bottom-left`!).
2. **File CSS tidak akan bengkak** (Karena kita memakai ulang class yang sudah ada).
3. **Desain lebih custom** (Tidak terlihat "pasaran" seperti Bootstrap).