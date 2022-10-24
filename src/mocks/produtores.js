import Green from '../assets/produtores/green.png';
import Grow from '../assets/produtores/grow.png';
import JennyJack from '../assets/produtores/jennyjack.png';
import Potager from '../assets/produtores/potager.png';
import Salad from '../assets/produtores/salad.png';


const gerarNumeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const produtores = {
    titulo:'Produtores',
    lista:[
        {
            nome:'Green',
            image: Green,
            distancia: `${gerarNumeroAleatorio(1, 500)}`,
            estrelas: gerarNumeroAleatorio(1,5),
        },
        {
            nome:'Grow',
            image: Grow,
            distancia: `${gerarNumeroAleatorio(1, 500)}`,
            estrelas: gerarNumeroAleatorio(1,5),
        },
        {
            nome:'Jenny Jack Farm',
            image: JennyJack,
            distancia: `${gerarNumeroAleatorio(1, 500)}`,
            estrelas: gerarNumeroAleatorio(1,5),
        },
        {
            nome:'Potager',
            image: Potager,
            distancia: `${gerarNumeroAleatorio(1, 500)}`,
            estrelas: gerarNumeroAleatorio(1,5),
        },
        {
            nome:'Salad',
            image: Salad,
            distancia: `${gerarNumeroAleatorio(1, 500)}`,
            estrelas: gerarNumeroAleatorio(1,5),
        },

    ]
}

export default produtores;