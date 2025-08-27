import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold text-lg mb-3">IHAVERAM</h4>
            <p className="text-gray-400 text-sm">ตลาดซื้อขายอุปกรณ์ไอที ครบจบในที่เดียว</p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-3">สำรวจ</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition">หน้าแรก</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition">สินค้าทั้งหมด</Link></li>
              <li><Link to="/computersets" className="text-gray-400 hover:text-white transition">คอมพิวเตอร์เซ็ท</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition">ติดต่อเรา</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-3">ช่วยเหลือ</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">คำถามที่พบบ่อย</a></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition">ติดต่อเรา</Link></li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-6" />

        <div className="text-center text-gray-500 text-sm">
          © 2025 IHAVERAM. เว็บไซต์สำหรับขายอุปกรณ์ไอที
        </div>
      </div>
    </footer>
  );
}
