const BlogsEmptyState = ({ selectedCategory, onAddBlog }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-12 text-center">
      <div className="text-gray-400 text-6xl mb-4">📝</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">No blogs found</h3>
      <p className="text-gray-600 mb-6 max-w-md mx-auto">
        {selectedCategory !== "All" 
          ? `No blogs found in the ${selectedCategory} category.` 
          : "Get started by creating your first blog post."}
      </p>
      {selectedCategory === "All" && (
        <button
          onClick={onAddBlog}
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all font-medium shadow-lg"
        >
          Create First Blog
        </button>
      )}
    </div>
  )
}

export default BlogsEmptyState