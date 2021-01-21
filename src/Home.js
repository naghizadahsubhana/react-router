import React, { Component } from "react";
class Home extends Component {
  render() {
    return (
      <div className="container-fluid webPage">
        <div className="main row">
          <div className="col-md-6 left">
            <h1>Real Benefits</h1>
            <h1>Real People</h1>
            <p>
              We combine corportate benefits with strategic <br />
              financial managemenet to provide valuable solution <br /> for
              companies at scale
            </p>
            <button>Schedule a consult</button>
          </div>
          <div className="col-md-6 right">
            <img src="https://images.unsplash.com/photo-1563086279-64dc5ae44b83?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDF8fGh0dHBzJTNBJTJGJTJGaW1hZ2VzLnVuc3BsYXNoLmNvbSUyRnBob3RvJTIwMTU4MjAxNTc1MjYyNCUyMGU4YjFjNzVlMzcxMSUzRml4aWQlM0RteHd4bWphM2ZkYjhtaHh6endmeXkyaDhveHg4eW52emF3NWxjM21sbWpidHl3NTh6dzU4bWh4OG1odyUyNTNkJTI2aXhsaWIlM0RyYiUyMDEuMi4xJTI2YXV0byUzRGZvcm1hdCUyNmZpdCUzRGNyb3AlMjZ3JTNENTAwJTI2cSUzRDYwfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"></img>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;