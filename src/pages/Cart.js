import React, { useEffect, useState } from 'react'
import summaryAPI from '../common'
import { toast } from 'react-toastify'
import { MdDelete } from 'react-icons/md'

const Cart = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchData = async () => {
        const response = await fetch(summaryAPI.viewCartProduct.url, {
            method: summaryAPI.viewCartProduct.method,
            credentials: 'include',
            headers: {
                "content-type": "application/json"
            }
        })

        const responseData = await response.json()

        if (responseData.success) {
            setData(responseData.data)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const increaseQuantity = async (id, qty) => {
        const response = await fetch(summaryAPI.updateCartProduct.url, {
            method: summaryAPI.updateCartProduct.method,
            headers: {
                "content-type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({
                _id: id,
                quantity: qty + 1
            })
        })

        const responseData = await response.json()

        if (responseData.success) {
            fetchData()
        }
    }

    const decreaseQuantity = async (id, qty) => {
        if (qty >= 2) {
            const response = await fetch(summaryAPI.updateCartProduct.url, {
                method: summaryAPI.updateCartProduct.method,
                headers: {
                    "content-type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({
                    _id: id,
                    quantity: qty - 1
                })
            })

            const responseData = await response.json()

            if (responseData.success) {
                fetchData()
            }
        }
    }

    const deleteCartProduct = async (id) => {
        const response = await fetch(summaryAPI.deleteCartProduct.url, {
            method: summaryAPI.deleteCartProduct.method,
            headers: {
                "content-type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({
                _id: id
            })
        })

        const responseData = await response.json()

        if (responseData.success) {
            toast.success(responseData.message)
            fetchData()
        }
    }

    const totalQty = data.reduce((previousValue, currentValue) => previousValue + currentValue.quantity, 0)
    const totalPrice = data.reduce((previousValue, currentValue) => previousValue + (currentValue.quantity * currentValue?.productId?.sellingPrice), 0)

    return (
        <div className='container mx-auto p-4'>
            <div className='text-lg font-bold my-3'>
                {data.length === 0 && !loading && (
                    <p className='bg-white py-5 text-center'>Your Cart is Empty</p>
                )}

                <div className='flex flex-col lg:flex-row gap-10 justify-between p-4'>
                    {/* display product */}
                    <div className='w-full max-w-3xl'>
                        {data.map((product, index) => {
                            return (
                                <div key={product?._id} className='w-full bg-white h-32 my-2 border border-slate-300  rounded grid grid-cols-[128px,1fr]'>
                                    <div className='w-32 h-32 bg-slate-200 p-2'>
                                        <img src={product?.productId?.productImage} className='w-full h-full object-scale-down mix-blend-multiply' alt='cart_item' />
                                    </div>
                                    <div className='px-4 py-2 relative'>
                                        {/* delete product */}
                                        <div className='absolute right-2 top-2 text-red-600 rounded-full p-2 hover:bg-red-600 hover:text-white cursor-pointer' onClick={() => deleteCartProduct(product?._id)}>
                                            <MdDelete />
                                        </div>

                                        <h2 className='text-lg lg:text-xl text-ellipsis line-clamp-1 font-medium'>{product?.productId?.productName}</h2>
                                        <p className='capitalize text-slate-500 text-sm'>{product?.productId?.category}</p>
                                        <div className='flex items-center justify-between'>
                                            <p className='text-red-500 font-bold text-lg'>₹{product?.productId?.sellingPrice}</p>
                                            <p className='text-slate-500 line-through text-xs'>₹{product?.productId?.price}</p>
                                        </div>

                                        <div className='flex items-center gap-3 mt-1'>
                                            <button className='border border-red-600 text-red-600 hover:bg-red-600 hover:text-white w-6 h-6 flex justify-center items-center rounded' onClick={() => decreaseQuantity(product?._id, product?.quantity)}>-</button>
                                            <span>{product?.quantity}</span>
                                            <button className='border border-red-600 text-red-600 hover:bg-red-600 hover:text-white w-6 h-6 flex justify-center items-center rounded' onClick={() => increaseQuantity(product?._id, product?.quantity)}>+</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* summary */}
                    {
                        data.length > 0 && (
                            <div className='mt-5 lg:mt-0 w-full max-w-sm'>
                                <div className='bg-white h-36 p-4 rounded'>
                                    <h2 className='text-white bg-red-600 px-4 py-1 text-lg font-medium rounded'>Summary</h2>
                                    <div className='flex items-center justify-between px-4 gap-2 font-medium text-lg text-slate-600'>
                                        <p>Quantity</p>
                                        <p>{totalQty}</p>
                                    </div>
                                    <div className='flex items-center justify-between px-4 gap-2 font-medium text-lg text-slate-600'>
                                        <p>Total Price</p>
                                        <p>₹{totalPrice}</p>
                                    </div>
                                    <button className='bg-blue-600 hover:bg-blue-700 text-white w-full py-2 mt-3 font-bold'>Payment</button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Cart
