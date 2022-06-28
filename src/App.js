import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState ,useEffect } from 'react';
import Results from './Components/Results';

function App() {



  const[v1, setV1] = useState(""); 
  const[v2, setV2] = useState(""); 
  const[v3, setV3] = useState(""); 

  const [show, setShow] = useState(null);
  const [record , setRecord] = useState();
  

  var myHeaders = new Headers();

  myHeaders.append("apikey", "5NMxz088QSIU0NEFSqNe60Alcpr0dVMD");

  const API_URL = "https://api.apilayer.com/exchangerates_data/convert";
  
  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };
  

  const handle  =  () => 
  
  {
    

    const API =  `${API_URL}?to=${v2}&from=${v3}&amount=${v1}`;
    

    fetch(API, requestOptions)

    .then(res => {

      return res.json();


    })

    .then(data => {

      setRecord(data);
      setShow(true);

    })



  }
  
  
  useEffect(() => {
        
    setShow(false);

  }, [])



  return (

    

  

<div class="container-fluid bg-dark box">

<div class="pt-5 col-xxl-12 text-center">
            <h1 class="display-5 fw-bold f-l text-white">Currency Converter</h1>
            <div class="col-lg-6 mx-auto">
                <p class="lead  p-4 fs-1 text-white">Check live foreign currency exchange rates</p>
            </div>
        </div>


  <div class="row d-flex justify-content-center currency_form">

    <div class="col">


    <div class="mb-3">

          <label for="exampleFormControlInput1" class="form-label text-white">Currency</label>
          <input type="number" placeholder='Enter the amount' class="form-control" value={v1} onChange={(e) => {setV1(e.target.value)}} />
    </div>



    </div>
    

    <div class="col">


    <div class="mb-3">
    <label for="exampleFormControlInput1" class=" text-white form-label">To</label>
        <select class="form-select" value={v2} onChange={(e) => {setV2(e.target.value)}} >
            <option  selected>To</option>
            <option    value="USD">USD</option>
            <option    value="PKR">PKR</option>
            <option    value="CAD">CAD</option>

        </select>
  
        
        </div>
     
    </div>

    <div class="col">

    <div class="mb-3">

    <label for="exampleFormControlInput1" class="form-label text-white">From</label>
          <select class="form-select " value={v3} onChange={(e) => {setV3(e.target.value)}} >
            <option  selected>From</option>
            <option    value="USD">USD</option>
            <option    value="PKR">PKR</option>
            <option    value="CAD">CAD</option>
          </select>
  
    </div>



    </div>

  </div>
  <div class="d-grid gap-2 mb-5 d-sm-flex justify-content-sm-center">
          <button type="button" class="btn btn-primary btn-lg px-4 gap-3" onClick={handle} >Convert</button>
  </div>



  {
                       show === true 
                        ?     
        
                        <Results record={record} />
                

                        :<div className="container">
                        <h4 className="pt-5"></h4>
                 </div>
            }



  
</div>
    
      


  );
}

export default App;
