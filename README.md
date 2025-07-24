# Seals API

## Deskripsi Singkat

Proyek ini adalah sebuah backend API yang dibangun menggunakan framework **AdonisJS**. API ini dirancang untuk menangani sistem percakapan, di mana pengguna dapat mengajukan pertanyaan dan mendapatkan jawaban. Setiap percakapan dan pesannya akan disimpan ke dalam database.

API ini diamankan menggunakan autentikasi berbasis API Key.

## Fitur Utama

-   Manajemen percakapan.
-   Mengajukan pertanyaan dalam sebuah percakapan (atau memulai percakapan baru).
-   Autentikasi aman menggunakan API Key.
-   Struktur proyek yang rapi dan modern khas AdonisJS.

## Contoh Penggunaan Endpoint API

**Live Host :** `https://api.ainuns.my.id/chat`

### 1. Mengajukan Pertanyaan Baru

Endpoint ini digunakan untuk mengajukan pertanyaan. Jika `conversation_id` tidak disertakan, maka sebuah percakapan baru akan dibuat.

-   **URL:** `/question`
-   **Metode:** `POST`
-   **Body (JSON):**
    ```json
    {
        "question": "ada layanan apa di majadigi?",
        "conversation_id": null
    }
    ```

-   **Contoh Response:**
    ```json
    {
        "text": "Majadigi menyediakan lebih dari 36 layanan publik unggulan untuk Provinsi Jawa Timur, yang mencakup berbagai kategori seperti:\n\n1. **Kesehatan & Medis**:\n   - RSUD Dr. Soetomo - Layanan rumah sakit rujukan nasional dengan pendaftaran online.\n   - E-TIBI - Aplikasi skrining mandiri Tuberkulosis berbasis website.\n   - Layanan BNN - Deteksi dini narkoba, rehabilitasi, dan asesmen terpadu.\n\n2. **Ketenagakerjaan & Ekonomi**:\n   - Berbagai layanan terkait ketenagakerjaan dan ekonomi.\n\n3. **Keagamaan & Budaya**:\n   - Islamic Center - Pusat kegiatan dan fasilitas keagamaan Islam.\n   - Cak Durasim - Gedung pertunjukan Taman Budaya Jawa Timur.\n   - 360 East Java Virtual Tour - Wisata virtual destinasi Jawa Timur.\n\n4. **Keselamatan Kerja**:\n   - SIMPEL K3 - Sistem pelayanan pengujian Kesehatan dan Keselamatan Kerja.\n\n5. **Pariwisata**:\n   - SIDITA - Sistem informasi destinasi wisata Jawa Timur.\n\nMajadigi menawarkan kemudahan akses layanan pemerintah dalam satu pintu untuk memenuhi berbagai kebutuhan masyarakat.",
        "properties": {
            "source": {
                "id": "OpenAIModel-b1JlZ",
                "display_name": "OpenAI",
                "source": "gpt-4o-mini"
            },
            "icon": "OpenAI",
            "allow_markdown": false,
            "state": "complete",
            "text_color": "",
            "background_color": ""
        },
        "category": "message",
        "id": "e64f905c-776e-4b6f-9a83-2d273500abb5",
        "flow_id": "52776abd-422d-40f0-a44a-dd074ecf6c40",
        "suggest_links": [
            {
                "title": "Majadigi",
                "link": "https://majadigi.jatimprov.go.id"
            }
        ]
    }
    ```

### 2. Melihat Daftar Percakapan

Endpoint ini untuk mengambil semua percakapan yang ada.

-   **Header:**
    `x-api-key: <API_KEY>`
-   **URL:** `/conversation?page=1&limit=10`
-   **Metode:** `GET`

-   **Contoh Response :**
    ```json
    {
        "meta": {
            "total": 7,
            "perPage": 10,
            "currentPage": 1,
            "lastPage": 1,
            "firstPage": 1,
            "firstPageUrl": "/?page=1",
            "lastPageUrl": "/?page=1",
            "nextPageUrl": null,
            "previousPageUrl": null
        },
        "data": [
            {
                "id": "06440995-96ec-44a7-8ef5-7943f50939fc",
                "sessionId": "25133afe-13b3-4117-894b-2e0beb81384e",
                "createdAt": "2025-07-23T06:08:15.480+00:00",
                "updatedAt": "2025-07-23T06:08:15.481+00:00",
                "lastMessage": {
                    "id": "b35e2c56-7685-4a14-b4e2-0f097bd66d39",
                    "conversationId": "06440995-96ec-44a7-8ef5-7943f50939fc",
                    "senderType": "bot",
                    "message": "Majadigi menyediakan lebih dari 36 layanan publik unggulan untuk Provinsi Jawa Timur, yang mencakup berbagai kategori seperti:\n\n1. **Kesehatan & Medis**:\n   - RSUD Dr. Soetomo - Layanan rumah sakit rujukan nasional dengan pendaftaran online.\n   - E-TIBI - Aplikasi skrining mandiri Tuberkulosis berbasis website.\n   - Layanan BNN - Deteksi dini narkoba, rehabilitasi, dan asesmen terpadu.\n\n2. **Ketenagakerjaan & Ekonomi**:\n   - Berbagai layanan terkait ketenagakerjaan dan ekonomi.\n\n3. **Keagamaan & Budaya**:\n   - Islamic Center - Pusat kegiatan dan fasilitas keagamaan Islam.\n   - Cak Durasim - Gedung pertunjukan Taman Budaya Jawa Timur.\n   - 360 East Java Virtual Tour - Wisata virtual destinasi Jawa Timur.\n\n4. **Keselamatan Kerja**:\n   - SIMPEL K3 - Sistem pelayanan pengujian Kesehatan dan Keselamatan Kerja.\n\n5. **Pariwisata**:\n   - SIDITA - Sistem informasi destinasi wisata Jawa Timur.\n\nMajadigi menawarkan kemudahan akses layanan pemerintah dalam satu pintu untuk memenuhi berbagai kebutuhan masyarakat.",
                    "createdAt": "2025-07-23T06:08:35.164+00:00",
                    "updatedAt": "2025-07-23T06:08:35.164+00:00"
                }
            },
            {
                "id": "def9aa79-e5d5-4dfa-97ee-49f17d656b68",
                "sessionId": "ee5b3fd0-9d37-41ac-9057-946d8f0e4858",
                "createdAt": "2025-07-23T04:54:22.604+00:00",
                "updatedAt": "2025-07-23T04:54:22.604+00:00",
                "lastMessage": {
                    "id": "93154d2d-33c5-49cb-995c-8e0d80bfdfb3",
                    "conversationId": "def9aa79-e5d5-4dfa-97ee-49f17d656b68",
                    "senderType": "bot",
                    "message": "Maaf, saya tidak dapat memberikan informasi tentang \"hihi\" karena itu tidak terkait dengan topik yang saya dukung. Namun, jika Anda memiliki pertanyaan tentang Jaringan Dokumentasi dan Informasi Hukum (JDIH) atau layanan pengaduan dan aspirasi, silakan tanyakan! 😊",
                    "createdAt": "2025-07-23T04:54:36.428+00:00",
                    "updatedAt": "2025-07-23T04:54:36.428+00:00"
                }
            }
        ]
    }
    ```

### 3. Melihat Percakapan

Endpoint ini untuk mengambil semua pesan dari sebuah percakapan.

-   **Header:**
    `x-api-key: <API_KEY>`
-   **URL:** `/conversation/:id`
-   **Metode:** `GET`

-   **Contoh Response:**
    ```json
    {
        "id": "06440995-96ec-44a7-8ef5-7943f50939fc",
        "sessionId": "25133afe-13b3-4117-894b-2e0beb81384e",
        "createdAt": "2025-07-23T06:08:15.480+00:00",
        "updatedAt": "2025-07-23T06:08:15.481+00:00",
        "messages": [
            {
                "id": "96d83c78-f174-433d-ab31-3402c849f612",
                "conversationId": "06440995-96ec-44a7-8ef5-7943f50939fc",
                "senderType": "user",
                "message": "ada layanan apa di majadigi?",
                "createdAt": "2025-07-23T06:08:15.966+00:00",
                "updatedAt": "2025-07-23T06:08:15.966+00:00"
            },
            {
                "id": "b35e2c56-7685-4a14-b4e2-0f097bd66d39",
                "conversationId": "06440995-96ec-44a7-8ef5-7943f50939fc",
                "senderType": "bot",
                "message": "Majadigi menyediakan lebih dari 36 layanan publik unggulan untuk Provinsi Jawa Timur, yang mencakup berbagai kategori seperti:\n\n1. **Kesehatan & Medis**:\n   - RSUD Dr. Soetomo - Layanan rumah sakit rujukan nasional dengan pendaftaran online.\n   - E-TIBI - Aplikasi skrining mandiri Tuberkulosis berbasis website.\n   - Layanan BNN - Deteksi dini narkoba, rehabilitasi, dan asesmen terpadu.\n\n2. **Ketenagakerjaan & Ekonomi**:\n   - Berbagai layanan terkait ketenagakerjaan dan ekonomi.\n\n3. **Keagamaan & Budaya**:\n   - Islamic Center - Pusat kegiatan dan fasilitas keagamaan Islam.\n   - Cak Durasim - Gedung pertunjukan Taman Budaya Jawa Timur.\n   - 360 East Java Virtual Tour - Wisata virtual destinasi Jawa Timur.\n\n4. **Keselamatan Kerja**:\n   - SIMPEL K3 - Sistem pelayanan pengujian Kesehatan dan Keselamatan Kerja.\n\n5. **Pariwisata**:\n   - SIDITA - Sistem informasi destinasi wisata Jawa Timur.\n\nMajadigi menawarkan kemudahan akses layanan pemerintah dalam satu pintu untuk memenuhi berbagai kebutuhan masyarakat.",
                "createdAt": "2025-07-23T06:08:35.164+00:00",
                "updatedAt": "2025-07-23T06:08:35.164+00:00"
            }
        ]
    }
    ```
