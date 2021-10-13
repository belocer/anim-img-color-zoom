window.addEventListener('load', () => {

    // Анимация, - "Цветной зум"
    let objGrayScale1 = {
        glass: '.glass-search1',
        block_parent: '.anim-photo1',
        living_figure: true, // Изменющиеся полигоны
    };
    new GrayScale(objGrayScale1);

    let objGrayScale2 = {
        glass: '.glass-search2',
        block_parent: '.anim-photo2',
        polygon_rand: true // Рандомная фигура по default = false
    };
    new GrayScale(objGrayScale2);

    let objGrayScale3 = {
        glass: '.glass-search3',
        block_parent: '.anim-photo3',
    };
    new GrayScale(objGrayScale3);

    let objGrayScale4 = {
        glass: '.glass-search4',
        block_parent: '.anim-photo4',
    };
    new GrayScale(objGrayScale4);

    let objGrayScale5 = {
        glass: '.glass-search5',
        block_parent: '.anim-photo5',
    };
    new GrayScale(objGrayScale5);

    let objGrayScale6 = {
        glass: '.glass-search6',
        block_parent: '.anim-photo6',
    };
    new GrayScale(objGrayScale6);
})
