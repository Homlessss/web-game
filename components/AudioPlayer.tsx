import { useEffect } from "react";

const AudioPlayer = ({ src } : any) => {
    useEffect(() => {
        const audio = new Audio(src);
        audio.loop = true;
        audio.play();
        return () => {
            audio.pause();
            audio.currentTime = 0;
        };
    }, [src]);

    return null;
}

export default AudioPlayer;