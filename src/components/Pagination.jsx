import React from "react";

export default function Pagination() {
  return (
    <div className="flex justify-center mt-6">
      <ul className="pagination">
        <li className="page-item">
          <button className="page-link">ก่อนหน้า</button>
        </li>
        <li className="page-item active">
          <button className="page-link">1</button>
        </li>
        <li className="page-item">
          <button className="page-link">2</button>
        </li>
        <li className="page-item">
          <button className="page-link">ถัดไป</button>
        </li>
      </ul>
    </div>
  );
}
