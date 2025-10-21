import { FaTrash } from "react-icons/fa";
import Card from "./Card";

export default function CartPage({ cart, removeFromCart, updateQuantity }) {
  const totalPrice = cart.reduce((sum, item) => {
    const price = parseInt(item.discountprice?.replace(/[^\d]/g, "")) || 0;
    return sum + price * item.quantity;
  }, 0);

  return (
    <div className="p-10">
      <h1 className="text-lg md:text-xl font-bold mb-5">SHOPPING CART</h1>

      {cart.length === 0 ? (
        <p className="text-center m-20">Your cart is empty</p>
      ) : (
        <div className="flex flex-wrap">
        <div className="w-full lg:w-2/3">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center justify-between md:gap-5 border-1 md:px-5 py-3"
            >
              <img src={item.image} alt={item.name} className="w-50 md:w-60 md:m-5 rounded-lg object-cover" />
              <div className="flex flex-row items-center md:items-start">
                <div className="flex flex-col flex-grow md:mx-5 md:mr-15">
                  <span className="font-bold text-sm md:text-base">{item.name}</span>
                  <span className="text-xs md:text-sm font-bold">{item.discountprice || item.price}</span>
                  <span className="text-xs md:text-sm">Size: {item.size}</span>
                </div>
                <div className="flex flex-col">
                <div className="flex flex-row md:flex-col m-2 md:m-5 gap-0 md:gap-3 items-center text-xs">
                  <button
                    onClick={() => removeFromCart(item.id, item.size)}
                    className="cursor-pointer m-5 md:my-10"
                  >
                    <FaTrash/>
                  </button>
                  <div className="border border-gray-500 flex items-center gap-1 md:gap-3 p-1 md:p-2">
                    <button
                      className="cursor-pointer text-red-500 px-2"
                      onClick={() => updateQuantity(item.id, item.size, -1)}
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      className="cursor-pointer text-[#59F151] px-2"
                      onClick={() => updateQuantity(item.id, item.size, +1)}
                    >
                      +
                    </button>
                  </div>
                  <button className="hidden md:block cursor-pointer underline font-bold">SAVE FOR LATER</button>
                </div>
                <button className="block md:hidden cursor-pointer underline font-bold text-xs mb-5 text-end">SAVE FOR LATER</button>
                </div>
            </div>
            </div>
          ))}
          </div>
          
          <div className="flex flex-col gap-2 mx-auto w-70 p-5">
            <p className="font-bold text-md md:text-lg text-center">Summary</p>
            <div className="flex text-xs md:text-base justify-between my-5"><p className="text-gray-500">Tambahkan kode promo</p><button>+</button></div>
            <p className="text-center text-sm mb-8">Checkout dengan cepat dan aman</p>
            <div className="flex justify-between my-2 text-sm"><p className="">Subtotal:</p><p>Rp {totalPrice.toLocaleString("id-ID")}</p></div>
            <div className="flex justify-between text-sm"><p className="">Pengiriman:</p><p>GRATIS</p></div>
            <div className="flex justify-between my-3 text-base font-bold"><p className="">Total:</p><p>Rp {totalPrice.toLocaleString("id-ID")}</p></div>
            <button className="cursor-pointer bg-[#59F151] p-2 text-center text-sm md:text-md">Lanjutkan ke Pembayaran</button>
          </div>
          <div>
            <p className="text-lg md:text-xl font-bold mt-10">RELATED PRODUCT</p>
            <Card limit={3}/>
          </div>
        </div>
      )}
    </div>
  );
}
