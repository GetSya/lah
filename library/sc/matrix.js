const gradient = require("gradient-string");
const figlet = require("figlet");

const matrix = () => {
    // Fungsi ini dipisahkan agar bisa dipanggil baik dengan atau tanpa animasi
    const showStartupMessage = () => {
        // Gradien baru yang lebih keren (biru ke ungu)
        const titleGradient = gradient(['#4A00E0', '#8E2DE2']);

        // Menggunakan font 'Graffiti' dan gradien kustom
        const styledTitle = titleGradient.multiline(figlet.textSync("Botz Whatsapp", { font: "Graffiti", horizontalLayout: 'full' }));
        console.log(styledTitle);
        console.log(gradient.pastel('                     Botz Whatsapp v3.0.0 by ARASYA RAFI\n'));

        // Bagian "THANKS TO" dengan bingkai dan gaya baru
        console.log(gradient.morning('╔═══════════════════ THANKS TO ═══════════════════╗'));
        console.log(gradient.morning('║') + ' \x1b[32m★\x1b[0m Allah SWT' + ' '.repeat(38) + gradient.morning('║'));
        console.log(gradient.morning('║') + ' \x1b[32m★\x1b[0m ARASYA RAFI' + ' '.repeat(36) + gradient.morning('║'));
        console.log(gradient.morning('║') + ' \x1b[32m★\x1b[0m Developer OpenAI & Baileys' + ' '.repeat(19) + gradient.morning('║'));
        console.log(gradient.morning('║') + ' \x1b[32m★\x1b[0m Subscriber & Pengguna Setia' + ' '.repeat(20) + gradient.morning('║'));
        console.log(gradient.morning('║') + ' \x1b[32m★\x1b[0m Yang Udah Support Proyek Ini' + ' '.repeat(19) + gradient.morning('║'));
        console.log(gradient.morning('╚══════════════════════════════════════════════════╝'));


        // Bagian "KONTAK" dengan bingkai dan gaya baru
        console.log('\n' + gradient.teen('╔═══════════════════ KONTAK ════════════════════╗'));
        console.log(gradient.teen('║') + ' \x1b[36m• YouTube:\x1b[0m ARASYA RAFI x JOJO' + ' '.repeat(26) + gradient.teen('║'));
        console.log(gradient.teen('║') + ' \x1b[36m• WhatsApp:\x1b[0m t.me/sofunsyabi' + ' '.repeat(24) + gradient.teen('║'));
        console.log(gradient.teen('║') + ' \x1b[36m• Instagram:\x1b[0m https://instagram.com/@arsrfii' + ' '.repeat(10) + gradient.teen('║'));
        console.log(gradient.teen('╚══════════════════════════════════════════════════╝'));

        console.log(gradient.mind('\n[ Bot WhatsApp Is Starting... ]\n'));
    };

    // =======================================================================
    // KUNCI PERBAIKAN: Periksa apakah skrip berjalan di terminal interaktif
    // =======================================================================
    const isTTY = process.stdout.isTTY;

    if (!isTTY) {
        // JIKA TIDAK BERJALAN DI TERMINAL (misalnya lewat PM2):
        // Langsung tampilkan pesan startup tanpa animasi untuk menghindari error.
        console.log('[ Lingkungan non-TTY terdeteksi, melewati animasi matrix... ]');
        showStartupMessage();
        return Promise.resolve(); // Selesaikan promise agar bot bisa lanjut berjalan.
    }

    // JIKA BERJALAN DI TERMINAL:
    // Lanjutkan dengan animasi seperti biasa.
    return new Promise(resolve => {
        const chars = "0123456789ABCDEFΣΠЯΦΨΩ"; // Menambahkan beberapa karakter unik
        const columns = process.stdout.columns || 80;
        const rows = process.stdout.rows || 24;
        const drops = Array(columns).fill(0);

        const colorLevels = [
            '\x1b[2;32m', // green dim
            '\x1b[0;32m', // green normal
            '\x1b[1;32m', // green bright
        ];

        const draw = () => {
            console.clear();
            let output = Array(rows).fill('').map(() => Array(columns).fill(' '));

            for (let i = 0; i < drops.length; i++) {
                const char = chars[Math.floor(Math.random() * chars.length)];
                const level = Math.floor(Math.random() * colorLevels.length);
                const row = drops[i];

                if (row < rows && Math.random() > 0.2) {
                    output[row][i] = `${colorLevels[level]}${char}\x1b[0m`;
                    drops[i]++;
                } else {
                    drops[i] = 0;
                }
            }

            const rendered = output.map(line => line.join('')).join('\n');
            console.log(rendered);

            if (Math.random() < 0.07) {
                const center = Math.floor(columns / 2) - 12; // Disesuaikan agar pas
                const line = '=== ARASYA RAFI ===';
                process.stdout.cursorTo(center, Math.floor(rows / 2));
                // Menggunakan gradien pada nama di tengah animasi
                process.stdout.write(gradient.passion(line));
            }
        };

        const interval = setInterval(draw, 100);

        setTimeout(() => {
            clearInterval(interval);
            console.clear();
            showStartupMessage(); // Tampilkan pesan startup setelah animasi selesai.
            resolve();
        }, 3000); // Durasi animasi diperpanjang sedikit menjadi 3 detik
    });
};

module.exports = matrix;