"use client"

export default function Home() {
  return (
    <div className="mx-[20%]">
      <div className="p-4 text-center">
        <h1 className="text-3xl font-bold">RemBg</h1>
        <p className="text-sm text-white/60">Remove backgrounds with easeeee...</p>
      </div>

      <div className="grid grid-cols-2 items-center justify-items-center">
        <div className="w-full p-2">
          <h2 className="text-center pb-2">Input image</h2>
          <div className="border border-dashed w-full h-full rounded-lg p-2">
            <input type="file" placeholder="select file"/>
          </div>
        </div>
        <div className="w-full p-2">
          <h2 className="text-center pb-2">Ouput image</h2>
          <div className="border w-full h-full rounded-lg p-2">d</div>
        </div>
        <div className="col-span-2 w-full p-2 border border-red-900 flex align-middle justify-center">
          <button className="p-2 rounded-md border border-blue-300 w-full hover:bg-blue-300 transition-colors">Remove BG</button>
        </div>
      </div>
    </div>
  );
}
