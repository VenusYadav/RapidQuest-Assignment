import './HomePage.css';

import ThirdPart from './ThirdPart' ;
import FourthPart from './FourthPart' ;
import SecondPart from './SecondPart' ;

function HomePage() {
  return (
     <div className='entire_view'>
      <div className='Sec_P'>
            <SecondPart/>
      </div>
      <div className='Thi_P'>
            <ThirdPart/>
      </div>
      <div className='Fou_P'>
            <FourthPart/>
      </div>
        
     </div>
  );
}

export default HomePage ;
