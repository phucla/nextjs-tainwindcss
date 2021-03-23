import React from "react";

export default function About({ data }) {
  return (
    <div className="w-full">
      <div className="flex">
        <div className="w-6">
          <a className="logo" title="Laundry & Dry Cleaning" href="index.html">
            <img
              className="img-responsive"
              src={data.url}
              alt="Laundry & Dry Cleaning"
            />
          </a>
        </div>

        <div className="w-3">
          <div className="box-location ">
            <address>
              5604 Willow Crossing Ct, <br />
              Clifton, VA, 20124
            </address>
          </div>
        </div>

        <div className="col-sm-12 col-md-4 col-lg-3 hidden-sm hidden-xs">
          <div className="box-telephone ">
            <address>1 (800) 123-45-67</address>
            <div className="time hidden-sm">Mon.-Fri. 7:00 AM to 7:00 PM</div>
          </div>
        </div>
      </div>
    </div>
  );
}
