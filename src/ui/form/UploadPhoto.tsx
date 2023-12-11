"use client"

import { UploadButton } from "@/lib/uploadthing"
import Image from "next/image"
import { useState } from "react"
import { toast } from "react-toastify"
import Loading from "../Loading"
import { Button } from "../shadcn/button"

export default function UploadPhoto({ picture }: { picture?: string | null }) {
    const [image, setImage] = useState({ name: "", url: picture ?? "" })
    const [loading, setLoading] = useState(false)

    return (
        <div className="flex items-center gap-5 ">
            {/* a hidden input for the form to get the image.url value on serverAction */}
            <input
                type="text"
                name="picture"
                className="hidden"
                value={image.url}
                onChange={() => {}}
            />
            <div className="relative flex h-[130px] w-[130px] min-w-[130px] items-center justify-center overflow-hidden rounded-full bg-bg-soft dark:bg-bg-soft-dark">
                <Image
                    className={`h-auto w-auto object-cover ${
                        loading ? "brightness-75" : ""
                    }`}
                    src={image.url || "/noavatar.png"}
                    alt="profilePicture"
                    width={130}
                    height={130}
                />
                {loading && (
                    <Loading
                        className="text-3xl"
                        containerClassName="absolutely-center"
                    />
                )}
            </div>
            {image.url ? (
                <div>
                    <div className="flex items-center gap-4 max-sm:flex-wrap">
                        <div className="relative max-sm:w-full">
                            <UploadButton
                                className="ut-allowed-content:dark:text-focus-dark ut-allowed-content:text-slate-500 ut-button:dark:focus-within:border-red-400 ut-allowed-content:hidden  ut-button:dark:bg-edit-dark ut-button:after:dark:bg-edit-darker-dark ut-button:bg-edit ut-button:after:bg-edit-darker ut-button:max-sm:px-8 ut-button:max-sm:py-3 ut-button:max-sm:text-sm ut-button:rounded-full ut-button:w-full sm:ut-button:px-16 sm:ut-button:h-[54px] max-sm:w-full"
                                content={{
                                    button: ["Change"],
                                }}
                                endpoint="imageUploader"
                                onClientUploadComplete={(res) => {
                                    setLoading(false)
                                    if (res) {
                                        setImage({
                                            name: res[0].name,
                                            url: res[0].url,
                                        })
                                    }
                                    console.log("Files: ", res)
                                }}
                                onUploadProgress={() => setLoading(true)}
                                onUploadError={(error: Error) => {
                                    setLoading(false)
                                    toast.error(
                                        `UPLOAD ERROR! ${error.message}`,
                                    )
                                }}
                            />
                            {loading && (
                                <Loading
                                    className="text-xl"
                                    containerClassName="absolutely-center"
                                />
                            )}
                        </div>
                        <Button
                            type="button"
                            className="max-sm:w-full max-sm:px-8 max-sm:py-2 max-sm:text-sm"
                            onClick={() => setImage({ name: "", url: "" })}
                            variant='default'
                        >
                            Remove
                        </Button>
                    </div>
                    {image.name && (
                        <p className="mx-auto mt-2 max-w-max italic text-slate-400">
                            {image.name}
                        </p>
                    )}
                </div>
            ) : (
                <>
                    <UploadButton
                        className="ut-allowed-content:dark:text-focus-dark ut-allowed-content:text-slate-500 ut-button:dark:focus-within:border-red-400 ut-button:after:dark:bg-blue-700 ut-button:bg-blue-600"
                        appearance={{
                            container: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px",
                            },
                            button: {
                                width: "150px",
                                height: "54px",
                                paddingBottom: "16px",
                                paddingTop: "16px",
                                borderRadius: "50px",
                                paddingLeft: "30px",
                                paddingRight: "30px",
                            },
                        }}
                        endpoint="imageUploader"
                        onClientUploadComplete={(res) => {
                            setLoading(false)
                            if (res) {
                                setImage({
                                    name: res[0].name,
                                    url: res[0].url,
                                })
                            }
                            console.log("Files: ", res)
                        }}
                        onUploadProgress={() => setLoading(true)}
                        onUploadError={(error: Error) => {
                            setLoading(false)
                            toast.error(`UPLOAD ERROR! ${error.message}`)
                        }}
                    />
                </>
            )}
        </div>
    )
}
