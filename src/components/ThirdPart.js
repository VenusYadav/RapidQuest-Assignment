import './ThirdPart.css';

function ThirdPart()
{
    return(
        <div className='Graph_Second_part'>
              <h3 className='third_first_ele'>Retirement Income</h3>
              <h2 className='third_sec_ele'>Starting Year 2056</h2>

              <div className='third_third_ele'>
                    <div className='money_para_hr'>
                         <h2 className='dolor'>&#36;300,000</h2>
                         <p className='third_p'>My Goal</p>
                         <hr className='third_hr_blue'></hr>
                    </div>
                    <div className='money_para_hr'>
                         <h2 className='Third_percent'>59%</h2>
                         <p className='third_p'>Goal Achieved</p>
                         <hr className='third_hr_blue'></hr>
                    </div>
                    <div className='money_para_hr'>
                         <h2 className='dolor'>&#36;300</h2>
                         <p className='third_p'>Est.Montly Income</p>
                         <hr className='third_hr_blue'></hr>
                    </div>
              </div>
          <h3 className='contri_heading'>Contributions Overtime</h3>
            <div className='graphg_contri'>
              <div className='contri_overtime'>
                   <div className='ks_value'>
                        <div className='dot1'></div>
                        <p className='contri_para'>Employer:</p>
                        <h5>K 73,500</h5>
                   </div>
                   <div className='ks_value'>
                        <div className='dot2'></div>
                        <p className='contri_para'>Employee:</p>
                        <h5>K 52,500</h5>
                   </div>
                   <div className='ks_value'>
                        <div className='dot3'></div>
                        <p className='contri_para'>Total Interest:</p>
                        <h5>K 244,313</h5>
                   </div>
                </div>
                <img src='https://i.im.ge/2024/01/10/3CzXKK.mockuplike-graph-img.jpg' width='' height=''></img>
            </div>
            
            <div className='compare_age_sal_gen'>
                 <h3 className='compare_heading'>How do I compare to my peers?</h3>
                 <p className='compare_para'>These numbers represent current goal achievement</p>
                 <div className='age_sal_gen_avg_top_me'>
                    <div className='age_sal_gen'>
                          <div className='Age'> <h4>Age:</h4> <p className='Age_para'> Under 30 ⮟</p></div>
                          <hr className='compare_hr'></hr>
                          <div className='Salary'> <h4>Salary:</h4> <p className='Salary_para'> K 20 - K 30 ⮟</p></div>
                          <hr className='compare_hr'></hr>
                          <div className='Gender'><h4>Gender:</h4> <p className='Gender_para'> Male ⮟</p></div>  
                    </div>
                    <img className='avg_top_me' src='https://i.im.ge/2024/01/11/3EDdo4.mockuplike-avg-top-me-img.png' width='' height=''></img>
                 </div>
            </div>
        </div>
 );
}

export default ThirdPart ;
