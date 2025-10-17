"use client"

import { useEffect, useState } from "react"
import { getBlogs } from "../../Api/adminApi"
import { Plus } from "lucide-react"
import BlogControls from "../../components/blog/BlogControls"
import BlogGrid from "../../components/blog/BlogGrid"
import BlogList from "../../components/blog/BlogList"
import AddBlogModal from "../../components/modals/AddBlog"
import BlogsLoadingSkeleton from "../../components/blog/BlogsLoadingSkeleton"
import BlogsEmptyState from "../../components/blog/BlogsEmptyState"
import BlogsErrorState from "../../components/blog/BlogsErrorState"


const Blogs = () => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingBlog, setEditingBlog] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("newest")
  const [viewMode, setViewMode] = useState("grid")

  useEffect(() => {
    fetchBlogs()
  }, [])

  const fetchBlogs = async () => {
    try {
      setLoading(true)
      const blogsData = await getBlogs()
      setBlogs(blogsData)
    } catch (err) {
      setError("Failed to load blogs. Please try again later.")
      console.error("Error fetching blogs:", err)
    } finally {
      setLoading(false)
    }
  }

  // Get unique categories
  const categories = ["All", ...new Set(blogs.map(blog => blog.category))]

  // Filter and sort blogs
  const filteredBlogs = blogs
    .filter(blog => selectedCategory === "All" || blog.category === selectedCategory)
    .sort((a, b) => {
      if (sortBy === "newest") return new Date(b._id) - new Date(a._id)
      if (sortBy === "oldest") return new Date(a._id) - new Date(b._id)
      return 0
    })

  const handleAddBlog = () => {
    setEditingBlog(null)
    setIsModalOpen(true)
  }

  const handleEditBlog = (blog) => {
    setEditingBlog(blog)
    setIsModalOpen(true)
  }

  const handleDeleteBlog = async (blogId) => {
    if (window.confirm("Are you sure you want to delete this blog? This action cannot be undone.")) {
      try {
        // await deleteBlog(blogId)
        setBlogs(blogs.filter(blog => blog._id !== blogId))
      } catch (err) {
        console.error("Error deleting blog:", err)
        alert("Failed to delete blog. Please try again.")
      }
    }
  }

  const handleSaveBlog = async (blogData) => {
    try {
      // if (editingBlog) {
      //   await updateBlog(editingBlog._id, blogData)
      // } else {
      //   await addBlog(blogData)
      // }
      fetchBlogs()
      setIsModalOpen(false)
      setEditingBlog(null)
    } catch (err) {
      console.error("Error saving blog:", err)
      alert("Failed to save blog. Please try again.")
    }
  }

  if (loading) {
    return <BlogsLoadingSkeleton />
  }

  if (error) {
    return <BlogsErrorState error={error} onRetry={fetchBlogs} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Blog Management</h1>
              <p className="text-gray-600 text-lg">Create, manage, and analyze your blog content</p>
            </div>
            <button
              onClick={handleAddBlog}
              className="flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl font-semibold w-full lg:w-auto"
            >
              <Plus className="w-5 h-5" />
              Create New Blog
            </button>
          </div>
        </div>

        {/* Controls */}
        <BlogControls
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          sortBy={sortBy}
          onSortChange={setSortBy}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />

        {/* Blog Content */}
        {filteredBlogs.length === 0 ? (
          <BlogsEmptyState 
            selectedCategory={selectedCategory} 
            onAddBlog={handleAddBlog} 
          />
        ) : viewMode === "grid" ? (
          <BlogGrid 
            blogs={filteredBlogs} 
            onEdit={handleEditBlog} 
            onDelete={handleDeleteBlog} 
          />
        ) : (
          <BlogList 
            blogs={filteredBlogs} 
            onEdit={handleEditBlog} 
            onDelete={handleDeleteBlog} 
          />
        )}
      </div>

      {/* Modal */}
      <AddBlogModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setEditingBlog(null)
        }}
        onSave={handleSaveBlog}
        blog={editingBlog}
      />
    </div>
  )
}

export default Blogs