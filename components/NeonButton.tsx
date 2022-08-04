import { ButtonHTMLAttributes } from 'react';
import Styles from '../styles/NeonButton.module.css'

type NeonButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function NeonButton({className, ...rest}: NeonButtonProps) {
    return <button {...rest} className={`${Styles.neon} ${className}`} />
}