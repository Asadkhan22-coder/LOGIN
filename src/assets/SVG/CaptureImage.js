import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      width={380}
      height={240}
      viewBox="0 0 335 202"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect
        x={1.07507}
        y={1}
        width={332.925}
        height={199.637}
        rx={19}
        fill="#fff"
        stroke="#2196F3"
        strokeWidth={2}
      />
      <Path
        d="M1.075 20c0-10.493 8.507-19 19-19h28.989v199.637H20.075c-10.493 0-19-8.506-19-19V20zM286.011 1H315c10.493 0 19 8.507 19 19v161.637c0 10.494-8.507 19-19 19h-28.989V1z"
        fill="#fff"
        stroke="#2196F3"
        strokeWidth={2}
      />
      <Path
        stroke="#2196F3"
        d="M70.5594 21.9009H264.5154V179.73590000000002H70.5594z"
      />
      <Path
        d="M82.469 55.643V34.242h21.401M234.415 34.242h21.401v21.4M103.87 169.067H82.469v-21.401M255.816 147.666v21.401h-21.401"
        stroke="#2196F3"
        strokeWidth={3}
        strokeLinecap="round"
      />
      <Rect
        x={22.0702}
        y={79.4175}
        width={5.99866}
        height={42.8019}
        rx={2.99933}
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgComponent;
