import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [navigate]);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontSize: "1.5rem",
      }}
    >
      <p>✅ Successful Checkout!</p>
      <p>Returning in {countdown}...</p>
    </div>
  );
};

export default SuccessPage;
