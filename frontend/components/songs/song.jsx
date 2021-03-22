import React from 'react'

export default class Song extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const loggedIn = () => (
            <div>
                <div>-- this will be a song</div>
            </div>
        )

        const loggedOut = () => (
            <div>
                <div>-- this will be a song but u need to sign it to play</div>
            </div>
        )
        return(
           this.props.currentUser ? loggedIn() : loggedOut()
        )
    }
}