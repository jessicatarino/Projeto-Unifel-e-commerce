import products from '../utils'

function Products() {
    return (
        <>
            <h2>Products</h2>
            {products.map ((product) =>{
            return(
            <>
                <p>{product.nome}</p>
                <img src={ product.imagem } alt="" />
            </>
            )
        }
        ) }
        </>
        )
}