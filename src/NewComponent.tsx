import React, {useState} from 'react';
import {Button} from "./components/Button";


type FilterType = "All" | "Dollars" | "Rubls"

export const NewComponent = () => {

    const [money, setMoney] = useState([
        {banknote: 'Dollars', nominal: 100, number: ' a1234567890'},
        {banknote: 'Dollars', nominal: 50, number: ' z1234567890'},
        {banknote: 'Rubls', nominal: 100, number: ' w1234567890'},
        {banknote: 'Dollars', nominal: 100, number: ' e1234567890'},
        {banknote: 'Dollars', nominal: 50, number: ' c1234567890'},
        {banknote: 'Rubls', nominal: 100, number: ' r1234567890'},
        {banknote: 'Dollars', nominal: 50, number: ' x1234567890'},
        {banknote: 'Rubls', nominal: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState<FilterType>("All")

    let currentMoney = money
    if(filter === "Dollars") {currentMoney = money.filter(t => {return t.banknote === "Dollars"})
    } else if (filter === "Rubls") {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === "Rubls")
    }

    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }

    return (
        <div>
            <h2>Money!</h2>
            <Button name={"All"} callBack={() => onClickFilterHandler("All")}/>
            <Button name={"Rubls"} callBack={() => onClickFilterHandler("Rubls")}/>
            <Button name={"Dollars"} callBack={() => onClickFilterHandler("Dollars")}/>
            <table>
                <tbody>
                <tr>
                    <th>Banknote</th>
                    <th>Value</th>
                    <th>Serial number</th>
                </tr>
                {currentMoney.map((t, index) => {
                    return (
                        <tr key={index}>
                            <td> {t.banknote} </td>
                            <td> {t.nominal} </td>
                            <td> {t.number} </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
};

export default NewComponent;