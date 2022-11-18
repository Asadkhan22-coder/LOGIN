import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 18 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M16.555 2.779L9.222.945a.887.887 0 00-.444 0L1.445 2.78a.917.917 0 00-.695.888v9.884a4.557 4.557 0 002.154 3.887l5.61 3.506a.917.917 0 00.972 0l5.61-3.506a4.556 4.556 0 002.154-3.887V3.667a.916.916 0 00-.695-.888z"
        fill="#2196F3"
      />
    </Svg>
  );
}

export default SvgComponent;
