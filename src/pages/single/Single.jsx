import Chart from "../../components/chart/Chart";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import List from "../../components/table/Table";
import "./single.scss";

function Single() {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
                className="itemImage"
              />
              <div className="details">
                <h1 className="itemTitle">John Wick</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">john@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+1 2345 67 89</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Manover St. Block 23 207 7, Special District: Lower
                    Manhattan, New York.
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart title="User Spendings (Last 6 months)" aspect={3 / 1} />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Latest transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
}

export default Single;
