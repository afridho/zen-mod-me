# Zen Mod Me

Mod personal untuk [Zen Browser](https://zen-browser.app/) yang mengubah bentuk sudut UI menjadi superellipse agar tampak lebih halus.

## Perubahan

CSS utama yang diterapkan:

```css
:not(.no-squircles),
.zen-squircle-before::before,
.zen-squircle-after::after {
  corner-shape: superellipse(1.2);
}
```

Mod aktif secara default dan dapat dinonaktifkan melalui preferensi **Enable Superellipse Corners**.

## Struktur file

- `chrome.css` — aturan CSS mod.
- `preferences.json` — preferensi toggle untuk mengaktifkan atau menonaktifkan mod.
- `theme.json` — metadata mod dan referensi file.
- `README.md` — dokumentasi ini.

## Instalasi

### Dengan Zen Mods / Sine

1. Salin atau fork repository ini.
2. Tambahkan repository tersebut ke pengelola mod yang Anda gunakan.
3. Aktifkan **Zen Mod Me — Superellipse Corners**.
4. Buka pengaturan mod dan pastikan **Enable Superellipse Corners** aktif.
5. Restart Zen jika perubahan belum langsung terlihat.

### Manual

1. Buka folder profil Zen Browser.
2. Pastikan fitur `toolkit.legacyUserProfileCustomizations.stylesheets` aktif di `about:config`.
3. Buat folder `chrome` jika belum ada.
4. Salin isi `chrome.css` ke file `chrome/userChrome.css` pada profil Zen.
5. Restart Zen Browser.

> Untuk instalasi manual, `preferences.json` dan `theme.json` tidak diperlukan; keduanya digunakan sebagai metadata dan pengaturan saat mod dipasang melalui pengelola mod.

## Catatan kompatibilitas

`corner-shape` adalah properti CSS eksperimental. Jika versi Zen yang digunakan belum mendukungnya, deklarasi ini dapat diabaikan tanpa memengaruhi aturan sudut lainnya.

Selector `.no-squircles` sengaja dikecualikan oleh selector `:not(.no-squircles)`.

## Lisensi

File-file dalam project ini mengikuti lisensi yang tercantum pada [`LICENSE`](LICENSE).
