import React from "react";

export default function Cart({ cart, removeFromCart, clearCart, updateQuantity }) {
    const handleDecrease = (id) => {
        const item = cart.find((i) => i.id === id);
        if (item.quantity > 1) updateQuantity(id, item.quantity - 1);
    };

    const handleIncrease = (id) => {
        const item = cart.find((i) => i.id === id);
        updateQuantity(id, item.quantity + 1);
    };

    const totalPrice = cart.reduce(
        (sum, item) => sum + Number(item.price.replace(/[^0-9.-]+/g, "")) * item.quantity,
        0
    );

    const handleAlert = () => {
        // Simple alert box implementation as requested
        const alertBox = document.createElement('div');
        alertBox.className = 'fixed inset-0 flex items-center justify-center z-50';
        alertBox.innerHTML = `
          <div class="bg-white p-6 rounded-lg shadow-xl border border-gray-200">
            <p class="text-lg font-semibold text-gray-800 mb-4">ไปหน้าชำระเงิน</p>
            <button class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600" onclick="this.parentElement.parentElement.remove()">ปิด</button>
          </div>
        `;
        document.body.appendChild(alertBox);
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md">
            <h1 className="text-2xl font-bold mb-4">ตะกร้าสินค้า</h1>
            {cart.length === 0 ? (
                <p className="text-gray-500">ตะกร้าว่าง</p>
            ) : (
                <>
                    <ul className="space-y-4">
                        {cart.map((item) => {
                            const priceNum = Number(item.price.replace(/[^0-9.-]+/g, ""));
                            const totalItemPrice = priceNum * item.quantity;
                            return (
                                <li
                                    key={item.id}
                                    className="flex items-center justify-between border-b pb-2"
                                >
                                    <div className="flex items-center space-x-4">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-16 h-16 object-contain border rounded"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = "https://placehold.co/64x64/e2e8f0/64748b?text=N/A";
                                            }}
                                        />
                                        <div>
                                            <p className="font-semibold">{item.name}</p>
                                            <p className="text-red-600 font-bold">
                                                {totalItemPrice.toLocaleString()} ฿
                                            </p>
                                            <div className="flex items-center space-x-2 mt-1">
                                                <button
                                                    onClick={() => handleDecrease(item.id)}
                                                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                                >
                                                    -
                                                </button>
                                                <span>{item.quantity}</span>
                                                <button
                                                    onClick={() => handleIncrease(item.id)}
                                                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-red-600 hover:underline font-bold"
                                    >
                                        ลบ
                                    </button>
                                </li>
                            );
                        })}
                    </ul>

                    <div className="mt-6 flex flex-col sm:flex-row justify-between items-center">
                        <div className="mb-4 sm:mb-0">
                            <p className="font-bold text-lg">
                                รวมทั้งหมด: {totalPrice.toLocaleString()} ฿
                            </p>
                        </div>
                        <div className="flex space-x-2">
                            <button
                                onClick={clearCart}
                                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                            >
                                ล้างตะกร้า
                            </button>
                            <button
                                onClick={handleAlert}
                                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                            >
                                ชำระเงิน
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
