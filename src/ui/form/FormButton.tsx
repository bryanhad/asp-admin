import { Button } from "../shadcn/button"

export default function FormButton({
    text,
    onClick,
    variant,
}: {
    text: string
    onClick?():void
    variant?: 'outline'
}) {
    return (
        <div className="flex justify-center">
            {onClick ? (
                <Button
                onClick={onClick}
                    size="lg"
                    className="w-full max-w-[50%]"
                    type="button"
                    variant={variant}
                >
                    {text}
                </Button>
            ) : (
                <Button
                    size="lg"
                    className="w-full max-w-[50%]"
                    type="submit"
                    variant="success"
                >
                    {text}
                </Button>
            )}
        </div>
    )
}
