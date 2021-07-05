import '../comonents/styles/signin.css'

function SignIn(){
    return(
        <div className="signin">
            <div className="container">
                <div className="signin-content">
                    <form >
                        <div className="form-item">
                            <label htmlFor="username">Username</label>
                            <input type="text"  id="username" placeholder="john" required/>
                        </div>
                        <div className="form-item">
                            <label htmlFor="password">Passwpord</label>
                            <input type="password"  id="password" placeholder="john" required/>
                        </div>
                        <button type="submit">Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn;