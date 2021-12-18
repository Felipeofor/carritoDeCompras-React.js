import { Component } from 'react';

const styles = {
    button: {
        background: '#0A283E',
        color: '#fff',
        padding: '15px 20px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        fontWeight: 'bold',
        margin: '10px',
    }
}

class Button extends Component {
    render() {
        return (
            <button style={styles.button} {...this.props}/>
        )
    }
}

export default Button;