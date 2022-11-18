import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      width={16}
      height={13}
      viewBox="0 0 16 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M15.24 7.315a.423.423 0 00-.25-.4L1.525.908a.423.423 0 00-.539.598l3.066 5.29a.261.261 0 01-.008.274L.647 12.214a.423.423 0 00.5.63l13.817-5.146a.424.424 0 00.275-.383z"
        fill="#59A7FF"
      />
    </Svg>
  );
}

export default SvgComponent;
