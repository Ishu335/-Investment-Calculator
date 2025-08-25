import { calculateInvestmentResults,formatter } from "../util/investment";
export default function Results ({input}){
    console.log(input);
    const result=calculateInvestmentResults(input)
    console.log(result)
    const initialValueInvestment=result[0].valueEndOfYear-result[0].interest-result[0].annualInvestment;
    return(
        <>
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest Earned</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
            {
                result.map((data) => {
                    const totalInterest =
                        data.valueEndOfYear -
                        data.annualInvestment * data.year -
                        initialValueInvestment;
                    const totalAmoutInvested =
                        initialValueInvestment -totalInterest;

                    return (
                        <tr key={data.year}>
                            <td>{data.year}</td>
                            <td>{formatter.format(data.valueEndOfYear)}</td>
                            <td>{formatter.format(data.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmoutInvested)}</td>
                        </tr>
                    );
                })

            }
            </tbody>
            </table>

        </>
    );
}