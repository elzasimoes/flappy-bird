function Passaro(alturaJogo) {
    let voando = false;
    this.elemento = novoElemento('img', 'passaro');
    this.elemento.src = 'imgs/passaro.png';
    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0]);
    this.setY = y => this.elemento.style.bottom = `${y}px`;
    window.onkeydown = e => voando = true;
    window.onkeyup = e => voando = false;
    this.animar = () => {
        const novoY = this.getY() + (voando ? 8 : -5);
        const alturaMaxima = alturaJogo - this.elemento.clientHeight;
        if (novoY <= 0) {
            this.setY(0);
        }
        else if (novoY >= alturaMaxima) {
            this.setY(alturaMaxima);
        }
        else {
            this.setY(novoY);
        }
    };
    this.setY(alturaJogo / 2);
}
