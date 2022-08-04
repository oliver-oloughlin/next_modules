import { useEffect, useRef, ButtonHTMLAttributes } from 'react'
import Styles from '../styles/RippleButton.module.css'

type RippleButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    rippleColor?: string,
    rippleSpeed?: string;
    rippleStrength?: number;
}

function doRippleEffect(event: any) {
    const btn: HTMLButtonElement = event.target
    const x = event.offsetX
    const y = event.offsetY
    const style = btn.style
    style.setProperty('--x', x + 'px')
    style.setProperty('--y', y + 'px')
    btn.classList.add(Styles.ripple_effect)
    btn.addEventListener('animationend', () => btn.classList.remove(Styles.ripple_effect), { once: true } )
}

export function RippleButton({ rippleColor, rippleSpeed, rippleStrength, className, ...rest }: RippleButtonProps) {
    const ref = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        const btn = ref.current
        if (btn) {
            const style = btn.style
            if (rippleColor) style.setProperty('--ripple-color', rippleColor)
            if (rippleSpeed) style.setProperty('--animation-duration', rippleSpeed)
            if (rippleStrength) style.setProperty('--ripple-strength', `${rippleStrength}`)
            btn.addEventListener('pointerdown', doRippleEffect)
            return () => ref.current?.removeEventListener('pointerdown', doRippleEffect)
        }
    }, [])

    return <button {...rest} ref={ref} className={`${Styles.ripple} ${className}`} />
}