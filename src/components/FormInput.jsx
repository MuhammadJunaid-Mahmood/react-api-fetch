import React from 'react'
import { Link } from 'react-router-dom'

function FormInput({country, data, userAction, setcountry}) {

const setcountryName = (e) => {
    setcountry(e.target.value);
}

const submitHandler = () =>{
    userAction();
    setcountry("");
}

  return (

    <div className='mainbody bg-primary'>
            <div className="container text-center">
                <h1 className='mainheading'>API FETCH ASSIGNMENT</h1>
                <h4>Enter country name to add record in table</h4>
                <input onChange={setcountryName} type="text" value={country} placeholder='Enter Country Name' className='input text text-center' onClick={setcountryName}></input><br/><br/>
                <button type='button' onClick={submitHandler}>ADD</button><br/><br/>
                

                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Common Name</th>
                            <th scope="col">Official Name</th>
                            <th scope="col">Languages</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                         data.map((item, index)=>{

                            return (
                                <>
                                    <tr>
                                        <td>{++index}</td>
                                        <td>{item.common}</td>
                                        <td>{item.official}</td>
                                        <td>{item.languages}</td>
                                        <td><button><Link to={`/About/${item.common}`}>View</Link></button></td>
                                    </tr>
                                </>
                            )
                        })
                       }
                        
                    </tbody>
                </table>
            </div>
    </div>
  )
}

export default FormInput