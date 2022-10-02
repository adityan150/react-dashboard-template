import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userRows, userColumns } from "../../dataGridSource";
import { Link } from "react-router-dom";

function Datatable() {
  const actionColumn = [
    {
      feild: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              className="link"
              to="/users/test"
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton">Delete</div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link
          className="link"
          to="/users/new"
          style={{ textDecoration: "none" }}
        >
          <div className="newUser">Add New</div>
        </Link>
      </div>

      <DataGrid
        className="datagrid"
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
}

export default Datatable;
