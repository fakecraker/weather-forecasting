import React from "react";

const Forecast = ({ forecast, location }) => {
  return (
    <div className="container mt-3 overflow-auto">
      <h4 className="text-white text-center">
        Forecast weather of {location.name},{location.region}
      </h4>
      {forecast.forecastday.map((data, index) => {
        return (
          <div
            key={index}
            className="accordion accordion-flush mt-2"
            id="accordionFlushExample"
          >
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${index}`}
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  <div className="d-flex flex-wrap align-items-center justify-content-evenly mb-3 mx-auto">
                    <div className="p-2">Day: {data.date}</div>
                    <div className="p-2">
                      <img src={data.day.condition.icon} className="img-fluid" />
                    </div>
                    <div className="p-2">{data.day.condition.text}</div>
                    <div className="p-2">Max Temp: {data.day.maxtemp_c}</div>
                  </div>
                </button>
              </h2>
              <div
                id={`${index}`}
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  {data.hour.map((data) => {
                    return (
                      <>
                        <div className="text-center">
                          {data.time} / Max temp:{data.temp_c} /{" "}
                          <img src={data.condition.icon} className="img-fluid"/>
                        </div>

                        <div
                          className="progress"
                          role="progressbar"
                          aria-label="Example with label"
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div
                            className="progress-bar"
                            style={{ width: `${data.temp_c}%` }}
                          >
                            {data.temp_c}
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Forecast;
