import {React} from 'react';
// import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function FormOrder(props){

    function goOk(){
        setTimeout(()=>{
            window.location.assign('http://localhost:3000/cartOrderOk/')
        },500)  
    }

    return(
        <>  
             <Formik
                initialValues={{
                    fullName: '',
                    email: '',
                    address: '',
                    phone: '',
                    message: ''
                }}
                onSubmit={async (values) => {
                    await sleep(500);
                    const response = await fetch("http://localhost:5000/form", {
                        method: "POST",
                        body: JSON.stringify(values, null, 2),
                        headers: {
                            "Content-Type": "application/json",
                        },
                    });
                }}
                >
                {({ isSubmitting }) => (
                <Form className='formOrder'>
                    <div className="formOrder__container">
                        <div className="formOrder__input-block">
                            <div className="formOrder__block">
                                <label className="formOrder__label" htmlFor="fullName">Full Name*</label>
                                <Field className="formOrder__input" required name="fullName" placeholder="Your Full Name" type="text"/>
                            </div>
                        
                            <div className="formOrder__block">
                                <label className="formOrder__label" htmlFor="email">Your Email*</label>
                                <Field className="formOrder__input" required name="email" placeholder="Enter yourexample@yourmail.com" type="email" />
                                
                            </div>

                            <div className="formOrder__block">
                                <label className="formOrder__label" htmlFor="address">Address*</label>
                                <Field className="formOrder__input" required name="address" placeholder="Enter your company  address" type="text" />
                            </div>

                            <div className="formOrder__block">
                                <label className="formOrder__label" htmlFor="phone">Phone number*</label>
                                <Field className="formOrder__input" required name="phone" placeholder="Enter your phone number" type="text" />
                            </div>
                        
                            <div className="formOrder__block">
                                <label className="formOrder__label" htmlFor="message">Message</label>
                                <Field className="formOrder__textarea" cols='50' wrap='soft' maxLength='255' name="message" placeholder="Enter your some extra informations" type="textarea" />
                            </div>
                        </div>
                      
                        <button  type="submit" disabled={isSubmitting} onClick={goOk}>
                            Confifm
                        </button>
                    </div>
                </Form>
            )}
            </Formik>
        </>
    )
}

export default FormOrder;
// 

