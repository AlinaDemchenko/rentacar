
function LoadButton({handleUploadCars}) {
  return (
    <button
    type="button"
    onClick={()=>handleUploadCars()}
    className="button bg-transparent mx-auto block text-sm text-orange-800 border w-1/4 disabled:hover:shadow-none border-orange-800 hover:shadow-[0_6px_20px_-3px_rgba(0,0,0,0.3)_inset,0_6px_16px_-6px_rgba(0,0,0,0.3)_inset]"
  >
    LOAD MORE
  </button>
  )
}

export default LoadButton