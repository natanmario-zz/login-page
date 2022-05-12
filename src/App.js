import { Style } from "./styles";

function App() {
  return (
    <Style>
      <div className='background'>
        <img src='Right Side.png' alt='' />
      </div>

      <div className='form'>
        <div className='header'>
          <h1 className='title'>Welcome back</h1>

          <h4 className='subtitle'>Welcome back! Please enter your details.</h4>
        </div>

        <div className='fields'>
          <div className='field'>
            <span className='label'>E-mail</span>
            <input
              className='input-h'
              type='email'
              placeholder='Enter your email'
            />
          </div>

          <div className='field'>
            <span className='label'>Password</span>
            <input
              className='input-h'
              type='password'
              placeholder='**********'
            />
          </div>

          <div className='field row'>
            <div className='checkbox-wrapper'>
              <input type='checkbox' />
              <span className='checkbox-label'>Remember me</span>
            </div>

            <span className='forgot-pass'>Forgot password</span>
          </div>
        </div>

        <div className='buttons'>
          <button className='primary input-h'>
            <span>Sign in</span>
          </button>
          <button className='outlined input-h'>
            <img src='google-icon.png' alt='google' />
            <span>Sign in with Google</span>
          </button>
        </div>

        <span className='text'>Don’t have an account? Sign up fo free!</span>
      </div>
    </Style>
  );
}

export default App;
