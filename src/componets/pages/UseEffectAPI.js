import React, { useEffect, useState } from 'react'
import product1 from './assets/images/product-1.png';


const UseEffectAPI = () => {
    const[users, setusers]= useState([]);

  const  getUsers = async () =>{
        const response = await fetch('https://api.github.com/users');
        console.log(response);
        setusers(await response.json());
        //console.log(data);
    }
    
    useEffect(()=>{
        getUsers(); 
    
    },[]);
 // [] means first time page load tevach work hoil ...nahi dile tr infinite loop madhye jail api

  return (
    <div>
      <h2 className='text-center my-2'> List of Users</h2>

     <div className='container mt-2'>
         <div className='row text-center'>
             {
                 users.map((curElem)=>{
                     //shoertcut of array names
                     const{id, avatar_url,login,node_id } = curElem;
                     return(
                        <div className='col-10 col-md-4 mt-5' key={id}>
                        <div className='card p-2 shadow'>
                            <div className='d-flex align-items-center'>
                                <div className='image'>
                                    <img src={avatar_url} alt="" className='rounded' width={155} />
                                </div>
                                <div className='ml-3 w-100'>
                                    <h4 className='mb-0 mt-0 textLeft'>{login}</h4><span className='textLeft fw-900'>{node_id}</span>
                                    <div className='p-2 mt-2 mx-1 bg-info d-flex justify-content-between rounded text-white states'>
                                    <div className='d-flex flex-column'><span className='articles'>Art</span><span className='number1'>38</span></div>
                                    <div className='d-flex flex-column'><span className='articles'>follow</span><span className='number1'>98</span></div>
                                    <div className='d-flex flex-column'><span className='articles'>Articles</span><span className='number1'>38</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                     )
                 })
             }
      
         </div>
     </div>

    </div>
  )
}

export default UseEffectAPI
