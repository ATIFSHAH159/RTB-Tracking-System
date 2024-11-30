import '../Assests/Login.css';
export function Loginpage(){
    return(
<>
<form class="form">
    <p class="title">Login Page </p>
    <label>
        <input class="input" type="email" placeholder="" required=""/>
        <span>Email</span>
    </label> 
        
    <label>
        <input class="input" type="password" placeholder="" required=""/>
        <span>Password</span>
    </label>
    <button class="submit">Login</button>
</form>

</>
    )
};