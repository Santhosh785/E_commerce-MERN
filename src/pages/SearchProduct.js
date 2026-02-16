import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import summaryAPI from '../common'
import { toast } from 'react-toastify'

const SearchProduct = () => {
    const query = useLocation() //React Router and gives info about the current URL.
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    console.log("query", query.search)

    const fetchProduct = async () => {
        setLoading(true)
        const response = await fetch(summaryAPI.searchProduct.url + query.search)
        const dataResponse = await response.json()
        setLoading(false)

        setData(dataResponse?.data || [])
    }

    useEffect(() => {
        fetchProduct()
    }, [query])

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

    return (
        <div className='container mx-auto p-4'>
            {
                loading && (
                    <p className='text-lg text-center'>Loading ...</p>
                )
            }

            <p className='text-lg font-semibold my-3'>Search Results : {data.length}</p>

            {
                data.length === 0 && !loading && (
                    <p className='bg-white text-lg text-center p-4'>No Data Found....</p>
                )
            }


            {
                data.length !== 0 && !loading && (
                    <div className='grid grid-cols-[repeat(auto-fill,minmax(260px,320px))] justify-between md:justify-start gap-4'>
                        {
                            data.map((product, index) => {
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
                )
            }
        </div>
    )
}

export default SearchProduct
