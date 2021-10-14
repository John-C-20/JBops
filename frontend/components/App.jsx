import React from 'react' 
import SignupFormContainer from './signup/signup_form_container';
import LoginForm from './login/login_form';
import PlaylistDetailContainer from './playlists/playlist_detail_container';
import Splash from './splash/splash';
import {Route, Switch, Link}  from 'react-router-dom'
import {AuthRoute, ProtectedRoute} from '../util/route_util'
import Player from './player/player';
import Search from './search/search';
import GenreDetail from './genres/genre_detail';
import Modal from './playlists/modal';

const App = () => (
    <div className="app">
        <Switch>
            <Route exact path="/" component={Splash} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <AuthRoute path="/login" component={LoginForm} />
            <ProtectedRoute path="/playlist/:playlistId" component={PlaylistDetailContainer} /> 
            <ProtectedRoute path="/search" component={Search} />
            <ProtectedRoute path="/genres/:genre" component={GenreDetail} /> 
        </Switch>
        <Player />
        <Modal poop="poopooopoo"/>
        {/* change this path later ^  */}
    </div>
)

export default App; 