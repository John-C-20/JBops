import React from 'react';
import {connect} from 'react-redux'
import Sidebar from '../splash/sidebar';

// high level strategy:
// if the state of search component is searching: render the current results 
// else: render recent searches, top genres and browse all 

class Search extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <Sidebar/>
                <div className="background">
                    <div className="searchbar">this will be the search bar</div>
                    <div className="current-search">
                        <div className="recent-searches">
                            recent searches component goes here
                        </div>
                        <div className="top-genres">
                            top genres component goes here
                        </div>
                        <div className="browse-all">
                            browse all component goes here
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mstp = state => ({

})

const mdtp = dispatch =>  ({

})

export default connect(null, null)(Search);