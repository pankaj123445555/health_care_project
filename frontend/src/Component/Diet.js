import React, {useEffect, useState} from 'react'
import axios from "axios";
import '../App.css'

function Diet() {
    const [item,setItem] = useState([]);
    const [day,setDay] = useState('Sunday')
    
    const handleSelectChange = async(e)=>{

        setDay(e.target.value);
         
        try {
             
            const config = {
              header: {
                "Content-type": "application/json",
              },
            };
            const { data } = await axios.get(
              "/api/get-data",
              config
            )
            setItem(data);
            // console.log(data);
          } catch (error) {
            console.log(`error occured ${error}`)
          }
    }
  return (
    <div id='diet'>
    <label for="cars">Choose a day:</label>
    <select  id="weekends" onChange={handleSelectChange}>
    <option value="sunday">Sunday</option>
      <option value="monday">Monday</option>
      <option value="tuesday">Tuesday</option>
      <option value="wednesday">Wednesday</option>
      <option value="thursday">Thursday</option>
      <option value="friday">Friday</option>
      <option value="Saturday">Saturday</option>
    </select>
    <div>
     <div>hey your diet-plan is ready for the day : {day}</div>
    </div>
    {
        item.map((element)=>{
            return <h4> {element.meal}: {(element.items[0])}</h4>
            // console.log(`${item.meal}: ${chalk.blue.bold(item.items[0])}`)
        })
    }
    </div>
  )
}

export default Diet
