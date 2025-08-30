import React,{useState} from "react";
import data from './data';
import Tours from './component/Tour';
const App = () => {

const [tours,setTours]=useState(data);

//I have used removeTour here not card component because tours state is here available
function removeTour(id){
  const newTours=tours.filter(tour=>tour.id!==id);
  setTours(newTours);
}

//if i remove all tours 
if(tours.length===0){
  return(
    <div className="refresh">
    <h2>No Tours Left </h2>
    <button className="btn-white" onClick={()=>setTours(data)}>
      Refresh
    </button>
    </div>
  )
}
  return(
   <div className="App">

    {/* custom component of tours */}
    
    <Tours tours={tours} removeTour={removeTour}></Tours>

   </div>  
)
};

export default App;
