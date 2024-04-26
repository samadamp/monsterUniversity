import { useEffect, useRef } from "react";
import MonsterManager from "../components/MonsterManager";

export default function AddPage() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);

  return (
    <>
      <MonsterManager />
      <audio ref={audioRef} src="/music/sound.mp3" />
    </>
  );
}

