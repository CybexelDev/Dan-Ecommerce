import { useState, useEffect } from "react"
import { Upload, X } from "lucide-react"

const AddBlogModal = ({ isOpen, onClose, onSave, blog }) => {
  const [formData, setFormData] = useState({
    head: "",
    tittle: "",
    category: "",
    image: [],
  })
  const [selectedFile, setSelectedFile] = useState(null)
  const [imagePreview, setImagePreview] = useState("")
  const [isUploading, setIsUploading] = useState(false)

  useEffect(() => {
    if (blog) {
      setFormData(blog)
      if (blog.image && blog.image[0]) {
        setImagePreview(blog.image[0])
      }
    } else {
      setFormData({
        head: "",
        tittle: "",
        category: "",
        image: [],
      })
      setImagePreview("")
      setSelectedFile(null)
    }
  }, [blog, isOpen])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFileSelect = (e) => {
    const file = e.target.files[0]
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file (JPEG, PNG, WEBP, etc.)')
        return
      }

     

      setSelectedFile(file)
      
      // Create preview
      const reader = new FileReader()
      reader.onload = (e) => {
        setImagePreview(e.target.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemoveImage = () => {
    setSelectedFile(null)
    setImagePreview("")
    setFormData(prev => ({ ...prev, image: [] }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      setIsUploading(true)

      // Create FormData for file upload
      const submitFormData = new FormData()
      submitFormData.append('head', formData.head)
      submitFormData.append('tittle', formData.tittle)
      submitFormData.append('category', formData.category)
      
      // Append file if selected (for new blog or image change)
      if (selectedFile) {
        submitFormData.append('image', selectedFile)
      } else if (blog && blog.image && blog.image[0]) {
        // If editing and no new file selected, keep existing image
        // You might want to handle this differently based on your backend
        // For now, we'll assume the backend handles existing images
      }

      // Call the onSave function with FormData
      await onSave(submitFormData)
      
    } catch (error) {
      console.error('Error submitting blog:', error)
      alert('Failed to save blog post. Please try again.')
    } finally {
      setIsUploading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 sticky top-0 bg-white">
          <h2 className="text-2xl font-bold text-gray-900">
            {blog ? "Edit Blog Post" : "Create New Blog Post"}
          </h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            disabled={isUploading}
            type="button"
          >
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Blog Title *
              </label>
              <input
                type="text"
                name="head"
                value={formData.head}
                onChange={handleChange}
                placeholder="Enter an engaging blog title"
                required
                disabled={isUploading}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Description *
              </label>
              <textarea
                name="tittle"
                value={formData.tittle}
                onChange={handleChange}
                placeholder="Write a compelling blog description..."
                rows={5}
                required
                disabled={isUploading}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Category *
                </label>
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  placeholder="e.g., Technology, Lifestyle"
                  required
                  disabled={isUploading}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Featured Image {!blog && "*"}
                </label>
                <div className="space-y-3">
                  {/* File Input */}
                  <div className={`border-2 border-dashed rounded-xl p-6 text-center transition-colors duration-200 ${
                    isUploading 
                      ? 'border-gray-200 bg-gray-50' 
                      : 'border-gray-300 hover:border-blue-400 cursor-pointer'
                  }`}>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileSelect}
                      className="hidden"
                      id="file-upload"
                      disabled={isUploading}
                    />
                    <label 
                      htmlFor="file-upload" 
                      className={`flex flex-col items-center justify-center gap-3 ${
                        isUploading ? 'cursor-not-allowed' : 'cursor-pointer'
                      }`}
                    >
                      <Upload className={`w-8 h-8 ${
                        isUploading ? 'text-gray-300' : 'text-gray-400'
                      }`} />
                      <div>
                        <p className={`font-medium ${
                          isUploading ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {selectedFile || (blog && blog.image && blog.image[0]) 
                            ? 'Change Image' 
                            : 'Click to upload image'
                          }
                        </p>
                        <p className="text-gray-500 text-sm mt-1">
                          PNG, JPG, WEBP 
                        </p>
                      </div>
                    </label>
                  </div>

                  {/* Selected File Info */}
                  {selectedFile && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <span className="text-blue-600 text-xs font-medium">IMG</span>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900 truncate max-w-[200px]">
                              {selectedFile.name}
                            </p>
                            <p className="text-xs text-gray-500">
                              {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={handleRemoveImage}
                          className="p-1 text-red-500 hover:bg-red-50 rounded transition-colors"
                          disabled={isUploading}
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Image Preview */}
          {(imagePreview || (blog && blog.image && blog.image[0])) && (
            <div className="border border-gray-200 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-semibold text-gray-900">Image Preview</p>
                {!isUploading && (
                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="text-red-500 hover:text-red-700 text-sm font-medium transition-colors"
                  >
                    Remove
                  </button>
                )}
              </div>
              <div className="relative">
                <img
                  src={imagePreview || (blog && blog.image[0])}
                  alt="Preview"
                  className="w-full h-48 object-cover rounded-lg"
                />
                {isUploading && (
                  <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                      <p className="text-sm">Uploading...</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3 pt-4 sticky bottom-0 bg-white pb-2">
            <button
              type="button"
              onClick={onClose}
              disabled={isUploading}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isUploading || (!blog && !selectedFile)}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all font-medium shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isUploading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  {blog ? "Updating..." : "Publishing..."}
                </>
              ) : (
                blog ? "Update Blog Post" : "Publish Blog Post"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddBlogModal