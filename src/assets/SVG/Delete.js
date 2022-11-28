import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      width={13}
      height={15}
      viewBox="0 0 13 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1.5 13.042c0 .87.75 1.583 1.667 1.583h6.666c.917 0 1.667-.713 1.667-1.583v-9.5h-10v9.5zM12.333 1.167H9.416L8.583.375H4.416l-.833.792H.667V2.75h11.666V1.167z"
        fill="#DC2127"
      />
    </Svg>
  );
}

export default SvgComponent;
