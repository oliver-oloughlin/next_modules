import { ButtonHTMLAttributes, useEffect, useRef } from 'react'
import Styles from '../styles/SlideButton.module.css'

type SlideButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    slideSpeed?: string,
    slideColor?: string,
    slideOpacity?: number,
}

export function SlideButton({className, slideSpeed, slideColor, slideOpacity, ...rest}: SlideButtonProps) {
    const ref = useRef<HTMLButtonElement>(null)

    useEffect( () => {
        const style = ref.current!.style
        if (slideSpeed) style.setProperty('--slide-speed', slideSpeed)
        if (slideColor) style.setProperty('--slide-color', slideColor)
        if (slideOpacity) style.setProperty('--slide-opacity', slideOpacity + '')
    }, [])

    return <button ref={ref} className={`${Styles.slide_button} ${className}`} {...rest} />
}