import React from 'react';
import {connect} from 'react-redux';

export default class CurrentSearch extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        console.log(this.props.text)
        let result =  this.props.results
        console.log('result', result)
        let result2 =  Object.values(result)
        console.log('result2', result2)
        let result3 =  result2.map((obj, idx) =>  <li key={idx}>{Object.values(obj)[1]}</li>)
        // let result3 = Object.values(Object.values(result2)[0])[1]
        console.log('result3', result3)
        return(
            Object.values(this.props.results).length === 0 ? 
            <div className="results">default state</div> :
            <div className="results">
                <ul>{result3}</ul> 
            </div>
        )
    }
}