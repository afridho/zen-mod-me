# Zen Mod Me

Mod personal untuk [Zen Browser](https://zen-browser.app/). Berisi dua fitur:

1. **Superellipse Corners** — mengubah bentuk sudut UI menjadi superellipse agar tampak lebih halus.
2. **Custom Picture-in-Picture (PiP)** — merapikan jendela PiP dan membulatkan sudutnya.

## Fitur

### Superellipse Corners

Menerapkan `corner-shape: superellipse(...)` pada elemen ber-radius, dengan tingkat lengkung yang bisa diatur.

```css
*:not(.no-squircles),
.zen-squircle-before::before,
.zen-squircle-after::after {
  corner-shape: superellipse(var(--mod-zenmodme-curvature, 1.2)) !important;
}
```

### Custom Picture-in-Picture

Membulatkan sudut jendela PiP, membuat latarnya transparan, dan merapikan kontrol serta progress bar.

## Preferensi

Semua preferensi dapat diatur melalui pengaturan mod:

- **Enable Superellipse Corners** — aktifkan/nonaktifkan sudut superellipse (default: aktif).
- **Superellipse Curvature** — tingkat lengkung superellipse (default: `1.2`).
- **Enable Custom Picture-in-Picture** — aktifkan/nonaktifkan styling PiP (default: aktif).
- **Picture-in-Picture Corner Radius** — radius sudut PiP (default: `12px`).

## Penting: aktifkan transparansi jendela

Agar sudut PiP yang dibulatkan tampil transparan (bukan hitam), khususnya di Windows:

1. Buka `about:config` di Zen.
2. Cari `browser.tabs.allow_transparent_browser`.
3. Set nilainya menjadi `true`.
4. Restart Zen Browser.

Tanpa langkah ini, area di luar radius PiP dapat tetap muncul sebagai warna solid (hitam).

## Struktur file

- `chrome.css` — aturan CSS mod.
- `preferences.json` — daftar preferensi mod.
- `theme.json` — metadata mod dan referensi file.
- `README.md` — dokumentasi ini.

## Instalasi

### Dengan Sine / Zen Mods

1. Buka pengaturan Sine di Zen.
2. Masukkan slug repository: `afridho/zen-mod-me`.
3. Klik Install, lalu restart Zen jika perlu.
4. Buka pengaturan mod untuk menyesuaikan preferensi.

### Manual

1. Buka folder profil Zen Browser.
2. Aktifkan `toolkit.legacyUserProfileCustomizations.stylesheets` di `about:config`.
3. Buat folder `chrome` jika belum ada.
4. Salin isi `chrome.css` ke `chrome/userChrome.css`.
5. Restart Zen Browser.

> Untuk instalasi manual, `preferences.json` dan `theme.json` tidak diperlukan; keduanya dipakai sebagai metadata dan pengaturan saat dipasang lewat pengelola mod. Preferensi berbasis `-moz-pref` hanya berlaku saat mod dipasang melalui Sine/Zen Mods.

## Catatan kompatibilitas

`corner-shape` adalah properti CSS eksperimental. Jika versi Zen belum mendukungnya, aturan superellipse diabaikan tanpa memengaruhi bagian lain. Selector `.no-squircles` sengaja dikecualikan.

## Lisensi

File-file dalam project ini mengikuti lisensi yang tercantum pada [`LICENSE`](LICENSE).
