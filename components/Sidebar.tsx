const Sidebar: React.FC = () => (
  <>
    <div className='fixed inset-0 bg-gray-800 opacity-0 hidden' />
    <div className='fixed max-w-[90%] right-0 top-0 bottom-0 border border-solid border-red-700 h-full bg-white translate-x-full opacity-0 transition-all'>
      <div className='flex justify-between px-4 py-2'>
        <div>Menu</div>
        <div className='cursor-pointer'>X</div>
      </div>
      <div>
        <div className='px-4 py-2 border border-solid border-black'>Menu Item</div>
        <div className='px-4 py-2 border border-solid border-black'>Menu Item</div>
        <div className='px-4 py-2 border border-solid border-black'>Menu Item</div>
        <div className='px-4 py-2 border border-solid border-black'>Menu Item</div>
        <div className='px-4 py-2 border border-solid border-black'>Menu Item</div>
        <div className='px-4 py-2 border border-solid border-black'>Menu Item</div>
      </div>
    </div>
  </>
)

export default Sidebar
