const HeaderBanner = ({
  headerData,
  currentIndex,
  isLoading,
  onNext,
  onPrev,
  onIndexChange,
  onDeleteClick
}) => {
  const currentHeader = headerData[currentIndex] || {}

  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
        {isLoading ? (
          <div className="w-full h-96 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse rounded-2xl flex items-center justify-center">
            <div className="text-gray-500">Loading banners...</div>
          </div>
        ) : headerData.length > 0 ? (
          <div className="relative group">
            {/* Main Banner Image */}
            <div className="relative h-96 lg:h-[500px] overflow-hidden">
              <img
                src={Array.isArray(currentHeader?.webImage) ? currentHeader.webImage[0] : currentHeader?.webImage || "/placeholder.svg"}
                alt={`Banner ${currentIndex + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              
              {/* Delete Button */}
              {currentHeader?._id && (
                <button
                  onClick={() => onDeleteClick(currentHeader)}
                  className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm hover:bg-white text-red-600 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 hover:shadow-xl"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              )}

              {/* Navigation Arrows */}
              {headerData.length > 1 && (
                <>
                  <button
                    onClick={onPrev}
                    disabled={currentIndex === 0}
                    className={`absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg transition-all duration-200 ${
                      currentIndex === 0 
                        ? 'opacity-50 cursor-not-allowed' 
                        : 'hover:bg-white hover:scale-110 hover:shadow-xl'
                    }`}
                  >
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={onNext}
                    disabled={currentIndex === headerData.length - 1}
                    className={`absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg transition-all duration-200 ${
                      currentIndex === headerData.length - 1 
                        ? 'opacity-50 cursor-not-allowed' 
                        : 'hover:bg-white hover:scale-110 hover:shadow-xl'
                    }`}
                  >
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </div>

            {/* Dots Indicator */}
            {headerData.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {headerData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => onIndexChange(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-white scale-125' 
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  )
}

const EmptyState = () => (
  <div className="w-full h-96 flex flex-col items-center justify-center text-gray-500 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl">
    <svg className="w-16 h-16 mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
    <p className="text-lg font-medium">No headers yet</p>
    <p className="text-sm mt-1">Add your first header banner to get started</p>
  </div>
)

export default HeaderBanner