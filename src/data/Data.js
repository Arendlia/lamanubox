import packages from '../img/packages.png'
import box from '../img/box.png'
const data = {
    products:[
        {
            id: 1,
            img : packages,
            name: 'Objet empilable',
            title: 'Ajouter un objet empilable',
            desc: 'Cet objet peut être empilé sans danger',
            surface: 1,
            high: 1,
        },

        {
            id: 2,
            img : box,
            name: 'Objet non empilable',
            title: 'Ajouter un objet non empilable',
            desc: 'Cet objet ne peut pas être empilé sans danger',
            surface: 1,
            high: 1,
        }
    ],
};

export default data;