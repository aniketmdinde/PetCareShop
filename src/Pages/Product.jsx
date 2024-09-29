import React from 'react'
import LeftCircle from './../assets/left-circle.png'
import Product1 from './../assets/product1.png'
import RightCircle from './../assets/right-circle.png'
import Product1Back from './../assets/product1-back.png'
import Message from './../assets/message.png'
import FoodInVessel from './../assets/food-in-vessel.jpeg'
import "./Product.css"

const Product = () => {
  return (
    <>
        <div className="product-container w-full h-screen flex justify-center items-center gap-12 box-border">
            <div className="product-image-container h-4/6 w-2/6 flex flex-col justify-center items-center">
                <div className="product-main-image w-full h-3/4 flex justify-between items-center">
                    <img src={LeftCircle} alt="" className="left-icon" />
                    <img src={Product1} alt="" className="product-img h-full w-auto" />
                    <img src={RightCircle} alt="" className="right-icon" />
                </div>
                <div className="product-submain-images w-5/6 h-1/4 flex justify-evenly items-center">
                    <img src={Product1} alt="" className="product-submain-imgs h-full w-1/4" />
                    <img src={Product1Back} alt="" className="product-submain-imgs h-full w-1/4" />
                    <img src={Message} alt="" className="product-submain-imgs h-full w-1/4" />
                    <img src={FoodInVessel} alt="" className="product-submain-imgs h-full w-1/4" />
                </div>
            </div>
            <div className="about-product-container h-4/6 w-2/6 flex flex-col justify-center items-center gap-4 box-border">
                <div className="cart-and-quantity h-full w-5/6 bg-red-300 rounded-3xl p-3 flex flex-col justify-center items-center gap-4">
                    <div className="name-and-price w-full h-1/5 flex flex-col justify-center items-center">
                        <h1 className="product-name">Food Pldeo-Damisl True & Stuzio</h1>
                        <h1 className="product-price">$12.98</h1>
                        <p className="product-price-qty">$12.98/kg</p>
                    </div>
                    <div className="product-quantity w-full h-3/5 flex flex-col justify-center items-center gap-2">
                        <div className='pack-size'>Pack Size:</div>
                        <div className="pricing grid grid-rows-2 place-items-center gap-4">
                            <div className="qty1 grid grid-cols-2 place-items-center gap-4">
                                <div className="kg flex flex-col justify-evenly items-center border-2 border-black rounded-xl py-1 px-12">
                                    <h3 className="kg-text">1Kg</h3>
                                    <p className='price-text'>$ 12.98</p>
                                    <p className='price-text-bag'>1 x 1Kg Bag</p>
                                </div>
                                <div className="kg flex flex-col justify-evenly items-center border-2 border-black rounded-xl py-1 px-12">
                                    <h3 className="kg-text">2Kg</h3>
                                    <p className='price-text'>$ 25.96</p>
                                    <p className='price-text-bag'>1 x 2Kg Bag</p>
                                </div>
                            </div>
                            <div className="qty2 grid grid-cols-2 place-items-center gap-4">
                                <div className="kg flex flex-col justify-evenly items-center border-2 border-black rounded-xl py-1 px-12">
                                    <h3 className="kg-text">3Kg</h3>
                                    <p className='price-text'>$ 38.94</p>
                                    <p className='price-text-bag'>1 x 3Kg Bag</p>
                                </div>
                                <div className="kg flex flex-col justify-evenly items-center border-2 border-black rounded-xl py-1 px-12">
                                    <h3 className="kg-text">4Kg</h3>
                                    <p className='price-text'>$ 51.92</p>
                                    <p className='price-text-bag'>1 x 4Kg Bag</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-cart w-full h-2/5 flex flex-col justify-center items-center gap-2">
                        <div className='cart-text w-full h-auto'>In stock - Order before 1 OOpm, get it tomorrow (Mon-Thurs)!</div>
                        <div className="cart-count w-3/4 h-1/4 flex justify-center items-center border-2 border-black">
                            <div className="add-to-cart-count w-full h-full flex justify-evenly items-center">
                                <div className='px-2 border-2 border-black rounded-full bg-black text-white'>-</div>
                                <div>1</div>
                                <div className='px-2 border-2 border-black rounded-full bg-black text-white'>+</div>
                            </div>
                            <div className="add-to-cart w-full h-full flex justify-center items-center border-2 border-black rounded-3xl bg-black text-white">
                                <div>ADD TO CART</div>
                            </div>
                        </div>
                        <div className="about-product-text w-full h-auto">
                            <div className="about-text w-full h-full">Predominant ingredients of most of these include corn, wheat, barley, rice, or soy meal, in combination or alone.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Product