import sellersData from '../data/sellersData.json';
 
const Displaysellers = () => {

          const SellerData=sellersData.sellers.map((sellers) => {
          return (
          <tr>    
           <td>{sellers.first}</td>        
           <td>{sellers.last}</td>
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
                        {SellerData}
                </tbody>
            </table>
        </div>
    )
     
}
 
export default Displaysellers;