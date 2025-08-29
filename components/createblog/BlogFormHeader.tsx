"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { IconEye } from "@tabler/icons-react";

interface BlogFormHeaderProps {
  isPreview: boolean;
  onTogglePreview: () => void;
}

export function BlogFormHeader({
  isPreview,
  onTogglePreview,
}: BlogFormHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Create New Blog Post
        </h1>
        <p className="text-gray-600 mt-1">
          Write and publish your blog content
        </p>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          onClick={onTogglePreview}
          className="flex items-center gap-2"
        >
          <IconEye className="w-4 h-4" />
          {isPreview ? "Edit" : "Preview"}
        </Button>
      </div>
    </div>
  );
}
