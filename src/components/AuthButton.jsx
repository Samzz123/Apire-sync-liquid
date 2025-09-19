import React from "react";

function AuthButton({ type }) {
  const providers = {
    google: {
      label: "Sign in with Google",
      className: "auth-btn google"
    },
    facebook: {
      label: "Sign in with Facebook",
      className: "auth-btn facebook"
    }
  };

  return (
    <button
      className={providers[type].className}
      onClick={() => alert(`${providers[type].label} clicked`)}
    >
      {providers[type].label}
    </button>
  );
}

export default AuthButton;
