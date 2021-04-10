import ReactDOM from 'react-dom';

const helloStr = 'Hello React!';

const styleObj = {
    color: 'blue',
    backgroundColor: 'pink',
    fontSize: '200px'
};

const text = <h1 style={styleObj}>{helloStr}</h1>;

ReactDOM.render(
    text,
    document.getElementById('root')
);