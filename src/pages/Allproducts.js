import React, { useEffect, useState } from 'react'
import UploadProduct from '../components/UploadProduct'
import summaryAPI from '../common'
import { MdDelete } from 'react-icons/md'
import { toast } from 'react-toastify'

const Allproducts = () => {
  const [openUploadProduct, setOpenUploadProduct] = useState(false)
  const [allProduct, setAllProduct] = useState([])

  const fetchAllProduct = async () => {
    const response = await fetch(summaryAPI.get_product.url)
    const dataResponse = await response.json()

    setAllProduct(dataResponse?.data || [])
  }

  const handleDeleteProduct = async (id) => {
    const response = await fetch(summaryAPI.delete_product.url, {
      method: summaryAPI.delete_product.method,
      headers: {
        "content-type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify({ _id: id })
    })

    const dataResponse = await response.json()

    if (dataResponse.success) {
      toast.success(dataResponse.message)
      fetchAllProduct()
    }

    if (dataResponse.error) {
      toast.error(dataResponse.message)
    }
  }

  useEffect(() => {
    fetchAllProduct()
  }, [])

  return (
    <div>
      <div className='bg-white py-2 px-4 flex justify-between items-center'>
        <h2 className='font-bold text-lg'>All Product</h2>
        <button className='border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all py-1 px-3 rounded-full ' onClick={() => setOpenUploadProduct(true)}>Upload Product</button>
      </div>

      {/**all product */}
      <div className='flex items-center flex-wrap gap-5 py-5 h-[calc(100vh-190px)] overflow-y-scroll'>
        {
          allProduct.map((product, index) => {
            return (
              <div className='bg-white p-4 rounded ' key={index + "allProduct"}>
                <div className='w-40'>
                  <div className='w-32 h-32 flex justify-center items-center'>
                    <img src={product?.productImage} width={120} height={120} className='mx-auto object-fill h-full' alt='product_image' />
                  </div>
                  <h1 className='text-ellipsis line-clamp-2'>{product.productName}</h1>

                  <div className='w-fit ml-auto p-2 bg-red-100 hover:bg-red-600 rounded-full hover:text-white cursor-pointer' onClick={() => handleDeleteProduct(product._id)}>
                    <MdDelete />
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>


      {/**upload product component */}
      {
        openUploadProduct && (
          <UploadProduct onClose={() => setOpenUploadProduct(false)} fetchData={fetchAllProduct} />
        )
      }
    </div>
  )
}

export default Allproducts