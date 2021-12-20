import Productos from './components/Productos';
import { Component } from 'react';
import Layout from './components/Layout';
import Title from './components/Title';
import NavBar from './components/NavBar';

class App extends Component {
  state = {
    productos: [
      {name: 'Tomate', precio: '$2.50', img:'productos/tomate.jpg'},
      {name: 'Papa', precio: '$3.50', img:'productos/papa.jpg'},
      {name: 'Cebolla', precio: '$4.50', img:'productos/cebolla.jpg'},
    ],
    carro: [],
    esCarroVisible: false,
  }

  agregarAlCarro = (producto) => {
    const { carro } = this.state;
    if (carro.find(p => p.name === producto.name)) {
      const newCarro = carro.map(p => p.name ===producto.name
        ? ({...p, cantidad: p.cantidad + 1})
        : p)
      return this.setState({carro: newCarro});
    }
  
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1
      })
    })
  }

  mostrarCarro = () => {
    if (!this.state.carro.length === 0) {
      return
    }
    this.setState({
      esCarroVisible: !this.state.esCarroVisible
    })
  }

  render() {
    const { esCarroVisible } = this.state;
    return (
      <div>
        <NavBar carro={this.state.carro} 
        esCarroVisible={esCarroVisible} 
        mostrarCarro={this.mostrarCarro}/>
        <Layout>
          <Title/>
        <Productos
        agregarAlCarro={this.agregarAlCarro}
        productos={this.state.productos}
        />
        </Layout>
      </div>
    )
}
}
export default App;
