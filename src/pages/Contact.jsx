import React from 'react';

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
        ติดต่อเรา
      </h1>
      <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
        หากคุณมีคำถามหรือข้อสงสัย สามารถติดต่อเราได้ตามช่องทางด้านล่าง
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Information */}
        <div className="bg-gradient-to-tr from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">ข้อมูลการติดต่อ</h2>
          <p className="flex items-center gap-2"><span>📍</span> 123 ถนนเทคโนโลยี เขตสารสนเทศ นครปฐม.</p>
          <p className="flex items-center gap-2"><span>📞</span> 090-990-0099</p>
          <p className="flex items-center gap-2"><span>📧</span> support@ihaveram.com</p>
        </div>

        {/* Contact Form */}
        <form className="bg-white p-8 rounded-xl shadow-lg space-y-6">
          <input
            type="text"
            placeholder="ชื่อของคุณ"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            placeholder="อีเมล"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <textarea
            placeholder="ข้อความ..."
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="5"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700 transition-all"
          >
            ส่งข้อความ
          </button>
        </form>
      </div>

      {/* Google Maps Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">แผนที่ร้านค้า</h2>
        <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg">
          {/* Google Maps embed code for Nakhon Pathom Vocational College */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.3440702482387!2d100.27850551480068!3d13.89668109012356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2946c8b9d5c8b%3A0x6d9e0b1c7f5f99f1!2sFaculty%20of%20Information%20Technology%20(IT)%2C%20King%20Mongkut&#39;s%20University%20of%20Technology%20North%20Bangkok!5e0!3m2!1sen!2sth!4v1627915579899!5m2!1sen!2sth"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Maps Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
