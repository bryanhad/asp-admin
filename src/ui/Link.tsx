import * as React from "react"
import { type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import NextLink from "next/link"
import { Url } from "next/dist/shared/lib/router/router"
import { buttonVariants } from "./shadcn/button"

export interface LinkProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
        VariantProps<typeof buttonVariants> {}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
    ({ className, variant, size, href, ...props }, ref) => {
        return (
            <NextLink
                href={href as Url}
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            ></NextLink>
        )
    },
)
Link.displayName = "Link"

export { Link }
