import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_933_902)" fill="#2196F3">
        <Path d="M10.843 10.598c1.456 0 2.717-.523 3.747-1.553 1.03-1.03 1.552-2.29 1.552-3.746s-.522-2.717-1.552-3.747C13.56.522 12.299 0 10.843 0S8.127.522 7.097 1.552c-1.03 1.03-1.553 2.29-1.553 3.747 0 1.456.523 2.716 1.553 3.746 1.03 1.03 2.29 1.553 3.746 1.553zM20.115 16.917c-.03-.429-.09-.896-.178-1.39-.09-.498-.205-.968-.342-1.398a6.908 6.908 0 00-.575-1.303 4.919 4.919 0 00-.866-1.13 3.821 3.821 0 00-1.245-.781 4.302 4.302 0 00-1.589-.288c-.224 0-.441.092-.86.365-.259.169-.561.363-.898.579-.288.183-.679.355-1.16.511a4.61 4.61 0 01-1.42.23c-.472 0-.95-.078-1.42-.23-.482-.155-.873-.328-1.16-.511-.334-.213-.636-.408-.898-.579-.42-.273-.637-.365-.861-.365-.572 0-1.107.097-1.589.288a3.816 3.816 0 00-1.245.782 4.92 4.92 0 00-.866 1.129 6.92 6.92 0 00-.574 1.303c-.138.43-.253.9-.342 1.398-.089.493-.149.96-.178 1.39-.03.421-.044.858-.044 1.3 0 1.148.365 2.078 1.085 2.763C3.6 21.657 4.54 22 5.685 22H16.28c1.144 0 2.084-.343 2.795-1.02.72-.685 1.085-1.615 1.085-2.764 0-.443-.015-.88-.044-1.299z" />
      </G>
      <Defs>
        <ClipPath id="clip0_933_902">
          <Path fill="#fff" d="M0 0H22V22H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
