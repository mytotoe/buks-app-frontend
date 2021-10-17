import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const OnboardingView = () => {
  return <Fragment>
    <div className="form_wrapper">
      <div className="form_container">
        <div className="title_container">
          <h2>Buks App</h2>
          <h4>Sign Up</h4>
        </div>
        <div className="row clearfix">
          <div className="">
            <form>
              <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
                <input type="email" name="email" placeholder="Email" required />
              </div>
              <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                <input type="password" name="password" placeholder="Password" required />
              </div>
              <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                <input type="password" name="password" placeholder="Re-type Password" required />
              </div>
              <div className="row clearfix">
                <div className="col_half">
                  <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                    <input type="text" name="name" placeholder="First Name" />
                  </div>
                </div>
                <div className="col_half">
                  <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                    <input type="text" name="name" placeholder="Last Name" required />
                  </div>
                </div>
              </div>
              <div className="input_field radio_option">
                <input type="radio" name="radiogroup1" id="rd1" />
                <label htmlFor="rd1">Male</label>
                <input type="radio" name="radiogroup1" id="rd2" />
                <label htmlFor="rd2">Female</label>
              </div>
              <input className="button" type="submit" value="Register" />
            </form>
          </div>
          <p className="credit"><Link to="/">Already have an account? Log in</Link></p>
        </div>
      </div>
    </div>
    <p className="credit">Developed by <a href="https://github.com/Bukunmitanimonure">BTani</a></p>
  </Fragment>
}

export default OnboardingView;