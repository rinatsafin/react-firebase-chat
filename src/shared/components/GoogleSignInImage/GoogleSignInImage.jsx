import GoogleSignin from '../../assets/images/btn_google_signin_dark_pressed_web.png';

const GoogleSignInImage = () => {
  return (
    <img
      src={
        GoogleSignin || "https://developers.google.com/identity/images/btn_google_signin_light_normal_web.png"
      }
      alt="google sign in"
    />
  );
};

export default GoogleSignInImage;