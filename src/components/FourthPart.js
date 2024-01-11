import './FourthPart.css';
import React, {useState} from 'react';



function FourthPart()
{
    const [sliderValue, setSliderValue] = useState(0);

    function handleSliderChange(event)
    {
        setSliderValue(event.target.value);
    }

    const [slider2Value, setSlider2Value] = useState(0);

    function handleSlider2Change(event)
    {
        setSlider2Value(event.target.value);
    }
    
    const sliderTrackStyle = {
        background: `linear-gradient(to right,#0000FF 0%, #3498db ${sliderValue}%, #d3d3d3 ${sliderValue}%, #d3d3d3 100%)`
      }; 

    const slider2TrackStyle = {
        background: `linear-gradient(to right,#0000FF 0%, #3498db ${slider2Value}%, #d3d3d3 ${slider2Value}%, #d3d3d3 100%)`
      };   

    return(
        <div className='slider_third_part'>
              <h3 className='retirement_heading'>Retirement Strategy</h3>
              <h4 className='emp_contri'>Employee Contribution</h4>
              <div className='Econtri_slider' >
                    <input  className ='slider' id='blue' type="range" min="0" max="100" value={sliderValue} onChange={handleSliderChange} style={sliderTrackStyle} /> 
                    <p>{sliderValue}%</p>
              </div>
              <h4 className='ret_age'>Retirement Age</h4>
              <div className='Ret_slider'>
                   <input className ='slider' id='blue' type="range" min="0" max="100" value={slider2Value} onChange={handleSlider2Change} style={slider2TrackStyle}/> 
                    <p>{slider2Value}</p>
              </div>
              <hr className='slider_hr'></hr>
              <div className='contri_interest'>
                <div className='Econtribute'><h4>Employer Contribution</h4><h4> 8.4% </h4></div>
                <div className='Interest_R'><h4> Interest Rate</h4><h4> 5% </h4></div>
              </div>
              <button className='Update_button'>Update</button>

              <button className='View_help_docs'> View Help Docs ⮚</button>
            
            <div className='Fourth_last'>
                <div className='last_hr_blue'><hr></hr></div>
                <div className='last_lines'>
                  <p className='last_p_b'>Are you considering a <br/><b>Housing Advance?</b></p>
                  <p className='last_p'>Limited time reduced interest.</p>
                  <button className='last_butt_learn_more'> Learn More ⮚</button>
                </div>
            </div>
        </div>
 );
}

export default FourthPart ;
