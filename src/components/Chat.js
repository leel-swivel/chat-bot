import React, {Component, useRef} from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import MobilePackages from "./MobilePackages";
import emailjs from '@emailjs/browser';
import axios from "axios";

class Review extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            gender: '',
            age: '',
            emailAddress: '',
        };
    }


    componentWillMount() {
        const {steps} = this.props;
        const {name, gender, age, emailAddress} = steps;

        this.setState({name, gender, age, emailAddress});
    }

    render() {
        const {name, gender, age, emailAddress} = this.state;
        return (
            <div style={{width: '100%'}}>
                <h3>Summary</h3>
                <table>
                    <tbody>
                    <tr>
                        <td>Name</td>
                        <td>{name.value}</td>
                    </tr>
                    {/*<tr>*/}
                    {/*    <td>Gender</td>*/}
                    {/*    <td>{gender.value}</td>*/}
                    {/*</tr>*/}
                    {/*<tr>*/}
                    {/*    <td>Age</td>*/}
                    {/*    <td>{age.value}</td>*/}
                    {/*</tr>*/}
                    <tr>
                        <td>Email</td>
                        <td>{emailAddress.value}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// function sendMail(prop){
//     console.log('sneding email');
//     return null;
// }

Review.propTypes = {
    steps: PropTypes.object,
};

Review.defaultProps = {
    steps: undefined,
};

class SimpleForm extends Component {


    render() {
        function SendMail(prop) {
            let email = prop.steps.emailAddress.message;
            console.log('sneding email', email);

            //
            // emailjs.sendForm('service_mnr3zvi', 'template_w3s98nr', null, 'jIVYQcqkK3pAtO_U_')
            //     .then((result) => {
            //         console.log(result.text);
            //     }, (error) => {
            //         console.log(error.text);
            //     });

            var data = {
                service_id: 'service_mnr3zvi',
                template_id: 'template_mgnbhbd',
                user_id: 'jIVYQcqkK3pAtO_U_',
                template_params: {
                    'username': 'James',
                    'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
                }
            };

            axios.post('https://api.emailjs.com/api/v1.0/email/send', data)
                .then(response => console.log(response));













        }

        return (

            <ChatBot
                steps={[
                    {
                        id: '1',
                        message: 'Hello! I\'m Chat Buddy, your friendly assistant. May I know your name?',
                        trigger: 'name',
                    },
                    {
                        id: 'name',
                        user: true,
                        trigger: '3',
                    },
                    {
                        id: '3',
                        message: 'Hi {previousValue}! What are your interests, or do you need any help?',
                        trigger: 'gender',
                    },
                    {
                        id: 'gender',
                        options: [
                            {value: 'mobile_packages', label: 'Mobile Packages', trigger: 'mobile_packages'},
                            {value: 'television_packages', label: 'Television Packages', trigger: '5'},
                            {value: 'support', label: 'Support', trigger: '5'}
                        ],
                    },

                    {
                        id: 'mobile_packages',
                        component: <MobilePackages/>,
                        asMessage: true,
                        trigger: 'need_help',
                    },

                    {
                        id: 'need_help',
                        message: 'Do you need any help?',
                        trigger: 'help'
                    },

                    {
                        id: 'help',
                        options: [
                            {value: 'yes', label: 'Yes', trigger: '3'},
                            {value: 'no', label: 'No', trigger: 'email_chat'}
                        ],
                    },

                    {
                        id: 'email_chat',
                        message: 'Do you want to receive this chat as an email to your inbox?',
                        trigger: 'email'
                    },


                    {
                        id: 'email',
                        options: [
                            {value: 'yes', label: 'Yes', trigger: 'enter_email'},
                            {value: 'no', label: 'No'}
                        ],
                    },

                    {
                        id: 'enter_email',
                        message: 'Enter your email',
                        trigger: 'emailAddress'

                    },
                    {
                        id: 'emailAddress',
                        user: true,
                        trigger: 'send_email',
                        validator: (value) => {
                            if (emailPattern.test(value)) {
                                return true
                            } else {
                                return 'Enter valid email address';
                            }
                        },
                    },

                    {
                        id: 'send_email',
                        message: 'email sent!',
                        trigger: 'review1'
                    },
                    {
                        id: 'review1',
                        component: (<SendMail emailAddress/>)
                    },


                    {
                        id: '5',
                        message: 'How old are you?',
                        trigger: 'age',
                    },
                    {
                        id: 'age',
                        user: true,
                        trigger: '7',
                        validator: (value) => {
                            if (isNaN(value)) {
                                return 'value must be a number';
                            } else if (value < 0) {
                                return 'value must be positive';
                            } else if (value > 120) {
                                return `${value}? Come on!`;
                            }

                            return true;
                        },
                    },
                    {
                        id: '7',
                        message: 'Great! Check out your summary',
                        trigger: 'review',
                    },
                    {
                        id: 'review',
                        component: <Review/>,
                        asMessage: true,
                        trigger: 'update',
                    },
                    {
                        id: 'update',
                        message: 'Would you like to update some field?',
                        trigger: 'update-question',
                    },
                    {
                        id: 'update-question',
                        options: [
                            {value: 'yes', label: 'Yes', trigger: 'update-yes'},
                            {value: 'no', label: 'No', trigger: 'end-message'},
                        ],
                    },
                    {
                        id: 'update-yes',
                        message: 'What field would you like to update?',
                        trigger: 'update-fields',
                    },
                    {
                        id: 'update-fields',
                        options: [
                            {value: 'name', label: 'Name', trigger: 'update-name'},
                            {value: 'gender', label: 'Gender', trigger: 'update-gender'},
                            {value: 'age', label: 'Age', trigger: 'update-age'},
                        ],
                    },
                    {
                        id: 'update-name',
                        update: 'name',
                        trigger: '7',
                    },
                    {
                        id: 'update-gender',
                        update: 'gender',
                        trigger: '7',
                    },
                    {
                        id: 'update-age',
                        update: 'age',
                        trigger: '7',
                    },
                    {
                        id: 'end-message',
                        message: 'Thanks! Your data was submitted successfully!',
                        end: true,
                    },
                ]}
                floating={true}
                userAvatar="/avatar.jpg"
                botAvatar="/bot.png"
                headerTitle="Chat Buddy"
                opened={true}
                width="850px"

            />
        );
    }
}

export default SimpleForm;