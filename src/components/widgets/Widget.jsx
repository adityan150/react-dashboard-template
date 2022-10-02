import "./widget.scss";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { Link } from "react-router-dom";

function Widget(props) {
  let data;
  // temporary
  const amount = 100;
  const diff = 20;

  switch (props.type) {
    case "user":
      data = {
        title: "USER",
        isMoney: false,
        link: (
          <Link to="/users" className="link" style={{ textDecoration: "none" }}>
            See all users
          </Link>
        ),
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{ color: "crimson", backgroundColor: "#ffcccc" }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: (
          <Link to="/users" className="link" style={{ textDecoration: "none" }}>
            View all orders
          </Link>
        ),
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{ color: "goldenrod", backgroundColor: "#f8eed3" }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNING",
        isMoney: true,
        link: (
          <Link to="/users" className="link" style={{ textDecoration: "none" }}>
            Veiw net earnings
          </Link>
        ),
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ color: "green", backgroundColor: "#ccffcc" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: (
          <Link to="/users" className="link" style={{ textDecoration: "none" }}>
            See details
          </Link>
        ),
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{ color: "purple", backgroundColor: "#ffccff" }}
          />
        ),
      };
      break;

    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "₹"}
          {amount}
        </span>
        {data.link}
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpOutlinedIcon />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
}

export default Widget;
