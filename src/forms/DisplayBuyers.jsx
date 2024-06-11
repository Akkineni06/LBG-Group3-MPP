import sellersData from '../data/sellersData.json';
 
const DisplayBuyers = () => {

          const BuyerData=sellersData.buyers.map((buyers) => {
          return (
          <tr>    
           <td>{buyers.first}</td>        
           <td>{buyers.last}</td>
           </tr>
          )
          }
        )      
     
    return(
        <div>
            <table className="table-striped">
                <thead>
                    <tr>
                    <th>First Name</th>
                    <th>Surname</th>
                    </tr>
                </thead>
                <tbody>
                        {BuyerData}
                </tbody>
            </table>
        </div>
    )
     
}
 
export default DisplayBuyers;