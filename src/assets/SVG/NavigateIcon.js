import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      width={31}
      height={31}
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M15.5 20.5a5 5 0 100-10 5 5 0 000 10z" fill="#2196F3" />
      <Path
        d="M16.75 5.586V3h-2.5v2.586a10.013 10.013 0 00-8.664 8.664H3v2.5h2.586a10.01 10.01 0 008.664 8.664V28h2.5v-2.586a10.008 10.008 0 008.664-8.664H28v-2.5h-2.586a10.01 10.01 0 00-8.664-8.664zM15.5 23C11.364 23 8 19.636 8 15.5S11.364 8 15.5 8s7.5 3.364 7.5 7.5-3.364 7.5-7.5 7.5z"
        fill="#2196F3"
      />
    </Svg>
  );
}

export default SvgComponent;
