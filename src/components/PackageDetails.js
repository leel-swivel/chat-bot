import React from 'react';

class PlanDetails extends React.Component {
    render() {
        const { planName, price, smsCount, gbCount } = this.props;

        return (
            <div>
                <div style={{textAlign: 'center', fontSize: 24, fontWeight: 'bold'}}>
                    {planName}
                </div>
                <div style={{fontSize: 18, color: '#999'}}>
                    Rs. {price}.00<br/>
                    Per Month
                </div>
                <div style={{fontSize: 16, marginTop: 15}}>
                    Unlimited D2D Voice<br/>
                    {smsCount} D2D SMS & {gbCount}GB with data rollover & sharing
                </div>
                <div style={{fontSize: 12, marginTop: 10}}>
                    Applicable taxes to be added to the rental
                </div>
                <div style={{textAlign: 'center', marginTop: 20}}>
                    <button style={{backgroundColor: '#f00', color: '#fff', padding: 10}}>
                        GET PACKAGE
                    </button>
                </div>
                <div style={{fontSize: 12, textAlign: 'center'}}>
                    Terms Conditions apply
                </div>


            </div>
        );
    }
}

export default PlanDetails;