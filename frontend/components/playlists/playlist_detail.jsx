import React from 'react' 
import UserDropdown from '../splash/user_dropdown'
import Sidebar from '../splash/sidebar'
import Player from '../player/player'
import Song from '../songs/song'

export default class PlaylistDetail extends React.Component {
    constructor(props) {
        super(props)

        this.fetchSong = this.props.fetchSong

        // this.getAverageRGB = this.getAverageRGB.bind(this)
    }

    componentDidMount() {
        this.props.getPlaylist(this.props.match.params.playlistId)
    }


    // -------- //

    // getAverageRGB(imgEl) {

    //     var blockSize = 5, // only visit every 5 pixels
    //         defaultRGB = { r: 0, g: 0, b: 0 }, // for non-supporting envs
    //         canvas = document.createElement('canvas'),
    //         context = canvas.getContext && canvas.getContext('2d'),
    //         data, width, height,
    //         i = -4,
    //         length,
    //         rgb = { r: 0, g: 0, b: 0 },
    //         count = 0;

    //     if (!context) {
    //         return defaultRGB;
    //     }

    //     height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
    //     width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

    //     context.drawImage(imgEl, 0, 0);

    //     try {
    //         data = context.getImageData(0, 0, width, height);
    //     } catch (e) {
    //         /* security error, img on diff domain */alert('x');
    //         return defaultRGB;
    //     }

    //     length = data.data.length;

    //     while ((i += blockSize * 4) < length) {
    //         ++count;
    //         rgb.r += data.data[i];
    //         rgb.g += data.data[i + 1];
    //         rgb.b += data.data[i + 2];
    //     }

    //     // ~~ used to floor values
    //     rgb.r = ~~(rgb.r / count);
    //     rgb.g = ~~(rgb.g / count);
    //     rgb.b = ~~(rgb.b / count);

    //     return rgb;
    // }

    // -------- //





    render() {
        let playlist = [];
        let songRows = [];
        let artwork = ""

        if (this.props.playlist) {
            playlist = this.props.playlist.playlist_name
            artwork = this.props.playlist.artUrl


            if (this.props.playlist.songs) {
                const songs = Object.values(this.props.playlist.songs) 
                
                songRows = songs.map(song => {
                    return (
                    <button className="song" key={song.id} onClick={() => this.fetchSong(song.id)}>
                        <Song song={song} />
                    </button>
                    )
                })
            }
        }
        
        return(
                <div className="splash logged-in">
                    <div className="navbar logged-in">
                        <UserDropdown logout={this.props.logout} currentUser={this.props.currentUser} />
                    </div>

                    <Sidebar />

                    <div className="jbops">
                        

                        <div className="header">
                            <div id="playlist_img">
                                <img src={artwork} />
                            </div>

                            <div className="text">
                                <h2>Playlist</h2>
                                <h1>{playlist}</h1>
                                <div id="num_songs">
                                    {`${songRows.length} songs`}
                                </div>
                            </div>
                        </div>

                        <br />

                        <div className="grid">
                            <ul className="rows">
                                <li id="ord_and_title">
                                    <li id="song_ord">
                                        
                                    </li>
                                    <li id="song_title">
                                        TITLE
                                    </li>
                                </li>

                                <li id="album_title">ALBUM</li>
                                <li id="album_year">ALBUM YEAR</li>
                                <li id="duration">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M7.999 3H6.999V7V8H7.999H9.999V7H7.999V3ZM7.5 0C3.358 0 0 3.358 0 7.5C0 11.642 3.358 15 7.5 15C11.642 15 15 11.642 15 7.5C15 3.358 11.642 0 7.5 0ZM7.5 14C3.916 14 1 11.084 1 7.5C1 3.916 3.916 1 7.5 1C11.084 1 14 3.916 14 7.5C14 11.084 11.084 14 7.5 14Z" fill="currentColor"></path>
                                    </svg>
                                </li>

                            </ul>



                            {songRows} 
                        </div>
                    </div>

                    {/* <Player />  */}
                </div>
            )}
    }



