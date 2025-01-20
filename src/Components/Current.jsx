import React from "react";

const Current = ({ currentWeather, location }) => {
  return (
    <div className="container mt-4">
      <h4 className="text-white text-center">
        Current weather of {location.name},{location.region}
      </h4>
      <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-12">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-evenly align-items-center">
                <div className="p-1">
                  <img src={currentWeather.condition.icon} />
                </div>
                <div className="p-1">
                  <p className="p-1 mt-3">{currentWeather.condition.text}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12 mt-3">
          <div className="card">
            <div className="card-body">
              <p className="text-center ">
                Temp in C : {currentWeather.temp_c}&deg;C
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12 mt-3">
          <div className="card">
            <div className="card-body">
              <p className="text-center ">
                Temp in F : {currentWeather.temp_f}&#176;F
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12 mt-3">
          <div className="card">
            <div className="card-body">
              <p className="text-center">
                Humidity : {currentWeather.humidity}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-lg-3 col-md-3 col-sm-12 mt-3">
          <div className="card">
            <div className="card-body">
              <p className="text-center">
                Wind degree : {currentWeather.wind_degree}&deg;
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12 mt-3">
          <div className="card">
            <div className="card-body">
              <p className="text-center">
                Wind Dir :"{currentWeather.wind_dir}"
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12 mt-3">
          <div className="card">
            <div className="card-body">
              <p className="text-center">
                Wind Speed(kph) : {currentWeather.wind_kph}kph
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12 mt-3">
          <div className="card">
            <div className="card-body">
              <p className="text-center">
                Wind Speed(mph) : {currentWeather.wind_mph}mph
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Current;
