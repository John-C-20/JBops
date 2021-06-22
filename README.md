<div align="center">
  <img src="app/assets/images/Jbops_logo.png" alt="logo" width="500" style="vertical-align:middle">
</div>

<br>

[Jbops](https://jbops.herokuapp.com/#/) is a clone of [Spotify's Web Player](https://open.spotify.com/). It's also an audio streaming service that allows users to curate their own playlists and create a personal library of songs, albums, artists, and playlists created by other users via likes.

## Technologies Used
- Frontend: Javascript React/Redux, HTML, SCSS
- Backend API: Ruby on Rails
- Database: PostgreSQL
- Hosting: Heroku
- Cloud Storage: AWS

## Features

### User Authentication 
- Users are required to either sign-up or sign-in before using any features of the application
- For convenience, there is a demo user log-in button 
- User can logout by clicking on the user dropdown button 
<div><img src="/app/assets/images/User_Auth.gif" alt="signup-demo"></div>

### Continuous Music Player 
- Pause/Play functionality for songs 
- Duration/Volume scrubbers to change song duration or volume level 
- Music plays without interruptions as user navigates through the rest of the application 
- Bonus: navigation butttons that allows user to go back and forward in the browser's history
<div><img src="/app/assets/images/Music_Player.gif" alt="music-player-demo"></div>

### Search Functionality 
- Allows users to search for songs, artists, albums, and playlists based on text input  
- If no text is entered, users can browse the Jbops song library by genre
<div><img src="/app/assets/images/Search.gif" alt="search-demo" width="600"></div>


