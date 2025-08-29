"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { IconDeviceFloppy } from "@tabler/icons-react";

interface BlogFormActionsProps {
  isSubmitting: boolean;
  onSaveDraft: () => void;
  onPublishPost: () => void;
}

export function BlogFormActions({
  isSubmitting,
  onSaveDraft,
  onPublishPost,
}: BlogFormActionsProps) {
  return (
    <>
      <Separator className="bg-gray-200" />

      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-600">* Required fields</div>
        <div className="flex items-center gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={onSaveDraft}
            disabled={isSubmitting}
            className="flex items-center gap-2"
          >
            <IconDeviceFloppy className="w-4 h-4" />
            Save as Draft
          </Button>
          <Button
            type="submit"
            onClick={onPublishPost}
            disabled={isSubmitting}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
          >
            <IconDeviceFloppy className="w-4 h-4" />
            {isSubmitting ? "Publishing..." : "Publish Post"}
          </Button>
        </div>
      </div>
    </>
  );
}
