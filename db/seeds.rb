require 'open-uri'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


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


