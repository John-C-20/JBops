import React from 'react';
import {connect} from 'react-redux';

export default class CurrentSearch extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            results: {}
        }

        this.result = null
    }

    fetchSearch(title) {
        $.ajax({
            method: 'GET',
            url: '/api/searches/',
            data: {title}
        }).then((res) => {
            console.log('in FS:', res)
            this.result = res 
        })
    }
    // fetchSearch(title) {
    //     $.ajax({
    //         method: 'GET',
    //         url: '/api/searches/',
    //         data: {title}
    //     }).then(res => this.setState({results: res}))
    // }

    componentDidMount(){
        this.fetchSearch(this.props.text)
    }

    render() {
        // this.fetchSearch(this.props.text)

        let result = this.fetchSearch(this.props.text)
        console.log(this.props.text)
        console.log('result', this.result)
        return(
            <div></div>
        )
    }
}