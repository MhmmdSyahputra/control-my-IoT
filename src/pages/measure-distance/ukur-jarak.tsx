import { useEffect, useState } from "react";
import { getdistanceService } from "../../service/distance-service";

export const UkurJarak = () => {
  const [distance, setDistance] = useState({
    persen: 0,
    width: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleGetDistance();
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  const handleGetDistance = async () => {
    try {
      const response = await getdistanceService();
      const result = (response.distance / 20) * 100;
      setDistance({ ...distance, persen: result, width: response.distance });
      console.log(distance);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="tite h4 mb-5">Ukur Jarak</div>
      <div
        className="progress"
        role="progressbar"
        aria-label="Basic example"
        aria-valuenow="100"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          className="progress-bar"
          style={{ width: `${distance.persen}%` }}
        ></div>
      </div>
      <label htmlFor="">
        Jarak saat ini: <span className="fw-bold">{distance.width} cm</span>
      </label>
    </>
  );
};
