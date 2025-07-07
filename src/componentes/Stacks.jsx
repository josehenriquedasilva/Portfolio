function Stacks({ stacks }) {
  return (
    <div
      id="stacks"
      className="bg-[#111111] text-white w-full py-24 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-center text-4xl font-bold mb-4">Minhas Stacks</h2>
        <div className="w-20 h-1 bg-green-500 mx-auto mb-12"></div>
      </div>

      <div className="relative w-full overflow-hidden py-4">
        <div className="flex animacao-rolagem-stacks whitespace-nowrap">
          {[...stacks, ...stacks, ...stacks].map((stack, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 flex flex-col items-center justify-center p-4 rounded-lg bg-[#1d1d1d] shadow-lg w-28 h-28"
            >
              <div className="w-16 h-16 flex items-center justify-center">
                {stack.logo}
              </div>
              <p className="font-semibold text-sm mt-2 text-gray-100">
                {stack.tec}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stacks;
