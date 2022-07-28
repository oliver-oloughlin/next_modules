import { useEffect, useRef } from 'react'
import Styles from '../styles/Spinner.module.css'

type Props = {
    colors?: { a: string, b: string },
    durations?: { a: string, b: string }
}

export function Spinner({ colors, durations }: Props) {
    const spinnerRef = useRef<HTMLDivElement>(null)

    useEffect( () => {
        const style = spinnerRef.current!.style
        if (colors) {
            style.setProperty('--clr-1', colors.a)
            style.setProperty('--clr-2', colors.b)
        }
        if (durations) {
            style.setProperty('--dur-1', durations.a)
            style.setProperty('--dur-2', durations.b)
        }
    }, [])

    return <div className={Styles.spinner} ref={spinnerRef}></div>
}