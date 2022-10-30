import { useContext } from 'react'
import './context.css'
import { ThemeContext } from './ThemeContext'

function Paragraph() {
    const context = useContext(ThemeContext)
    
    return (
        <h1 className={context.theme}>The oldest classical British and Latin writing had little or no space between words and could be written in boustrophedon (alternating directions). Over time, text direction (left to right) became standardized, and word dividers and terminal punctuation became common. The first way to divide sentences into groups was the original paragraphos, similar to an underscore at the beginning of the new group.[1] The Greek parágraphos evolved into the pilcrow (¶), which in English manuscripts in the Middle Ages can be seen inserted inline between sentences. The hedera leaf (e.g. ☙) has also been used in the same way.</h1>
    )
}

export default Paragraph