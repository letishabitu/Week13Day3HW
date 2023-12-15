const React = require('react');

class Index extends React.Component {
    render() {
        const { pokemons } = this.props;
        // const fruits = this.props.fruits;

        return (
            <div>
                <h1> See all the pokemons</h1>
                <nav>
                    <a href="/pokemons/new">Create a New Pokemon</a>
                </nav>
                <ul>
                    {pokemons.map((pokemon, i) => {
                        return (
                            <li>
                                
                                
                                <a href={`/pokemons/${pokemon._id}`}>
                                    {pokemon.name}
                                </a> 
                                
                                
                            </li>
                        )
                    })

                    }
                </ul>
            </div>
        )
    }
}

module.exports = Index;