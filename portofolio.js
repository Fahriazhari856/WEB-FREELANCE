tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        display: ['Space Grotesk', 'sans-serif'],
                    },
                    colors: {
                        neon: {
                            blue: '#00f0ff',
                            dark: '#0a0a0c',
                            card: '#121216',
                        }
                    }
                }
            }
        }
// =========================================================================
        // DATA DATABASE - PORTOFOLIO
        // =========================================================================
        const portfolioData = {
            social: [
                { img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop", title: "Social Campaign", desc: "Branding", color: "text-gray-400", client: "PT. Maju Bersama", head: "Alex Turner", price: "Mulai Rp 15.000.000", fullDesc: "Kampanye sosial media end-to-end yang dirancang untuk meningkatkan brand awareness generasi Z. Termasuk strategi konten, desain grid futuristik, dan manajemen interaksi komunitas selama 3 bulan penuh.", recom: [ {name: "Video Reels", desc: "Digital Ads", img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=500&auto=format&fit=crop"}, {name: "KOL Admin", desc: "Management", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=500&auto=format&fit=crop"} ] },

                { img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop", title: "Cyber UI Kit", desc: "Web Design", color: "text-gray-400", client: "NeoTech Startup", head: "Sarah Jenkins", price: "Mulai Rp 25.000.000", fullDesc: "Pembuatan UI Kit lengkap dengan tema Cyberpunk untuk platform SaaS manajemen data. Memberikan elemen komponen interaktif yang siap pakai oleh tim developer internal mereka.", recom: [ {name: "Frontend Dev", desc: "Code", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format&fit=crop"}, {name: "User Testing", desc: "Research", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=500&auto=format&fit=crop"} ] },

                { img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop", title: "Cyber UI Kit", desc: "Web Design", color: "text-gray-400", client: "NeoTech Startup", head: "Sarah Jenkins", price: "Mulai Rp 25.000.000", fullDesc: "Pembuatan UI Kit lengkap dengan tema Cyberpunk untuk platform SaaS manajemen data. Memberikan elemen komponen interaktif yang siap pakai oleh tim developer internal mereka.", recom: [ {name: "Frontend Dev", desc: "Code", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format&fit=crop"}, {name: "User Testing", desc: "Research", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=500&auto=format&fit=crop"} ] },

                { img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop", title: "Cyber UI Kit", desc: "Web Design", color: "text-gray-400", client: "NeoTech Startup", head: "Sarah Jenkins", price: "Mulai Rp 25.000.000", fullDesc: "Pembuatan UI Kit lengkap dengan tema Cyberpunk untuk platform SaaS manajemen data. Memberikan elemen komponen interaktif yang siap pakai oleh tim developer internal mereka.", recom: [ {name: "Frontend Dev", desc: "Code", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format&fit=crop"}, {name: "User Testing", desc: "Research", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=500&auto=format&fit=crop"} ] },

                { img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop", title: "Cyber UI Kit", desc: "Web Design", color: "text-gray-400", client: "NeoTech Startup", head: "Sarah Jenkins", price: "Mulai Rp 25.000.000", fullDesc: "Pembuatan UI Kit lengkap dengan tema Cyberpunk untuk platform SaaS manajemen data. Memberikan elemen komponen interaktif yang siap pakai oleh tim developer internal mereka.", recom: [ {name: "Frontend Dev", desc: "Code", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format&fit=crop"}, {name: "User Testing", desc: "Research", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=500&auto=format&fit=crop"} ] },

                { img: "https://images.unsplash.com/photo-1633513364233-ee3720760ab5?q=80&w=2070&auto=format&fit=crop", title: "Neon Aesthetics", desc: "3D Art", color: "text-neon-blue", client: "Global Music Fest", head: "Rizky Firmansyah", price: "Mulai Rp 35.000.000", fullDesc: "Produksi aset visual 3D bergaya neon untuk kebutuhan billboard digital dan panggung festival musik elektronik berskala internasional.", recom: [ {name: "Motion Graph", desc: "Animation", img: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=500&auto=format&fit=crop"}, {name: "AR Filters", desc: "Interactive", img: "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=500&auto=format&fit=crop"} ] },

                { img: "https://images.unsplash.com/photo-1610018556010-6a11691bc905?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Brand Identity", desc: "Logo Design", color: "text-gray-400", client: "CyberCafe Jakarta", head: "Dian Sastro", price: "Mulai Rp 10.000.000", fullDesc: "Re-branding identitas kafe bertema esports, mencakup desain logo, buku panduan merek, serta implementasi pada seragam dan kemasan produk.", recom: [ {name: "Packaging", desc: "Product", img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=500&auto=format&fit=crop"}, {name: "Interior Assets", desc: "3D Model", img: "https://images.unsplash.com/photo-1633513364233-ee3720760ab5?q=80&w=500&auto=format&fit=crop"} ] }
            ],
            graphic: [
                { img: "https://images.unsplash.com/photo-1626785779602-747377f093a1?q=80&w=2071&auto=format&fit=crop", title: "Abstract Poster", desc: "Print Design", color: "text-gray-400", client: "Art Gallery ID", head: "Maya", price: "Rp 5.000.000", fullDesc: "Desain poster eksklusif untuk pameran seni kontemporer.", recom: [{name: "Flyer Design", desc: "Print", img: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=500&auto=format&fit=crop"}] },

                { img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop", title: "Brand Guidelines", desc: "Corporate", color: "text-gray-400", client: "CorpX", head: "Budi", price: "Rp 20.000.000", fullDesc: "Penyusunan standar operasi visual perusahaan.", recom: [{name: "Stationery", desc: "Assets", img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=500&auto=format&fit=crop"}] },

                { img: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=2000&auto=format&fit=crop", title: "Color Theory", desc: "Illustration", color: "text-neon-blue", client: "Studio A", head: "Chika", price: "Rp 15.000.000", fullDesc: "Eksperimen pewarnaan digital untuk kebutuhan buku ilustrasi.", recom: [{name: "Digital Art", desc: "Drawing", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=500&auto=format&fit=crop"}] }
            ],
            web: [
                { img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop", title: "E-Commerce", desc: "Fullstack", color: "text-gray-400", client: "Toko Online ID", head: "Fajar", price: "Rp 50.000.000", fullDesc: "Pengembangan platform e-commerce kustom dengan sistem pembayaran terintegrasi.", recom: [{name: "SEO Expert", desc: "Marketing", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=500&auto=format&fit=crop"}] },

                { img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", title: "Data Dashboard", desc: "Frontend", color: "text-gray-400", client: "Data Analytics ID", head: "Gita", price: "Rp 30.000.000", fullDesc: "Pembuatan antarmuka visualisasi data yang responsif dan interaktif.", recom: [{name: "Backend API", desc: "Server", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=500&auto=format&fit=crop"}] },

                { img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop", title: "Crypto Exchange", desc: "Web3", color: "text-neon-blue", client: "CryptoID", head: "Hendra", price: "Rp 80.000.000", fullDesc: "Platform pertukaran aset kripto desentralisasi dengan smart contract teraudit.", recom: [{name: "Smart Contract", desc: "Audit", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=500&auto=format&fit=crop"}] }
            ]
        };
        let currentCategory = 'social';

        // =========================================================================
        // DATA DATABASE - KOMENTAR (TESTIMONI)
        // Di masa depan, Anda bisa menghubungkan ini dengan API/Backend Database Anda.
        // Contoh: fetch('/api/comments').then(res => renderMarquee(res.data));
        // =========================================================================
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

        // --- SISTEM AUDIO ---
        let audioCtx;
        let isAudioEnabled = false;
        const bgMusic = document.getElementById('bg-music');

        function initAudioAuto() {
            if (isAudioEnabled) return;
            if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            if (audioCtx.state === 'suspended') audioCtx.resume();
            
            isAudioEnabled = true;
            bgMusic.volume = 0.2;
            
            const playPromise = bgMusic.play();
            if (playPromise !== undefined) {
                playPromise.catch(e => console.log("Menunggu interaksi pengguna untuk memulai audio..."));
            }

            document.removeEventListener('click', initAudioAuto);
            document.removeEventListener('touchstart', initAudioAuto);
            document.removeEventListener('keydown', initAudioAuto);
            document.removeEventListener('scroll', initAudioAuto);
        }

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

        // --- TYPEWRITER ---
        const words = ["Portofolio", "Digital", "Kreatif", "Inovatif"];
        let wordIdx = 0, charIdx = 0, isDeleting = false;

        function typeWriter() {
            const el = document.getElementById("typewriter-text");
            if(!el) return;
            const currentWord = words[wordIdx];
            if (isDeleting) {
                el.textContent = currentWord.substring(0, charIdx - 1);
                charIdx--;
            } else {
                el.textContent = currentWord.substring(0, charIdx + 1);
                charIdx++;
            }
            let typeSpeed = isDeleting ? 40 : 100;
            if (!isDeleting && charIdx === currentWord.length) {
                typeSpeed = 2000; isDeleting = true;
            } else if (isDeleting && charIdx === 0) {
                isDeleting = false; wordIdx = (wordIdx + 1) % words.length; typeSpeed = 400;
            }
            setTimeout(typeWriter, typeSpeed);
        }

        // --- RENDER LAYAR IKLAN (PORTFOLIO MARQUEE) ---
        function renderPortfolioMarquee() {
            const track = document.getElementById('portfolio-marquee-track');
            if (!track) return;

            let allProjects = [];
            // Menggabungkan semua proyek dan menambahkan nama kategori aslinya
            Object.keys(portfolioData).forEach(cat => {
                portfolioData[cat].forEach(proj => {
                    allProjects.push({...proj, catName: cat});
                });
            });

            // Mengacak urutan portofolio agar bervariasi
            allProjects = allProjects.sort(() => 0.5 - Math.random());

            let setHtml = '<div class="flex gap-4 pr-4">';
            allProjects.forEach(p => {
                const categoryLabel = p.catName === 'social' ? 'Social Media' : p.catName === 'graphic' ? 'Graphic Design' : 'Web Dev';
                setHtml += `
                    <div class="bg-neon-card/40 backdrop-blur-sm border border-white/5 p-2 md:p-3 rounded-xl w-[220px] md:w-[280px] flex-shrink-0 flex items-center gap-3 transition-colors duration-500 hover:border-neon-blue/50">
                        <img src="${p.img}" alt="${p.title}" class="w-12 h-12 md:w-14 md:h-14 object-cover rounded-lg border border-white/10">
                        <div class="overflow-hidden flex-1">
                            <h4 class="text-white font-semibold text-xs md:text-sm truncate">${p.title}</h4>
                            <p class="text-neon-blue text-[9px] uppercase tracking-widest truncate mt-0.5">${categoryLabel}</p>
                        </div>
                    </div>
                `;
            });
            setHtml += '</div>';

            // Duplikat data untuk perputaran tanpa akhir (seamless looping)
            track.innerHTML = setHtml + setHtml;
        }

        // --- RENDER KOMENTAR (MARQUEE) ---
        function renderMarqueeComments() {
            const track = document.getElementById('marquee-track');
            if (!track) return;

            let setHtml = '<div class="flex gap-4 pr-4">';
            commentsDatabase.forEach(c => {
                setHtml += `
                    <div class="bg-neon-card/60 backdrop-blur-sm border border-white/5 p-4 rounded-xl w-[260px] md:w-[300px] flex-shrink-0 flex flex-col justify-between transition-colors duration-500 hover:border-neon-blue/50">
                        <p class="text-gray-300 text-xs leading-relaxed mb-4">"${c.text}"</p>
                        <div class="flex items-center gap-3">
                            <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-neon-blue to-purple-600 p-[1px]">
                                <img src="${c.avatar}" alt="Client" class="w-full h-full object-cover rounded-full border border-black">
                            </div>
                            <div>
                                <h4 class="text-white font-semibold text-xs">${c.name}</h4>
                                <p class="text-neon-blue text-[9px] uppercase tracking-widest">${c.role}</p>
                            </div>
                        </div>
                    </div>
                `;
            });
            setHtml += '</div>';

            // Duplicate HTML content untuk efek looping yang seamless (Set 1 + Set 2 identik)
            track.innerHTML = setHtml + setHtml;
        }

        // --- FUNGSI MODAL ---
        const modal = document.getElementById('project-modal');
        const modalBody = document.getElementById('modal-body');
        const viewAllModal = document.getElementById('view-all-modal');
        const viewAllGrid = document.getElementById('view-all-grid');

        function openViewAllModal() {
            playClickSound();
            viewAllGrid.innerHTML = '';
            
            Object.keys(portfolioData).forEach(cat => {
                portfolioData[cat].forEach((project, idx) => {
                    const html = `
                        <div class="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-neon-card border border-white/5 group cursor-pointer" onclick="playClickSound(); openModal(${idx}, '${cat}')">
                            <img src="${project.img}" alt="${project.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1500ms] ease-out opacity-80 group-hover:opacity-100">
                            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none transition-opacity duration-700 group-hover:opacity-70"></div>
                            <div class="absolute bottom-3 left-3 right-3 pointer-events-none transition-transform duration-700 group-hover:-translate-y-1">
                                <span class="text-[9px] text-neon-blue uppercase tracking-widest font-semibold">${project.desc}</span>
                                <h3 class="font-display font-semibold text-sm text-white mt-1">${project.title}</h3>
                            </div>
                        </div>
                    `;
                    viewAllGrid.insertAdjacentHTML('beforeend', html);
                });
            });

            viewAllModal.classList.remove('hidden');
            viewAllModal.classList.add('flex');
            document.body.style.overflow = 'hidden';
            setTimeout(() => viewAllModal.classList.remove('opacity-0'), 10);
        }

        function closeViewAllModal() {
            playClickSound();
            viewAllModal.classList.add('opacity-0');
            setTimeout(() => {
                viewAllModal.classList.add('hidden');
                viewAllModal.classList.remove('flex');
                if(modal.classList.contains('hidden')) document.body.style.overflow = 'auto';
            }, 500);
        }

        function openModal(index, cat = currentCategory) {
            const project = portfolioData[cat][index];
            let recomHtml = '';
            
            if(project.recom) {
                project.recom.forEach(svc => {
                    recomHtml += `
                        <div class="relative flex-shrink-0 w-28 md:w-32 aspect-[4/5] rounded-lg overflow-hidden bg-black border border-white/10 group cursor-pointer snap-start">
                            <img src="${svc.img}" alt="${svc.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1500ms] ease-out opacity-50 group-hover:opacity-100">
                            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-700 group-hover:opacity-80"></div>
                            <div class="absolute bottom-2 left-2 right-2 pointer-events-none transition-transform duration-700 group-hover:-translate-y-1">
                                <h4 class="text-white font-semibold text-[10px] md:text-xs leading-tight">${svc.name}</h4>
                            </div>
                        </div>
                    `;
                });
            }

            modalBody.innerHTML = `
                <div class="w-full md:w-2/5 h-48 md:h-full relative shrink-0">
                    <img src="${project.img}" alt="${project.title}" class="w-full h-full object-cover">
                    <div class="absolute inset-0 bg-gradient-to-t from-neon-card to-transparent md:bg-gradient-to-r md:from-transparent md:to-neon-card"></div>
                </div>

                <div class="w-full md:w-3/5 flex-1 overflow-y-auto custom-scrollbar p-5 md:p-8 relative flex flex-col">
                    <div class="mb-6">
                        <span class="px-2 py-1 rounded-sm bg-neon-blue/10 text-neon-blue text-[10px] font-semibold uppercase tracking-widest border border-neon-blue/20 mb-3 inline-block">${project.desc}</span>
                        <h2 class="text-2xl md:text-3xl font-display font-bold text-white mb-2">${project.title}</h2>
                        <p class="text-gray-400 leading-relaxed text-xs md:text-sm">${project.fullDesc}</p>
                    </div>

                    <div class="grid grid-cols-2 gap-4 bg-[#0a0a0c] p-4 rounded-xl border border-white/5 mb-6 shrink-0">
                        <div>
                            <p class="text-gray-500 text-[9px] uppercase tracking-widest mb-1">Klien</p>
                            <p class="text-white font-medium text-xs md:text-sm">${project.client}</p>
                        </div>
                        <div>
                            <p class="text-gray-500 text-[9px] uppercase tracking-widest mb-1">Harga</p>
                            <p class="text-neon-blue font-semibold text-xs md:text-sm">${project.price}</p>
                        </div>
                    </div>

                    <div class="mb-6 shrink-0">
                        <h3 class="text-xs font-display font-semibold text-white mb-3 uppercase tracking-widest text-gray-400">Rekomendasi Layanan</h3>
                        <div class="flex w-full overflow-x-auto hide-scrollbar gap-3 pb-2 snap-x">
                            ${recomHtml}
                        </div>
                    </div>
                </div>
            `;

            modal.classList.remove('hidden');
            modal.classList.add('flex');
            document.body.style.overflow = 'hidden';
            setTimeout(() => {
                modal.classList.remove('opacity-0');
                document.getElementById('modal-content-box').classList.replace('scale-95', 'scale-100');
            }, 10);
        }

        function closeModal() {
            playClickSound();
            modal.classList.add('opacity-0');
            document.getElementById('modal-content-box').classList.replace('scale-100', 'scale-95');
            setTimeout(() => {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
                if(viewAllModal.classList.contains('hidden')) document.body.style.overflow = 'auto';
            }, 500);
        }

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

    // Audio Init
    document.addEventListener('click', initAudioAuto);
    document.addEventListener('touchstart', initAudioAuto);
    document.addEventListener('keydown', initAudioAuto);
    document.addEventListener('scroll', initAudioAuto, { once: true });

    // Iklan layer
    renderPortfolioMarquee(); // Menjalankan layar iklan marquee
    
    // Typewriter
    setTimeout(typeWriter, 1000);

    // Comments
    renderMarqueeComments();

    const container = document.getElementById('gallery-container');
    const categoryButtons = document.querySelectorAll('.cat-btn');

    // --- DRAG TO SCROLL ---
    window.isDragging = false;
    let isDown = false;
    let startX;
    let scrollLeft;
    let lastScrollPos = 0;

    container.addEventListener('mousedown', (e) => {
        isDown = true;
        container.style.scrollBehavior = 'auto';
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });

    container.addEventListener('mouseleave', () => {
        isDown = false;
        container.style.scrollBehavior = 'smooth';
    });

    container.addEventListener('mouseup', () => {
        isDown = false;
        container.style.scrollBehavior = 'smooth';
        setTimeout(() => window.isDragging = false, 10);
    });

    container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 2;
        if (Math.abs(walk) > 5) window.isDragging = true;
        container.scrollLeft = scrollLeft - walk;
    });

    // Efek Suara Tick berdasarkan jarak Scroll
    container.addEventListener('scroll', () => {
        if (Math.abs(container.scrollLeft - lastScrollPos) > 180) {
            playScrollTick();
            lastScrollPos = container.scrollLeft;
        }
    });

    const renderGallery = (category) => {
        currentCategory = category;
        container.style.opacity = 0;
        
        setTimeout(() => {
            const data = portfolioData[category];
            container.innerHTML = '';

            data.forEach((project, index) => {
                const html = `
                    <div class="gallery-item relative flex-shrink-0 w-56 md:w-64 lg:w-72 aspect-[3/4] rounded-2xl overflow-hidden bg-neon-card border border-white/5 hover:border-neon-blue/50 hover:shadow-[0_10px_30px_-10px_rgba(0,240,255,0.3)] hover:-translate-y-2 group" onclick="if(!window.isDragging) { playClickSound(); openModal(${index}, '${category}'); }" style="opacity: 0; animation: 0.6s ease-out ${index * 0.1}s 1 normal forwards running fadeInSlideUpChild;">
                        <img src="${project.img}" alt="${project.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1500ms] ease-out">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent pointer-events-none transition-opacity duration-700 opacity-90 group-hover:opacity-70"></div>
                        <div class="absolute bottom-4 left-4 right-4 pointer-events-none transition-transform duration-700 group-hover:-translate-y-1">
                            <h3 class="font-display font-bold text-lg md:text-xl text-white leading-tight">${project.title}</h3>
                            <p class="text-[10px] md:text-xs ${project.color} mt-1">${project.desc}</p>
                        </div>
                    </div>
                `;
                container.insertAdjacentHTML('beforeend', html);
            });

            // Kartu Lihat Semua
            const viewAllHtml = `
                <div class="gallery-item relative flex-shrink-0 w-56 md:w-64 lg:w-72 aspect-[3/4] rounded-2xl overflow-hidden bg-[#0a0a0c] border border-white/10 flex flex-col items-center justify-center group cursor-pointer hover:border-neon-blue/50 hover:shadow-[0_10px_30px_-10px_rgba(0,240,255,0.3)] hover:-translate-y-2" onclick="if(!window.isDragging) { openViewAllModal(); }" style="opacity: 0; animation: 0.6s ease-out ${data.length * 0.1}s 1 normal forwards running fadeInSlideUpChild;">
                    <div class="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[1000ms] ease-out"></div>
                    <div class="w-12 h-12 rounded-full border border-neon-blue/30 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-700 ease-out">
                        <i class="ph ph-squares-four text-xl text-neon-blue"></i>
                    </div>
                    <h3 class="font-display font-semibold text-lg text-white">Lihat Semua</h3>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', viewAllHtml);
            
            setTimeout(() => {
                container.scrollTo({ left: 0, behavior: 'instant' });
                container.style.opacity = 1;
                lastScrollPos = 0; // Reset counter posisi audio
            }, 50);

        }, 500);
    };

    categoryButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            playClickSound();
            categoryButtons.forEach(b => {
                b.className = "cat-btn px-5 py-2 rounded-full text-gray-400 hover:text-white transition-all duration-300 uppercase tracking-widest text-[10px] md:text-xs";
            });
            const clickedBtn = e.currentTarget;
            clickedBtn.className = "cat-btn active px-5 py-2 rounded-full bg-neon-blue text-black shadow-[0_0_10px_rgba(0,240,255,0.4)] transition-all duration-300 uppercase tracking-widest text-[10px] md:text-xs";
            renderGallery(clickedBtn.dataset.category);
        });
    });

    renderGallery('social');

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }

    // Keydown listener for modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (!modal.classList.contains('hidden')) closeModal();
            else if (!viewAllModal.classList.contains('hidden')) closeViewAllModal();
        }
    });
});
