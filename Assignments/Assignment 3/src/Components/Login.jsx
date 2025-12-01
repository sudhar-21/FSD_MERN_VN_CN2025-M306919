import React, { useState } from "react";

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleToggle = () => {
    setIsLoggedIn(prev => !prev);
  };

  return (
    <div>
      <h1>{isLoggedIn ? "Welcome back!" : "Please log in"}</h1>
      <button onClick={handleToggle}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default Login;
