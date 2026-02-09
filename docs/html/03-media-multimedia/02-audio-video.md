---
sidebar_position: 2
title: Audio & Video
---

# Audio & Video

HTML5 merevolusi web dengan memungkinkan kita memutar musik dan video langsung di browser tanpa plugin tambahan (seperti Flash Player zaman dulu).

## Audio (Suara)
Gunakan tag `<audio>`. Anda **wajib** menambahkan atribut `controls` agar tombol play/pause muncul.
<img 
  src="/img/modul/html/audio.png" 
  alt="Contoh custom HTML5 audio player"
  style={{ maxWidth: '50%', borderRadius: '8px', margin: '16px 0' }}
/>
*Sumber: [codeconvey.com](https://codeconvey.com/customize-html5-audio-player-css/) -*

```html
<audio controls>
    <source src="musik.mp3" type="audio/mpeg">
    Browser Anda tidak mendukung elemen audio.
</audio>
```

* **Format yang didukung:** MP3 (paling aman), WAV, OGG.

---

## Video (Native HTML5)

Gunakan tag `<video>`. Sama seperti audio, atribut `controls` wajib ada.
<img
src="/img/modul/html/video.png"
alt="Contoh HTML5 native video player"
style={{ maxWidth: '100%', borderRadius: '8px', margin: '16px 0' }}
/>
*Sumber: [designsystem.com](https://designsystem.line.me/LDSG/components/contents/video-player-en/) -*

```html
<video width="320" height="240" controls poster="sampul-video.jpg">
    <source src="video-promosi.mp4" type="video/mp4">
    Browser Anda tidak mendukung elemen video.
</video>
```

### Atribut Tambahan

* `poster`: Menampilkan gambar sampul (thumbnail) sebelum video diputar.
* `loop`: Video akan berulang otomatis setelah selesai.
* `muted`: Video dimulai dalam keadaan bisu.
* `autoplay`: Video memutar otomatis (Sebagian besar browser modern **memblokir** autoplay yang bersuara demi kenyamanan pengguna).

---

## Embed Video (YouTube) - *Best Practice*

Hosting file video sendiri (`.mp4`) memakan banyak *bandwidth* dan ruang server. Cara paling efisien dan gratis adalah mengupload video ke YouTube, lalu menanamnya (*embed*) di web Anda.
<img
src="/img/modul/html/embed.png"
alt="Contoh embed video YouTube responsive"
style={{ maxWidth: '100%', borderRadius: '8px', margin: '16px 0' }}
/>
*Sumber: [araweb.com](https://www.araweb.co.uk/Embed_YouTube_videos_with_responsive_code_765) -*

**Caranya:**

1. Buka video YouTube.
2. Klik tombol **Share** -> **Embed**.
3. Copy kode `<iframe>` yang diberikan.

Contoh kode:

```html
<iframe 
    width="560" 
    height="315" 
    src="[https://www.youtube.com/embed/VIDEO_ID](https://www.youtube.com/embed/VIDEO_ID)" 
    title="YouTube video player" 
    frameborder="0" 
    allowfullscreen>
</iframe>
```

:::tip Pro Tip
Selalu gunakan metode **Embed (Iframe)** untuk video durasi panjang agar website Anda tetap ringan dan cepat diakses. Biarkan server YouTube yang menanggung beban loading videonya.
:::