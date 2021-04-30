import Signup from '../components/Signup/Signup';
import Slideshow from '../components/SlideShow/Slideshow';
import './Form.css';

const Form = () => {

    return (
    <div className="form-holder">
        <div className="form-container row shadow-lg">
       
            <div className="col-4 p-0">
                    <Slideshow />
                </div>
                <div className="col-8 p-4 d-flex flex-column justify-content-center">
                    <h1 id="sign-title" className="text-center mb-5 font-weight-bold">
                        Create a Quick Account
                    </h1>
                    <Signup />
                </div>

            </div>
           
        
    </div>);

};


export default Form;