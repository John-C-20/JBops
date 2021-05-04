import React from 'react';
import {connect} from 'react-redux'
import Sidebar from '../splash/sidebar';

class Search extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <Sidebar/>
                <div>this will be the search bar</div>
                <div>browse all</div>
                <div>this will be links to all genres</div>
            </div>
        )
    }
}

const mstp = state => ({

})

const mdtp = dispatch =>  ({

})

export default connect(null, null)(Search);