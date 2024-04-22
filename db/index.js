let lista={
    usuarios:[{
        id: 0,
        email:"juanqueirolocuchuttini@gmail.com",
        usuario:"Cristiano",
        contraseña:"Juanchi",
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
        contraseña:"magic33",
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
            comentario: "Mi Favorito",
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
            comentario: "Me lo regalo mi señora, me gusta",
            imagen_perfil:"../images/users/nano.jpg",
            id_user: 1
        },{
            nombre: 'Cristiano',
            comentario: "Me encanta este reloj",
            imagen_perfil:"../images/users/cristiano.jpg",
            id_user: 0
        },{
            nombre: 'Javier',
            comentario: "Genial!",
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
            comentario: "",
            imagen_perfil:"../images/users/nano.jpg",
            id_user: 1
        },{
            nombre: 'Cristiano',
            comentario: "No me gusta nada",
            imagen_perfil:"../images/users/cristiano.jpg",
            id_user: 0
        },{
            nombre: 'Javier',
            comentario: "Malisimo este",
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
            comentario: "Impresionante trabajo",
            imagen_perfil:"../images/users/nano.jpg",
            id_user: 1
        },{
            nombre: 'Cristiano',
            comentario: "Increíble diseño",
            imagen_perfil:"../images/users/cristiano.jpg",
            id_user: 0
        },{
            nombre: 'Javier',
            comentario: "¿Cuál es la disponibilidad??",
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
            comentario: "Una maravilla de producto",
            imagen_perfil:"../images/users/nano.jpg",
            id_user: 1
        },{
            nombre: 'Cristiano',
            comentario: "Excelente calidad",
            imagen_perfil:"../images/users/cristiano.jpg",
            id_user: 0
        },{
            nombre: 'Javier',
            comentario: "¿Puedo ver más fotos?",
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
            comentario: "Sin duda, el mejor",
            imagen_perfil:"../images/users/nano.jpg",
            id_user: 1
        },{
            nombre: 'Cristiano',
            comentario: "¿Hacen envíos internacionales?",
            imagen_perfil:"../images/users/cristiano.jpg",
            id_user: 0
        },{
            nombre: 'Javier',
            comentario: "¿Tienen descuentos por cantidad?",
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
            comentario: "¡Lo necesito en mi vida!",
            imagen_perfil:"../images/users/nano.jpg",
            id_user: 1
        },{
            nombre: 'Cristiano',
            comentario: "¿Hay diferentes colores disponibles?",
            imagen_perfil:"../images/users/cristiano.jpg",
            id_user: 0
        },{
            nombre: 'Javier',
            comentario: "Es resistente al Agua?",
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
            comentario: "Un diseño unico",
            imagen_perfil:"../images/users/nano.jpg",
            id_user: 1
        },{
            nombre: 'Cristiano',
            comentario: "Sin palabras, 10/10",
            imagen_perfil:"../images/users/cristiano.jpg",
            id_user: 0
        },{
            nombre: 'Javier',
            comentario: "Combina con mi muñeca",
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
            comentario: "Esta bien",
            imagen_perfil:"../images/users/nano.jpg",
            id_user: 1
        },{
            nombre: 'Cristiano',
            comentario: "Increible",
            imagen_perfil:"../images/users/cristiano.jpg",
            id_user: 0
        },{
            nombre: 'Javier',
            comentario: "Tengo uno igual",
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
            comentario: "Me esperaba mas por el precio que tiene",
            imagen_perfil:"../images/users/nano.jpg",
            id_user: 1
        },{
            nombre: 'Cristiano',
            comentario: "Normalito",
            imagen_perfil:"../images/users/cristiano.jpg",
            id_user: 0
        },{
            nombre: 'Javier',
            comentario: "Se puede pagar en cuotas?",
            imagen_perfil:"../images/users/javier.jpg",
            id_user: 2
        }]}
]}
module.exports= lista