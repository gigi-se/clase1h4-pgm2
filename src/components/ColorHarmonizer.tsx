import React, { useState } from 'react';
import './../styles/ColorHarmonizer.css';

const ColorHarmonizer: React.FC = () => {
    const [hue ,setHue ] = useState<number>(180);
     const getHarmonizedColors = (h: number) => {
        {type: 'Base', value: hsl(${h}, 70%, 50%)},
        {type: 'Complementario', value: hsl(${(h + 180) % 360}, 70%, 50%)},
        {type: 'Triada A', value: hsl(${(h + 120) % 360}, 70%, 50%)},
        {type: 'Triada B', value: hsl(${(h + 240) % 360}, 70%, 50%)}
return(
    <section className="color-harmonies">
``        <h2>Color Harmonizer</h2>
        <input
            type="range"
            min="0"
            max="360"
            value={hue}
            onChange={(e) => setHue(e.target.value)}
        />
        <div className="grid">
            {getHarmonies(hue).map((c) => (
                <div 
                key={c.type} 
                className="card" 
                style={{ background: c.val }}
                >
            <span>{c.type}</span>
            
        </div>
            ))]
        </div>
    </section>
    
);