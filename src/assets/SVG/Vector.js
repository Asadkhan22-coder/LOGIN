import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      width={23}
      height={24}
      viewBox="0 0 23 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M20.5 17.125h2.25v2.25H.25v-2.25H2.5V9.25a9 9 0 1118 0v7.875zm-12.375 4.5h6.75v2.25h-6.75v-2.25z"
        fill="#000"
      />
    </Svg>
  );
}

export default SvgComponent;
