import React, {Component} from "react";

class MobilePackages extends Component {
    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //         name: '',
    //         gender: '',
    //         age: '',
    //     };
    // }
    //
    // componentWillMount() {
    //     const {steps} = this.props;
    //     const {name, gender, age} = steps;
    //
    //     this.setState({name, gender, age});
    // }

    render() {
        // const {name, gender, age} = this.state;
        return (
            <div style={{width: '100%'}}>
                {/*<MobilePackages planName="POWERPLAN 600" price="600" smsCount="500" gbCount="5GB"/>*/}
                {/*<MobilePackages planName="POWERPLAN 700" price="700" smsCount="700" gbCount="10GB"/>*/}
                {/*<MobilePackages planName="POWERPLAN 900" price="900" smsCount="900" gbCount="15GB"/>*/}

                <div>
                    <div style={{textAlign: 'center', fontSize: 24, fontWeight: 'bold'}}>
                        <b>POWER PLAN 600</b>
                    </div>
                    <div style={{fontSize: 18, color: '#999'}}>
                        Rs. 600.00<br/>
                        Per Month
                    </div>
                    <div style={{fontSize: 16, marginTop: 15}}>
                        Unlimited D2D Voice<br/>
                        500 D2D SMS & 5GB with data rollover & sharing
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
            <br/>

                <div>
                    <div style={{textAlign: 'center', fontSize: 24, fontWeight: 'bold'}}>
                        <b>POWER PLAN 700</b>
                    </div>
                    <div style={{fontSize: 18, color: '#999'}}>
                        Rs. 700.00<br/>
                        Per Month
                    </div>
                    <div style={{fontSize: 16, marginTop: 15}}>
                        Unlimited D2D Voice<br/>
                        700 D2D SMS & 7GB with data rollover & sharing
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


            </div>
        );
    }
}


export default MobilePackages;