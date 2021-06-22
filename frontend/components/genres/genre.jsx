import React from 'react' 

export default class Genre extends React.Component {
    constructor(props) {
        super(props)
        // this.props.genre
    }

    render(){
        let genre = this.props.genre 
        if (genre === 'HipHop') genre = 'Hip Hop';
        if (genre === 'RnB') genre = 'R&B';

        return(
            <div
                id={this.props.genre}
                onClick={() => history.push(`/genres/${this.props.genre}`)}
                className="genre-button">
                {genre}
            </div>
        )
    }
}
