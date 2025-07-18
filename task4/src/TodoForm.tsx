import { useState } from "react"
const TodoForm = ({onAdd}: {onAdd: (text:string) => void}) => {
    const [text , setText] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if(!text.trim()) return
        onAdd(text)
        setText("")
    }
    return(
        <form onSubmit={handleSubmit}>
        <h1>My Todo</h1>
        <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add</button>
        </form>
    )
}
export default TodoForm