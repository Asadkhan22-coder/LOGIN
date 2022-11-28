import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M15.988 0l3 3-2.287 2.288-3-3L15.988 0zM5 13.988h3l7.287-7.287-3-3L5 10.988v3z"
        fill="#2196F3"
      />
      <Path
        d="M16 16.988H5.158c-.026 0-.053.01-.079.01-.033 0-.066-.01-.1-.01H2v-14h6.847l2-2H2c-1.103 0-2 .896-2 2v14c0 1.104.897 2 2 2h14a2 2 0 002-2V8.32l-2 2v6.668z"
        fill="#2196F3"
      />
    </Svg>
  );
}

export default SvgComponent;
