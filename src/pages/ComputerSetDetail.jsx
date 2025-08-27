// src/pages/ComputerSetDetail.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { SETS } from "./ComputerSets";

export default function ComputerSetDetail({ addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const set = SETS.find((s) => s.id === Number(id));

  if (!set) {
    return <div className="p-8 text-center text-red-500">❌ ไม่พบสินค้านี้</div>;
  }

  const handleAddToCart = () => {
    addToCart({ ...set, quantity: 1 });
    alert(`✅ ${set.name} ถูกเพิ่มลงตะกร้าแล้ว`);
  };

  return (
    <div className="container mx-auto p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center space-x-1.5 text-gray-500 hover:text-gray-900 transition-colors duration-200"
      >
        <IoIosArrowBack className="text-xl" />
        <span className="text-lg font-medium">ย้อนกลับหน้าสินค้าทั้งหมด</span>
      </button>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        {/* รูปสินค้า */}
        <div className="w-full h-auto flex items-center justify-center p-4">
          <img
            src={set.image}
            alt={set.name}
            className="w-full h-auto max-h-96 object-contain rounded"
          />
        </div>

        {/* รายละเอียดสินค้า */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 text-gray-800">
            {set.name}
          </h1>
          <p className="text-3xl sm:text-4xl font-bold text-red-600 mb-4">
            {Number(set.price).toLocaleString()} ฿
          </p>

          {set.description && (
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {set.description}
            </p>
          )}

          {set.specifications && (
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-3 text-gray-800">ข้อมูลจำเพาะ</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {Object.entries(set.specifications).map(([key, value]) => (
                  <li key={key}>
                    <span className="font-semibold capitalize">{key}:</span> {value}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button
            onClick={handleAddToCart}
            className="bg-green-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-green-700 transition duration-300 transform hover:scale-105"
          >
            🛒 เพิ่มลงตะกร้า
          </button>
        </div>
      </div>
    </div>
  );
}
