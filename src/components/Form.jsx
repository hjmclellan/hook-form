import React, {useState} from 'react';

const Form = props => {
    // const [first, setFirst] = useState("");
    // const [last, setLast] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [cpassword, setCPassword] = useState("");
    const {inputs,setInputs}=props;
    const onChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };
    return (
        <div className="border border-rounded m-5 w-50 mx-auto center">
            <form>
                <div className="form-group">
                    <label for="first">First name:</label>
                    <input onChange={onChange} type="text" name="first" className="form-control" />
                </div>

                <div className="form-group">
                    <label for="last">Last name:</label>
                    <input onChange={onChange} type="text" name="last" className="form-control" />
                </div>

                <div className="form-group">
                    <label for="email">Email:</label>
                    <input onChange={onChange} type="text" name="email" className="form-control" />
                </div>

                <div className="form-group">
                    <label for="password">Password:</label>
                    <input onChange={onChange} type="password" name="password" className="form-control" />
                </div>

                <div className="form-group">
                    <label for="cpassword">Confirm Password:</label>
                    <input onChange={onChange} type="password" name="cpassword" className="form-control" />
                </div>
            </form>
        </div>
    );
};
export default Form;