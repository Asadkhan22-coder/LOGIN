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
        d="M6.33.177a.422.422 0 00-.395.258L.193 14.015a.423.423 0 00.61.526l5.226-3.17a.261.261 0 01.275.003l5.212 3.295a.423.423 0 00.619-.512L6.718.445a.423.423 0 00-.389-.268z"
        fill="#59A7FF"
      />
    </Svg>
  );
}

export default SvgComponent;
