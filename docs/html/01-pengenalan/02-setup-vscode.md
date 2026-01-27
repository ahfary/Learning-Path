---
sidebar_position: 2
title: Persiapan Tools
---

<img
  src="/img/vscode.png"
  alt="Visual Studio Code"
  width="15%"
  style={{ borderRadius: '10px', marginBottom: '20px' }}
/>

# Persiapan Tools (VS Code)

Untuk menulis kode HTML, sebenarnya Anda hanya butuh aplikasi Notepad biasa. Namun, untuk efisiensi dan fitur modern, kita akan menggunakan *Code Editor*.

## Mengapa VS Code?

<img
  src="/img/modul/html/perbandingan.webp"
  alt="Diagram Perbandingan VS Code, Sublime Text, WebStorm"
  width="80%"
  style={{ borderRadius: '10px', marginBottom: '20px' }}
/>

Meskipun ada banyak editor lain seperti *Sublime Text* (ringan) atau *WebStorm* (berbayar & powerful), modul ini menggunakan **Visual Studio Code (VS Code)** karena:

1. **Gratis & Open Source**
2. Standar industri saat ini
3. Ekosistem ekstensi yang sangat luas

Anda bisa mengunduhnya di:  
👉 [https://code.visualstudio.com](https://code.visualstudio.com)

---

### Ekstensi Wajib untuk Pemula

Setelah menginstal VS Code, sangat disarankan menginstal ekstensi berikut agar proses belajar lebih lancar:

<div
  style={{
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '10px',
  }}
>
  <h3 style={{ margin: 0 }}>1. Live Server</h3>
  <img
    src="/img/live-server.png"
    alt="Logo Live Server"
    width="40"
    style={{ margin: 0 }}
  />
</div>

<img
  src="/img/modul/html/alur.png"
  alt="Diagram Alur Live Server"
  width="60%"
  style={{ borderRadius: '10px', marginBottom: '20px' }}
/>

Ekstensi ini membuat **server lokal sementara**.

- **Fungsinya:**  
  Setiap kali Anda menyimpan file (`Ctrl + S`), browser akan otomatis me-refresh halaman.
- **Cara Pakai:**  
  Buka file HTML → klik kanan → **Open with Live Server**

---

<div
  style={{
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '10px',
  }}
>
  <h3 style={{ margin: 0 }}>2. Prettier – Code Formatter</h3>
  <img
    src="/img/prettier.png"
    alt="Logo Prettier"
    width="40"
    style={{ margin: 0 }}
  />
</div>

<img
  src="/img/modul/html/pretier.jpg"
  alt="Diagram Alur Prettier"
  width="60%"
  style={{ borderRadius: '10px', marginBottom: '20px' }}
/>

- **Fungsinya:**  
  Merapikan kode secara otomatis saat file disimpan dan membantu membiasakan *clean code*.

<img
  src="/img/modul/html/save.png"
  alt="Efek Prettier"
  width="60%"
  style={{ borderRadius: '10px', marginBottom: '20px' }}
/>

:::tip Tips Produktivitas
Aktifkan **Auto Save** di VS Code (`File > Auto Save`) agar Anda tidak perlu menekan `Ctrl + S` terus-menerus.  
Perlu dicatat, Live Server bisa melakukan refresh lebih sering jika Anda mengetik cukup lambat.
:::