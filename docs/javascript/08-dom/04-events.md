---
sidebar_position: 4
title: DOM Events
---

# DOM Events

Event adalah kejadian yang terjadi di halaman web (klik, scroll, ketik, dll). JavaScript bisa "mendengarkan" kejadian tersebut.

## Event Listener
Cara terbaik menangani event adalah menggunakan `addEventListener`.

```javascript
const tombol = document.querySelector('#btn-klik');

tombol.addEventListener('click', function() {
    alert('Tombol diklik!');
});
```

## Jenis Event Populer

| Event | Keterangan |
| --- | --- |
| `click` | Saat elemen diklik mouse. |
| `dblclick` | Saat diklik dua kali. |
| `mouseenter` | Saat mouse masuk ke area elemen (hover). |
| `submit` | Saat form dikirim. |
| `keydown` | Saat tombol keyboard ditekan. |

## Event Parameter (`e`)

Kita bisa menangkap detail informasi dari event yang terjadi (misal: koordinat mouse, tombol apa yang ditekan).

```javascript
document.addEventListener('keydown', (e) => {
    console.log("Anda menekan tombol: " + e.key);
});