import React from 'react';
import { Link } from "react-router-dom";

export const SETS = [
  {
    id: 13,
    name: "Lenovo Ideacentre AIO 24ARR9-F0HR005KTA Cloud Gray",
    price: "17490",
    image: "https://img.advice.co.th/images_nas/pic_product4/A0163067/A0163067OK_BIG_1.jpg",
    description: "All-in-One PC ดีไซน์บางเบา มาพร้อมจอ 24 นิ้ว",
    specifications: { CPU: "AMD Ryzen 5 7520U", RAM: "8GB DDR5", Storage: "512GB SSD", Display: "23.8” FHD IPS", GPU: "Integrated Radeon Graphics", OS: "Windows 11 Home" }
  },
  {
    id: 14,
    name: "ACER DESKTOP AIO Aspire C24-1800-1338G0T23Mi/T001 Black",
    price: "18490",
    image: "https://media-cdn.bnn.in.th/312167/ACER-DESKTOP-AIO-ASPIRE-C24-1800-1338G0T23MIT003-BLACK-1.jpg",
    description: "AIO PC ประสิทธิภาพสูงจาก Acer พร้อมจอ 24 นิ้ว ใช้งานลื่นไหล",
    specifications: { CPU: "Intel Core i3-1335U", RAM: "8GB DDR4", Storage: "512GB SSD", Display: "23.8” FHD IPS", GPU: "Intel UHD Graphics", OS: "Windows 11 Home" }
  },
  {
    id: 15,
    name: "ASUS DESKTOP AIO A3402WVAK-BPC145WA BLACK",
    price: "20990",
    image: "https://img.advice.co.th/images_nas/pic_product4/A0164831/A0164831OK_BIG_1.jpg",
    description: "คอมพิวเตอร์ตั้งโต๊ะแบบ All-in-One จาก ASUS ใช้งานสะดวก ประสิทธิภาพครบครัน",
    specifications: { CPU: "Intel Core i5-1235U", RAM: "16GB DDR4", Storage: "512GB SSD", Display: "23.8” FHD IPS", GPU: "Intel Iris Xe Graphics", OS: "Windows 11 Home" }
  },
  {
    id: 16,
    name: "Dell Desktop AIO INSPIRON 5430-OID5430103501GTH BLACK",
    price: "22990",
    image: "https://m.media-amazon.com/images/I/71hKbLAtbsL._AC_.jpg",
    description: "AIO จาก Dell ดีไซน์เรียบหรู พร้อมสเปกครบสำหรับทำงานและความบันเทิง",
    specifications: { CPU: "Intel Core i5-1340P", RAM: "16GB DDR4", Storage: "512GB SSD", Display: "23.8” FHD IPS", GPU: "Intel Iris Xe Graphics", OS: "Windows 11 Home" }
  },
];

export default function ComputerSets({ addToCart }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">ชุดคอมพิวเตอร์สำเร็จรูป</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SETS.map((set) => (
          <div key={set.id} className="bg-white border rounded-xl shadow hover:shadow-lg transition flex flex-col">
            <Link to={`/computersets/${set.id}`} className="flex flex-col p-4 flex-1 cursor-pointer">
              <div className="w-full h-48 flex items-center justify-center mb-3">
                <img
                  src={set.image}
                  alt={set.name}
                  className="max-h-full max-w-full object-contain rounded transition-transform duration-300 hover:scale-110"
                />
              </div>
              <p className="font-semibold text-gray-800 mb-1">{set.name}</p>
              <p className="text-red-600 font-bold text-lg">{Number(set.price).toLocaleString()} ฿</p>
            </Link>
            <button
              onClick={() => addToCart({ ...set, quantity: 1 })}
              className="mt-auto mx-4 mb-4 bg-green-600 text-white font-bold px-4 py-2 rounded-lg hover:bg-green-700 transition"
            >
              🛒 เพิ่มลงตะกร้า
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
