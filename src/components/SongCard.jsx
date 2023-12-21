import { usePlayerStore } from "@/store/playerStore";

export function SongCard({ song, songs, playlist }) {
  const currentMusic = usePlayerStore(store => store.currentMusic);
  const setCurrentMusic = usePlayerStore(store => store.setCurrentMusic);

  const handleClick = () => {
    if ((currentMusic?.song?.id !== song?.id) || (currentMusic?.playlist?.id !== playlist?.id)) {
      setCurrentMusic({ song, playlist, songs })
    }
  }

  return (
    <div className="flex flex-row gap-3 cursor-pointer" onClick={handleClick}>
      <picture>
        <img src={song.image} alt={song.title} className="h-11 w-11" />
      </picture>
      <div className="flex flex-col">
        <h3 className="text-white text-normal text-base">{song.title}</h3>
        <span>{song.artists?.join(", ")}</span>
      </div>
    </div>
  )
}