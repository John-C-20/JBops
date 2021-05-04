import React from 'react' 
import {withRouter, goBack, goForward} from 'react-router-dom';

class HistoryButton extends React.Component {
    constructor(props) {
        super(props)

        this.goBack = this.goBack.bind(this)
        this.goForward = this.goForward.bind(this)
    }

    goBack(){
        this.props.history.goBack()
    }

    goForward(){
        this.props.history.goForward()
    }

    render(){
        return(
            <div className="history-buttons">
                <button className="back" onClick={this.goBack}>
                    <svg role="img" focusable="false" height="24" width="24" viewBox="0 0 24 24" class="Svg-sc-1usfroi-0 bqLalk _6fe5d5efc9b4a07d5c424071ac7cdacb-scss">
                        <polyline points="16 4 7 12 16 20" fill="none" stroke="#b3b3b3">
                        </polyline>
                    </svg>
                </button>
                <button className="forward" onClick={this.goForward}>
                    <svg role="img" focusable="false" height="24" width="24" viewBox="0 0 24 24" class="Svg-sc-1usfroi-0 bqLalk _6fe5d5efc9b4a07d5c424071ac7cdacb-scss">
                        <polyline points="8 4 17 12 8 20" fill="none" stroke="#b3b3b3">
                        </polyline>
                    </svg>
                </button>
            </div>
        )
    }
}

export default withRouter(HistoryButton);