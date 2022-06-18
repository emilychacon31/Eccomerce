import ItemCategoria from "../ItemCategoria/ItemCategoria";
import './ContenedorCategorias.scss';

const ContenedorCategorias = () => {
    const categorias= [
        {
            id: 1,
            nombre: 'Skirts',
            imagen: 'https://cdn.shopify.com/s/files/1/0515/9767/2597/products/93_5ee2c009-8751-4886-b536-b3db37f3e928_1000x.jpg?v=1636869033',
        },

        {
            id: 2,
            nombre: 'Dresses',
            imagen: 'https://cdn.shopify.com/s/files/1/0515/9767/2597/products/image_8e3bc15f-2388-4135-bf93-d9b7683e1d7f_1000x.jpg?v=1649708749'
        },

        {
            id: 3,
            nombre: 'Tendy Denim',
            imagen:'https://cdn.shopify.com/s/files/1/0515/9767/2597/products/image_5a9daa4c-a403-4ab9-98e3-860460a16df1_590x.jpg?v=1639770729'
        },

        {
            id: 4,
            nombre: 'Shoes',
            imagen:'https://cdn.shopify.com/s/files/1/0515/9767/2597/products/Blank2211x2000_15_1000x.jpg?v=1652398219'
        },

        {
            id: 5,
            nombre: 'Woman',
            imagen:'https://cdn.shopify.com/s/files/1/0515/9767/2597/files/Blank_4000_x_3000_2_1000x.png?v=1649982794'
        }

    ];
  return (
      <div className="contenedor-categorias">
          {categorias.map((categoria)=>{
              return <ItemCategoria key={categoria.id} categoria={categoria} />
          })}
      </div>
    
  )
}

export default ContenedorCategorias;