"use client";

import { useEffect, useState } from "react";
import { Package, Truck, CheckCircle } from "lucide-react";
import api from "../lib/api";

interface Order {
  id: number;
  total_price: string;
  status: string;
  created_at: string;
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await api.get("orders/");
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return (
      <section className="py-32 min-h-screen bg-[#F8FAF5] flex items-center justify-center">
        <h2 className="text-3xl font-bold text-[#163020]">
          Loading Orders...
        </h2>
      </section>
    );
  }

  return (
    <section className="py-32 bg-[#F8FAF5] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">

        <div className="text-center">
          <span className="uppercase tracking-[5px] text-sm font-semibold text-green-600">
            Orders
          </span>

          <h1 className="mt-4 text-5xl font-bold text-gray-900">
            My Orders
          </h1>
        </div>

        <div className="space-y-8 mt-16">

          {orders.length === 0 ? (
            <div className="bg-white rounded-[32px] p-10 shadow-lg text-center">
              <h2 className="text-3xl font-bold text-gray-900">
                No Orders Yet
              </h2>
            </div>
          ) : (
            orders.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-[32px] p-8 shadow-lg flex flex-col md:flex-row justify-between items-center gap-6"
              >
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Order #{order.id}
                  </h2>

                  <p className="mt-3 text-gray-500">
                    {new Date(order.created_at).toLocaleDateString()}
                  </p>
                </div>

                <div className="text-green-600 text-2xl font-bold">
                  ${order.total_price}
                </div>

                <div className="flex items-center gap-3">

                  {order.status === "Delivered" && (
                    <>
                      <CheckCircle className="text-green-600" />
                      <span className="text-green-600 font-medium">
                        Delivered
                      </span>
                    </>
                  )}

                  {order.status === "Shipping" && (
                    <>
                      <Truck className="text-blue-500" />
                      <span className="text-blue-500 font-medium">
                        Shipping
                      </span>
                    </>
                  )}

                  {order.status === "Pending" && (
                    <>
                      <Package className="text-yellow-500" />
                      <span className="text-yellow-500 font-medium">
                        Pending
                      </span>
                    </>
                  )}

                </div>
              </div>
            ))
          )}

        </div>
      </div>
    </section>
  );
}