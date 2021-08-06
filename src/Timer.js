/* eslint-disable no-redeclare */
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useGlobalContext } from './context';

const Timer = () => {
  const { selectedFont, actionText, colorChoosed } = useGlobalContext();

  if (selectedFont === 'Kumbh Sans') {
    var marginValue = 15;
    var letterSpace = -5;
    var fontSizeForFont = 100;
  } else if (selectedFont === 'Roboto Slab') {
    var marginValue = -20;
    var letterSpace = 0;
    var fontSizeForFont = 105;
  } else if (selectedFont === 'Space Mono') {
    var marginValue = -15;
    var letterSpace = -5;
    var fontSizeForFont = 95;
  }

  return (
    <>
      <button className='action-text-div' style={{ fontFamily: selectedFont }}>{actionText}</button>
      <div className="main-div-timer">
        <div className="second-circle">
          <div className="progress-bar">
            <CircularProgressbarWithChildren
              value={82}
              strokeWidth={4}
              // text="17:59"
              styles={{
                path: {
                  stroke: colorChoosed,
                },
                trail: {
                  stroke: "transparent",
                },
              }}>
              <div className="div-timer" style={{ fontFamily: selectedFont, fontStyle: "normal", fontWeight: 'bold', fontSize: fontSizeForFont, textAlign: 'center', letterSpacing: letterSpace, color: "#D7E0FF", marginTop: marginValue }}>
                17:59
              </div>
            </CircularProgressbarWithChildren>
          </div>
        </div>
      </div>
    </>
  )
}

export default Timer