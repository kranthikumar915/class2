import React, {useState} from 'react'

//login component
const LoginForm =(props) => {
    return (
        <div className='form'>
            <form>
                <fieldset>
                    <legend>login form</legend>
                    <div className='row'>
                        <label htmlFor='user'>Username</label>
                        <input type='text' name='user' id='user' required></input>
                    </div>
                    <div className='row'>
                        <label htmlfor='pass'>password</label>
                        <input type='password' name='pass' id='pass' required></input>
                    </div>
                    <div className='row'>
                        <input type='submit' value='login' className='btn'></input>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

//register component

const RegisterForm = (props) => {
    return (
        <div className='form'>
            <form>
                <fieldset>
                    <legend>register form</legend>
                    <div className='row'>
                        <label htmlFor='user'>username</label>
                        <input type='text' name='user' id='user' required></input>
                    </div>
                    <div className='row'>
                        <label htmlfor='pass'>password</label>
                        <input type='password' name='pass' id='pass' required></input>
                    </div>
                    <div className='row'>
                        <input type='submit' value='register' className='btn'></input>
                    </div>

                </fieldset>
            </form>
        </div>
    )
}
const Ex6 = (props) => {
    //const [state,handler] = useState(initial value)
    const[view,setView] = useState(false)

    const toggle =()=>{
        if(view){
            setView(false) /* register*/
        }else{
            setView(true)/*login*/
        }
    }
    return (
        <div>
            <h3>state handler</h3>
        <button  onClick={toggle} className='btn' >{view ? "register" : "login"}</button>

        <section>
            {
                view ? <LoginForm/> : <RegisterForm/>
            }
        </section>
        </div>
    
    )
}
export default Ex6