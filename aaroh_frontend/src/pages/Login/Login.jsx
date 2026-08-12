import { Link } from "react-router-dom";
import { ArrowLeft, Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/images/logo.png";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="login-page">

      {/* Background glow */}
      <div className="login-glow login-glow-one" />
      <div className="login-glow login-glow-two" />

      <div className="login-wrapper">

        {/* Back */}
        <Link to="/" className="login-back">
          <ArrowLeft size={16} />
          Back to AAROH
        </Link>


        {/* Card */}
        <section className="login-card">

          {/* Logo */}
          <Link to="/" className="login-logo">
            <img
              src={logo}
              alt="AAROH"
            />
          </Link>


          {/* Heading */}
          <div className="login-heading">

            <span>WELCOME BACK</span>

            <h1>
              Continue building.
            </h1>

            <p>
              Sign in to continue your innovation journey
              with AAROH.
            </p>

          </div>


          {/* Form */}
          <form className="login-form">

            {/* Email */}
            <div className="login-field">

              <label htmlFor="email">
                Email address
              </label>

              <div className="login-input-wrapper">

                <Mail size={17} />

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                />

              </div>

            </div>


            {/* Password */}
            <div className="login-field">

              <div className="login-label-row">

                <label htmlFor="password">
                  Password
                </label>

                <Link to="/forgot-password">
                  Forgot password?
                </Link>

              </div>

              <div className="login-input-wrapper">

                <LockKeyhole size={17} />

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? (
                    <EyeOff size={17} />
                  ) : (
                    <Eye size={17} />
                  )}
                </button>

              </div>

            </div>


            {/* Remember */}
            <label className="remember-me">

              <input
                type="checkbox"
              />

              <span>
                Remember me
              </span>

            </label>


            {/* Login */}
            <button
              type="submit"
              className="login-submit"
            >
              Sign In
            </button>

          </form>


          {/* Divider */}
          <div className="login-divider">
            <span>OR CONTINUE WITH</span>
          </div>


          {/* Google */}
          <button className="google-login">
            <span className="google-icon">
              G
            </span>

            Continue with Google
          </button>


          {/* Register */}
          <p className="login-register">

            Don't have an account?

            <Link to="/register">
              Create one
            </Link>

          </p>

        </section>


        {/* Footer */}
        <p className="login-footer">
          © 2026 AAROH · Connecting Student Innovation
        </p>

      </div>

    </main>
  );
}

export default Login;