import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import axios from "axios";


const SignUp = () => {
 const [data, setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:""
 })
const navigate = useNavigate();
const [error,setError]=useState("")
const handleChange = ({currentTarget:input}) =>{
    setData({...data,[input.name]:input.value});
};
const handleSubmit = async(e) =>{
    e.preventDefault();
    try{
        const url = "/api/user";
        const {data:res} = await axios.post(url,data)
        navigate("/login")
        console.log(res.message);
    }catch(error){
            setError(error.response?.data?.message)
    }
}

    return (
        <div className={styles.signup_container} >
            <div className={styles.signup_form_container}>
            <div className={styles.left}>
                <h1> Welcome Back</h1>
                <Link to="/login">
                    <button type="button" className={styles.white_btn}>
                        Sign In
                    </button>
                </Link>
            </div>
            <div className={styles.right}>
                <form className={styles.form_container} onSubmit={handleSubmit}>
                    <h1>Create Account</h1>
                    <input type="text"
                    placeholder="First Name"
                    onChange={handleChange}
                    name="firstName"
                    value={data.firstName}
                    required
                    className={styles.input}
                    />
                     <input type="text"
                    placeholder="Last Name"
                    onChange={handleChange}
                    name="lastName"
                    value={data.lastName}
                    required
                    className={styles.input}
                    />
                     <input type="text"
                    placeholder="Email"
                    onChange={handleChange}
                    name="email"
                    value={data.email}
                    required
                    className={styles.input}
                    />
                     <input type="text"
                    placeholder="password"
                    onChange={handleChange}
                    name="password"
                    value={data.password}
                    required
                    className={styles.input}
                    />
                    {error && <div className={styles.error_msg}>{error}</div>}
                     <button type="submit" className={styles.green_btn} 
                     >
                        Login
                    </button>
                </form>
            </div>
            </div>
        </div>
    )
}
export default (SignUp)