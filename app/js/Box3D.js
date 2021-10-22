class Box3D { /* Анимация, - "Ожившее фото" */
    constructor(obj) {
        this.varDebounce = 0; // ТаймАут срабатывания всей анимации
        this.сountdownAnim = 0; // ТаймАут срабатывания всей анимации
        this.card = document.querySelector(obj.card); // Анимируемый блок
        this.trees__left = document.querySelector(obj.trees__left); // Дерево слева
        this.trees__right = document.querySelector(obj.trees__right); // Дерево справа
        this.layerFarWall = document.querySelector(obj.layerFarWall); // Задняя стена с тенью
        this.card__container = document.querySelector(obj.card__container); // Блок контейнер
        this.tiltAngle = obj.tiltAngle || 10; // угол отклонения в градусах
        this.axialDisplacement = obj.axialDisplacement || 50; // Смещение по оси Z

        this.card__container.addEventListener('mousemove', this.mainAnimate.bind(this));
    }

    clearTagStyle(el) {
        el.removeAttribute('style')
    }

    mainAnimate(e) {
        clearTimeout(this.varDebounce);
        clearTimeout(this.сountdownAnim);
        this.varDebounce = setTimeout(() => {
            let rect = e.target.getBoundingClientRect();
            let offset_x = e.offsetX || e.layerX
            let offset_y = e.offsetY || e.layerY
            let x = 100 * offset_x / rect.width;
            let y = 100 * offset_y / rect.height;

            if (x < 50 && y < 50) { // Левый верхний угол
                this.elementDirectionalShift(this.tiltAngle, -this.tiltAngle, -8, 10)
                this.layerFarWall.style.boxShadow = `8px 5px 20px #000, 12px 10px 40px rgba(0,0,0, .35), 13px 15px 50px rgba(0, 0, 0, .93)`;
                this.trees__left.style.transform = `translate(350px, -190px) scale(1.4)`
                this.trees__right.style.transform = `translate(-390px,-190px) scale(1.4)`
            } else if (x > 50 && y < 50) { // Правый верхний угол
                this.elementDirectionalShift(this.tiltAngle, this.tiltAngle, -8, -10)
                this.layerFarWall.style.boxShadow = `-8px 5px 20px #000, -12px 10px 40px rgba(0, 0, 0, .35), -13px 15px 50px rgba(0, 0, 0, .93)`;
                this.trees__left.style.transform = `translate(370px, -190px) scale(1.4)`
                this.trees__right.style.transform = `translate(-370px, -190px) scale(1.4)`
            } else if (x < 50 && y > 50) { // Левый нижний угол
                this.elementDirectionalShift(-this.tiltAngle, -this.tiltAngle, 8, -10)
                this.layerFarWall.style.boxShadow = `8px -5px 20px #000, 12px -10px 40px rgba(0, 0, 0, .35), 13px -15px 50px rgba(0, 0, 0, .93)`;
                this.trees__left.style.transform = `translate(350px,-170px) scale(1.4)`
                this.trees__right.style.transform = `translate(-390px,-180px) scale(1.4)`
            } else if (x > 50 && y > 50) { // Правый нижний угол
                this.elementDirectionalShift(-this.tiltAngle, this.tiltAngle, 8, 10)
                this.layerFarWall.style.boxShadow = `-8px -5px 20px #000, -12px -10px 40px rgba(0, 0, 0, .35), -13px -15px 50px rgba(0, 0, 0, .93)`;
                this.trees__left.style.transform = `translate(370px,-170px) scale(1.4)`
                this.trees__right.style.transform = `translate(-380px, -180px) scale(1.4)`
            }

        }, 10);

        this.сountdownAnim = setTimeout(() => {
            this.clearTagStyle(this.card)
            this.clearTagStyle(this.trees__left)
            this.clearTagStyle(this.trees__right)
            this.clearTagStyle(this.layerFarWall)
        },3000)
    }

    elementDirectionalShift(x, y) {
        this.card.style.transform = `perspective(1200px) rotateX(${x}deg) rotateY(${y}deg) translateZ(200px)`;
    }
}