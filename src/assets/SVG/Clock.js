import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      width={26}
      height={26}
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M9.23.833C4.174.833.061 4.945.061 10c0 5.054 4.113 9.166 9.167 9.166 5.055 0 9.167-4.112 9.167-9.166 0-5.055-4.112-9.167-9.167-9.167zm5.27 10.083H8.312V4.5h1.834v4.583H14.5v1.833z"
        fill="#2196F3"
      />
    </Svg>
  );
}

export default SvgComponent;
