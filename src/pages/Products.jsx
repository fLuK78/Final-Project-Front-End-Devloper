import React from 'react';
import { Link, useLocation } from "react-router-dom";

// 🎯 Mock data for all products (used on the Products page)
const ALL_PRODUCTS = [
  {
    id: 1,
    name: "VGA GALAX GEFORCE RTX 5080 1-CLICK OC - 16GB GDDR7",
    price: "45,600",
    location: "IHAVERAM",
    image: "https://asset.msi.com/resize/image/global/product/product_173734304502d38f3b1423a6a8fcd70d645fad4590.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
    isVerified: true
  },
  {
    id: 2,
    name: "VGA SAPPHIRE PULSE AMD RADEON RX 7600 XT 16GB",
    price: "12,900",
    location: "IHAVERAM",
    image: "https://www.jib.co.th/img_master/product/original/2023052515390459857_1.jpg",
    isVerified: true
  },
  {
    id: 3,
    name: "VGA ZOTAC GAMING GEFORCE RTX 5080 SOLID OC - 16GB GDDR7",
    price: "44,900",
    location: "IHAVERAM",
    image: "https://tse1.mm.bing.net/th/id/OIP.WbUh2Yqs245kW5F9juhqLgHaFH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    isVerified: false
  },
  {
    id: 4,
    name: "CPU (ซีพียู) AMD RYZEN 7 8700F - 8C 16T (AMD SOCKET AM5)",
    price: "7,690",
    location: "IHAVERAM",
    image: "https://www.jib.co.th/img_master/product/original/20240606142826_67756_287_2.jpg",
    isVerified: true
  },
  { id: 5, name: "CPU (ซีพียู) INTEL CORE I3-14100 ", price: "4,090", image: "https://tse3.mm.bing.net/th/id/OIP.XYxol9nsFM4Hx4wF2FHGrQHaHa" },
  { id: 6, name: "CPU (ซีพียู) INTEL CORE ULTRA 7 265F", price: "11,100", image: "https://allegro.stati.pl/AllegroIMG/PRODUCENCI/INTEL/BX80768265/packshot-1.jpg" },
  { id: 7, name: "16GB (8GBx2) DDR4 3200MHz RAM CORSAIR VENGEANCE RGB PRO SL (BLACK)", price: "1,990", image: "https://i5.walmartimages.com/asr/b5c4cdb3-46cc-4745-ab11-6b6fb45b1053.4a07b4286fb3d9198461fed14d02e855.jpeg" },
  { id: 8, name: "16GB (8GBx2) DDR4 3200MHz RAM CORSAIR VENGEANCE RGB PRO SL (WHITE)", price: "2,050", image: "https://tse3.mm.bing.net/th/id/OIP.F27gkoWrIGNPjV9RWolWXgHaHa" },
  { id: 9, name: "32GB (16GBx2) DDR5 6000MHz RAM CORSAIR VENGEANCE RGB DDR5", price: "3,890", image: "https://m.media-amazon.com/images/I/61L8HPVBoUL.jpg" },
  { id: 10, name: "WIRELESS MOUSE LOGITECH G PRO X SUPERLIGHT 2 - PINK", price: "4,590", image: "https://resource.logitech.com/e_trim/w_700,h_600,c_pad,q_auto,f_auto,dpr_1.0/b_white/content/dam/gaming/en/products/pro-x-superlight-2/new-gallery-assets-2025/pro-x-superlight-2-mice-top-angle-pink-gallery-1-new.png" },
  { id: 11, name: "WIRELESS MOUSE LOGITECH G G502X PLUS RGB WIRELESS BLACK", price: "4,990", image: "https://tse3.mm.bing.net/th/id/OIP.1aiCuMlamq82U4n_Z9t7NgHaHa" },
  { id: 12, name: "WIRELESS MOUSE LOGITECH G PRO X SUPERLIGHT 2 DEX (WHITE)", price: "4,990", image: "https://tse3.mm.bing.net/th/id/OIP.CLWgdw8fUErFUKSzxEBVFgHaFj" },
];

// Reusable Product Card Component
const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="bg-white border rounded-xl shadow-sm hover:shadow-lg transition p-4 flex flex-col">
      <Link to={`/products/${product.id}`} className="mb-4">
        <div className="w-full h-48 overflow-hidden rounded-lg flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name || product.title}
            className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-110 rounded"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/400x300/e2e8f0/64748b?text=Image+Not+Found";
            }}
          />
        </div>
      </Link>
      <p className="font-semibold text-gray-800 mb-1">{product.name || product.title}</p>
      <p className="text-red-600 font-bold text-lg mb-2">{product.price} ฿</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-auto bg-green-600 text-white font-bold px-4 py-2 rounded-lg hover:bg-green-700 transition"
      >
        🛒 เพิ่มลงตะกร้า
      </button>
    </div>
  );
};


// Products Page Component
export default function Products({ addToCart }) {
  const [filteredProducts, setFilteredProducts] = React.useState(ALL_PRODUCTS);
  const location = useLocation();

  React.useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const urlQuery = queryParams.get("q") || "";

    const filtered = ALL_PRODUCTS.filter((product) =>
      (product.name || product.title).toLowerCase().includes(urlQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [location.search]);

  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("q") || "";

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">
        สินค้าทั้งหมด {searchQuery ? `: "${searchQuery}"` : ""}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))
        ) : (
          <p>ไม่พบสินค้าที่ตรงกับคำค้นหาของคุณ</p>
        )}
      </div>
    </div>
  );
};
