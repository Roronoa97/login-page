import Input from '../components/input';
import Button from '../components/button';
import './login.css';
import Icon from '../components/icon';

import Bg from '../assets/bg.jpg';
import GoogleIcon from '../assets/google.png';
import TwitterIcon from '../assets/twitter.png';
import FacebookIcon from '../assets/facebook.png';

const Login = () => {
    return (
        <div className="wrapper">
            <div className="wrapper__left">
                <img src={Bg} alt=""/>
            </div>
            <div className="wrapper__right">
                <div className="header">
                    <h1 className="heading">
                        Get Started
                    </h1>
                    <h2 className="subheading text-secondary">
                        Already have account?
                        <a href="#" className="text-primary">Sign In</a>
                    </h2>
                </div>
                <div className="form">
                    <form>
                        <Input label="Name" type="text"/>
                        <Input label="Email" type="email"/>
                        <Input label="Password" type="password"/>
                        <Button />  
                        <div className="divider">
                            <span className="bg-secondary"></span>
                            <span className="text-secondary">Or sign in with</span>
                            <span className="bg-secondary"></span>
                        </div>
                    </form>
                </div>
                <div className="icon-container">
                    <Icon icon={GoogleIcon}/>
                    <Icon icon={TwitterIcon}/>
                    <Icon icon={FacebookIcon}/>
                </div>
            </div>
        </div>
    )
}

export default Login;