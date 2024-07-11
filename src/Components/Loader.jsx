
function Loader(props) {
  return (
    <div className='flex flex-col gap-2 items-center justify-center'>
            <p className=' text-[12px] sm:text-[16px] animate-pulse'>{props.msg}</p>
            <hr className=' w-48 animate-pulse h-1 sm:h-2 bg-gradient-to-r from-purple-500 to-blue-600' />
            <hr className=' w-48 animate-pulse h-1 sm:h-2 bg-gradient-to-r from-purple-500 to-blue-600' />
            <hr className=' w-48 animate-pulse h-1 sm:h-2 bg-gradient-to-r from-purple-500 to-blue-600' />
    </div>
  )
}

export default Loader