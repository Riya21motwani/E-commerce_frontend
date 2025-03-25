import React , {useEffect} from 'react';
import {useParams,useNavigate} from 'react-router-dom'

const UpdateProduct = () => {
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [company, setCompany] = React.useState('');
    const params=useParams();
    const navigate=useNavigate();
    useEffect(()=>{
        
        getProductDetails();
    },[])
    
    const getProductDetails= async()=>{
        console.warn(params)
        let result =await fetch(`https://ecommerce-backend-1-x0ct.onrender.com/product/${params.id}`,{
            headers:{
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result=await result.json();
       setName(result.name);
       setPrice(result.price);
       setCategory(result.category);
       setCompany(result.company);
    }

    const updateProduct = async () => {
        console.warn(name,price,category,company)
        let result =await fetch(`https://ecommerce-backend-1-x0ct.onrender.com/product/${params.id}`,{
            method:"Put",
            body: JSON.stringify({name,price,category,company}),
            headers:{
                'Content-Type' : "application/json",
                 authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`

            }
        });
        result=await result.json()
        console.warn(result)
        navigate('/');

    }

    return (
        <div className='product'>
            <h1 style={{ textAlign: "center", marginTop: "50px" }}>Update Product</h1>
            <input type="text" placeholder='Enter product name' className='inputbox'
                value={name} onChange={(e) => { setName(e.target.value) }}
            />
          

            <input type="text" placeholder='Enter product price' className='inputbox'
                value={price} onChange={(e) => { setPrice(e.target.value) }}
            />
           

            <input type="text" placeholder='Enter product category' className='inputbox'
                value={category} onChange={(e) => { setCategory(e.target.value) }}
            />
            

            <input type="text" placeholder='Enter product company' className='inputbox'
                value={company} onChange={(e) => { setCompany(e.target.value) }}
            />
          


            <button onClick={updateProduct} className='appbutton'>Update Product</button>
        </div>
    )
}

export default UpdateProduct;