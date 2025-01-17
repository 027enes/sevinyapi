document.addEventListener('DOMContentLoaded', () => {
    // ScrollTrigger'ı kaydet
    gsap.registerPlugin(ScrollTrigger);

    // Sayfa yüklendiğinde çalıştır
    let disRender = document.querySelectorAll('.gallery-item');
    let icRender = document.querySelectorAll('.ic-render-item');


    
    // Başlangıç durumunu ayarla
    gsap.set(disRender, { 
        opacity: 0, 
        y: 30,
        scale: 0.95
    });
    
    // Tüm itemler için tek bir animasyon
    gsap.to(disRender, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.15, // Her item arasındaki gecikme
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#proje-dis-render",
            start: "top center",
            end: "bottom center",
            toggleActions: "play none none reverse",
            // markers: true // Debug için
        }
    });


        // Başlangıç durumunu ayarla
        gsap.set(icRender, { 
            opacity: 0, 
            y: 30,
            scale: 0.95
        });
        
        // Tüm itemler için tek bir animasyon
        gsap.to(icRender, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.15, // Her item arasındaki gecikme
            ease: "power2.out",
            scrollTrigger: {
                trigger: "#proje-ic-render",
                start: "top center",
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
            start: "top bottom-=500",
            once: true,
           
        }
    });
});

                
});
