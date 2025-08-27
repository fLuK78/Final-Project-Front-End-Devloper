export default function Profile() {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-xl font-bold mb-4">บัญชีผู้ใช้</h1>
      <div className="space-y-2">
        <p><strong>ชื่อผู้ใช้:</strong> johndoe</p>
        <p><strong>อีเมล:</strong> johndoe@example.com</p>
      </div>
      <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded">
        ออกจากระบบ
      </button>
    </div>
  );
}
