"use client"

import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import ToolBar from "./ToolBar"
import CharacterCount from "@tiptap/extension-character-count"
import WordCount from "./WordCount"
import TipTapSkeleton from "../skeletons/TipTapSkeleton"

export default function Tiptap({
    maxCharacter,
    description,
    onChange,
}: {
    maxCharacter: number
    description: string
    onChange: (richText: string) => void
}) {
    const editor = useEditor({
        extensions: [
            StarterKit.configure(),
            CharacterCount.configure({
                limit: maxCharacter,
            }),
        ],
        content: description,
        editorProps: {
            attributes: {
                class: "min-h-[300px] max-w-none bg-background p-4 focus:outline-none prose dark:prose-invert w-full",
            },
        },
        onUpdate({ editor }) {
            onChange(editor.getHTML())
        },
    })
    if (!editor) {
        return <TipTapSkeleton />
    }

    return (
        <section className="border-focus flex flex-col rounded-lg border bg-background ring-offset-background focus-within:ring-2 focus-within:ring-ring/50 focus-within:ring-offset-2 focus:outline-none ">
            <div className="overflow-hidden border-b">
                <ToolBar editor={editor} />
                <EditorContent editor={editor} />
            </div>
            <WordCount editor={editor} maxCharacters={maxCharacter} />
        </section>
    )
}
