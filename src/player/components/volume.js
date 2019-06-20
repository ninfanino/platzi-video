import React from 'react'
import VolumenIcon from '../../icons/components/volumen';
import './volume.css'

function Volume(props) {
    return(
        <button className="Volume" onClick={props.handleVolumeClick}>
            <VolumenIcon 
                color="white"
                size={15}
            />
            <div className="Volume-range">
                <input 
                    type="range"
                    min={0}
                    max={1}
                    step={.05}
                    onChange={props.handleVolumeChange}
                    />
            </div>
        </button>
    )
}
export default Volume