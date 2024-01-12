import React from 'react';
import HorizontalChart from './components/HorizontalChart';
import './App.css';


const data = [
  // ... existing data
  { date: '03-06', forcefulBrowsing: 260, sessionTamper: 1220, injectionAttacks: 2170, protocolViolations: 2240, jsonViolations: 200, sqlViolations: 180, botAttacks: 250, botMitigation: 190, authAttacks: 220, clientViolations: 210, fileAttacks: 230, limitViolations: 240, graphqlViolations: 260 },
  { date: '03-07', forcefulBrowsing: 280, sessionTamper: 1180, injectionAttacks: 2140, protocolViolations: 2260, jsonViolations: 210, sqlViolations: 190, botAttacks: 260, botMitigation: 200, authAttacks: 230, clientViolations: 220, fileAttacks: 240, limitViolations: 250, graphqlViolations: 270 },
  { date: '03-08', forcefulBrowsing: 275, sessionTamper: 1210, injectionAttacks: 2200, protocolViolations: 2290, jsonViolations: 220, sqlViolations: 200, botAttacks: 270, botMitigation: 210, authAttacks: 240, clientViolations: 230, fileAttacks: 250, limitViolations: 260, graphqlViolations: 280 },
  { date: '03-09', forcefulBrowsing: 290, sessionTamper: 1240, injectionAttacks: 2230, protocolViolations: 2320, jsonViolations: 230, sqlViolations: 210, botAttacks: 280, botMitigation: 220, authAttacks: 250, clientViolations: 240, fileAttacks: 260, limitViolations: 270, graphqlViolations: 290 },
  { date: '03-10', forcefulBrowsing: 285, sessionTamper: 1270, injectionAttacks: 2150, protocolViolations: 2300, jsonViolations: 240, sqlViolations: 220, botAttacks: 290, botMitigation: 230, authAttacks: 260, clientViolations: 250, fileAttacks: 270, limitViolations: 280, graphqlViolations: 300 },
  { date: '03-11', forcefulBrowsing: 295, sessionTamper: 1300, injectionAttacks: 2180, protocolViolations: 2330, jsonViolations: 250, sqlViolations: 230, botAttacks: 300, botMitigation: 240, authAttacks: 270, clientViolations: 260, fileAttacks: 280, limitViolations: 290, graphqlViolations: 310 },
  { date: '03-12', forcefulBrowsing: 310, sessionTamper: 1330, injectionAttacks: 2190, protocolViolations: 2350, jsonViolations: 260, sqlViolations: 240, botAttacks: 310, botMitigation: 250, authAttacks: 280, clientViolations: 270, fileAttacks: 290, limitViolations: 300, graphqlViolations: 320 },
  // ... add more data as needed
  { date: '03-13', forcefulBrowsing: 320, sessionTamper: 1360, injectionAttacks: 2160, protocolViolations: 2380, jsonViolations: 270, sqlViolations: 250, botAttacks: 320, botMitigation: 260, authAttacks: 290, clientViolations: 280, fileAttacks: 300, limitViolations: 310, graphqlViolations: 330 },
  { date: '03-14', forcefulBrowsing: 330, sessionTamper: 1390, injectionAttacks: 2140, protocolViolations: 2410, jsonViolations: 280, sqlViolations: 260, botAttacks: 330, botMitigation: 270, authAttacks: 300, clientViolations: 290, fileAttacks: 310, limitViolations: 320, graphqlViolations: 340 },
  { date: '03-14', forcefulBrowsing: 330, sessionTamper: 1390, injectionAttacks: 2140, protocolViolations: 2410, jsonViolations: 280, sqlViolations: 260, botAttacks: 330, botMitigation: 270, authAttacks: 300, clientViolations: 290, fileAttacks: 310, limitViolations: 320, graphqlViolations: 340 },
  { date: '03-15', forcefulBrowsing: 335, sessionTamper: 1420, injectionAttacks: 2120, protocolViolations: 2440, jsonViolations: 290, sqlViolations: 270, botAttacks: 335, botMitigation: 280, authAttacks: 310, clientViolations: 300, fileAttacks: 320, limitViolations: 330, graphqlViolations: 350 },
  { date: '03-16', forcefulBrowsing: 340, sessionTamper: 1450, injectionAttacks: 2100, protocolViolations: 2470, jsonViolations: 300, sqlViolations: 280, botAttacks: 340, botMitigation: 290, authAttacks: 320, clientViolations: 310, fileAttacks: 330, limitViolations: 340, graphqlViolations: 360 },
  { date: '03-17', forcefulBrowsing: 345, sessionTamper: 1480, injectionAttacks: 2080, protocolViolations: 2500, jsonViolations: 310, sqlViolations: 290, botAttacks: 345, botMitigation: 300, authAttacks: 330, clientViolations: 320, fileAttacks: 340, limitViolations: 350, graphqlViolations: 370 },
  { date: '03-18', forcefulBrowsing: 350, sessionTamper: 1510, injectionAttacks: 2060, protocolViolations: 2530, jsonViolations: 320, sqlViolations: 300, botAttacks: 350, botMitigation: 310, authAttacks: 340, clientViolations: 330, fileAttacks: 350, limitViolations: 360, graphqlViolations: 380 },
  { date: '03-19', forcefulBrowsing: 355, sessionTamper: 1540, injectionAttacks: 2040, protocolViolations: 2560, jsonViolations: 330, sqlViolations: 310, botAttacks: 355, botMitigation: 320, authAttacks: 350, clientViolations: 340, fileAttacks: 360, limitViolations: 370, graphqlViolations: 390 },
  { date: '03-20', forcefulBrowsing: 360, sessionTamper: 1570, injectionAttacks: 2020, protocolViolations: 2590, jsonViolations: 340, sqlViolations: 320, botAttacks: 360, botMitigation: 330, authAttacks: 360, clientViolations: 350, fileAttacks: 370, limitViolations: 380, graphqlViolations: 400 },
  { date: '03-21', forcefulBrowsing: 365, sessionTamper: 1600, injectionAttacks: 2000, protocolViolations: 2620, jsonViolations: 350, sqlViolations: 330, botAttacks: 365, botMitigation: 340, authAttacks: 370, clientViolations: 360, fileAttacks: 375, limitViolations: 385, graphqlViolations: 405 },
  { date: '03-22', forcefulBrowsing: 370, sessionTamper: 1630, injectionAttacks: 1980, protocolViolations: 2650, jsonViolations: 360, sqlViolations: 340, botAttacks: 370, botMitigation: 350, authAttacks: 380, clientViolations: 370, fileAttacks: 380, limitViolations: 390, graphqlViolations: 410 },
  { date: '03-23', forcefulBrowsing: 375, sessionTamper: 1660, injectionAttacks: 1960, protocolViolations: 2680, jsonViolations: 370, sqlViolations: 350, botAttacks: 375, botMitigation: 360, authAttacks: 390, clientViolations: 380, fileAttacks: 385, limitViolations: 395, graphqlViolations: 415 },
  { date: '03-24', forcefulBrowsing: 380, sessionTamper: 1690, injectionAttacks: 1940, protocolViolations: 2710, jsonViolations: 380, sqlViolations: 360, botAttacks: 380, botMitigation: 370, authAttacks: 400, clientViolations: 390, fileAttacks: 390, limitViolations: 400, graphqlViolations: 420 },
  { date: '03-25', forcefulBrowsing: 385, sessionTamper: 1720, injectionAttacks: 1920, protocolViolations: 2740, jsonViolations: 390, sqlViolations: 370, botAttacks: 385, botMitigation: 380, authAttacks: 410, clientViolations: 400, fileAttacks: 395, limitViolations: 405, graphqlViolations: 425 },
];

const App = () => {
  return (
    <div className="App">
     <HorizontalChart data={data}/>
    </div>
  );
};

export default App;














