import React from "react";
import Button from "./Button";


function StatePerson () {
    const [name, setName] = React.useState('Min Yoongi')
	const [age, setAge]   = React.useState(29)
    const [city, setCity] = React.useState('Daegu')

return <div className="text-center bg-slate-200 rounded-md shadow-lg p-4 m-4">
    <h1 className="text-lg font-semibold"> Hello Everyone </h1>
    <p> My name is <b className="text-amber-600">{name}</b></p>
    <p> My age is <b className="text-amber-500">{age}</b></p>
    <p> I was born in <b className="text-amber-800">{city}</b></p>

    <Button buttonName= "Ubah Nama"
            handleClick={() => {
                setName("Park Jimin");
                setAge(27);
                setCity('Busan')}}/>
</div>
}

export default StatePerson;