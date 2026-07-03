import Svg, { Path } from "react-native-svg";

export interface LineSeries {
  data: number[];
  color: string;
  dashed?: boolean;
  strokeWidth?: number;
}

interface LineChartProps {
  series: LineSeries[];
  max: number;
  width: number;
  height: number;
}

/** Line chart supporting multiple series (solid or dashed), drawn with react-native-svg. */
export function LineChart({ series, max, width, height }: LineChartProps) {
  if (max <= 0) return null;

  return (
    <Svg width={width} height={height}>
      {series.map((s, si) => {
        if (s.data.length < 2) return null;
        const sw = s.strokeWidth ?? 3;
        const n = s.data.length;
        const pad = sw;
        const x = (i: number) => (i / (n - 1)) * (width - pad * 2) + pad;
        const y = (v: number) => height - pad - (Math.min(v, max) / max) * (height - pad * 2);
        const d = s.data
          .map((v, i) => `${i === 0 ? "M" : "L"} ${x(i).toFixed(1)} ${y(v).toFixed(1)}`)
          .join(" ");
        return (
          <Path
            key={si}
            d={d}
            stroke={s.color}
            strokeWidth={sw}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray={s.dashed ? `${sw * 2} ${sw * 2}` : undefined}
          />
        );
      })}
    </Svg>
  );
}
