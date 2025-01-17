document.addEventListener('DOMContentLoaded', () => {
    // ScrollTrigger'ı kaydet
    gsap.registerPlugin(ScrollTrigger);

    // Sayfa yüklendiğinde çalıştır
    let disRender = document.querySelectorAll('.gallery-item');
    let icRender = document.querySelectorAll('.ic-render-item');

    // Dış render itemleri için başlangıç durumu
    gsap.set(disRender, { 
        opacity: 0, 
        y: 100,
        scale: 0.95
    });
    
    // Dış render itemleri için animasyon
    gsap.to(disRender, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2, // Her item arasındaki gecikme
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#proje-dis-render",
            start: "top 95%",
            end: "bottom center",
            toggleActions: "play none none reverse",
            // markers: true // Debug için
        }
    });

    // İç render itemleri için başlangıç durumu
    gsap.set(icRender, { 
        opacity: 0, 
        y: 100,
        scale: 0.95
    });
    
    // İç render itemleri için animasyon
    gsap.to(icRender, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2, // Her item arasındaki gecikme
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#proje-ic-render",
            start: "top 95%",
            end: "bottom center",
            toggleActions: "play none none reverse",
            // markers: true // Debug için
        }
    });

// E-Katalog ve sonrası için animasyon
const sections = [
    '.eKatalog',
    '.peyzaj',
    '.lokasyon',
    '.kusursuz-kalite',
    '.kat-planlari',
    '.daha-fazla-detay'
];

sections.forEach(section => {
    gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 0.7,
        scrollTrigger: {
            trigger: section,
            start: "top bottom-=200",
            once: true,
           
        }
    });
});

                
});
