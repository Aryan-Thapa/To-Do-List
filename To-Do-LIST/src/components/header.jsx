const Header = () => {
  return (
    <div className="flex bg-violet-600 py-3 justify-between">
        <div className="text-white font-bold px-7">iTask</div>
        <div className="flex gap-4 px-7">
            <div className="hover:text-violet-200 transition-all duration-400 text-white cursor-pointer font-lightbold">Home</div>
            <div className="hover:text-violet-200 transition-all duration-400 text-white cursor-pointer font-lightbold">Tasks</div>
        </div>
      
    </div>
  )
}

export default Header
