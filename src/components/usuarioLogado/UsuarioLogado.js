export default (props) => {
    const usuario = props.usuario || {}
    return (

        <>
            <if teste={usuario && usuario.nome && usuario.email}>
                <h2>Usuario logado</h2>
                <h3>
                    {usuario.nome} - {usuario.email}
                </h3>
            </if>
        </>
    )
}