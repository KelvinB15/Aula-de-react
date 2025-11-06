// import type { VariantProps } from "class-variance-authority"
import  React from "react"
import Icon from "./icon"
import checkIcon from "../assets/icons/check.svg?react"
import { cva, type VariantProps } from "class-variance-authority"

const inputCheckboxWrapperVariants = cva(`
    inline-flex items-center justify-center cursor-pointer relative
    group
    `)

const inputCheckBoxVariants = cva(`
    appearance-none peer flex items-center justify-center
    border-2 border-solid transition overflow-hidden
    border-green-base hover:border-green-dark hover:bg-green-dark/20
    checked:border-green-base checked:bg-green-base
    group-hover:checked:border-green-dark group-hover:checked:bg-green-dark 
`,
{
    variants: {
        size: {
            md: "w-5 h-5 rounded-sm"
        },
        disabled: {
            true: "pointer-events-none"
        }
    },
    defaultVariants: {
        size: "md",
        disabled: false
    }
})

const inputCheckoxIconVariants = cva(`
    absolute top-1/2 left-1 -translate-y-1/2
    hidden peer-checked:block fill-white
    `,
{
    variants: {
        size: {
            md: "w-3 h-3"
        }
    },
    defaultVariants: {
        size: "md"
    }
})

interface inputCheckBoxProps 
extends VariantProps<typeof inputCheckBoxVariants>,
// Ignorando um padrão input para que assim possa seguir o padrão citado em "inputCheckBoxVariants"
 Omit<React.ComponentProps<"input">, "size" | "disabled"> {}

 export default function InputCheckBox({
    size,
    disabled,
    className,
    ...props
 }: inputCheckBoxProps) {
    return (
    <label className={inputCheckboxWrapperVariants({className})}>
    <input 
    type="checkbox"
    className={inputCheckBoxVariants({size, disabled})}
    {...props} 
    />
    <Icon className={inputCheckoxIconVariants({size})} svg={checkIcon}/>
    </label>
)
 }