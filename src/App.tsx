import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [mode, setmode] = useState(0);
  const [loading, setLoading] = useState(false);

  const getMode = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api-iot-testing.vercel.app/getMode`
      );
      setmode(response.data.mode);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const handleChangeMode = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `https://api-iot-testing.vercel.app/changeMode`
      );
      setmode(response.data.mode);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getMode();
  }, []);

  return (
    <>
      <div className="h3 mb-4">My Control Esp32</div>
      <button
        onClick={() => handleChangeMode()}
        className={`btn btn-lg ${
          mode ? "btn-success" : "btn-danger"
        } py-3 px-5 ${loading ? "disabled" : ""}`}
      >
        {loading ? (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : mode ? (
          "ON"
        ) : (
          "OFF"
        )}
      </button>
    </>
  );
}

export default App;
