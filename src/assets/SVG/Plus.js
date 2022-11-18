import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      width={11}
      height={12}
      viewBox="0 0 11 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11 5.987c0 .507-.044.917-.55.917H6.416v4.032c0 .506-.41.551-.917.551-.507 0-.917-.045-.917-.55V6.903H.551c-.506 0-.551-.41-.551-.917 0-.507.045-.916.55-.916h4.033V1.038c0-.507.41-.55.917-.55.507 0 .917.043.917.55v4.033h4.032c.507 0 .551.41.551.916z"
        fill="#2196F3"
      />
    </Svg>
  );
}

export default SvgComponent;
