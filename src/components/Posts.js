import React from "react";

import "../css/style.css";
//Libraries
import Select from "react-select";

const Posts = ({ posts, loading }) => {
  const options = [
    { value: "chocolate", label: "Ended" },
    { value: "strawberry", label: "Start" },
    { value: "vanilla", label: "Close" },
    { value: "vanilla", label: "Completed" },
    { value: "vanilla", label: "Deleted" },
    { value: "End", label: "End" },
  ];

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="activity-card">
      <h3>Table</h3>

      <div className="table-responsive ">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th >Description</th>
              <th>Votes</th>
              <th>Types</th>
              <th>Start Time</th>
              <th>Period</th>
              <th>Price</th>
              <th>Photo Count</th>
              <th>State</th>
              <th>Edit</th>
              <th>Award</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr>
                <td>Hasnain Arshad</td>

                <td  key={post.id}>
                  {post.title}
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Posts;
