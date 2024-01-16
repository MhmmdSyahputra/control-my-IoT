import { useEffect, useState } from "react";
import { BiPowerOff } from "react-icons/bi";
import { FaLightbulb } from "react-icons/fa";
import { FaArrowUpShortWide } from "react-icons/fa6";
import { Link } from "react-router-dom";
import {
  changeStatusService,
  getStatusService,
} from "../../service/status-service";

export const HomePage = () => {
  const [mode, setmode] = useState(0);
  const [loading, setLoading] = useState(false);

  const getMode = async () => {
    setLoading(true);
    try {
      const response = await getStatusService();
      setmode(response.mode);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const handleChangeMode = async () => {
    setLoading(true);
    try {
      const response = await changeStatusService();
      setmode(response.mode);
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
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-sm-12 pb-3">
            <Link
              to="/"
              onClick={() => handleChangeMode()}
              className={`btn btn-lg text-decoration-none w-100 btn btn-primary btn-lg rounded-4 fs-6 fw-bold ${
                mode ? "btn-success" : "btn-danger"
              } ${loading ? "disabled" : ""}`}
            >
              {loading ? (
                <div
                  className="spinner-border spinner-border-sm"
                  role="status"
                ></div>
              ) : mode ? (
                <>
                  Testing (ON) <FaLightbulb className="ms-3 fs-4" />
                </>
              ) : (
                <>
                  Testing (OFF) <BiPowerOff className="ms-3 fs-4" />
                </>
              )}{" "}
            </Link>
          </div>
          <div className="col-lg-7 col-sm-12 pb-3">
            <Link
              to="/measure-distance"
              className="text-decoration-none w-100 btn btn-primary btn-lg rounded-4 fs-6 fw-bold"
            >
              Measure Distance <FaArrowUpShortWide className="ms-3 fs-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
