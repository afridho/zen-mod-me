# Zen Mod Me

Mod personal untuk [Zen Browser](https://zen-browser.app/), berbasis fitur-fitur dari [Arc-2.0](https://github.com/YashjitPal/Arc-2.0) theme. Fokus pada styling UI: rounded corners, custom Picture-in-Picture, Arc menu icon, faded tabs, dan animasi workspace icon.

## Fitur

1. **Roundness & Corners** — atur roundness squircle atau border radius manual (`px`) untuk elemen UI dan web page area secara terpisah.
2. **Custom Picture-in-Picture (PiP)** — membulatkan sudut jendela PiP, latar transparan, dan merapikan kontrol serta progress bar.
3. **Arc Menu Icon** — menampilkan Arc icon pada hamburger menu button.
4. **Faded Unloaded Tabs** — fade effect pada tab yang belum dimuat, opsional dengan grayscale.
5. **Workspace Icon Animation** — animasi ala macOS dock pada workspace indicator di bawah sidebar.

## Preferensi

Semua preferensi dapat diatur melalui pengaturan mod (Sine / Zen Mods).

### Roundness & Corners

- **Squircle roundness** — tingkat lengkung squircle (0.8–2, lebih kecil = lebih bulat). Default: `1.1`.
- **Use squircle corners** — toggle squircle; nonaktifkan untuk pakai border radius `px` di bawah.
- **UI corner radius** — radius sudut toolbar, tabs, dan menu (0px–25px). Default: `12px`.
- **Web page corner radius** — radius sudut area konten/web page (0px–25px). Default: `12px`.
- **Window margin** — jarak antara web page dan tepi browser (0–12).

### Picture-in-Picture

- **Enable custom PiP** — aktifkan/nonaktifkan styling PiP. Default: aktif.
- **PiP corner radius** — radius sudut jendela PiP. Default: `12px`.

### Tabs & Icons

- **Arc menu icon** — tampilkan Arc icon pada hamburger button. Default: nonaktif.
- **Fade unloaded tabs** — buat tab yang belum dimuat tampak fade. Default: nonaktif.
- **Grayscale unloaded tabs** — tambah grayscale pada tab yang fade (butuh fade aktif). Default: nonaktif.

### Workspace

- **Workspace icon animation style** — gaya animasi workspace indicator:
  - `No background` — tanpa background (minimal, ada indicator dot).
  - `No animation` — background default tanpa animasi.
  - `Capsule background` — background capsule dengan animasi.
  - `Disable` — nonaktifkan styling.

## Penting: aktifkan pref bawaan Zen

Beberapa fitur butuh pref bawaan Zen diaktifkan lewat `about:config`:

- `browser.tabs.allow_transparent_browser` → `true` (transparansi PiP)
- `browser.tabs.fadeOutUnloadedTabs` → `true` (fade unloaded tabs)

Restart Zen setelahnya.

## Struktur file

- `chrome.css` — entry point yang mengimport semua modul dari `modules/chrome/`.
- `modules/chrome/`:
  - `general.css` — border radius untuk browser UI & web page (squircle + native radius vars).
  - `icons.css` — Arc menu icon.
  - `tab-styles.css` — faded unloaded tabs & tab border radius.
  - `workspace-buttons.css` — styling & animasi workspace indicator.
  - `pip.css` — custom Picture-in-Picture styling.
- `preferences.json` — daftar preferensi mod (format Sine-compatible).
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
3. Buat folder `chrome` jika belum ada, lalu salin `chrome.css` dan folder `modules/` ke dalamnya sebagai `chrome/userChrome.css` beserta modulnya.
4. Restart Zen Browser.

> Untuk instalasi manual, `preferences.json` dan `theme.json` tidak diperlukan; keduanya dipakai sebagai metadata dan pengaturan saat dipasang lewat pengelola mod. Preferensi berbasis `-moz-pref` hanya berlaku saat mod dipasang melalui Sine/Zen Mods.

## Catatan Implementasi

Fitur-fitur di-porting dari [Arc-2.0](https://github.com/YashjitPal/Arc-2.0) theme, menggunakan media query `@media -moz-pref("...")` dan CSS variable `--arc-border-radius` agar kompatibel dengan sistem preferensi Sine.

## Development & Release

### Publish & bump version

Gunakan `publish.js` untuk otomatis bump versi dan push ke GitHub dengan satu command:

```bash
node publish.js
```

**Cara kerja versi:**
- Minor version: 1.0 → 1.1 → 1.2 → ... → 1.99 → 1.100
- Ketika minor mencapai 100, major naik: 1.100 → 2.0 (minor reset ke 0)

**Apa yang dilakukan:**
1. Baca versi saat ini dari `theme.json`
2. Bump minor (atau major jika minor = 100)
3. Update `updatedAt` ke hari ini
4. Commit dengan pesan `release: v<VERSION>`
5. Push commit ke `origin/main`

## Lisensi

File-file dalam project ini mengikuti lisensi yang tercantum pada [`LICENSE`](LICENSE).
