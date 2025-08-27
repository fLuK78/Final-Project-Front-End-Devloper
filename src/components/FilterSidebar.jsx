import React from 'react';

export default function FilterSidebar() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm space-y-6">
      <div>
        <h3 className="font-bold text-lg mb-3">ฟิลเตอร์</h3>
        <hr/>
      </div>

      {/* Price Filter */}
      <div className="space-y-2">
        <h4 className="font-semibold">ช่วงราคา</h4>
        <div className="flex gap-2">
          <input type="number" placeholder="ต่ำสุด" className="form-control w-1/2" />
          <input type="number" placeholder="สูงสุด" className="form-control w-1/2" />
        </div>
      </div>

      {/* Condition Filter */}
      <div className="space-y-2">
        <h4 className="font-semibold">สภาพสินค้า</h4>
        <div className="flex flex-col gap-1">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="form-checkbox" /> ใหม่
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="form-checkbox" /> มือสอง
          </label>
        </div>
      </div>

      {/* Seller Filter */}
      <div className="space-y-2">
         <h4 className="font-semibold">ผู้ขาย</h4>
        <label className="flex items-center gap-2">
          <input type="checkbox" className="form-checkbox" /> ร้านค้าที่ยืนยันแล้ว
        </label>
      </div>
      
      <button className="btn btn-primary w-full">ใช้ฟิลเตอร์</button>
    </div>
  );
}