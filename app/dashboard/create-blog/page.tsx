"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { BlogFormHeader } from "@/components/createblog/BlogFormHeader";
import { BlogDetail } from "@/components/createblog/BlogDetail";
import { BlogContent } from "@/components/createblog/BlogContent";
import { BlogTags } from "@/components/createblog/BlogTags";
import { BlogFormActions } from "@/components/createblog/BlogFormActions";

interface BlogFormData {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  tags: string[];
  status: "draft" | "published";
  featuredImage: string;
}

function CreateBlog() {
  const [tags, setTags] = React.useState<string[]>([]);
  const [tagInput, setTagInput] = React.useState("");
  const [isPreview, setIsPreview] = React.useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<BlogFormData>({
    defaultValues: {
      status: "draft",
      tags: [],
    },
  });

  const watchedTitle = watch("title");
  const watchedContent = watch("content");

  // Auto-generate slug from title
  React.useEffect(() => {
    if (watchedTitle) {
      const slug = watchedTitle
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      setValue("slug", slug);
    }
  }, [watchedTitle, setValue]);

  const onSubmit = async (data: BlogFormData) => {
    try {
      // Simulate API call
      console.log("Submitting blog post:", { ...data, tags });
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("Blog post created successfully!");
    } catch (error) {
      console.error("Error creating blog post:", error);
      alert("Error creating blog post. Please try again.");
    }
  };

  const saveDraft = () => {
    handleSubmit((data) => onSubmit({ ...data, status: "draft" }))();
  };

  const publishPost = () => {
    handleSubmit((data) => onSubmit({ ...data, status: "published" }))();
  };

  return (
    <div className="container mx-auto py-6 px-4 max-w-4xl">
      <BlogFormHeader
        isPreview={isPreview}
        onTogglePreview={() => setIsPreview(!isPreview)}
      />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <BlogDetail register={register} errors={errors} />

        <BlogContent
          register={register}
          errors={errors}
          isPreview={isPreview}
          watchedContent={watchedContent}
        />

        <BlogTags
          tags={tags}
          setTags={setTags}
          tagInput={tagInput}
          setTagInput={setTagInput}
          setValue={setValue}
        />

        <BlogFormActions
          isSubmitting={isSubmitting}
          onSaveDraft={saveDraft}
          onPublishPost={publishPost}
        />
      </form>
    </div>
  );
}

export default CreateBlog;
