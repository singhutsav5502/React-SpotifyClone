import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { useGetSongDetailsQuery } from "../redux/services/Shazam";
const SongDetails = () => {
    const dispatch = useDispatch();
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const { songid } = useParams();
    const { data: songData, isFetching: isFetchignSongDetails } = useGetSongDetailsQuery({ songid });
    
    if (isFetchignSongDetails) return <Loader />;
    // LYRICS HAS A NUMERICAL ATTRIBUTE THAT IS UNIQUE
    // TO FETCH LYRICS FIRST GET THAT ID 
    let lyrId=null;
    const obj = songData;
    for(const key in obj.resources){
        if(key === 'lyrics' ){
            for(const lyr in obj.resources.lyrics){
                lyrId = lyr;
                console.log(lyrId);
                break;
            }
        }
    }
    return (
        <div className="flex flex-col">
            {/* <DetailsHeader artistId={artistId} songData={songData} /> */}
            {console.log(songData)}
            <div className="mb-10 ">
                <h2 className="text-white text-3xl font-bold">Lyrics: </h2>

                <div className="mt-5">
                    {songData?.resources?.lyrics ?
                        songData?.resources?.lyrics[lyrId]?.attributes?.text?.map((line, i) => {
                            return (
                                <p className="text-gray-400 text-base my-1">{line}</p>
                            )
                        }) : <p className="text-gray-400 text-base my-1">Sorry, no lyrics found!</p>}
                </div>
            </div>
        </div>
    );
}

export default SongDetails;
