import React from 'react';
import {connect} from 'react-redux';
import {toggleModal} from '../../actions/modal_actions';
import {withRouter} from "react-router-dom";

class Modal extends React.Component {
    constructor(props){
        super(props) 

        this.state = {
            name: null
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e){
        this.setState({name: e.currentTarget.value})
    }


    onSubmit(){
        this.props.toggleModal()
        return;
    }

    render(){
        let playlist = [];
        let artwork ="" 

        if (this.props.playlist) {
            playlist = this.props.playlist.playlist_name
            artwork = this.props.playlist.artUrl
        }

        console.log(this.props.playlist)
        return(
            this.props.modalOpen ? 
            <div className="modal">
                <div className="modal-screen" onClick={this.props.toggleModal}>
                </div>
                <div className="modal-form">
                    <form onSubmit={this.onSubmit}>
                        <h1>Edit details</h1>
                        <div className="inner-wrapper">
                            <div className="update-artwork-wrapper">
                                <img src={artwork} width="180px" className="update-artwork"/>
                            </div>

                            <div className="inner-inner-wrapper">
                                <input type="text" value={(typeof this.state.name) == "string" ? this.state.name : playlist} onChange={this.onChange}/>
                                <textarea name="" id="" cols="30" rows="10" placeholder="Add an optional description"></textarea>
                            </div>
                        </div>
                        <div className="end">
                            <button>SAVE</button>
                        </div>

                        <p className="footer">By proceeding, you agree to give Jbops access to the image you choose to upload. Please make sure you have the right to upload the image.</p>
                    </form>
                </div>
            </div> :
            null
    )
}
}


const mstp = (state, ownProps) => ({
    modalOpen: state.modal.modalOpen,
    playlist: state.entities.playlists[ownProps.location.pathname.split("/").pop()]

})

const mdtp = dispatch => ({
    toggleModal: () => dispatch(toggleModal()),
    getPlaylist: (playlistId) => dispatch(fetchPlaylist(playlistId)),

})

export default withRouter(connect(mstp, mdtp)(Modal));