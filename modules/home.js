var React = require('react');

class Home extends React.Component{
        constructor(props) {
                super(props);
        }

        render(){
                return (
                        <div className='home'>
                               Welcome to the Freddy website!!!
                        </div>)
        }
}

module.exports = Home;
