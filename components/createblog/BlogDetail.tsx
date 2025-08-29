"use client";
import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { Input } from "@/components/ui/input";
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

interface BlogDetailProps {
  register: UseFormRegister<BlogFormData>;
  errors: FieldErrors<BlogFormData>;
}

export function BlogDetail({ register, errors }: BlogDetailProps) {
  return (
    <Card className="bg-white border border-gray-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-gray-900">Blog Details</CardTitle>
        <CardDescription className="text-gray-600">
          Basic information about your blog post
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title" className="text-gray-900">
            Title *
          </Label>
          <Input
            id="title"
            {...register("title", { required: "Title is required" })}
            placeholder="Enter your blog post title"
            className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="slug" className="text-gray-900">
            Slug
          </Label>
          <Input
            id="slug"
            {...register("slug")}
            placeholder="auto-generated-from-title"
            className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
          />
          <p className="text-xs text-gray-500">
            URL-friendly version of the title (auto-generated)
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="excerpt" className="text-gray-900">
            Excerpt
          </Label>
          <Input
            id="excerpt"
            {...register("excerpt")}
            placeholder="Brief description of your blog post"
            className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
          />
          <p className="text-xs text-gray-500">
            Short summary that appears in blog previews
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="featuredImage" className="text-gray-900">
            Featured Image URL
          </Label>
          <Input
            id="featuredImage"
            {...register("featuredImage")}
            placeholder="https://example.com/image.jpg"
            className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
          />
        </div>
      </CardContent>
    </Card>
  );
}
