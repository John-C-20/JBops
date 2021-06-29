import React from 'react';

export default class Modal extends React.Component {
    constructor(props){
        super(props) 

        this.onSubmit = this.onSubmit.bind(this);
    }


    onSubmit(){
        return;
    }

    render(){
        return(
            this.props.show ? 
            <div className="modal">
                <div className="modal-screen" onClick={this.props.toggleModal}>
                </div>
                <div className="modal-form">
                    <form onSubmit={this.onSubmit}>
                        <h2>Edit Details</h2>
                        <div className="inner-wrapper">
                            <div>
                                artwork box (changeable)
                            </div>

                            <div className="inner-inner-wrapper">
                                <div>change this to playlistname input box</div>
                                <div>change this to playlist description box</div>
                            </div>
                        </div>
                        <div className="end">
                            <button>save</button>
                        </div>
                    </form>
                </div>
            </div> :
            null
    )
}
}
