import { Component } from 'react';
import Logo from './Logo';
import Carro from './Carro';

const styles = {
    navBar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100px',
        justifyContent: 'space-between',
        position: 'relative',
        padding: '0 50px',
        boxShadow: '0 2px 3px rgb(0, 0, 0, 0.1)',
    }
}

class NavBar extends Component {
    render() {
        const { carro, mostrarCarro, esCarroVisible } = this.props;
        return (
            <nav style={ styles.navBar }>
                <Logo/>
                <Carro 
                carro={ carro }
                esCarroVisible={ esCarroVisible }
                mostrarCarro={ mostrarCarro } />
            </nav>
        )
    }
}

export default NavBar;