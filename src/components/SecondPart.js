import './SecondPart.css';
import { useState } from 'react'; 

function SecondPart()
{
    const[showOptions, setShowOptions] = useState(false);
    function toggleOptions()
    {
        setShowOptions(!showOptions);
    }

    const [selectedOption, setSelectedOption] = useState(null);
    function handleOptionsClick(option)
    {
         setSelectedOption(option);
    }
    return(
           <div className='wantto_Second_part'>
                 <div className='img-profileName'>
                    <img className ='profile-img' src='https://img.freepik.com/free-vector/beautiful-girl-with-ponytail-sunglasses_1196-912.jpg?w=740&t=st=1704774847~exp=1704775447~hmac=6b98b56e0d012034fbeeb4b1f39879c8df29586190fa45b19a56a84a44a10000' width='60px' height='60px'></img>
                    <div className='profileName'>
                        <h2>Hi Mike,</h2>
                        <p className='profileName-p'>welcome back</p>
                    </div>
                 </div>
                <div>
                    <h3>Today</h3>
                    <div className='dolor1-para'>
                        <h1 className='dolor'>&#36;19,892</h1>
                        <p className='para'>Account Balance</p>
                    </div>
                    <div className='dolor2-para'>
                        <h3 className='dolor'>&#36;4,000</h3>
                        <p className='para'>Year-to-Date contributions</p>
                    </div>
                    <div className='dolor3-para'>
                        <h3 className='dolor'>&#36;1,892</h3>
                        <p className='para'>Total Interest</p>
                    </div>
                    <div>
                        <button className='toggle_button' onClick={toggleOptions}>I want to {showOptions ?  '⮝' :  '⮟'}</button>
                       
                        {showOptions && (
                                <div className='options'>
                                    <button onClick={()=>handleOptionsClick('Option 1')}
                                    className={selectedOption ==='Option 1' ? 'selectedOption':''}
                                    >Option 1</button>
                                    <button onClick={()=>handleOptionsClick('Option 2')}
                                    className={selectedOption ==='Option 2' ? 'selectedOption':''}
                                    >Option 2</button>
                                    <button onClick={()=>handleOptionsClick('Option 3')}
                                    className={selectedOption ==='Option 3' ? 'selectedOption':''}
                                    >Option 3</button>
                                    <button onClick={()=>handleOptionsClick('Option 4')}
                                    className={selectedOption ==='Option 4' ? 'selectedOption':''}
                                    >Option 4</button>
                                </div>
                                
                        )}
                    </div>

                    <div className='transaction-details'>
                        <h3>Recent Transactions</h3>
                        <div>
                            <p className='date'>2020-08-07</p>
                            <h4 className='details'>Withdrawal Transfer to Bank-XXX11</h4>
                        </div>
                        <hr className='bandDetails_hr'></hr>
                        <div>
                            <p className='date'>2020-08-07</p>
                            <h4 className='details'>Withdrawal Transfer to Bank-XXX11</h4>
                        </div>
                        <hr className='bandDetails_hr'></hr>
                        <div>
                            <p className='date'>2020-08-07</p>
                            <h4 className='details'>Withdrawal Transfer to Bank-XXX11</h4>
                        </div>
                        <hr className='bandDetails_hr'></hr>
                    </div>
                    

                </div>
                 
           </div>
    );
}

export default SecondPart ;
