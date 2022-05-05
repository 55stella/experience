
import './App.css';
import { useState,useEffect } from 'react';
import Loading from './Loading';
import{FaAngleDoubleLeft} from "react-icons/fa"


function App() {
  const url = 'https://course-api.com/react-tabs-project'
  const[loading, setloading] =useState(true)
  const[tabs, setTabs] =useState([])
  // const[category,setCategories]= useState([])
  const[value, setIndex] = useState(0)

  
 const getPromise =()=>{
   try{
   let promise = fetch(url)
   promise.then((res)=>res.json())

   .then((user)=> {
    //  let allNames = user.map(item=> item.company)

    //  setCategories(allNames)
     setTabs(user)
     setloading(false)
     console.log(user)
   })
  }
   catch(err){

   }
  
 }
 


//  let constGetNames =()=>{
//    let all = tabs.map(item=>{
//      return item.company
//    })
  
//    setCategories(all)
//   }
   
 
 
 useEffect(()=>{
  getPromise()
  


 },[])
 

 
 
if(loading){
  return<Loading/>
}

const {company, title, dates, duties, id} =tabs[value]
  return (
    <main className='Component'>
      <div className='title'>
        <h4>Experience</h4>
          <div className='underline'></div>
      </div>
    <section className='Desktop'>
    <div className='buttons'>
     {tabs.map((item, index)=>{
    
       return <button key ={index} onClick={()=>setIndex(index)} className={`button ${index ===value && 'active-btn'}`}>{item.company}</button>
       // for every item in the array, we  want to update the state value to the current index
       // of the item when clicked
     })}
     </div>
     <div className='items'>
    
    
             <div key ={id} className='item'>
               <h3>{title}</h3>
               <h4>{company}</h4>
               <p> {dates}</p>
               {duties.map((item, index)=>{
                 return <div key ={index}  className='duties'>
                     <span><FaAngleDoubleLeft/></span>
                   <p>{item}</p>
                   </div>
               })}

             </div>
          


              
     </div>
    
    
    </section>
    </main>
  );
}

export default App;
