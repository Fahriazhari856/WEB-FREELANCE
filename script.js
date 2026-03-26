// ==================== GLOBAL VARIABLES ====================
let audioCtx;
let isAudioEnabled = false;
let masterGain;

// ==================== AUDIO ENGINE (ELEGANT AMBIENT) ====================
// --- SISTEM AUDIO ---

const bgMusic = document.getElementById('bg-music');

function initAudioAuto() {
    if (isAudioEnabled) return;
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();

    isAudioEnabled = true;
    
    // Perbaikan: Tambahkan null check agar tidak error jika elemen audio belum ada di HTML
    if (bgMusic) {
        bgMusic.volume = 0.2;
        const playPromise = bgMusic.play();
        if (playPromise !== undefined) {
            playPromise.catch(e => console.log("Menunggu interaksi pengguna untuk memulai audio..."));
        }
    }

    document.removeEventListener('click', initAudioAuto);
    document.removeEventListener('touchstart', initAudioAuto);
    document.removeEventListener('keydown', initAudioAuto);
    document.removeEventListener('scroll', initAudioAuto);
}

// Perbaikan: Daftarkan event listener agar fungsi initAudioAuto benar-benar terpicu
document.addEventListener('click', initAudioAuto, { once: true });
document.addEventListener('touchstart', initAudioAuto, { once: true });
document.addEventListener('keydown', initAudioAuto, { once: true });
document.addEventListener('scroll', initAudioAuto, { once: true });

function playClickSound() {
    if (!audioCtx || !isAudioEnabled) return;
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(50, audioCtx.currentTime + 0.05);
    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.3, audioCtx.currentTime + 0.005);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.1);
}

function playScrollTick() {
    if (!audioCtx || !isAudioEnabled) return;
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1000, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.02);
    gainNode.gain.setValueAtTime(0.02, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.02);
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.03);
}

// ==================== INITIALIZATION & INTRO ====================
// --- CORE LOGIC ---
window.addEventListener('load', () => {
    // Intro & Loading Screen Logic
    const introScreen = document.getElementById('intro-screen');
    const introLogo = document.getElementById('intro-logo');
    const introLine = document.getElementById('intro-line');
    const loadingScreen = document.querySelector('.loading-screen');
    const mainNav = document.querySelector('nav');

    if (loadingScreen) {
        setTimeout(() => loadingScreen.classList.add('hidden'), 300);
    }

    // Eksekusi Intro dengan requestAnimationFrame agar lebih mulus
    requestAnimationFrame(() => {
        setTimeout(() => {
            if (introLogo) introLogo.classList.add('active');
            if (introLine) introLine.style.width = '80px';
        }, 100);

        setTimeout(() => {
            if (introScreen) {
                introScreen.classList.add('intro-finish');
                setTimeout(() => introScreen.remove(), 800); // Hapus dari DOM sepenuhnya
            }
            document.body.classList.remove('no-scroll');
            if (mainNav) mainNav.style.transform = 'translateY(0)';
        }, 1600);
    });
});

// ==================== UI INTERACTION & SCROLL (OPTIMIZED 60FPS) ====================

// 1. Premium Custom Cursor (Menggunakan teknik LERP - Linear Interpolation)
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

if (window.matchMedia("(pointer: fine)").matches && cursor && cursorFollower) {
    // Matikan transition bawaan CSS agar JS mengambil alih sepenuhnya (Mencegah patah-patah)
    cursor.style.transition = 'none';
    cursorFollower.style.transition = 'none';

    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        // Kursor utama langsung mengikuti (Instant)
        cursor.style.transform = `translate3d(${mouseX - 10}px, ${mouseY - 10}px, 0)`;
    });

    // Looping 60 FPS untuk kursor follower
    const renderCursor = () => {
        // Angka 0.15 adalah tingkat kelembutan/delay (semakin kecil makin lambat ngikutinnya)
        followerX += (mouseX - followerX) * 0.15;
        followerY += (mouseY - followerY) * 0.15;

        cursorFollower.style.transform = `translate3d(${followerX - 4}px, ${followerY - 4}px, 0)`;
        requestAnimationFrame(renderCursor);
    };
    requestAnimationFrame(renderCursor);
} else {
    // Hapus dari layar HP
    if (cursor) cursor.remove();
    if (cursorFollower) cursorFollower.remove();
}

// 2. Scroll Handling (Menggunakan requestAnimationFrame agar anti-lag)
const navbar = document.querySelector('nav');
const scrollTopBtn = document.querySelector('.scroll-top') || document.getElementById('scrollTop');
let isScrolling = false;
let lastScrollPos = 0; // Untuk scroll sound effect

window.addEventListener('scroll', () => {
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            const scrollY = window.scrollY;

            // Navbar Glassmorphism
            if (navbar) {
                if (scrollY > 50) navbar.classList.add('scrolled');
                else navbar.classList.remove('scrolled');
            }

            // Scroll to Top Button
            if (scrollTopBtn) {
                if (scrollY > 500) scrollTopBtn.classList.add('visible');
                else scrollTopBtn.classList.remove('visible');
            }

            // Scroll Sound Effect (Throttled)
            if (Math.abs(scrollY - lastScrollPos) > 100) {
                playScrollTick(); // Perbaikan: Panggil fungsi yang benar
                lastScrollPos = scrollY;
            }

            isScrolling = false;
        });
        isScrolling = true;
    }
}, { passive: true }); // passive: true bikin scroll HP jadi sangat licin

if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
        playClickSound(); // Perbaikan: Panggil fungsi yang benar
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// 3. Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        playClickSound(); // Perbaikan: Panggil fungsi yang benar
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            playClickSound(); // Perbaikan: Panggil fungsi yang benar
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
}

// ==================== ANIMATION & OBSERVER ====================

// Easing Function untuk Counter (Mulai cepat, melambat di akhir secara elegan)
const easeOutExpo = (t) => {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};

const animateCounters = (statsContainer) => {
    if (statsContainer.classList.contains('counted')) return;
    statsContainer.classList.add('counted');

    document.querySelectorAll('.stat-number').forEach(counter => {
        const target = +counter.getAttribute('data-count') || parseInt(counter.innerText.replace(/[^0-9]/g, ''));
        if (!target) return;

        const suffix = counter.innerText.includes('+') ? '+' : '';
        const duration = 2000; // 2 detik penuh
        let startTimestamp = null;

        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);

            // Terapkan efek easing
            const easeProgress = easeOutExpo(progress);
            counter.textContent = Math.floor(easeProgress * target) + suffix;

            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                counter.textContent = target + suffix;
            }
        };
        window.requestAnimationFrame(step);
    });
};

// Intersection Observer yang lebih peka
const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -100px 0px" };
const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Logic for staggered animations
            if (entry.target.classList.contains('stagger-children')) {
                const children = entry.target.querySelectorAll('.stagger-child');
                children.forEach((child, index) => {
                    child.style.transitionDelay = `${index * 100}ms`;
                    child.classList.add('active');
                });
            } else {
                // Default behavior for other elements
                entry.target.classList.add('active');
            }

            if (entry.target.classList.contains('stats')) {
                animateCounters(entry.target);
            }

            // Unobserve after animation to save resources
            obs.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements that need animation
document.querySelectorAll('.reveal, .stats, .slide-in-left, .slide-in-right, .scale-in, .experience-box, .stagger-children').forEach(el => {
    if (el) observer.observe(el);
});

// ==================== VISUAL CLICK EFFECT ====================

document.addEventListener('click', function(e) {
    // 1. Membuat elemen div baru secara dinamis
    const ripple = document.createElement('div');
    ripple.classList.add('click-effect');

    // 2. Mengatur posisi elemen tepat di titik kursor/sentuhan
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;

    // 3. Menempelkan elemen ke dalam halaman web
    document.body.appendChild(ripple);

    // 4. Menghapus elemen setelah animasi selesai (500ms) agar tidak membebani memori
    setTimeout(() => {
        ripple.remove();
    }, 500);

    /* PENANDA PERBAIKAN: Menghapus deklarasi const commentsDatabase di sini karena menyebabkan syntax error. 
       Array commentsDatabase sudah ada secara global di luar event listener ini. */
});

// Database Komentar Klien
const commentsDatabase = [
    {
        name: "Budi Santoso",
        role: "CEO TechNova",
        text: "Hasil kerja tim sangat luar biasa! Desainnya futuristik dan sesuai dengan visi masa depan perusahaan kami.",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop"
    },
    {
        name: "Siti Aminah",
        role: "CMO CyberCorp",
        text: "Sangat profesional dan responsif. Website kami kini terlihat modern dan performanya meningkat drastis.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
    },
    {
        name: "Andi Pratama",
        role: "Founder Creative",
        text: "Kampanye media sosial yang dirancang berhasil menarik banyak audiens muda. Konsep cyberpunk-nya sangat kena!",
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop"
    },
    {
        name: "Maya Wijaya",
        role: "Art Director",
        text: "Detail 3D art yang mereka buat sangat memukau dan di luar ekspektasi. Kualitas pengerjaan kelas dunia.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop"
    }
];

// Fungsi untuk mencetak Komentar ke dalam Section
function renderMarqueeComments() {
    const track = document.getElementById('marquee-track');
    if (!track) return;

    let setHtml = '<div class="flex gap-4 pr-4">';
    commentsDatabase.forEach(c => {
        setHtml += `
            <div class="bg-neon-card/60 backdrop-blur-sm border border-white/5 p-5 md:p-6 rounded-xl w-[280px] md:w-[320px] flex-shrink-0 flex flex-col justify-between transition-all duration-500 hover:border-neon-blue/50 hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(0,240,255,0.1)]">
                <p class="text-gray-300 text-sm leading-relaxed mb-6">"${c.text}"</p>
                <div class="flex items-center gap-4 mt-auto">
                    <div class="w-10 h-10 rounded-full bg-gradient-to-tr from-neon-blue to-purple-600 p-[1px]">
                        <img src="${c.avatar}" alt="${c.name}" class="w-full h-full object-cover rounded-full border border-black">
                    </div>
                    <div>
                        <h4 class="text-white font-semibold text-sm">${c.name}</h4>
                        <p class="text-neon-blue text-[10px] uppercase tracking-widest mt-0.5">${c.role}</p>
                    </div>
                </div>
            </div>
        `;
    });
    setHtml += '</div>';

    // Duplikasi agar tercipta efek looping yang tidak putus
    track.innerHTML = setHtml + setHtml;
}

// Eksekusi fungsi ketika halaman siap
window.addEventListener('DOMContentLoaded', () => {
    renderMarqueeComments();
});