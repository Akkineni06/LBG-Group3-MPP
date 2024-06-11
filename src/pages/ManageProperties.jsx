
import PropertyCard from "../forms/PropertyCard";
import PropertyForm from "../forms/PropertyForm";
import sellersData from '../data/sellersData.json';
import '../App.css'



const ManageProperty =() => {
    return (
      <>
        <div className="mng-property">
        <p>New Property Registration</p>
        <br />
            <PropertyForm />       
        </div>

        <div  className="items-grid">
          {
            sellersData.properties.map((item) => (
              <PropertyCard{...item}/>              

            ))
          }
        </div>
        </>
      
  
  );
  }

export default ManageProperty;