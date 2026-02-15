import React, { useEffect, useState } from 'react'
import summaryAPI from '../common'
import { toast } from 'react-toastify'

const Home = () => {
  const [allProduct, setAllProduct] = useState([])

  const fetchAllProduct = async () => {
    const response = await fetch(summaryAPI.get_product.url)
    const dataResponse = await response.json()

    setAllProduct(dataResponse?.data || [])
  }

  const handleAddToCart = async (e, id) => {
    e.stopPropagation()
    e.preventDefault()

    const response = await fetch(summaryAPI.addToCart.url, {
      method: summaryAPI.addToCart.method,
      headers: {
        "content-type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify({
        productId: id
      })
    })

    const responseData = await response.json()

    if (responseData.success) {
      toast.success(responseData.message)
    }

    if (responseData.error) {
      toast.error(responseData.message)
    }
  }

  useEffect(() => {
    fetchAllProduct()
  }, [])

  return (
    <div className='container mx-auto p-4'>
      <div className='flex items-center flex-wrap gap-5 py-5 justify-center md:justify-start'>
        {
          allProduct.map((product, index) => {
            return (
              <div key={product._id} className='w-full min-w-[280px]  md:min-w-[320px] max-w-[280px] md:max-w-[320px]  bg-white rounded-sm shadow '>
                <div className='bg-slate-200 h-48 p-4 min-w-[280px] md:min-w-[145px] flex justify-center items-center'>
                  <img src={product.productImage} className='object-scale-down h-full hover:scale-110 transition-all' alt='product' />
                </div>
                <div className='p-4 grid gap-3'>
                  <h2 className='font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black'>{product?.productName}</h2>
                  <p className='capitalize text-slate-500'>{product?.category}</p>
                  <div className='flex gap-3'>
                    <p className='text-red-600 font-medium'>₹{product?.sellingPrice}</p>
                    <p className='text-slate-500 line-through'>₹{product?.price}</p>
                  </div>
                  <button className='text-sm bg-red-600 hover:bg-red-700 text-white px-3 py-0.5 rounded-full' onClick={(e) => handleAddToCart(e, product?._id)}>Add to Cart</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Home