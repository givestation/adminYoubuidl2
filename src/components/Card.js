export const Card = ({ title, subtitle, status }) => {
  return (
    <div className="rounded-lg bg-[#FFFFFF] min-w-[232px] md:min-w-[360px]  border">
      <div className="border-b-2 p-3 text-xl font-bold">
        <h1>{title}</h1>
      </div>
      <div className="flex justify-between my-0 m-2">
        <div className="border-b-2 text-xl mt-3 mb-8 md:mb-16 w-2/3">
          <div className="lg:ml-5 ml-3">
            <h1 className="font-bold py-2">{subtitle}</h1>
            <p className="text-green-500 mb-2 lg:mt-7">{status}</p>
          </div>
        </div>
        <div>
          <label className="relative inline-flex items-center cursor-pointer mt-14 mb-16 lg:ml-10 ml-2">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>
    </div>
  );
};
