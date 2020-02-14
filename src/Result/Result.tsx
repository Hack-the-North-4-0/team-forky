import React, { FC, useState } from "react"
import ActionList from "../Components/ActionList"

const Result: FC = () => {
  const [isTodoComplete, setIsTodoComplete] = useState(false)

  const toggleTodo = () => setIsTodoComplete(!isTodoComplete)
  return (
    <div>
      <ActionList isTodoComplete={isTodoComplete} toggleTodo={toggleTodo} />
    </div>
  )
}

export default Result
