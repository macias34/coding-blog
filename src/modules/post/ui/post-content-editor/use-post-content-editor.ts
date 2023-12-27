import { Link } from "@mantine/tiptap";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import Highlight from "@tiptap/extension-highlight";
import SubScript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import javaLanguageSyntax from "highlight.js/lib/languages/java";
import tsLanguageSyntax from "highlight.js/lib/languages/typescript";
import { common, createLowlight } from "lowlight";

interface UsePostContentEditor {
  content: string;
  setContent: (content: string) => void;
  validateContent: () => void;
}

export const usePostContentEditor = ({
  content,
  setContent,
  validateContent,
}: UsePostContentEditor) => {
  const lowlight = createLowlight(common);
  lowlight.register("ts", tsLanguageSyntax);
  lowlight.register("java", javaLanguageSyntax);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({ codeBlock: false }),
      CodeBlockLowlight.configure({ lowlight }),
      Underline,
      Link,
      Superscript,
      SubScript,
      Highlight,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
    ],
    onUpdate: ({ editor }) => {
      const content = editor.getHTML();
      setContent(content);
      validateContent();
    },

    content,
  });

  return {
    editor,
  };
};
