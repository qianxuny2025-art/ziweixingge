import React from 'react';
import { motion } from 'motion/react';
import { RadarDimension } from '../types';

interface RadarChartProps {
  dimensions: RadarDimension[];
  size?: number;
}

export const RadarChart: React.FC<RadarChartProps> = ({
  dimensions,
  size = 320,
}) => {
  const center = size / 2;
  const radius = size * 0.38;
  const total = dimensions.length;

  // Calculate coordinates on a regular polygon
  const getCoordinates = (index: number, distanceRate: number) => {
    // Start from top (-90 degrees)
    const angle = (Math.PI * 2 * index) / total - Math.PI / 2;
    const x = center + radius * distanceRate * Math.cos(angle);
    const y = center + radius * distanceRate * Math.sin(angle);
    return { x, y, angle };
  };

  // Concentric polygon grid rings
  const gridLevels = [0.25, 0.5, 0.75, 1.0];

  const gridPolygons = gridLevels.map((level) => {
    return dimensions
      .map((_, i) => {
        const { x, y } = getCoordinates(i, level);
        return `${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(' ');
  });

  // Data polygon coordinates
  const dataPoints = dimensions.map((dim, i) => {
    // scale value 0-100 to 0.15 - 1.0 for visual balance
    const rate = 0.15 + (Math.max(10, Math.min(100, dim.value)) / 100) * 0.85;
    return getCoordinates(i, rate);
  });

  const dataPolygonString = dataPoints
    .map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`)
    .join(' ');

  return (
    <div className="flex flex-col items-center justify-center w-full my-2">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative"
        style={{ width: size, height: size }}
      >
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="overflow-visible"
        >
          {/* Background concentric polygons */}
          {gridPolygons.map((points, idx) => (
            <polygon
              key={idx}
              points={points}
              fill={idx === 3 ? '#F9F5EC' : 'none'}
              stroke="#E8DFCF"
              strokeWidth={idx === 3 ? 1.5 : 1}
              strokeDasharray={idx < 3 ? '2 2' : undefined}
            />
          ))}

          {/* Axis lines from center to outer points */}
          {dimensions.map((_, i) => {
            const { x, y } = getCoordinates(i, 1.0);
            return (
              <line
                key={i}
                x1={center}
                y1={center}
                x2={x}
                y2={y}
                stroke="#E4DAC8"
                strokeWidth="1"
              />
            );
          })}

          {/* Data Filled Polygon */}
          <motion.polygon
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ transformOrigin: `${center}px ${center}px` }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            points={dataPolygonString}
            fill="#8C6628"
            fillOpacity="0.18"
            stroke="#8C6628"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />

          {/* Data Vertex Circles */}
          {dataPoints.map((point, i) => (
            <motion.circle
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 + i * 0.05, duration: 0.3 }}
              cx={point.x}
              cy={point.y}
              r="3.5"
              fill="#8C6628"
              stroke="#FAF7F2"
              strokeWidth="1.5"
            />
          ))}
        </svg>

        {/* Labels at outer edges */}
        {dimensions.map((dim, i) => {
          const { angle } = getCoordinates(i, 1.0);
          // offset labels outside the perimeter
          const labelDist = radius + 28;
          const lx = center + labelDist * Math.cos(angle);
          const ly = center + labelDist * Math.sin(angle);

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none whitespace-nowrap"
              style={{
                left: `${lx}px`,
                top: `${ly}px`,
              }}
            >
              <div className="text-[12px] font-medium text-[#4D453A]">
                {dim.label}
              </div>
              <div className="text-[13px] font-semibold text-[#8C6628] leading-none mt-0.5 font-serif-cn">
                {dim.value}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
