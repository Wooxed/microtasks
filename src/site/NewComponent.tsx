type NewComponentType = {
    students: StudentType[]
}

type StudentType = {
    id: number,
    name: string,
    age: number
}

export const NewComponent = (props: NewComponentType) => {
    // const topCars = [
    //     {manufacturer:"BMW",model:'m5cs'},
    //     {manufacturer:"Mercedes",model:'e63s'},
    //     {manufacturer:"Audi",model:'rs6'}
    // ]


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

