import React from "react";
// import "../css/general.css";
// import "../css/usertable.css";

// icons
import { FcSearch } from "react-icons/fc";
import { FcSms } from "react-icons/fc";
import { FcInvite } from "react-icons/fc";
// import { icons } from "react-icons/lib";
// import { FcBriefcase } from "react-icons/fc";
//Libraries
import Select from "react-select";

function userTable() {
  const options = [
    { value: "chocolate", label: "Ended" },
    { value: "strawberry", label: "Start" },
    { value: "vanilla", label: "Close" },
    { value: "vanilla", label: "Completed" },
    { value: "vanilla", label: "Deleted" },
    { value: "End", label: "End" },
  ];
  return (
    <div className="main-content">
      <header>
        <div className="search-wrapper">
          <span className="ti-search">
            <FcSearch />
          </span>
          <input type="search" placeholder="search"></input>
        </div>

        <div className="social-icons">
          <span className="ti-bell">
            <FcInvite />
          </span>
          <span className="ti-comment">
            <FcSms />
          </span>
          <div className="header-img"></div>
        </div>
      </header>
      <main>
        <h2 className="dash-title">Overview</h2>
        {/* <div className="dash-cards">
        <div className="card-single">
          <div className="card-body">
            <span className="ti-briefcase">
              <FcBriefcase />
            </span>
            <div>
              <h5>Account Balance</h5>
              <h4>$1,000,000</h4>
            </div>
          </div>

          <div className="card-footer">
            <a href="">View all</a>
          </div>
        </div>

        <div className="card-single">
          <div className="card-body">
            <span className="ti-briefcase">
              <FcBriefcase />
            </span>
            <div>
              <h5>Pending Balance</h5>
              <h4>$2,000,000</h4>
            </div>
          </div>

          <div className="card-footer">
            <a href="">View all</a>
          </div>
        </div>

        <div className="card-single">
          <div className="card-body">
            <span className="ti-briefcase">
              <FcBriefcase />
            </span>
            <div>
              <h5>Pending Balance</h5>
              <h4>$2,000,000</h4>
            </div>
          </div>

          <div className="card-footer">
            <a href="">View all</a>
          </div>
        </div>
      </div> */}
        <section className="recent">
          <div className="activity-grid">
            <div className="activity-card">
              <h3>Recent activity</h3>
              <div className="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Votes</th>
                      <th>Types</th>
                      <th>Start Time</th>
                      <th>Period</th>
                      <th>Price</th>
                      <th>Photo Count</th>
                      <th>Challenge State</th>
                      <th>Edit</th>
                      <th>Award</th>
                      <th>Detail</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Hasnain Arshad</td>
                      <td>
                        I am a software developer working in sectim company.
                      </td>
                      <td>100</td>
                      <td>Type A</td>
                      <td>08.00pm</td>
                      <td>1 week</td>
                      <td>$500</td>

                      <td className="td-team">
                        <div className="img-1"></div>
                        <div className="img-2"></div>
                        <div className="img-3"></div>
                      </td>
                      <td>
                        {" "}
                        <Select className="dropdown" options={options} />
                      </td>
                      <td>
                        <span className="badge warning">Edit</span>
                      </td>
                      <td>
                        <span className="badge warning">Awards</span>
                      </td>
                      <td>
                        <span className="badge warning">Details</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Hasnain Arshad</td>
                      <td>
                        I am a software developer working in sectim company.
                      </td>
                      <td>100</td>
                      <td>Type A</td>
                      <td>08.00pm</td>
                      <td>1 week</td>
                      <td>$500</td>

                      <td className="td-team">
                        <div className="img-1"></div>
                        <div className="img-2"></div>
                        <div className="img-3"></div>
                      </td>
                      <td>
                        {" "}
                        <Select className="dropdown" options={options} />
                      </td>
                      <td>
                        <span className="badge warning">Edit</span>
                      </td>
                      <td>
                        <span className="badge warning">Awards</span>
                      </td>
                      <td>
                        <span className="badge warning">Details</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Hasnain Arshad</td>
                      <td>
                        I am a software developer working in sectim company.
                      </td>
                      <td>100</td>
                      <td>Type A</td>
                      <td>08.00pm</td>
                      <td>1 week</td>
                      <td>$500</td>

                      <td className="td-team">
                        <div className="img-1"></div>
                        <div className="img-2"></div>
                        <div className="img-3"></div>
                      </td>
                      <td>
                        {" "}
                        <Select className="dropdown" options={options} />
                      </td>
                      <td>
                        <span className="badge warning">Edit</span>
                      </td>
                      <td>
                        <span className="badge warning">Awards</span>
                      </td>
                      <td>
                        <span className="badge warning">Details</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Hasnain Arshad</td>
                      <td>
                        I am a software developer working in sectim company.
                      </td>
                      <td>100</td>
                      <td>Type A</td>
                      <td>08.00pm</td>
                      <td>1 week</td>
                      <td>$500</td>

                      <td className="td-team">
                        <div className="img-1"></div>
                        <div className="img-2"></div>
                        <div className="img-3"></div>
                      </td>
                      <td>
                        {" "}
                        <Select className="dropdown" options={options} />
                      </td>
                      <td>
                        <span className="badge warning">Edit</span>
                      </td>
                      <td>
                        <span className="badge warning">Awards</span>
                      </td>
                      <td>
                        <span className="badge warning">Details</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Hasnain Arshad</td>
                      <td>
                        I am a software developer working in sectim company.
                      </td>
                      <td>100</td>
                      <td>Type A</td>
                      <td>08.00pm</td>
                      <td>1 week</td>
                      <td>$500</td>

                      <td className="td-team">
                        <div className="img-1"></div>
                        <div className="img-2"></div>
                        <div className="img-3"></div>
                      </td>
                      <td>
                        {" "}
                        <Select className="dropdown" options={options} />
                      </td>
                      <td>
                        <span className="badge warning">Edit</span>
                      </td>
                      <td>
                        <span className="badge warning">Awards</span>
                      </td>
                      <td>
                        <span className="badge warning">Details</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default userTable;