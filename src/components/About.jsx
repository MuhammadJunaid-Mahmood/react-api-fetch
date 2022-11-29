import React from 'react'

import {useParams, Link} from 'react-router-dom'

function About({data}) {
  var {name} = useParams();

  var mainData = data.filter(res=>{
    return res.common === name;
  });

  console.log(mainData[0]);

  return (
    <div className='container text-center'>

        <div class="row mt-5">

          <div class="col-sm-6">
            <div class="card bg-dark">
              <div class="card-body">
                <img src={mainData[0].flag}></img><br/>
                <h4><a href = {mainData[0].map} target = "_blank">{mainData[0].map}</a></h4>
              </div>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5>Currency/Currencies: {mainData[0].curr}</h5>
                <h5>Region: {mainData[0].reg}</h5>
                <h5>Subregion: {mainData[0].subreg}</h5>
                <h5>Languages: {mainData[0].languages}</h5>
                <a class="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">EDIT LANGUAGE</a>
              </div>
            </div>
          </div>

        </div>


        <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalToggleLabel">EDIT LANGUAGES</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                  <form>
                    <label>Add Languages: </label>
                    <input className="form-control" type="text" id="message" name="message"/>
                    <button class="btn btn-success btn-sm my-2">Add new language</button>
                    <p className='mb-0'>{Object.values(...mainData[0].languages, mainData[0].languages).join(", ")}</p>
                  </form>
              </div>
              <div class="modal-footer">
              <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">SAVE</button>
                <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">CLOSE</button>
              </div>
            </div>
          </div>
        </div>
        <br/><br/><br/>
        <Link to="/FormInput" className='btn btn-primary'>GO BACK</Link>

    </div>
  )
}

export default About