document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    let disRender = document.querySelectorAll('.gallery-item');
    let icRender = document.querySelectorAll('.ic-render-item');

    gsap.set(disRender, { 
        opacity: 0, 
        y: 100,
        scale: 0.95
    });
    
    gsap.to(disRender, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#proje-dis-render",
            start: "top 95%",
            end: "bottom center",
            toggleActions: "play none none reverse",
        }
    });

    gsap.set(icRender, { 
        opacity: 0, 
        y: 100,
        scale: 0.95
    });
    
    gsap.to(icRender, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2, 
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#proje-ic-render",
            start: "top 95%",
            end: "bottom center",
            toggleActions: "play none none reverse",
        }
    });

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
