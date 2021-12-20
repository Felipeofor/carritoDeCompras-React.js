import { Component } from 'react';

const styles = {
    detallesCarro: {
        backgroundColor: '#fff',
        position: 'absolute',
        marginTop: 30,
        boxShadow: '1px 5px 5px rgb(0, 0, 0, 0.3)',
        borderRadius: '5px',
        width: '300px',   
        right: 50,
    },
    ul: {
        margin: 0,
        padding: 0,
    },
    producto: {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '25px 20px',
        borderBottom: '1px solid #aaa',
    }
}

class DetallesCarro extends Component {
    render() {
        const { carro } = this.props;

        return (
            <div style={styles.detallesCarro}>
                <ul style={styles.ul}> 
                    {carro.map(producto => 
                    <li key={producto.name} style={styles.producto}>
                        <img src={producto.img} alt={producto.name} width='40' height='32'/>
                        {producto.name}
                        <span>{producto.cantidad}</span>
                    </li>)}
                </ul>
            </div>
        )
    }
}

export default DetallesCarro;