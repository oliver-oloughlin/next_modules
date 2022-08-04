import { useState } from 'react'

export function useToggle(startValue: boolean) {
    const [state, setState] = useState<boolean>(startValue)
    const toggleState = () => setState( val => !val )
    return [state, toggleState] as [boolean, () => void]
}

export function useCycle<T>(values: T[]) {
    const [index, setIndex] = useState<number>(0)
    const cycleState = () => setIndex( i => (i + 1) % values.length )
    return [values[index], cycleState] as [T, () => void]
}