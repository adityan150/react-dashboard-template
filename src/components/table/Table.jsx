import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function List() {
  const rows = [
    {
      id: 13241,
      product: "Razer Blade 15",
      img: "https://m.media-amazon.com/images/I/617xAAmW2eL._AC_SS130_.jpg",
      customer: "Jane Smith",
      date: "30 Sep",
      amount: 180000,
      method: "online",
      status: "Approved",
    },
    {
      id: 23923,
      product: "Razer Blade 15",
      img: "https://m.media-amazon.com/images/I/617xAAmW2eL._AC_SS130_.jpg",
      customer: "Joe Rogan",
      date: "1 Oct",
      amount: 180000,
      method: "offline",
      status: "Pending",
    },
    {
      id: 98753,
      product: "Razer Blade 15",
      img: "https://m.media-amazon.com/images/I/617xAAmW2eL._AC_SS130_.jpg",
      customer: "Jane Smith",
      date: "30 Sep",
      amount: 198412,
      method: "online",
      status: "Approved",
    },
    {
      id: 12984,
      product: "Razer Blade 15",
      img: "https://m.media-amazon.com/images/I/617xAAmW2eL._AC_SS130_.jpg",
      customer: "Jane Smith",
      date: "30 Sep",
      amount: 180000,
      method: "online",
      status: "Approved",
    },
    {
      id: 209842,
      product: "Razer Blade 15",
      img: "https://m.media-amazon.com/images/I/617xAAmW2eL._AC_SS130_.jpg",
      customer: "Jane Smith",
      date: "30 Sep",
      amount: 180000,
      method: "online",
      status: "Approved",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableHeader">Tracking ID</TableCell>
            <TableCell className="tableHeader">Product</TableCell>
            <TableCell className="tableHeader">Customer</TableCell>
            <TableCell className="tableHeader">Date</TableCell>
            <TableCell className="tableHeader">Amount</TableCell>
            <TableCell className="tableHeader">Payment Method</TableCell>
            <TableCell className="tableHeader">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell className="tablecell">{row.id}</TableCell>
              <TableCell>
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tablecell">{row.customer}</TableCell>
              <TableCell className="tablecell">{row.date}</TableCell>
              <TableCell className="tablecell">{row.amount}</TableCell>
              <TableCell className="tablecell">{row.method}</TableCell>
              <TableCell className="tablecell">
                <span className={`status ${row.status}`}> {row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default List;
