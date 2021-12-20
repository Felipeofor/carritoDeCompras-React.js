import { Component } from 'react';
import BubbleAlert from './BubbleAlert';
import DetallesCarro from './DetallesCarro';

const styles = {
    carro: {
        background: '#359A2C',
        color: '#fff',
        border: 'none',
        borderRadius: '15px',
        padding: '15px',
        cursor: 'pointer',
    },
    bubble: {
        position: 'relative',
        left: 12,
        top: 20,
    }
}

class Carro extends Component {
    render() {
        const { carro, mostrarCarro, esCarroVisible } = this.props;
        const cantidad = carro.reduce((acc, val) => acc + val.cantidad, 0);
        return (
            <div>
                <span style={styles.bubble}>
                    {cantidad !== 0 ?
                    <BubbleAlert value={cantidad}/> : null}
                </span>
                <button onClick={mostrarCarro} style={styles.carro}>
                    Carro
                </button>
                {esCarroVisible ? <DetallesCarro carro={carro}/> : null}
            </div>
        )
    }
}

export default Carro;