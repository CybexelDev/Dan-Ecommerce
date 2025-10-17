"use client"

import { useEffect, useState } from "react"
import { addHeaderImage, deleteHeaderImage, getHeader } from "../../Api/adminApi"
import HeaderBanner from "../../components/banner/HeaderBanner"
import AddHeaderModal from "../../components/modals/AddHeaderModal"
import DeleteHeader from "../../components/modals/DeleteHeader"


const MainHeader = () => {
  const [headerData, setHeaderData] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showAddModal, setShowAddModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [headerToDelete, setHeaderToDelete] = useState(null)

  useEffect(() => {
    const refreshHeaders = async () => {
      setIsLoading(true)
      try {
        const res = await getHeader()
        const incoming = Array.isArray(res) ? res : res?.data
        setHeaderData(incoming || [])
        if ((incoming?.length || 0) === 0) {
          setCurrentIndex(0)
        } else if (currentIndex >= incoming.length) {
          setCurrentIndex(Math.max(0, incoming.length - 1))
        }
      } catch (error) {
        console.error("Error fetching header:", error)
      } finally {
        setIsLoading(false)
      }
    }
    refreshHeaders()
  }, [])

  const handleNext = () => {
    if (currentIndex < headerData.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleAddSubmit = async (filesToUpload) => {
    try {
      if (!filesToUpload || filesToUpload.length === 0) return
      const formData = new FormData()
      
      for (const f of filesToUpload) {
        formData.append("image", f)
      }

      await addHeaderImage(formData)
      setShowAddModal(false)

      const res = await getHeader()
      const incoming = Array.isArray(res) ? res : res?.data
      setHeaderData(incoming || [])
      setCurrentIndex(Math.max(0, (incoming?.length || 1) - 1))
    } catch (err) {
      console.error("Add header failed:", err)
    }
  }

  const handleDeleteClick = (header) => {
    setHeaderToDelete(header)
    setShowDeleteModal(true)
  }

  const handleDeleteConfirm = async () => {
    if (!headerToDelete?._id) return
    
    try {
      await deleteHeaderImage(headerToDelete._id)
      const res = await getHeader()
      const incoming = Array.isArray(res) ? res : res?.data
      setHeaderData(incoming || [])
      
      if ((incoming?.length || 0) === 0) {
        setCurrentIndex(0)
      } else if (currentIndex >= incoming.length) {
        setCurrentIndex(Math.max(0, incoming.length - 1))
      }
      
      setShowDeleteModal(false)
      setHeaderToDelete(null)
    } catch (err) {
      console.error("Delete header failed:", err)
      setShowDeleteModal(false)
      setHeaderToDelete(null)
    }
  }

  const handleDeleteCancel = () => {
    setShowDeleteModal(false)
    setHeaderToDelete(null)
  }

  const currentHeader = headerData[currentIndex] || {}

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Header Management</h1>
            <p className="text-gray-600 mt-2">Manage your website header banners and promotions</p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add New Header
          </button>
        </div>
      </div>

      {/* Main Banner Section */}
      <HeaderBanner
        headerData={headerData}
        currentIndex={currentIndex}
        isLoading={isLoading}
        onNext={handleNext}
        onPrev={handlePrev}
        onIndexChange={setCurrentIndex}
        onDeleteClick={handleDeleteClick}
      />

      {/* Modals */}
      <AddHeaderModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSubmit={handleAddSubmit}
      />

      <DeleteHeader
        isOpen={showDeleteModal}
        headerToDelete={headerToDelete}
        onConfirm={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
      />
    </div>
  )
}

export default MainHeader