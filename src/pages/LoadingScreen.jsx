import React from "react";
import { LoadingBox } from "../utils/exportStyles";
//import { audio } from '../resources/audio/keyboard.mp3'

export const LoadingScreen = () => {
    /*useEffect(() => {
          window.addEventListener('load', () => {
              const miAudio = document.getElementById('miAudio');
              miAudio.play();
              console.log(miAudio.tagName)
          });
      }, [])*/

    return (
        <LoadingBox>
            {/*<audio id="miAudio" src="../resources/audio/keyboard.mp3"></audio>*/}
            <div className="text">
                <span className="text-alt">{"{"}</span>
                {"i"}
                <span className="text-alt">{"}"}</span>
            </div>
        </LoadingBox>
    );
};
