type ComponentCarType = {
    topCars: TopCarsType[]
}

type TopCarsType = {
    manufacturer: string
    model: string
}

export const ComponentCar = (props: ComponentCarType) => {
    return (
        <table>

            {props.topCars.map((car, i) => {
                return (
                    <tr key={i}>
                        <th>{car.manufacturer}</th>
                        <th>{car.model}</th>
                    </tr>
                )
            })}
        </table>
    )
}