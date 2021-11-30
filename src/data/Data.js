import packages from '../img/packages.png'
import box from '../img/box.png'
import meuble from '../img/meuble.png'
import velo from '../img/velo.png'
const data = {
    products:[
        {
            id: 1,
            img : packages,
            name: 'Objet empilable    ',
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
        },

        {
            id: 3,
            img : meuble,
            name: 'Meuble             ',
            title: 'Ajouter un meuble',
            desc: 'Cet objet ne peut pas être empilé sans danger',
            surface: 4,
            high: 0.5,
        },

        {
            id: 4,
            img : velo,
            name: 'Velo/ Trotinette  ',
            title: 'Ajouter un vélo ou une trotinette',
            desc: 'Cet objet ne peut pas être empilé sans danger',
            surface: 2,
            high: 0.5,
        },

    ],
};

export default data;