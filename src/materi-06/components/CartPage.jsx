import { FaTrash } from "react-icons/fa";
import Card from "./Card";
import Navigasi from "./Navigasi"
import Footer from "./Footer"
import { totalPrice } from "../utils/function";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../state/cartSlice";

export default function CartPage() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  
  const handleDecrease = (item) => {
  if (item.quantity === 1) {
      dispatch(removeFromCart({ id: item.id, size: item.size }));
  } else {
    dispatch(updateQuantity({
      id: item.id,
      size: item.size,
      quantity: item.quantity - 1,
    }));
  }
};

  return (
    <div>
      <Navigasi />
      <div className="p-10">
      <h1 className="text-lg md:text-xl font-bold mb-5">SHOPPING CART</h1>

      {cart.length === 0 ? (
        <p className="text-center m-20">Your cart is empty</p>
      ) : (
        <div className="flex flex-wrap">
        <div className="w-full flex flex-col lg:w-2/3 gap-3 lg:gap-5">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center border-1 md:px-5 py-3"
            >
              <img src={item.image} alt={item.name} className="w-50 md:w-60 rounded-lg object-cover" />
              <div className="flex flex-row w-full px-5">
                <div className="flex flex-col flex-grow md:mx-5">
                  <span className="font-bold text-sm md:text-lg">{item.name}</span>
                  {item.discount > 0 ? (
                    <div className="flex flex-col text-sm md:text-md">
                      <span className="line-through ">{item.price}</span>
                      <span className="text-red-500 font-bold">{item.discountprice}</span>
                    </div>
                  ) : (
                    <span className="text-black">{item.price}</span>
                  )}
                  <span className="text-xs md:text-sm">Size: {item.size}</span>
                </div>
                <div className="flex flex-col">
                <div className="flex flex-row md:flex-col md:m-5 gap-0 md:gap-3 items-end text-xs">
                  <div className="flex space-x-5">
                  <button
                    onClick={() => dispatch(removeFromCart({id:item.id, size:item.size}))}
                    className="cursor-pointer"
                  >
                    <FaTrash/>
                  </button>
                  <div className="border border-gray-500 flex items-center gap-1 md:gap-3 p-1 md:p-2">
                    <button
                      className="cursor-pointer text-red-500 px-2 text-base"
                      onClick={() => handleDecrease(item)}
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      className="cursor-pointer text-[#59F151] px-2 text-base"
                      onClick={() => dispatch(updateQuantity({ id: item.id, size: item.size, quantity: item.quantity + 1 }))}
                    >
                      +
                    </button>
                  </div>
                  </div>
                  <button className="hidden md:block cursor-pointer underline font-bold text-md">SAVE FOR LATER</button>
                </div>
                <button className="block md:hidden cursor-pointer underline font-bold text-xs my-5 text-end">SAVE FOR LATER</button>
                </div>
            </div>
            </div>
          ))}
          </div>
          
          <div className="flex flex-col gap-2 mx-auto w-70 p-5 px-7 bg-[#F3F3F3]">
            <p className="font-bold text-md md:text-lg text-center">Summary</p>
            <div className="flex text-xs md:text-base justify-between my-5"><p className="text-gray-500">Tambahkan kode promo</p><button>+</button></div>
            <p className="text-center text-sm mb-8">Checkout dengan cepat dan aman</p>
            <div className="flex justify-between my-2 text-sm"><p className="">Subtotal:</p><p>Rp {totalPrice(cart).toLocaleString("id-ID")}</p></div>
            <div className="flex justify-between text-sm"><p className="">Pengiriman:</p><p>GRATIS</p></div>
            <div className="flex justify-between my-3 text-base font-bold"><p className="">Total:</p><p>Rp {totalPrice(cart).toLocaleString("id-ID")}</p></div>
            <button className="cursor-pointer bg-[#59F151] p-2 text-center text-sm md:text-md">Lanjutkan ke Pembayaran</button>
          </div>
          <div>
            <p className="text-lg md:text-xl font-bold mt-10">RELATED PRODUCT</p>
            <Card limit={3}/>
          </div>
        </div>
      )}
      </div>
      <Footer/>
    </div>
  );
}
