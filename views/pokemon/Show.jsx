const React = require('react');
class Show extends React.Component {
    render () {
        const pokemon = this.props.pokemon;

        return (
            <div>
                <h1>Show Page</h1>
                <p>The pokemon {pokemon.name} is accessed with </p>
                <img src={pokemon.img} />
                
            </div>

        )
    }
}

module.exports = Show;