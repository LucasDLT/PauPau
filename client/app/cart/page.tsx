import { BtnTotalCart } from "../components/btn&totalcart";
import { ButtonBack } from "../components/btnBack";
import { OrderForm } from "../components/orderForm";
import { ProductsCart } from "../components/ProductsCart";

export default function CartPage() {
  return (
    //contenedor general del carrito
    <section className="h-dvh Julius-Sans-One grid grid-cols-1 grid-rows-[20px_1fr_70px_auto] pb-10 gap-10 md:grid-rows-[20px_1fr_50px_70px_450px]">
      <ButtonBack />

      <ProductsCart />
      <BtnTotalCart total={10000} />
      <p className="self-center text-center py-6 text-3xl  border-yellow-600 border-dashed border-y-2 font-black ">
        completa el formulario y envialo para coordinar pago y envio.
      </p>
      <OrderForm />
    </section>
  );
}
