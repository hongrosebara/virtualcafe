import { useState, useRef, useEffect } from "react";

const useAudio = () => {
  // references //
  const audioPlayer = useRef();
  const progressBar = useRef();
  const animationRef = useRef();
  const volumeBar = useRef();

  // state //
  const [isPlaying, setIsPlaying] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [volume, SetVolume] = useState(1);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs/60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`
    return `${returnedMinutes}:${returnedSeconds}`
  } 

  const changeVolume = () => {
    SetVolume(volumeBar.current.value);
    audioPlayer.current.volume = volumeBar.current.value;
  }

  const togglePlayer = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    setIsActive(!isActive)
    if (prevValue) {
      audioPlayer.current.pause();
    } else {
      audioPlayer.current.play();
      audioPlayer.current.loop = true;
    }
  }

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      audioPlayer.current.loop = true;
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current)
    }
  }

  const skipSong = (forward = true, songs) => {
    if (forward)  {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp++;

        if (temp > songs.length - 1) {
          temp = 0;
        }
        return temp;
      })
    } else {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = songs.length - 1;
        }

        return temp;
      })
    }
  }

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  }

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  }

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
    setCurrentTime(progressBar.current.value);
  }

  const backThirty = () => {
    timeTravel(Number(progressBar.current.value) - 30);
  }

  const forwardThirty = () => {
    timeTravel(Number(progressBar.current.value) + 30);
  }

  const timeTravel = (newTime) => {
    progressBar.current.value = newTime;
    changeRange();
  }

  return {
    isPlaying,
    isActive,
    volume,
    duration,
    currentTime,
    audioPlayer,
    progressBar,
    volumeBar,
    currentSongIndex,
    calculateTime,
    changeVolume,
    togglePlayer,
    togglePlayPause,
    whilePlaying,
    changeRange,
    forwardThirty,
    backThirty,
    setDuration,
    skipSong,
    timeTravel
  }
}
export { useAudio };