export default function Input({onChnageInput,userInput})
{
 
    return(
        <>
        <div id="user-input">
            <form>
          <div className="input-group">
            <div>
              <label htmlFor="initial">Initial Investment</label>
              {/* requreda means value must be enter */}
              <input type="number" value={userInput.initialInvestment} onChange={(event)=>onChnageInput('initialInvestment',event.target.value)} id="initial" required name="initial" />
            </div>
            <div>
              <label htmlFor="annual">Annual Investment</label>
              <input type="number" value={userInput.annualInvestment} onChange={(event)=>onChnageInput('annualInvestment',event.target.value)} id="annual" required name="annual" />
            </div>
          </div>

          <div className="input-group">
            <div>
              <label htmlFor="return">Expected Return (%)</label>
              <input type="number" value={userInput.expectedReturn} onChange={(event)=>onChnageInput('expectedReturn',event.target.value)} id="return" required name="return" />
            </div>
            <div>
              <label htmlFor="duration">Duration (Years)</label>
              <input type="number" value={userInput.duration} onChange={(event)=>onChnageInput('duration',event.target.value)} id="duration" required name="duration" />
            </div>
          </div>
        </form>
        </div>
        </>
    );
}