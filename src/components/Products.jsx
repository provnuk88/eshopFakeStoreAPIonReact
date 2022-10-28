import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Skeleton from 'react-loading-skeleton';




export default function Products() {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data)
    const [loading,setLoading]=useState(false);

    let componentMounted=true;

    useEffect(() => {
        const getProduct = async() => {
            setLoading(true);
            const response = await fetch('https://fakestoreapi.com/products');
            if(componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);

            } 
            return () =>{
                componentMounted = false;
            }
        }
        getProduct();
      },[]);
    

      const Loading = () => {
        return (
            <>  
                <div className="col-md">
                    <Skeleton height={350}/>
                </div>
                <div className="col-md">
                    <Skeleton height={350}/>
                </div>
                <div className="col-md">
                    <Skeleton height={350}/>
                </div>
                <div className="col-md">
                    <Skeleton height={350}/>
                </div>
            </>
        )
      }

      const filterProduct = (cat) =>{
        const updatedList = data.filter((e)=>e.category===cat);
        setFilter(updatedList);
      }

      const ShowProducts =() => {
        return (
            <>
                    <div className="buttons d-flex justify-content-center mb-5 pb-5">
            <button className='btn btn-outline-dark me-2' onClick={()=> setFilter(data)}>All</button>
            <button className='btn btn-outline-dark me-2' onClick={()=> filterProduct(`men's clothing`)}>Men's clothink</button>
            <button className='btn btn-outline-dark me-2' onClick={()=> filterProduct(`women's clothing`)}>Woman's Clothink</button>
            <button className='btn btn-outline-dark me-2' onClick={()=> filterProduct(`jewelery`)}>Jewelery</button>
            <button className='btn btn-outline-dark me-2' onClick={()=> filterProduct(`electronics`)}>Electronics</button>

        </div>
        {filter.map((product) => {
            return (
                <>
                    <div className="col-md-3 mb-4">
                    <Card className='h-100 text-center p-4' key= {product.id}>
                    <Card.Img variant="top" src={product.image} height ='250px' />
                    <Card.Body>
                 <Card.Title className='mb-0'>{product.title.substring(0,12)}...</Card.Title>
                 <Card.Text clasName="lead fw-bold">
                    ${product.price}
                </Card.Text>
                <Button variant="outline-dark">Buy now</Button>
      </Card.Body>
    </Card>

                    </div>
                </>
            )
        })}
            </>
        )
      }

  return (
    <div>
        <div className="container my -5 py-5">
            <div className="row">
                <div className="col-12 mb-5">
                    <h1 className='display-6 fw-border text-center'> Latest Product</h1>
                 <hr/>
                </div>
            </div>
            <div className="row justify-content-center">
                {loading ? <Loading/> : <ShowProducts/>}
            </div>
        </div>
    </div>
  )
};
