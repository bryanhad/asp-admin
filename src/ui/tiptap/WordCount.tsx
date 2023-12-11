import { formatNumberWithDot } from "@/lib/utils"
import { type Editor } from "@tiptap/react"
import React from "react"

type CharacterCountProps = {
    maxCharacters: number
    editor: Editor | null
}

export default function WordCount({
    maxCharacters,
    editor,
}: CharacterCountProps) {
    if (!editor) {
        return null
    }

    const characterCount = editor.storage.characterCount.characters()
    return (
        <div className="character-count">
            {formatNumberWithDot(characterCount)}/
            {formatNumberWithDot(maxCharacters)} characters
            <br />
            {editor.storage.characterCount.words()} words
        </div>
    )
}
