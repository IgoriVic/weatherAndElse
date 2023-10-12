import React, { useState } from 'react';
import './PlanetDropdown.scss';
import earthGif from '../../../store/GifStore/Earth.gif';
import jupiterGif from '../../../store/GifStore/Jupiter.gif';
import marsGif from '../../../store/GifStore/Mars.gif';
import mercuryGif from '../../../store/GifStore/Mercury.gif';
import neptuneGif from '../../../store/GifStore/Neptune.gif';
import saturnGif from '../../../store/GifStore/Saturn.gif';
import uranusGif from '../../../store/GifStore/Uranus.gif';
import venusGif from '../../../store/GifStore/Venus.gif';
import planetsDescription from '../../../store/TextForPlanets/text-for-planets.json';

const gifStore = {
  Mercury: mercuryGif,
  Venus: venusGif,
  Earth: earthGif,
  Mars: marsGif,
  Jupiter: jupiterGif,
  Saturn: saturnGif,
  Uranus: uranusGif,
  Neptune: neptuneGif,
};

type GifsType = keyof typeof gifStore;

const PlanetsDropdown: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<GifsType>('Earth');

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value as GifsType);
  };

  return (
    <div className='main-wrapper'>
      <div className='dropdown-wrapper'>
        <div>
          <label htmlFor='dropdown'>Select a Planet</label>
          <select
            name='dropdown'
            id='select-planet'
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <option value='' disabled hidden></option>
            {Object.keys(gifStore).map((key) => (
              <option value={key} key={key}>
                {key}
              </option>
            ))}
          </select>
        </div>
        <div className='text-scroll'>
          <div className='text'>{planetsDescription[selectedOption]}</div>
        </div>
      </div>
      <div className='planet-display'>
        <div className='planet'>
          <img src={gifStore[selectedOption]} alt='Planet' />
        </div>
      </div>
    </div>
  );
};

export default PlanetsDropdown;
