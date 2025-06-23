new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 7,
    breakpoints: {
        1388: {
            perView: 6,
            gap: 15,
        },
        1024: {
            perView: 3
        },
        768: {
            perView: 2,
        },
        480: {
            perView: 1
        }
    },
    gap: 25
}).mount();