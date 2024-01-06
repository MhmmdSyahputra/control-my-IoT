import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [mode, setmode] = useState(0);

  const getMode = async () => {
    try {
      const response = await axios.get(
        `https://api-iot-testing.vercel.app/getMode`
      );
      setmode(response.data.mode);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeMode = async () => {
    try {
      await axios.post(`https://api-iot-testing.vercel.app/changeMode`);
      getMode();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMode();
  }, []);

  return (
    <>
      <div className="h3 mb-4">My Control Esp32</div>
      <button
        onClick={() => handleChangeMode()}
        className={
          mode ? "btn btn-lg btn-success pt-1" : "btn btn-lg btn-danger pt-1"
        }
      >
        {mode ? "ON" : "OFF"}
      </button>
    </>
  );
}

export default App;
