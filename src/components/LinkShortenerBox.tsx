export function LinkShortenerBox() {
  return (
    <div className="bg-blue-950 rounded-lg p-12 mt-8">
      <div className="grid grid-cols-1 md:flex items-center justify-center gap-6">
        <input
          type="text"
          placeholder="Shorten a link here..."
          className="px-6 py-3 outline-none focus:outline-cyan-500 bg-zinc-100 rounded-lg flex flex-1 items-center"
        />
        <button className="flex items-center justify-center px-6 py-3 rounded-lg bg-cyan-500 text-white text-lg font-semibold hover:bg-cyan-400 transition duration-100">
          Shorten it!
        </button>
      </div>
    </div>
  )
}
