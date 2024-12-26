import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await axios.get(`/api/verify-email?token=${token}`);
        alert(response.data.message);
      } catch (error) {
        alert(error.response?.data?.message || "Verification failed");
      }
    };

    if (token) {
      verifyEmail();
    }
  }, [token]);

  return <div>Verifying email...</div>;
};

export default VerifyEmail;
