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
    ]
  }

  render() {
    return (
      <div>
        <NavBar/>
        <Layout>
          <Title/>
        <Productos
        agregarAlCarro={() => console.log('Producto al carro')}
        productos={this.state.productos}
        />
        </Layout>
      </div>
    )
}
}
export default App;
