import { AnchorHTMLAttributes, useEffect, useRef } from 'react'
import Styles from '../styles/SlideLink.module.css'

type SlideLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    slideSpeed?: string,
    slideColor?: string,
}

export function SlideLink({ slideSpeed, slideColor, className, ...rest}: SlideLinkProps) {
    const ref = useRef<HTMLAnchorElement>(null)

    useEffect( () => {
        const style = ref.current!.style
        if (slideSpeed) style.setProperty('--slide-speed', slideSpeed)
        if (slideColor) style.setProperty('--slide-color', slideColor)
    }, [])

    return <a {...rest} ref={ref} className={`${Styles.slide_link} ${className}`} />
}