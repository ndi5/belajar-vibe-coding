# Belajar Vibe Coding - ElysiaJS + Drizzle + MySQL Backend

Project backend yang dibangun menggunakan **Bun**, **ElysiaJS**, **Drizzle ORM**, dan **MySQL**.

## 🚀 Fitur & Stack
- **Runtime:** [Bun](https://bun.sh)
- **Web Framework:** [ElysiaJS](https://elysiajs.com)
- **ORM:** [Drizzle ORM](https://orm.drizzle.team)
- **Database:** MySQL (driver: `mysql2`)
- **Schema Management:** Drizzle Kit

## 📂 Struktur Direktori
```
.
├── drizzle/              # Generated SQL migrations
├── src/
│   ├── db/
│   │   ├── index.ts      # Koneksi database Drizzle pool
│   │   └── schema.ts     # Definisi tabel schema (users)
│   └── index.ts          # Server entry point & API routes
├── tests/
│   └── index.test.ts     # Automated unit tests
├── .env.example          # Template environment variable
├── drizzle.config.ts     # Konfigurasi Drizzle Kit
├── package.json          # Dependencies & npm/bun scripts
└── tsconfig.json         # Konfigurasi TypeScript
```

## ⚙️ Persiapan & Instalasi

1. **Clone repository dan install dependensi:**
   ```bash
   bun install
   ```

2. **Setup Environment Variables:**
   Salin `.env.example` ke `.env` dan sesuaikan koneksi MySQL Anda:
   ```bash
   cp .env.example .env
   ```

## 🗄️ Database Migrations

- **Generate migration SQL files:**
  ```bash
  bun run db:generate
  ```
- **Push skema langsung ke MySQL:**
  ```bash
  bun run db:push
  ```
- **Buka Drizzle Studio (Database GUI):**
  ```bash
  bun run db:studio
  ```

## 🏃 Menjalankan Aplikasi

- **Mode Development (Auto reload):**
  ```bash
  bun run dev
  ```
- **Mode Production:**
  ```bash
  bun run start
  ```
- **Menjalankan Unit Test:**
  ```bash
  bun test
  ```

## 📡 API Endpoints

- `GET /` - Health check status.
- `GET /users` - Mengambil semua data pengguna dari database MySQL.
- `POST /users` - Membuat data pengguna baru:
  ```json
  {
    "name": "Adi Nugroho",
    "email": "adi@example.com"
  }
  ```
