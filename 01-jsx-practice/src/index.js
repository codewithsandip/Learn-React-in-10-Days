import ReactDOM from 'react-dom';

const containerStyles = {
    textAlign: 'center'
}

const imageStyles = {
    borderRadius: '200px',
    border: "2px solid pink"
}

const avatar = (
    <div>
        <div style={containerStyles}>
            <img src="https://picsum.photos/200" 
                alt="avatar" style={imageStyles} />
            <div>John Smith</div>
        </div>
        <div style={containerStyles}>
            <img src="https://picsum.photos/200" 
                alt="avatar" style={imageStyles} />
            <div>John Smith</div>
        </div>
        <div style={containerStyles}>
            <img src="https://picsum.photos/200" 
                alt="avatar" style={imageStyles} />
            <div>John Smith</div>
        </div>
    </div>    
);

ReactDOM.render(
    avatar,
    document.getElementById('root')
);