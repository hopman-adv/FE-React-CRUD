export default function UsersTable(props) {
  return (
    <>
      <div id="user-logged"></div>

      <input
        id="get-data-button"
        className="w3-button w3-black"
        type="button"
        value="Get Data"
      />
      <table className="w3-table-all w3-hoverable" id="users-table">
        <tr id="users-table-header">
          <th>Id</th>
          <th>User Name</th>
          <th>Email</th>
        </tr>
      </table>
    </>
  );
}
