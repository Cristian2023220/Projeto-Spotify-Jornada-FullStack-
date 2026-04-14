import React, { useState, useEffect } from "react";
import Player from "../components/Player";
import { Link, useParams } from "react-router-dom";
import { fetchSongs, fetchArtists } from "../api/api";

const Song = () => {
  const { id } = useParams();
  const [songs, setSongs] = useState([]);
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [songsData, artistsData] = await Promise.all([
          fetchSongs(),
          fetchArtists(),
        ]);
        setSongs(songsData);
        setArtists(artistsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const song = songs.filter(
    (currentSongObj) => currentSongObj._id === id
  )[0];

  if (!song) {
    return <div>Song not found</div>;
  }

  const { image, name, duration, artist, audio } = song;

  const artistObj = artists.filter(
    (currentArtistObj) => currentArtistObj.name === artist
  )[0];

  if (!artistObj) {
    return <div>Artist not found</div>;
  }

  const songsArrayFromArtist = songs.filter(
    (currentSongObj) => currentSongObj.artist === artist
  );

  const randomIndex = Math.floor(
    Math.random() * songsArrayFromArtist.length
  );

  const randomIndex2 = Math.floor(
    Math.random() * songsArrayFromArtist.length
  );

  const randomIdFromArtist = songsArrayFromArtist[randomIndex]?._id;
  const randomId2FromArtist = songsArrayFromArtist[randomIndex2]?._id;

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img src={image} alt={`Imagem da música ${name}`} />
        </div>
      </div>

      <div className="song__bar">
        <Link to={`/artist/${artistObj._id}`} className="song__artist-image">
          <img
            width={75}
            height={75}
            src={artistObj.image}
            alt={`Imagem do Artista ${artist}`}
          />
        </Link>

        <Player
          duration={duration}
          randomIdFromArtist={randomIdFromArtist}
          randomId2FromArtist={randomId2FromArtist}
          audio={audio}
        />

        <div>
          <p className="song__name">{name}</p>
          <p>{artist}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
