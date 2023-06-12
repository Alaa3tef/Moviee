import { useState } from "react";

function LoginForm() {

    const [User, setUser] = useState({
        Email: 'Esraa@gmail.com',
        Password: '12345678',
        IsVisible: false
    })



    const [errors, setErrors] = useState({
        EmailErr: "",
        PasswordErr: ""
    })

    const emailRegex = /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const changeUserDate = (e) => {
        if (e.target.name === "Email") {
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



        } else {
            setUser({
                ...User,
                Password: e.target.value
            })

            setErrors({
                ...errors,
                PasswordErr: e.target.value.length === 0 ?
                    "This Field Is Required" : e.target.value.length < 8 &&
                    "Password length not less than 8 characters"
                // console.log(!emailRegex.test(e.target.value))
            })

        }
    }

    const handleClick = () => {
        setUser({
            ...User,
            IsVisible: !User.IsVisible
        })
    };

    const SubmitDate = (e) => {
        e.preventDefault()
        if (!errors.EmailErr && !errors.PasswordErr) {
            console.log(e)
        }
    }

    return (
        <>
            <h1 className="text-center mt-5">Login</h1>
            <form style={{ width: "60%" }} className="container my-5" onSubmit={(e) => SubmitDate(e)}>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control"
                        value={User.Email} onChange={(e) => changeUserDate(e)} name="Email" />
                    <p className="text-danger"> {errors.EmailErr} </p>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type={User.IsVisible ? "text" : "password"} className="form-control"
                        value={User.Password} onChange={(e) => changeUserDate(e)} name="Password" />
                    <p className="text-danger"> {errors.PasswordErr} </p>
                </div>
                <div className="mb-2">
                    {User.IsVisible ? <button onClick={handleClick} className="btn btn-dark text-light"><i class="fa-solid fa-eye-slash"></i></button> : <button onClick={handleClick} className="btn btn-light text-dark"><i class="fa-solid fa-eye"></i></button>}
                </div>

                <button disabled={errors.EmailErr || errors.PasswordErr} style={{ width: "100%" }} type="submit" className="btn btn-primary">Login</button>
            </form>
        </>
    )
}

export default LoginForm;