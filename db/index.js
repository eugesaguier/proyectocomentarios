let lista={
    usuarios:[{
        id: 0,
        email:"cristiano@gmail.com",
        usuario:"Cristiano",
        contraseña:"bichosiu",
        fecha_de_nacimiento:"12/15/1999",
        dni:42255481,
        foto_de_perfil:"cristiano.jpg",
        },
    {
        id: 1,
        email:"nanoalonso@gmail.com",
        usuario:"Fernando",
        contraseña:"magic33",
        fecha_de_nacimiento:"07/29/1981",
        dni:33333333,    
        foto_de_perfil:"nano.jpg",
    },
    {
        id: 2,
        email:"Javier@gmail.com",
        usuario:"Javier",
        contraseña:"lalibertadavanza",
        fecha_de_nacimiento:"07/29/1981",
        dni:33333333,    
        foto_de_perfil:"javier.jpg",
        }
    ],
    productos:[{
        id: 0,
        nombre: 'Rolex Submariner',
        descripcion: 'Un clásico reloj de buceo con un diseño icónico.',
        imagen: 'rolex-submariner.jpg',
        comentarios:[{
            nombre: 'Fernando',
            comentario: "Mi favorito",
            imagen_perfil:"../images/users/nano.jpg",
            id_user: 1
        },{
            nombre: 'Cristiano',
            comentario: "Muy bello, SIUUUUUUUUU",
            imagen_perfil:"../images/users/cristiano.jpg",
            id_user: 0
        },{
            nombre: 'Javier',
            comentario: "Precio?",
            imagen_perfil:"../images/users/javier.jpg",
            id_user: 2
        }]
        },
    {
        id: 1,
        nombre: "Casio G-Shock",
        descripcion: "Un reloj resistente a los golpes y con muchas funciones, ideal para actividades al aire libre.",
        imagen: "casio-g-shock.jpg",
        comentarios:[{
            nombre: 'Fernando',
            comentario: "Mi favorito",
            imagen_perfil:"../images/users/nano.jpg",
            id_user: 1
        },{
            nombre: 'Cristiano',
            comentario: "Muy bello, SIUUUUUUUUU",
            imagen_perfil:"../images/users/cristiano.jpg",
            id_user: 0
        },{
            nombre: 'Javier',
            comentario: "Precio?",
            imagen_perfil:"../images/users/javier.jpg",
            id_user: 2
        }]
        },
    {
        id: 2,
        nombre: 'Omega Speedmaster',
        descripcion: 'Conocido como el "Moonwatch", este reloj ha sido usado en misiones espaciales.',
        imagen: 'omega-speedmaster.jpg',
        comentarios:[{
            nombre: 'Fernando',
            comentario: "Mi favorito",
            imagen_perfil:"../images/users/nano.jpg",
            id_user: 1
        },{
            nombre: 'Cristiano',
            comentario: "Muy bello, SIUUUUUUUUU",
            imagen_perfil:"../images/users/cristiano.jpg",
            id_user: 0
        },{
            nombre: 'Javier',
            comentario: "Precio?",
            imagen_perfil:"../images/users/javier.jpg",
            id_user: 2
        }]
        },
    {
        id: 3,
        nombre: 'Apple Watch Series 7',
        descripcion: 'Un reloj inteligente que ofrece seguimiento de la salud y fitness, así como notificaciones inteligentes.',
        imagen: 'apple-watch.jpg',
        comentarios:[{
            nombre: 'Fernando',
            comentario: "Mi favorito",
            imagen_perfil:"../images/users/nano.jpg",
            id_user: 1
        },{
            nombre: 'Cristiano',
            comentario: "Muy bello, SIUUUUUUUUU",
            imagen_perfil:"../images/users/cristiano.jpg",
            id_user: 0
        },{
            nombre: 'Javier',
            comentario: "Precio?",
            imagen_perfil:"../images/users/javier.jpg",
            id_user: 2
        }]
    },
    {
        id: 4,
        nombre: 'Seiko SKX007',
        descripcion: 'Un reloj de buceo asequible y muy apreciado por los entusiastas de los relojes.',
        imagen: 'seiko-skx007.jpg',
        comentarios:[{
            nombre: 'Fernando',
            comentario: "Mi favorito",
            imagen_perfil:"../images/users/nano.jpg",
            id_user: 1
        },{
            nombre: 'Cristiano',
            comentario: "Muy bello, SIUUUUUUUUU",
            imagen_perfil:"../images/users/cristiano.jpg",
            id_user: 0
        },{
            nombre: 'Javier',
            comentario: "Precio?",
            imagen_perfil:"../images/users/javier.jpg",
            id_user: 2
        }]
    },
    {
        id: 5,
        nombre: 'Tag Heuer Carrera',
        descripcion: 'Un elegante reloj deportivo con un diseño sofisticado.',
        imagen: 'tag-heuer-carrera.jpg',
        comentarios:[{
            nombre: 'Fernando',
            comentario: "Mi favorito",
            imagen_perfil:"../images/users/nano.jpg",
            id_user: 1
        },{
            nombre: 'Cristiano',
            comentario: "Muy bello, SIUUUUUUUUU",
            imagen_perfil:"../images/users/cristiano.jpg",
            id_user: 0
        },{
            nombre: 'Javier',
            comentario: "Precio?",
            imagen_perfil:"../images/users/javier.jpg",
            id_user: 2
        }]},
    {
        id: 6,
        nombre: 'Timex Weekender',
        descripcion: 'Un reloj casual y asequible con un diseño clásico.',
        imagen: 'timex-weekender.jpg',
        comentarios:[{
            nombre: 'Fernando',
            comentario: "Mi favorito",
            imagen_perfil:"../images/users/nano.jpg",
            id_user: 1
        },{
            nombre: 'Cristiano',
            comentario: "Muy bello, SIUUUUUUUUU",
            imagen_perfil:"../images/users/cristiano.jpg",
            id_user: 0
        },{
            nombre: 'Javier',
            comentario: "Precio?",
            imagen_perfil:"../images/users/javier.jpg",
            id_user: 2
        }]},
    {
        id: 7,
        nombre: 'Citizen Eco-Drive',
        descripcion: 'Un reloj que se carga con la luz solar, eliminando la necesidad de cambiar la batería.',
        imagen: 'citizen-eco-drive.jpg',
        comentarios:[{
            nombre: 'Fernando',
            comentario: "Mi favorito",
            imagen_perfil:"../images/users/nano.jpg",
            id_user: 1
        },{
            nombre: 'Cristiano',
            comentario: "Muy bello, SIUUUUUUUUU",
            imagen_perfil:"../images/users/cristiano.jpg",
            id_user: 0
        },{
            nombre: 'Javier',
            comentario: "Precio?",
            imagen_perfil:"../images/users/javier.jpg",
            id_user: 2
        }]},
    {
        id: 8,
        nombre: 'Fossil Gen 6',
        descripcion: 'Un reloj inteligente con estilo clásico y funciones modernas.',
        imagen: 'fossil-gen-6.jpg',
        comentarios:[{
            nombre: 'Fernando',
            comentario: "Mi favorito",
            imagen_perfil:"../images/users/nano.jpg",
            id_user: 1
        },{
            nombre: 'Cristiano',
            comentario: "Muy bello, SIUUUUUUUUU",
            imagen_perfil:"../images/users/cristiano.jpg",
            id_user: 0
        },{
            nombre: 'Javier',
            comentario: "Precio?",
            imagen_perfil:"../images/users/javier.jpg",
            id_user: 2
        }]},
    {
        id: 9,
        nombre: 'Audemars Piguet Royal Oak',
        descripcion: 'Un reloj de lujo con un diseño distintivo de brazalete integrado.',
        imagen: 'audemars-piguet-royal-oak.jpg',
        comentarios:[{
            nombre: 'Fernando',
            comentario: "Mi favorito",
            imagen_perfil:"../images/users/nano.jpg",
            id_user: 1
        },{
            nombre: 'Cristiano',
            comentario: "Muy bello, SIUUUUUUUUU",
            imagen_perfil:"../images/users/cristiano.jpg",
            id_user: 0
        },{
            nombre: 'Javier',
            comentario: "Precio?",
            imagen_perfil:"../images/users/javier.jpg",
            id_user: 2
        }]}
]}
module.exports= lista