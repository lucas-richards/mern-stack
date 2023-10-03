import {Component} from "react"
import { logIn } from '../../utilities/users-service';

export default class LogInForm extends Component {
    state = {
        email: '',
        password: '',
        error: ''
      };
    
    // The object passed to setState is merged with the current state object
    handleChange = (evt) => {
        this.setState({
        [evt.target.name]: evt.target.value,
        error: ''
        });
    };

    handleSubmit = async (evt) => {
        evt.preventDefault()
        try {
          // We don't want to send the 'error' or 'confirm' property,
          //  so let's make a copy of the state object, then delete them
          const formData = {...this.state}
          delete formData.error
          delete formData.confirm
          console.log(formData)
          const user = await logIn(formData);
          
          this.props.setUser(user)
          

        } catch {
          this.setState({ error: 'Sign Up Failed - Try Again' });
        }
    };
  

    render() {
        return (
          <div>
            <div className="form-container">
              <form autoComplete="off" onSubmit={this.handleSubmit}>
                <label>Email</label>
                <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                <label>Password</label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                <button type="submit">SIGN UP</button>
              </form>
            </div>
            <p className="error-message">&nbsp;{this.state.error}</p>
          </div>
        );
    }
}