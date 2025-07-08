import { useRef, useEffect, useState } from "react";
import img1 from "../img/play.png";
import img2 from "../img/pause.png";

type MusicCard = {
  id: number;
  name: string;
  creator: string;
  avatarTrack: string;
  track: string;
};

export default function MusicCard({
  name,
  creator,
  avatarTrack,
  track,
  id,
}: MusicCard) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolumeState] = useState(0.1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const formatTime = (time: number) => {
    const minute = Math.floor(time / 60);
    const second = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minute}:${second}`;
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => setDuration(audio.duration);
    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  const setVolume = (value: number) => {
    if (audioRef.current) {
      audioRef.current.volume = value;
    }
    setVolumeState(value);
  };

  const handleTimeChange = (value: number) => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime = value;
    setCurrentTime(value);
  };

  return (
    <div className="MusicCard">
      <p className="id">{id}</p>
      <button onClick={togglePlay} className="btnplay">
        <img src={isPlaying ? img2 : img1} alt="" />
      </button>
      <img className="avatartrack" src={avatarTrack} alt={name} />
      <p className="name-track">
        {name} <br />
        <span className="creator-name">{creator}</span>
      </p>
      <input
        type="range"
        className="range-time"
        min={0}
        max={duration}
        step={0.1}
        value={currentTime}
        onChange={(e) => handleTimeChange(Number(e.target.value))}
      />
      <p className="time">
        {isPlaying ? formatTime(currentTime) : formatTime(duration)}
      </p>
      <input
        type="range"
        className="range"
        min={0}
        max={1}
        step={0.01}
        value={volume}
        onChange={(e) => setVolume(parseFloat(e.target.value))}
      />
      <audio className="audio" ref={audioRef} src={track} preload="metadata" />
      <a href={track} download={`${name}.mp3`}>
        <button className="download-btn">Download</button>
      </a>
    </div>
  );
}
