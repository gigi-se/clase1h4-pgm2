import React, { useState, useEffect } from 'react';
import '../styles/ColorHarmonizer.scss';

interface ColorEntry {
  type: string;
  value: string;
}


const getHarmonizedColors = (h: number): ColorEntry[] => [
  { type: 'Base',           value: `hsl(${h}, 70%, 50%)` },
  { type: 'Complementario', value: `hsl(${(h + 180) % 360}, 70%, 50%)` },
  { type: 'Triada A',       value: `hsl(${(h + 120) % 360}, 70%, 50%)` },
  { type: 'Triada B',       value: `hsl(${(h + 240) % 360}, 70%, 50%)` },
];


const ColorSquare: React.FC<{ colors: ColorEntry[] }> = ({ colors }) => (
  <div className="color-square">
    {colors.map((c) => (
      <div
        key={c.type}
        // className="quadrant"
        style={{ background: c.value }}
      >
        {/* <span className="quadrant-label">{c.type}</span> */}
      </div>
    ))}
  </div>
);


const ManualPanel: React.FC = () => {
  const [hue, setHue] = useState<number>(180);
  const colors = getHarmonizedColors(hue);

  return (
    <section className="panel">
      {/* <p className="panel-title">Control manual</p> */}

      <div className="hue-slider-wrap">
        {/* <label>Tono base — H</label> */}
        <input
          type="range"
          min={0}
          max={360}
          value={hue}
          onChange={(e) => setHue(Number(e.target.value))}
        />
        {/* <span className="hue-value">{hue}°</span> */}
      </div>

      <ColorSquare colors={colors} />
    </section>
  );
};

const RandomPanel: React.FC = () => {
  const [hue, setHue] = useState<number>(Math.floor(Math.random() * 360));
  const colors = getHarmonizedColors(hue);

  useEffect(() => {
    const interval = setInterval(() => {
      setHue(Math.floor(Math.random() * 360));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="panel">
      {/* <p className="panel-title">Aleatorio</p> */}

      {/* <div className="random-badge">
        <span className="dot" />
        Cambia cada 3 s — H actual: {hue}°
      </div> */}

      <ColorSquare colors={colors} />
    </section>
  );
};

const ColorHarmonizer: React.FC = () => (
  <div className="app">
    <h1>Color <span>/</span> Harmonizer</h1>
    <div className="harmonizer-wrapper">
      <ManualPanel />
      <RandomPanel />
    </div>
  </div>
);

export default ColorHarmonizer;