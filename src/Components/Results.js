const Results = ({record}) => {


    return ( 

        <div className="container">

        <table class="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">To</th>
      <th scope="col">From</th>
      <th scope="col">Amount</th>
      <th scope="col">Coverted</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{record.query.to}</th>
      <td>{record.query.from}</td>
      <td>{record.query.amount}</td>
      <td>{record.result}</td>
    </tr>
  </tbody>
</table>

</div>

     );
}
 
export default Results;