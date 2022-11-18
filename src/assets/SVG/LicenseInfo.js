import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 24 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M2 0h20c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0zm15 4A2 2 0 1017 7.999a2 2 0 00.001-4zm-4 10h8v-2a2 2 0 00-2-1.999L15 10a2 2 0 00-2 2v2zM3 14h8v-2H3v2zm0-4h8V8H3v2zm0-4h10V4H3v2z"
        fill="#2196F3"
      />
    </Svg>
  );
}

export default SvgComponent;
