"use client";

import { useRef } from "react";
import { Editor as TinyMCE } from "@tinymce/tinymce-react";
import { client } from "@/lib/client";

export default function Editor() {
  const editorRef = useRef(null);
  const handleSave = async () => {
    if (editorRef.current) {
      const content = editorRef.current.getContent();
      const res = await client.post.createPost.mutate({
        title: "Sample",
        content,
      });
      console.log(res);
    }
  };
  return (
    <div>
      <TinyMCE
        apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY || ""}
        onInit={(_evt: any, editor: any) => (editorRef.current = editor)}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <button
        onClick={handleSave}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        aria-label="Show editor content in console"
      >
        Save Content
      </button>
    </div>
  );
}
