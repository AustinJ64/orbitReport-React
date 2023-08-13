const Table = ({ sat }) => {
  return (
      <table>
       <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
        </thead>
        <tbody>
          {sat.map((d) => {
            return (
              <tr key={d.id}>
                <td>{d.name}</td>
                <td>{d.type}</td>
                <td>{d.launchDate}</td>
                <td>{d.operational ? 'Active' : 'Inactive'}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
  );
};

export default Table;