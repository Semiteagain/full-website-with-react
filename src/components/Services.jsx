import React,{useState, useEffect} from 'react';
import axios from 'axios'

function Services() {

   const [list, setList] = useState([]);

   useEffect(()=>{
       axios.get('https://jsonplaceholder.typicode.com/posts')
       .then(res =>{
           setList(res.data)
       })
       .catch(myErr =>{
           console.log(myErr)
       })
   },[])




    return (
        <div>
            {list.map(item =>{
                return <div key={item.id}>
                      <h2>{item.title}</h2>
                      <h3>{item.body}</h3>
                </div>
            })}
        </div>
    )
}

export default Services
