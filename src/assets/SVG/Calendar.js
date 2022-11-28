import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      width={26}
      height={26}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M.833 16.416c0 1.559 1.192 2.75 2.75 2.75h12.834c1.558 0 2.75-1.191 2.75-2.75V9.083H.833v7.333zm15.584-13.75h-1.834V1.75c0-.55-.366-.917-.916-.917s-.917.367-.917.917v.916h-5.5V1.75c0-.55-.367-.917-.917-.917s-.916.367-.916.917v.916H3.583c-1.558 0-2.75 1.192-2.75 2.75V7.25h18.334V5.416c0-1.558-1.192-2.75-2.75-2.75z"
        fill="#2196F3"
      />
    </Svg>
  );
}

export default SvgComponent;
