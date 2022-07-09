import React , {useState} from 'react'
import Card from 'react-bootstrap/Card'
import data from './data'
import { Link } from 'react-router-dom'
const Catagory = () => {
    const [data1, setdata1] = useState(data);
    const filterResult = (catitem) => {
        const result =data.filter((currdata)=>{
            return currdata.category===catitem;
        })
        setdata1(result)
    };
    
    return (
        <div className="bg-dark" >
            <div className="text-center h1 text-info fw-bold  pt-4">ShopX</div>
            <div className=" container-fluid mt-5 " >
                <div className="row">
                    <div className="col-md-3">
                        <div onClick={()=>filterResult("men's clothing")} className="btn btn-info w-100 mb-2 ">men's clothing</div>
                        <div onClick={()=>filterResult("jewelery")} className="btn btn-info w-100 mb-2 ">jewelery</div>
                        <div onClick={()=>filterResult('electronics')} className="btn btn-info w-100 mb-2 ">electronics</div>
                        <div onClick={()=>filterResult("women's clothing")} className="btn btn-info w-100 mb-2 ">women's clothing</div>
                        <div onClick={()=>setdata1(data)} className="btn btn-info w-100 mb-2 ">All</div>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            {
                                data1.map((item)=>{
                                    const {id,title,price,description,category,image}=item;
                                    return(
                                      
                                        
                                <div key={id} className="col-md-4 mb-4 ">
                                    <Card >
                                      <div className="text-center">
                                      <img className="p-2" width="150px" src={image} alt=""/>
                                      </div>
                                      <Card.Body>
                                          <Card.Title>{title.slice(0,20)}</Card.Title>
                                          <p className="text-info fw-bolder " >price : $ {price} </p>
                                          <p className="h6" >Catargory :  {category} </p>
                                          <Card.Text>
                                          {description.slice(0,20)}..
                                          </Card.Text>
                                          <Link className=" btn-sm btn btn-outline-dark" to={`/singlepage/${id}`} >details</Link>
                                      </Card.Body>
                                      </Card>
                                  </div>
                                      
                                    )
                                
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Catagory
