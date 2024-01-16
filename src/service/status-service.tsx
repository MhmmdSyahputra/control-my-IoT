import axios from "axios";

export async function getStatusService() {
  try {
    const response = await axios.get(
      `https://api-iot-testing.vercel.app/getMode`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function changeStatusService() {
  try {
    const response = await axios.post(
      `https://api-iot-testing.vercel.app/changeMode`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
