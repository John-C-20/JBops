require 'open-uri'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Playlist.destroy_all
Song.destroy_all
PlaylistSong.destroy_all
Artist.destroy_all
Album.destroy_all

playlist1 = Playlist.create(playlist_name: "KBOO", user_id: 1)
playlist1.playlist_artwork.attach(io: URI.open("https://jbops-seeds.s3.amazonaws.com/kboo.png"), filename: "kboo.png")

playlist2 = Playlist.create(playlist_name: "Today's Top Hits", user_id: 1)
playlist2.playlist_artwork.attach(io: URI.open("https://jbops-seeds.s3.amazonaws.com/todays_top_hits.png"), filename: "todays_top_hits.png")

playlist3 = Playlist.create(playlist_name: "Most Necessary", user_id: 1)
playlist3.playlist_artwork.attach(io: URI.open("https://jbops-seeds.s3.amazonaws.com/most+necessary.png"), filename: "most necessary.png")

playlist4 = Playlist.create(playlist_name: "mint", user_id: 1)
playlist4.playlist_artwork.attach(io: URI.open("https://jbops-seeds.s3.amazonaws.com/mint.png"), filename: "mint.png")

playlist5 = Playlist.create(playlist_name: "Hot Country", user_id: 1)
playlist5.playlist_artwork.attach(io: URI.open("https://jbops-seeds.s3.amazonaws.com/hot+country.png"), filename: "hot country.png")

song1 = Song.create(song_title: "How You Like That", album_id: 1)
song1.musicUrl.attach(io: URI.open("https://jbops-seeds.s3.amazonaws.com/BLACKPINK+-+THE+ALBUM/01+-+How+You+Like+That.mp3"), filename: "How You Like That")

song2 = Song.create(song_title: "Ice Cream", album_id: 1)
song2.musicUrl.attach(io: URI.open("https://jbops-seeds.s3.amazonaws.com/BLACKPINK+-+THE+ALBUM/02+-+Ice+Cream.mp3"), filename: "Ice Cream")

song3 = Song.create(song_title: "Pretty Savage", album_id: 1)
song3.musicUrl.attach(io: URI.open("https://jbops-seeds.s3.amazonaws.com/BLACKPINK+-+THE+ALBUM/03+-+Pretty+Savage.mp3"), filename: "Pretty Savage")

song4 = Song.create(song_title: "Bet You Wanna", album_id: 1)
song4.musicUrl.attach(io: URI.open("https://jbops-seeds.s3.amazonaws.com/BLACKPINK+-+THE+ALBUM/04+-+Bet+You+Wanna.mp3"), filename: "Bet You Wanna")

song5 = Song.create(song_title: "Lovesick Girls", album_id: 1)
song5.musicUrl.attach(io: URI.open("https://jbops-seeds.s3.amazonaws.com/BLACKPINK+-+THE+ALBUM/05+-+Lovesick+Girls.mp3"), filename: "Lovesick Girls")

song6 = Song.create(song_title: "Crazy Over You", album_id: 1)
song6.musicUrl.attach(io: URI.open("https://jbops-seeds.s3.amazonaws.com/BLACKPINK+-+THE+ALBUM/06+-+Crazy+Over+You.mp3"), filename: "Crazy Over You")

song7 = Song.create(song_title: "Love To Hate Me", album_id: 1)
song7.musicUrl.attach(io: URI.open("https://jbops-seeds.s3.amazonaws.com/BLACKPINK+-+THE+ALBUM/07+-+Love+To+Hate+Me.mp3"), filename: "Love To Hate Me")

song8 = Song.create(song_title: "You Never Know", album_id: 1)
song8.musicUrl.attach(io: URI.open("https://jbops-seeds.s3.amazonaws.com/BLACKPINK+-+THE+ALBUM/08+-+You+Never+Know.mp3"), filename: "You Never Know")

playlistSong1 = PlaylistSong.create(playlist_id: 1, song_id: 1)
playlistSong2 = PlaylistSong.create(playlist_id: 1, song_id: 2)
playlistSong3 = PlaylistSong.create(playlist_id: 1, song_id: 3)
playlistSong4 = PlaylistSong.create(playlist_id: 1, song_id: 4)
playlistSong5 = PlaylistSong.create(playlist_id: 1, song_id: 5)
playlistSong6 = PlaylistSong.create(playlist_id: 1, song_id: 6)
playlistSong7 = PlaylistSong.create(playlist_id: 1, song_id: 7)
playlistSong8 = PlaylistSong.create(playlist_id: 1, song_id: 8)

Artist.create(name: "BLACKPINK", bio: "Blackpink in your area")
Album.create(album_title: "THE ALBUM", artist_id: 1, album_year: 2020)