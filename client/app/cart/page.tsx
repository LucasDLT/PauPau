"use client";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const router = useRouter();
    const handleGoBack = () => {
      router.replace("/");
    }
  return (
    <section>
      <button
      onClick={handleGoBack}>atras</button>
    </section>
  );
}
