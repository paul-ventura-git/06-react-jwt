import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { useState } from "react";

const Login = () => {
    const { setToken } = useAuth();
    
    //const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    const handleLogin = () => {
        
            setToken("this is a test token");
            navigate("/", { replace: true });


    };

    if(password=='123'){
        setTimeout(() => {
        handleLogin();
        }, 1 * 1000);
    }
    return (
        <>
            <main style={{ padding: '50px' }}>
                <h1>Login </h1>
                <br />

                <form>
                <input type="text" placeholder="Username" />
                <br />
                <br />

                <input
                    value={password}
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <br />

                <button type="submit">Login</button>
                </form>
            </main>
        </>
    );
  };
  
  export default Login;