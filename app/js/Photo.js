class GrayScale { /* Анимация, - "Цветной зум" */
    constructor(obj) {
        this.glass = document.querySelector(obj.glass);
        this.polygon_rand = obj.polygon_rand;
        this.living_figure = obj.living_figure;
        this.block_parent = document.querySelector(obj.block_parent);

        this.block_parent.addEventListener('mousemove', this.relativeCoords.bind(this));
        this.block_parent.addEventListener('mouseleave', () => (this.glass.classList.contains('opacityShow')) ? this.glass.classList.remove('opacityShow') : '');
        this.block_parent.addEventListener('mouseout', () => (this.glass.classList.contains('opacityShow')) ? this.glass.classList.remove('opacityShow') : '');

        this.arr_polygon = [
            '0% 15%, 22% 23%, 15% 0%, 85% 0%, 77% 23%, 100% 15%, 100% 85%, 75% 76%, 85% 100%, 15% 100%, 23% 77%, 0% 85%',
            '98% 19%, 86% 33%, 98% 61%, 80% 69%, 96% 82%, 80% 99%, 38% 88%, 20% 94%, 0 86%, 15% 74%, 0 66%, 9% 46%, 0 30%, 18% 13%, 10% 4%, 30% 2%, 50% 8%, 62% 1%, 84% 4%)',
            '50% 0%, 69% 23%, 98% 35%, 75% 61%, 79% 91%, 48% 78%, 21% 91%, 20% 60%, 2% 35%, 28% 25%',
            '24% 14%, 74% 14%, 100% 50%, 74% 88%, 26% 88%, 0% 50%',
            '50% 0%, 100% 50%, 50% 100%, 0% 50%',
            '20% 0%, 0% 20%, 15% 49%, 0% 80%, 20% 100%, 48% 91%, 80% 100%, 100% 80%, 83% 50%, 100% 20%, 80% 0%, 49% 13%',
            '50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%'
        ];

        if(this.polygon_rand) {
            this.glass.style.clipPath = `polygon(${this.arr_polygon[Math.floor(Math.random() * (this.arr_polygon.length + 1))]})`;
        }

        if (this.living_figure) {
            setInterval(() => {
                let a = Math.floor(Math.random() * 10)
                let b = Math.floor(Math.random() * 10)
                let c = Math.floor(Math.random() * 10)
                let x = Math.floor(Math.random() * 10)
                let y = Math.floor(Math.random() * 10)
                let z = Math.floor(Math.random() * 10)
                this.glass.style.clipPath = `polygon(9${x}% 1${z}%, 8${y}% 3${x}%, 9${z}% 6${y}%, 8${z}% 6${x}%, 9${a}% 8${b}%, 8${x}% 9${z}%, 3${y}% 8${x}%, 2${b}% 9${z}%, 0 8${y}%, 1${a}% 7${z}%, ${b}% 6${x}%, 9% 4${y}%, ${c}% 3${a}%, 1${x}% 1${z}%, 1${y}% ${c}%, 3${x}% ${a}%, 5${z}% ${y}%, 6${z}% ${x}%, 8${z}% ${x}%)`;
            }, 500)
        }
    }

    relativeCoords(e) {
        let bounds = e.target.getBoundingClientRect();
        let x = (e.clientX - 100) - bounds.left;
        let y = (e.clientY - 100) - bounds.top;
        (!this.glass.classList.contains('opacityShow')) ? this.glass.classList.add('opacityShow') : '';
        this.glass.style.left = x + 'px';
        this.glass.style.top = y + 'px';
        this.glass.style.backgroundPositionX = -x + 'px';
        this.glass.style.backgroundPositionY = -y + 'px';
    }
}