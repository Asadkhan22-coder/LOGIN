import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M18.25.75H2.667A1.833 1.833 0 00.833 2.583v12.834a1.833 1.833 0 001.834 1.833h14.666a1.834 1.834 0 001.834-1.833V5.333a.917.917 0 00-.917-.916H3.583a.917.917 0 010-1.834h15.584v-.916A.917.917 0 0018.25.75zm-2.292 8.708a1.375 1.375 0 110 2.75 1.375 1.375 0 010-2.75z"
        fill="#2196F3"
      />
    </Svg>
  );
}

export default SvgComponent;
