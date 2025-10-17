const BlogControls = ({
  categories,
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
  viewMode,
  onViewModeChange
}) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 mb-8">
      {/* Category Filter */}
      <div className="flex-1">
        <label className="block text-sm font-semibold text-gray-900 mb-2">Filter by Category</label>
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Sort and View Controls */}
      <div className="flex gap-4">
     
        <div>
          <div className="flex bg-white border border-gray-300 rounded-lg p-1">
            <button
              onClick={() => onViewModeChange("grid")}
              className={`px-3 py-2 rounded-md transition-colors ${
                viewMode === "grid" ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Grid
            </button>
            <button
              onClick={() => onViewModeChange("list")}
              className={`px-3 py-2 rounded-md transition-colors ${
                viewMode === "list" ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              List
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogControls