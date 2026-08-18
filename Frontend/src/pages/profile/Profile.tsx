import "./Profile.css";

const Profile = () => {
  return (
    <div>
      <div className="authBox">
        <div className="box">
          <div>
            <h3 style={{ margin: 0 }}>Sign In</h3>
          </div>
          <form action="submit">
            <h4>
              <p>Please provide your credentials</p>
            </h4>
            <div className="em">
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                type="email"
                placeholder="johndoe@gmail.com"
                required
              />
            </div>
            <div className="passW">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                placeholder="enter your password"
                id="password"
                minLength={8}
                required
              />
            </div>
            <div>
              <input type="submit" className="submitBtn" value={"Sign In"} />
            </div>
          </form>
          <p>
            not have an account?{" "}
            <a style={{ color: "red" }} href="#">
              click here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
