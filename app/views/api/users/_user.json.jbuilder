json.extract! user, :id, :username, :email, :dob_month, :dob_day, :dob_year, :gender
json.playlists do 
    user.playlists.each do |playlist|
        json.set! playlist.id do 
            json.extract! playlist, :playlist_name, :user_id, :id
        end
    end
end