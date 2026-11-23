
import { Suspense } from "react";
import OrderSuccessContent from "./OrderSuccessContent";

export default function OrderSuccessPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[#F8FAF5] flex items-center justify-center px-5">
          <div className="text-center">
            <p className="text-gray-600">
              Loading order details...
            </p>
          </div>
        </main>
      }
    >
      <OrderSuccessContent />
    </Suspense>
  );
}
