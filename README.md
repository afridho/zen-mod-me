# Zen Mod Me

Mod personal untuk [Zen Browser](https://zen-browser.app/). Berisi fitur-fitur untuk styling UI dan Arc-2.0 integration:

1. **Superellipse Corners** — mengubah bentuk sudut UI menjadi superellipse agar tampak lebih halus.
2. **Custom Picture-in-Picture (PiP)** — merapikan jendela PiP dan membulatkan sudutnya.
3. **Arc Menu Icon** — menampilkan Arc icon pada hamburger menu (diambil dari Arc-2.0).
4. **Faded Unloaded Tabs** — fade effect pada tab yang belum dimuat.
5. **Rounded Sidebar Items** — membulatkan sudut item-item di sidebar.

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

### Arc Menu Icon

Menampilkan Arc icon yang lebih indah pada menu button, terinspirasi dari Arc Browser dan Arc-2.0 theme.

### Faded Unloaded Tabs

Membuat tab yang belum dimuat (pending) tampak lebih fade/transparan. Opsional dengan grayscale effect.

### Rounded Sidebar Items

Membulatkan sudut pada item-item sidebar untuk tampilan yang lebih rapi dan konsisten.

## Preferensi

Semua preferensi dapat diatur melalui pengaturan mod:

- **Enable Superellipse Corners** — aktifkan/nonaktifkan sudut superellipse (default: aktif).
- **Superellipse Curvature** — tingkat lengkung superellipse (default: `1.2`).
- **Enable Custom Picture-in-Picture** — aktifkan/nonaktifkan styling PiP (default: aktif).
- **Picture-in-Picture Corner Radius** — radius sudut PiP (default: `12px`).
- **Enable Arc Menu Icon** — aktifkan Arc icon pada menu button (default: nonaktif).
- **Grayscale Faded Unloaded Tabs** — tambahkan grayscale pada tab yang fade (default: nonaktif).
- **Sidebar Items Corner Radius** — radius sudut item sidebar (default: `8px`).

## Penting: aktifkan fitur-fitur required

### Untuk transparansi dan unloaded tabs fade:

1. Buka `about:config` di Zen.
2. Cari dan set:
   - `browser.tabs.allow_transparent_browser` → `true` (untuk transparansi PiP)
   - `browser.tabs.fadeOutUnloadedTabs` → `true` (untuk fade effect unloaded tabs)
3. Restart Zen Browser.

Tanpa langkah ini, fitur-fitur tertentu mungkin tidak berfungsi optimal.

## Struktur file

- `chrome.css` — aturan CSS mod dengan fitur Arc-2.0.
- `preferences.json` — daftar preferensi mod yang dapat disesuaikan.
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

## Catatan Implementasi Arc-2.0

Beberapa fitur diambil dari [Arc-2.0](https://github.com/YashjitPal/Arc-2.0) theme:

- **Arc Menu Icon**: SVG icon dari Arc-2.0 yang lebih elegan
- **Faded Tabs**: Media query berbasis `browser.tabs.fadeOutUnloadedTabs` untuk fade effect
- **Rounded Items**: Menggunakan CSS custom properties untuk radius yang fleksibel

Fitur-fitur ini terintegrasi dengan preferensi Zen Mod Me untuk memudahkan kustomisasi.

## Catatan kompatibilitas

`corner-shape` adalah properti CSS eksperimental. Jika versi Zen belum mendukungnya, aturan superellipse diabaikan tanpa memengaruhi bagian lain. Selector `.no-squircles` sengaja dikecualikan.

## Development & Release

### Publish & bump version

Gunakan `publish.js` untuk otomatis bump versi dan push ke GitHub dengan satu command:

```bash
node publish.js
```

**Cara kerja versi:**
- Minor version: 1.0 → 1.1 → 1.2 → ... → 1.99 → 1.100
- Ketika minor mencapai 100, major naik: 1.100 → 2.0 (minor reset ke 0)
- Repeat selamanya

**Apa yang dilakukan:**
1. Baca versi saat ini dari `theme.json`
2. Bump minor (atau major jika minor = 100)
3. Update `updatedAt` ke hari ini
4. Commit dengan pesan `release: v<VERSION>`
5. Push commit ke `origin/main`

Contoh urutan release:
```
1.0 → 1.1 → 1.2 → ... → 1.99 → 1.100 → 2.0 → 2.1 → ...
```

## Lisensi

File-file dalam project ini mengikuti lisensi yang tercantum pada [`LICENSE`](LICENSE).

