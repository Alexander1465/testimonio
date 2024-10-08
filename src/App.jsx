import React from 'react'
import Testimonio from './componentes/testimonio'

function App () {
  const testimo = [

    {
      ID: 0,
      nombre: 'Garfield',
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae impedit quae blanditiis harum iste explicabo molestiae, soluta sequi numquam cumque minus maxime earum, cum natus nihil quasi doloremque beatae officia?",
      img: 'src/gato1.jpg' ,
      alt: 'gato'
    },

    {
      ID: 1,
      nombre: 'Tempesta',
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis harum soluta reprehenderit doloremque, perspiciatis hic, cum alias perferendis voluptas ex eveniet commodi dolorum repellat nisi, voluptatem facere ipsam suscipit velit!",
      img: 'src/gato2.jpg' ,
      alt: 'gato'
    },

    {
      ID: 2,
      nombre: 'Zarigüeya',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel sagittis lectus, non viverra dolor. Sed ut ipsum ac neque pharetra pulvinar vel vel neque.',
      img: 'src/gato_mojado.jpeg' ,
      alt: 'gato'
    },

    {
      ID: 3,
      nombre: 'Blanquito',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsum aspernatur eius aliquam, enim odio sunt dicta velit vero deleniti ratione at iste temporibus blanditiis ad exercitationem cumque eligendi ea!',
      img: 'src/gato4.jpg' ,
      alt: 'gato'
    }


  ]

return (
  <>
  <Testimonio testimo={testimo} />
  </>
)
  
}
export default App