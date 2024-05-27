import {Link} from 'react-router-dom'
function Cabecalho(){
    const menu={
        background: '#F49ABF',
        height: '5vh',
        display: 'flex',
        justifyContent: 'center'
    }
    const link={
        display: 'inlineBlock',
        textDecoration: 'none',
        padding:'20px',
        color:'#fff',
        fontSize:'1.5em'
    }
    return(
        <nav style={menu}>
            <ul style={{display:'flex',listStyle:'none'}}>
            <li><Link style={link} to='/'>Home</Link></li>
           <li><Link style={link} to='/produtos'>
                Produtos</Link></li>
           <li><Link style={link} to='/servicos'>
                Servicos</Link></li>
            </ul>
        </nav>
    )
}
export default Cabecalho