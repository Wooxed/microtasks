import React from 'react';
import './App.css';
import {NewComponent} from "./site/NewComponent";
import {ComponentCar} from "./site/ComponentCar";
import Button from "./components/Button";

function App() {
    const students = [
        {id: 1, name: "James", age: 8},
        {id: 2, name: "Robert", age: 18},
        {id: 3, name: "John", age: 28},
        {id: 4, name: "Michael", age: 38},
        {id: 5, name: "William", age: 48},
        {id: 6, name: "David", age: 58},
        {id: 7, name: "Richard", age: 68},
        {id: 8, name: "Joseph", age: 78},
        {id: 9, name: "Thomas", age: 88},
        {id: 10, name: "Charles", age: 98},
        {id: 11, name: "Christopher", age: 100},
    ];
    const topCars = [
        {manufacturer: "BMW", model: 'm5cs'},
        {manufacturer: "Mercedes", model: 'e63s'},
        {manufacturer: "Audi", model: 'rs6'}
    ]

    const Button1Foo = (subscriber: string, age: number)=> {
        console.log(subscriber, age)
    }
    const Button2Foo = (subscriber: string)=> {
        console.log(subscriber)
    }
    const Button3Foo = (subscriber: string)=> {
        console.log(subscriber)
    }

    return (
        <div className="App">
            <Button name={'MyYouTubeChanel-1'} callback={()=>Button1Foo('I am Vasya', 21)}/>
            <Button name={'MyYouTubeChanel-2'} callback={()=>Button2Foo('I am Ivan')}/>
            <Button name={'Stupid Button'} callback={()=>Button3Foo('I am Stupid button')}/>


            {/*<NewComponent students={students}/>*/}
            {/*<ComponentCar topCars={topCars}/>*/}
        </div>
    );
}

export default App;
