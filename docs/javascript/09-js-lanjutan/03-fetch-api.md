---
sidebar_position: 3
title: Fetch API (Ambil Data)
---

# Fetch API

Fetch API adalah cara standar browser untuk mengambil data dari server lain (API).

Kita akan mencoba mengambil data palsu dari **JSONPlaceholder**.

## Sintaks Dasar (`GET`)
Menggunakan `async/await` agar kode bersih. Wajib dibungkus blok `try-catch` untuk menangani jika internet mati/error.

```javascript
const loadUsers = async () => {
    try {
        // 1. Request ke URL API
        const response = await fetch('[https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)');
        
        // 2. Ubah respon mentah jadi JSON (Object JS)
        const data = await response.json();
        
        // 3. Tampilkan datanya
        console.log(data); // Array of Objects (10 user)
        
        // Contoh: Ambil nama user pertama
        console.log(data[0].name); 
        
    } catch (error) {
        console.log("Gagal mengambil data:", error);
    }
};

loadUsers();
```

## Studi Kasus: Menampilkan ke HTML (DOM)

Gabungan materi **DOM** + **Fetch** + **Looping**.

```javascript
const daftarUser = document.querySelector('#list-user');

const tampilkanUser = async () => {
    const response = await fetch('[https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)');
    const users = await response.json();

    // Loop data dan masukkan ke HTML
    users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = `${user.name} - ${user.email}`;
        daftarUser.appendChild(li);
    });
};