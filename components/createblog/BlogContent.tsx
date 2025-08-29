"use client";
import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface BlogFormData {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  tags: string[];
  status: "draft" | "published";
  featuredImage: string;
}

interface BlogContentProps {
  register: UseFormRegister<BlogFormData>;
  errors: FieldErrors<BlogFormData>;
  isPreview: boolean;
  watchedContent: string;
}

export function BlogContent({
  register,
  errors,
  isPreview,
  watchedContent,
}: BlogContentProps) {
  return (
    <Card className="bg-white border border-gray-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-gray-900">Content</CardTitle>
        <CardDescription className="text-gray-600">
          Write your blog post content
        </CardDescription>
      </CardHeader>
      <CardContent>
        {!isPreview ? (
          <div className="space-y-2">
            <Label htmlFor="content" className="text-gray-900">
              Content *
            </Label>
            <textarea
              id="content"
              {...register("content", { required: "Content is required" })}
              placeholder="Write your blog post content here..."
              className="w-full h-64 p-3 bg-white border border-gray-300 rounded-md text-gray-900 placeholder:text-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.content && (
              <p className="text-red-500 text-sm">{errors.content.message}</p>
            )}
          </div>
        ) : (
          <div className="space-y-2">
            <Label className="text-gray-900">Preview</Label>
            <div className="w-full h-64 p-3 bg-gray-50 border border-gray-200 rounded-md overflow-auto">
              <div className="text-gray-900 whitespace-pre-wrap">
                {watchedContent || "No content to preview"}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
