import React from 'react';
import { Link } from "react-router-dom";

// 🎯 Mock data for featured products
const FEATURED_PRODUCTS = [
  {
    id: 1,
    title: "VGA GALAX GEFORCE RTX 5080 1-CLICK OC - 16GB GDDR7",
    price: "45,600",
    location: "IHAVERAM",
    image: "https://asset.msi.com/resize/image/global/product/product_173734304502d38f3b1423a6a8fcd70d645fad4590.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
    isVerified: true
  },
  {
    id: 2,
    title: "VGA SAPPHIRE PULSE AMD RADEON RX 7600 XT 16GB",
    price: "12,900",
    location: "IHAVERAM",
    image: "https://www.jib.co.th/img_master/product/original/2023052515390459857_1.jpg",
    isVerified: true
  },
  {
    id: 3,
    title: "VGA ZOTAC GAMING GEFORCE RTX 5080 SOLID OC - 16GB GDDR7",
    price: "44,900",
    location: "IHAVERAM",
    image: "https://tse1.mm.bing.net/th/id/OIP.WbUh2Yqs245kW5F9juhqLgHaFH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    isVerified: false
  },
  {
    id: 4,
    title: "CPU (ซีพียู) AMD RYZEN 7 8700F - 8C 16T (AMD SOCKET AM5)",
    price: "7,690",
    location: "IHAVERAM",
    image: "https://www.jib.co.th/img_master/product/original/20240606142826_67756_287_2.jpg",
    isVerified: true
  },
];

export default function Home({ addToCart }) {
  return (
    <div className="container mx-auto p-6">
      <div
        className="text-center my-10 bg-cover bg-center rounded-xl py-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-cover bg-center rounded-xl z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1600&q=80')",
            filter: "blur(4px)"
          }}
        ></div>
        <div className="relative z-10 text-white drop-shadow-lg">
          <h1 className="text-4xl font-bold">IHAVERAM</h1>
          <p className="mt-2 text-xl">
            ศูนย์รวมอุปกรณ์คอมพิวเตอร์และ Gaming Gear
          </p>
        </div>
      </div>

      <div className="bg-gray-100 rounded-xl p-6 mb-10">
        <h2 className="text-2xl font-bold mb-4">สินค้าแนะนำ</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="bg-white border rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
            >
              <Link to={`/products/${product.id}`} className="p-4 flex flex-col flex-1 cursor-pointer">
                <div className="w-full h-48 overflow-hidden flex items-center justify-center mb-3">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-110"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://placehold.co/400x300/e2e8f0/64748b?text=Image+Not+Found";
                    }}
                  />
                </div>
                <p className="font-semibold text-gray-800 mb-1">{product.title}</p>
                <p className="text-red-600 font-bold text-lg mb-2">{product.price} ฿</p>
              </Link>
              <button
                onClick={() => addToCart({ ...product, quantity: 1, name: product.title })}
                className="mt-auto mx-4 mb-4 bg-green-600 text-white font-bold px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                🛒 เพิ่มลงตะกร้า
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
