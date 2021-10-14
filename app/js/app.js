window.addEventListener('load', () => {

    let objCard3D = {
        card: '.card__box', // Анимируемый блок
        card__container: '.card__container', // Блок контейнер
        layerFarWall: '.layerFarWall', // Задняя стеня с тенью
        trees__left: '.trees_left', // Дерево слева
        trees__right: '.trees_right', // Дерево справа
        tiltAngle: 7, // угол отклонения в градусах
        axialDisplacement: 40, // Смещение по оси Z || Каждый новый слой смещается на (i++ + 1) * axialDisplacement px
    }
    new Box3D(objCard3D);

    // Анимация, - "Цвета жизни"
    let objGrayScale1 = {
        glass: '.glass-search1',
        block_parent: '.anim-photo1',
        living_figure: true, // Изменющиеся полигоны
    };
    new Photo(objGrayScale1);

    let objGrayScale2 = {
        glass: '.glass-search2',
        block_parent: '.anim-photo2',
        polygon_rand: true // Рандомная фигура по default = false
    };
    new Photo(objGrayScale2);

    let objGrayScale3 = {
        glass: '.glass-search3',
        block_parent: '.anim-photo3',
    };
    new Photo(objGrayScale3);

    let objGrayScale4 = {
        glass: '.glass-search4',
        block_parent: '.anim-photo4',
    };
    new Photo(objGrayScale4);

    let objGrayScale5 = {
        glass: '.glass-search5',
        block_parent: '.anim-photo5',
    };
    new Photo(objGrayScale5);

    let objGrayScale6 = {
        glass: '.glass-search6',
        block_parent: '.anim-photo6',
    };
    new Photo(objGrayScale6);
})
