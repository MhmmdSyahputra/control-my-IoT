import axios from "axios";

export async function getdistanceService() {
  try {
    const response = await axios.get(
      `https://api-iot-testing.vercel.app/get-measure-distance`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
