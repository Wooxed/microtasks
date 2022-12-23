type NewComponentType = {
    students: StudentType[]
}

type StudentType = {
    id: number,
    name: string,
    age: number
}

export const NewComponent = (props: NewComponentType) => {
    return (
        <ul>
            {props.students.map((u) => {
                return (
                    <li key={u.id}>
                        <span>{u.name}</span>
                        <span>{u.age}</span>
                    </li>
                )
            })}
        </ul>
    )
}

