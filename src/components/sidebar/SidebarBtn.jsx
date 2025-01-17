import React from "react";

export default function SidebarBtn() {
  return (
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="mb-1">
        <button
          className="btn btn-toggle d-inline-flex align-items-center rounded border-0 text-white"
          data-bs-toggle="collapse"
          data-bs-target="#home-collapse"
          aria-expanded="true"
        >
          Home
        </button>
        <div className="collapse" id="home-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ">
            <li>
              <a
                href="#"
                className="nav-link d-inline-flex text-decoration-none rounded text-white"
              >
                Overview
              </a>
            </li>
            <li>
              <a
                href="#"
                className="nav-link d-inline-flex text-decoration-none rounded text-white"
              >
                Updates
              </a>
            </li>
            <li>
              <a
                href="#"
                className="link-body-emphasis d-inline-flex text-decoration-none rounded text-white"
              >
                Reports
              </a>
            </li>
          
          </ul>
        </div>
      </li>
    </ul>
  );
}
