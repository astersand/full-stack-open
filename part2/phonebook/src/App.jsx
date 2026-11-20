import { useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040 12345678' }
    ]);
    const [newName, setNewName] = useState('Add name here...');
    const [newNumber, setNewNumber] = useState('Add number here...');
    const [filteredValue, setFilteredValue] = useState('');

    const peopleToShow = filteredValue
        ? persons.filter(person => person.name.toLowerCase().includes(filteredValue.toLowerCase()))
        : persons


    const addName = (event) => {
        event.preventDefault();
        const nameObject = {
            name: newName,
            number: newNumber,
        }
        if (persons.every(person => person.name !== nameObject.name)) {
            setPersons(persons.concat(nameObject));
        } else {
            alert(`${nameObject.name} is already added to the phonebook`);
        }

        setNewName('');
        setNewNumber('');
    }

    const handleNumberChange = (event) => setNewNumber(event.target.value);

    const handleNameChange = (event) => setNewName(event.target.value);

    const handleFilteredNames = (event) => setFilteredValue(event.target.value);

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter onChange={handleFilteredNames} />
            <h2>add a new</h2>
            <PersonForm
                onSubmit={addName}
                handleName={handleNameChange}
                handleNumber={handleNumberChange}
                newNameValue={newName}
                newNumberValue={newNumber}
            />
            <h2>Numbers</h2>
            <Persons personsList={peopleToShow} />
        </div>
    )
}

export default App