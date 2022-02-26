import Produtos from "./Produtos";

export default props => {
    function obterLista(){
        return Produtos.map(p=>{
            return(
                <h3 key={p.id}>
                    {p.id} {p.nome} preco R$ {p.preco}                
                </h3>
            )
        })
    }
return(
    <>
    <h2>
        Lista de Produtos
    </h2>
        {obterLista()}
    </>
    )
}