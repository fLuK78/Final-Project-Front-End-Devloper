import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

// รวมสินค้าทั้งหมด (mockProducts + COMPUTER_SETS)
const PRODUCTS = [
  // สินค้าทั่วไป
  {
    id: 1,
    name: "VGA GALAX GEFORCE RTX 5080 1-CLICK OC - 16GB GDDR7",
    price: "45,600",
    image:
      "https://asset.msi.com/resize/image/global/product/product_173734304502d38f3b1423a6a8fcd70d645fad4590.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
    description: "การ์ดจอประสิทธิภาพสูงสำหรับเกมเมอร์มืออาชีพ",
  },
  {
    id: 2,
    name: "VGA SAPPHIRE PULSE AMD RADEON RX 7600 XT 16GB",
    price: "12,900",
    image:
      "https://www.jib.co.th/img_master/product/original/2023052515390459857_1.jpg",
    description: "เหมาะสำหรับเล่นเกมที่ความละเอียด Full HD และ QHD",
  },
  {
    id: 3,
    name: "VGA ZOTAC GAMING GEFORCE RTX 5080 SOLID OC - 16GB GDDR7",
    price: "44,900",
    image:
      "https://tse1.mm.bing.net/th/id/OIP.WbUh2Yqs245kW5F9juhqLgHaFH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "สุดยอดการ์ดจอสำหรับงานกราฟิกและ AI",
  },
  {
    id: 4,
    name: "CPU (ซีพียู) AMD RYZEN 7 8700F - 8C 16T  (AMD SOCKET AM5)",
    price: "7,690",
    image:
      "https://www.jib.co.th/img_master/product/original/20240606142826_67756_287_2.jpg",
    description:
      "ซีพียูรุ่นใหม่จาก AMD มอบพลังประมวลผลที่ยอดเยี่ยมสำหรับการเล่นเกมและงานสร้างสรรค์",
  },
  {
    id: 5,
    name: "CPU (ซีพียู) INTEL CORE I3-14100 ",
    price: "4,090",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.XYxol9nsFM4Hx4wF2FHGrQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "เหมาะสำหรับงานทั่วไปและการเล่นเกมเบื้องต้น คุ้มค่าราคา",
  },
  {
    id: 6,
    name: "CPU (ซีพียู) INTEL CORE ULTRA 7 265F",
    price: "11,100",
    image:
      "https://allegro.stati.pl/AllegroIMG/PRODUCENCI/INTEL/BX80768265/packshot-1.jpg",
    description:
      "ขุมพลังใหม่จาก Intel Ultra รองรับงานมัลติโปรเซสและการประมวลผลกราฟิก",
  },
  {
    id: 7,
    name: "6GB (8GBx2) DDR4 3200MHz RAM (หน่วยความจำ) CORSAIR VENGEANCE RGB PRO SL (BLACK)",
    price: "1,990",
    image:
      "https://i5.walmartimages.com/asr/b5c4cdb3-46cc-4745-ab11-6b6fb45b1053.4a07b4286fb3d9198461fed14d02e855.jpeg?odnHeight=372&odnWidth=372&odnBg=FFFFFF",
    description:
      "แรมความเร็วสูงพร้อมไฟ RGB เหมาะกับสายเกมมิ่งและงานโอเวอร์คล็อก",
  },
  {
    id: 8,
    name: "16GB (8GBx2) DDR4 3200MHz RAM (หน่วยความจำ) CORSAIR VENGEANCE RGB PRO SL (WHITE)",
    price: "2,050",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.F27gkoWrIGNPjV9RWolWXgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "ดีไซน์สีขาวพรีเมียม ตกแต่งเคสสวยงาม พร้อมประสิทธิภาพสูง",
  },
  {
    id: 9,
    name: "32GB (16GBx2) DDR5 6000MHz RAM (หน่วยความจำ) CORSAIR VENGEANCE RGB DDR5 (INTEL XMP) (BLACK)",
    price: "3,890",
    image: "https://m.media-amazon.com/images/I/61L8HPVBoUL.jpg",
    description:
      "หน่วยความจำ DDR5 รุ่นใหม่ล่าสุด มอบประสิทธิภาพสูงสุดในการเล่นเกมและงานหนัก",
  },
  {
    id: 10,
    name: "WIRELESS MOUSE (เมาส์ไร้สาย) LOGITECH G PRO X SUPERLIGHT 2 - PINK",
    price: "4,590",
    image:
      "https://resource.logitech.com/e_trim/w_700,h_600,c_pad,q_auto,f_auto,dpr_1.0/b_white/content/dam/gaming/en/products/pro-x-superlight-2/new-gallery-assets-2025/pro-x-superlight-2-mice-top-angle-pink-gallery-1-new.png",
    description:
      "เมาส์ไร้สายสุดเบาเพียง 60 กรัม เหมาะสำหรับอีสปอร์ตและเกมมิ่งมืออาชีพ",
  },
  {
    id: 11,
    name: "WIRELESS MOUSE (เมาส์ไร้สาย) LOGITECH G G502X PLUS RGB WIRELESS BLACK",
    price: "4,990",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.1aiCuMlamq82U4n_Z9t7NgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "เมาส์เกมมิ่งไร้สายพร้อมปุ่มปรับแต่งเยอะและไฟ RGB สวยงาม",
  },
  {
    id: 12,
    name: "WIRELESS MOUSE (เมาส์ไร้สาย) LOGITECH G PRO X SUPERLIGHT 2 DEX (WHITE)",
    price: "4,990",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.CLWgdw8fUErFUKSzxEBVFgHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "เวอร์ชันพิเศษสีขาวน้ำหนักเบา ดีไซน์หรูหราและแม่นยำสูง",
  },

  // คอมเซ็ต
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

export default function ProductDetail({ addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find((p) => p.id === Number(id));

  if (!product) {
    return <div className="p-8 text-center text-red-500">❌ ไม่พบสินค้านี้</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    alert(`✅ ${product.name} ถูกเพิ่มลงตะกร้าแล้ว`);
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
        <div className="w-full h-auto flex items-center justify-center p-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto max-h-96 object-contain"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 text-gray-800">
            {product.name}
          </h1>
          <p className="text-3xl sm:text-4xl font-bold text-red-600 mb-4">
            {product.price} ฿
          </p>
          {product.description && (
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {product.description}
            </p>
          )}

          {product.specifications && (
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-3 text-gray-800">ข้อมูลจำเพาะ</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {Object.entries(product.specifications).map(([key, value]) => (
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
