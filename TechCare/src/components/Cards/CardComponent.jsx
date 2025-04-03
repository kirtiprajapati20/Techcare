import React from 'react';
import Heart from '../../assets/images/HeartBPM.png';
import respiratory from '../../assets/images/respiratory.png';
import temperature from '../../assets/images/temperature.png';
import ArrowDown from '../../assets/images/ArrowDown.png';
const CardComponent = () => {

  const cardData = [
    {
      id: 1,
      backgroundColor: '#f8d7da',
      icon: respiratory,
      heading: 'Respiratory Rate',
      count: '20 bpm',
      status: 'Normal',
    },
    {
      id: 2,
      backgroundColor: '#cce5ff',
      icon: temperature,
      heading: 'Temperature',
      count: '98.6°F',
      status: 'Normal',
    },
    {
      id: 3,
      backgroundColor: '#d4edda',
      icon: Heart,
      heading: 'Heart Rate',
      count: '78 bpm',
      status: 'Lower than Average',
      secondIcon: ArrowDown,
      
    },
  ];

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        {cardData.map((card) => (
          <div key={card.id} className="col-md-4 mb-4">
            <div
              className="card rounded-4"
              style={{
                backgroundColor: card.backgroundColor,
                width: '228px',
              }}
            >
              <div className="card-body text-start"> 
                <img
                  src={card.icon}
                  alt={card.heading}
                  style={{ width: '96px', height: '96px' }} 
                />
                <p className="mt-4 mb-0" style={{fontSize:'16px'}}>{card.heading}</p>
                <p className="mt-0" style={styles.cardHeading}>{card.count}</p>
                <p><img src={card.secondIcon} className='me-2'/><span className=''>{card.status}</span></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;
const styles={
  cardHeading:{
    color: '#072635',
    font: 'normal normal 800 30px/41px Manrope',
  }
}