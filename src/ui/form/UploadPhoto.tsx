"use client"

import { UploadButton } from "@/lib/uploadthing"
import { useState } from "react"
import { toast } from "react-toastify"
import Loading from "../Loading"
import { Button } from "../shadcn/button"
import ProfileImage from "./ProfileImage"

export default function UploadPhoto({
    picture,
    defaultPic,
    notProfile,
}: {
    notProfile?: boolean
    picture?: string | null
    defaultPic?: string
}) {
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
            <div
                className={`relative flex h-[130px] w-[130px] min-w-[130px] items-center justify-center overflow-hidden ${
                    notProfile ? "rounded-lg" : "rounded-full"
                } bg-secondary`}
            >
                <ProfileImage
                    src={image.url}
                    defaultPic={defaultPic}
                    loading={loading}
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
                                className=" ut-button:w-full  ut-button:rounded-full    ut-button:bg-edit ut-button:after:bg-edit ut-allowed-content:hidden ut-allowed-content:text-slate-500 max-sm:w-full ut-button:max-sm:px-8 ut-button:max-sm:py-3 ut-button:max-sm:text-sm sm:ut-button:h-[44px] sm:ut-button:px-8"
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
                            variant="outline"
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
                        className="ut-button:bg-blue-600 ut-allowed-content:text-slate-500"
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
