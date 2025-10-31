"use client"

import { Trash2, Edit2 } from "lucide-react"

export default function BlogTable({ blogs, onEdit, onDelete }) {
  return (
    <div className="overflow-hidden border border-border rounded-lg bg-background">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Title</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Category</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Description</th>
              <th className="px-6 py-4 text-right text-sm font-semibold text-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog._id} className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    {blog.image?.[0] && (
                      <img
                        src={blog.image[0] || "/placeholder.svg"}
                        alt={blog.head}
                        className="w-10 h-10 rounded object-cover"
                      />
                    )}
                    <span className="font-medium text-foreground line-clamp-1">{blog.head}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    {blog.category}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-muted-foreground line-clamp-1">{blog.tittle}</td>
                <td className="px-6 py-4">
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => onEdit(blog)}
                      className="p-2 text-primary hover:bg-primary/10 rounded transition-colors"
                      title="Edit blog"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onDelete(blog._id)}
                      className="p-2 text-destructive hover:bg-destructive/10 rounded transition-colors"
                      title="Delete blog"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
