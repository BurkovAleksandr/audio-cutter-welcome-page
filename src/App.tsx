import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100">
      {/* Navbar */}
      <nav className="flex items-center px-8 py-6 max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mr-16">
          <div>
            <img src="\images\48.png" alt="" />
          </div>
          <span className="font-bold text-xl tracking-tight text-[#0f172a]">
            Audio Cutter
          </span>
        </div>
        <div className="flex gap-8 text-sm font-medium text-slate-600"></div>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 pt-12 pb-24 flex flex-col items-center">
        <h1 className="text-[44px] md:text-[52px] font-extrabold text-center text-[#0f172a] mb-16 leading-[1.15] tracking-tight">
          🎉 Now you have a great
          <br />
          way to cut audio
        </h1>

        {/* Step 1 */}
        <div className="w-full mb-24 flex flex-col items-center">
          <p className="text-[17px] text-slate-500 font-medium mb-8 text-center">
            1. Pin the extension for quick access to the Audio Cutter.
          </p>
          <img
            class="shadow-2xl rounded-xl"
            src="images/step1_circle.png"
            alt="step one"
          />
        </div>

        {/* Step 2 */}
        <div className="w-full flex flex-col items-center">
          <p className="text-[17px] text-slate-500 font-medium mb-8 text-center">
            2. Simply click on the extension icon to open the cutter.  
          </p>
          <img
            class="shadow-2xl rounded-xl"
            src="images/step2_circle.png"
            alt="step two"
          />
        </div>
      </main>
    </div>
  );
}
