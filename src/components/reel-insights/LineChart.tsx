import Svg, { Line, Path } from "react-native-svg";

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
  /** Values to draw horizontal gridlines at (e.g. [0, 200, 400]). */
  gridValues?: number[];
  gridColor?: string;
}

/** Line chart supporting multiple series (solid or dashed), drawn with react-native-svg. */
export function LineChart({
  series,
  max,
  width,
  height,
  gridValues,
  gridColor = "#F8F8F8",
}: LineChartProps) {
  if (max <= 0) return null;

  // Shared vertical inset so gridlines line up with the series' 0 / max points.
  const pad = Math.max(1, ...series.map((s) => s.strokeWidth ?? 3));
  const yFor = (v: number) => height - pad - (Math.min(v, max) / max) * (height - pad * 2);

  return (
    <Svg width={width} height={height}>
      {/* Gridlines (behind the series) */}
      {gridValues?.map((v) => (
        <Line
          key={`grid-${v}`}
          x1={0}
          x2={width}
          y1={yFor(v)}
          y2={yFor(v)}
          stroke={gridColor}
          strokeWidth={2}
        />
      ))}

      {series.map((s, si) => {
        if (s.data.length < 2) return null;
        const sw = s.strokeWidth ?? 3;
        const n = s.data.length;
        const x = (i: number) => (i / (n - 1)) * (width - pad * 2) + pad;
        const d = s.data
          .map((v, i) => `${i === 0 ? "M" : "L"} ${x(i).toFixed(1)} ${yFor(v).toFixed(1)}`)
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
