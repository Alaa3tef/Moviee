import { useState } from "react";

function RegisterForm() {

    const [User, setUser] = useState({
        Name: 'Esraa Salah',
        Email: 'Esraa@gmail.com',
        UserName: 'EsraaSalah',
        Password: '12345678',
        ConfirmPassword: '12345678'
    })

    const [errors, setErrors] = useState({
        NameErr: "",
        EmailErr: "",
        UserNameErr: "",
        PasswordErr: "",
        ConfirmPasswordErr: ""
    })

    const emailRegex = /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const userNameRegex = /^\S*$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const changeUserDate = (e) => {
        if (e.target.name === "Name") {
            setUser({
                ...User,
                Name: e.target.value
            })

            setErrors({
                ...errors,
                NameErr: e.target.value.length === 0 &&
                    "This Field Is Required" 
            })
        }
        else if (e.target.name === "Email") {
            setUser({
                ...User,
                Email: e.target.value
            })

            setErrors({
                ...errors,
                EmailErr: e.target.value.length === 0 ?
                    "This Field Is Required" : !emailRegex.test(e.target.value) &&
                    "Email is not valid ex:xxx@xxxx.com"
                // console.log(!emailRegex.test(e.target.value))
            })
        }
        else if (e.target.name === "UserName") {
            setUser({
                ...User,
                UserName: e.target.value
            })

            setErrors({
                ...errors,
                UserNameErr: e.target.value.length === 0 ?
                    "This Field Is Required" : !userNameRegex.test(e.target.value) &&
                    "User Name must contains no spaces"
                // console.log(!emailRegex.test(e.target.value))
            })
        }
        
        else if(e.target.name === "Password") {
            setUser({
                ...User,
                Password: e.target.value
            })

            setErrors({
                ...errors,
                PasswordErr: e.target.value.length === 0 ?
                    "This Field Is Required" : !passwordRegex.test(e.target.value) &&
                    "Password length not less than 8 characters , contains at least one lowercase , one uppercase , at least one digit and special character ex:P@ssword1234"
                // console.log(!emailRegex.test(e.target.value))
            })

        }

        else{
            setUser({
                ...User,
                ConfirmPassword: e.target.value
            })

            setErrors({
                ...errors,
                ConfirmPasswordErr: e.target.value.length === 0 ?
                    "This Field Is Required" : e.target.value !== User.Password &&
                    "Confirm Password does not match Password"
                // console.log(!emailRegex.test(e.target.value))
            })
        }
    }

    const SubmitDate = (e) => {
        e.preventDefault()
        if (!errors.NameErr && !errors.EmailErr && !errors.UserNameErr && !errors.EmailErr && !errors.ConfirmPasswordErr) {
            console.log(e)
        }
    }

    return (
        <>
            <h1 className="text-center mt-5">Register</h1>
            <form style={{ width: "60%" }} className="container mt-5" onSubmit={(e) => SubmitDate(e)}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control"
                        value={User.Name} onChange={(e) => changeUserDate(e)} name="Name" />
                    <p className="text-danger"> {errors.NameErr} </p>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control"
                        value={User.Email} onChange={(e) => changeUserDate(e)} name="Email" />
                    <p className="text-danger"> {errors.EmailErr} </p>
                </div>
                <div className="mb-3">
                    <label className="form-label">User Name</label>
                    <input type="text" className="form-control"
                        value={User.UserName} onChange={(e) => changeUserDate(e)} name="UserName" />
                    <p className="text-danger"> {errors.UserNameErr} </p>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control"
                        value={User.Password} onChange={(e) => changeUserDate(e)} name="Password" />
                    <p className="text-danger"> {errors.PasswordErr} </p>
                </div>
                <div className="mb-3">
                    <label className="form-label">Confirm Password</label>
                    <input type="password" className="form-control"
                        value={User.ConfirmPassword} onChange={(e) => changeUserDate(e)} name="ConfirmPassword" />
                    <p className="text-danger"> {errors.ConfirmPasswordErr} </p>
                </div>

                <button disabled={errors.NameErr || errors.EmailErr || errors.UserNameErr || errors.EmailErr || errors.ConfirmPasswordErr} style={{ width: "100%" }} type="submit" className="btn btn-primary">Register</button>
            </form>
        </>
    )
}

export default RegisterForm;