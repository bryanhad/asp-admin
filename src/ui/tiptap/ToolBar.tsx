"use client"

import { type Editor } from "@tiptap/react"
import { AiOutlineEnter } from "react-icons/ai"
import { RiFormatClear } from "react-icons/ri"
import {
    Bold,
    Strikethrough,
    Italic,
    List,
    ListOrdered,
    Heading2,
    Heading1,
    Undo,
    Redo,
    Quote,
    SeparatorHorizontal,
} from "lucide-react"
import { Toggle } from "../shadcn/toggle"
import { Button } from "../shadcn/button"

type ToolBarProps = {
    editor: Editor | null
}

export default function ToolBar({ editor }: ToolBarProps) {
    if (!editor) return null // if editor prop from tiptap is not passed, well return nothin!

    return (
        <div className="flex flex-wrap items-center gap-2 bg-secondary p-1">
                <Toggle //from shadCn
                    size="sm"
                    pressed={editor.isActive("bold")} // if the editors 'bold' is active, give the toggle active styling! cuz this will return boolean
                    onPressedChange={
                        () => editor.chain().focus().toggleBold().run() // chain func's only purpose is just to make it possible for us to chain the tiptap's methods!
                        // in the above, if we click the toggle, it will:
                        // 1. utomatically focus to the input,
                        // 2. it will make the current line to be a specified element, in this scenario, its <strong/> (from p to strong)
                        // 3. run that bish lel
                    }
                >
                    <Bold className="h-4 w-4" />
                </Toggle>
                <Toggle
                    size="sm"
                    pressed={editor.isActive("italic")}
                    onPressedChange={() => {
                        console.log("clicked! italic")
                        editor.chain().focus().toggleItalic().run()
                    }}
                >
                    <Italic className="h-4 w-4" />
                </Toggle>
                <Toggle
                    size="sm"
                    pressed={editor.isActive("strike")}
                    onPressedChange={() =>
                        editor.chain().focus().toggleStrike().run()
                    }
                >
                    <Strikethrough className="h-4 w-4" />
                </Toggle>
            <span className="text-xl text-accent">|</span>
                <Toggle
                    size="sm"
                    pressed={editor.isActive("heading", { level: 1 })}
                    onPressedChange={() =>
                        editor.chain().focus().toggleHeading({ level: 1 }).run()
                    }
                >
                    <Heading1 className="h-5 w-5" />
                </Toggle>
                <Toggle
                    size="sm"
                    pressed={editor.isActive("heading", { level: 2 })}
                    onPressedChange={() =>
                        editor.chain().focus().toggleHeading({ level: 2 }).run()
                    }
                >
                    <Heading2 className="h-5 w-5" />
                </Toggle>
                <Toggle
                    size="sm"
                    pressed={editor.isActive("paragraph")}
                    onPressedChange={() =>
                        editor.chain().focus().setParagraph().run()
                    }
                >
                    <span className="w-4">p</span>
                </Toggle>
            <span className="text-xl text-accent">|</span>
                <Toggle
                    size="sm"
                    pressed={editor.isActive("bulletList")}
                    onPressedChange={() =>
                        editor.chain().focus().toggleBulletList().run()
                    }
                >
                    <List className="h-6 w-6" />
                </Toggle>
                <Toggle
                    size="sm"
                    pressed={editor.isActive("orderedList")}
                    onPressedChange={() =>
                        editor.chain().focus().toggleOrderedList().run()
                    }
                >
                    <ListOrdered className="h-6 w-6" />
                </Toggle>
                <Button
                    size="sm"
                    variant="soft"
                    type="button"
                    className="px-2"
                    onClick={() =>
                        editor.chain().focus().toggleBlockquote().run()
                    }
                >
                    <Quote className="h-4 w-4" />
                </Button>
                <Button
                    size="sm"
                    variant="soft"
                    type="button"
                    className="px-2"
                    onClick={() =>
                        editor.chain().focus().setHorizontalRule().run()
                    }
                >
                    <SeparatorHorizontal className="h-5 w-5" />
                </Button>
            <span className="text-xl text-accent">|</span>
                <Button
                    size="sm"
                    variant="soft"
                    type="button"
                    className="px-2"
                    onClick={() => editor.chain().focus().setHardBreak().run()}
                >
                    <AiOutlineEnter className="h-5 w-5" />
                </Button>
                <Button
                    size="sm"
                    variant="soft"
                    type="button"
                    className="px-2"
                    onClick={() => editor.chain().focus().unsetAllMarks().run()}
                >
                    <RiFormatClear className="h-5 w-5" />
                </Button>
            <span className="text-xl text-accent">|</span>
                <Button
                    type="button"
                    className="px-2"
                    variant="outline"
                    disabled={!editor.can().chain().focus().undo().run()}
                    onClick={() => {
                        editor.chain().focus().undo().run()
                    }}
                >
                    <Undo className="h-6 w-6" />
                </Button>
                <Button
                    type="button"
                    className="px-2"
                    variant="outline"
                    disabled={!editor.can().chain().focus().redo().run()}
                    onClick={() => {
                        editor.chain().focus().redo().run()
                    }}
                >
                    <Redo className="h-6 w-6" />
                </Button>
        </div>
    )
}
