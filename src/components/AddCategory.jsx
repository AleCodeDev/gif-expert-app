import { useState } from "react"



export const AddCategory = ({ newCategory }) => {

    const [inputValue, setinputValue] = useState('');

    const onInputChange = (event) => {
        // console.log(event.target.value);
        setinputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault(); 
        if( inputValue.trim().length <= 1 ) return;

        // setCategories(cat => [inputValue, ...cat]);
        newCategory( inputValue.trim() );
        setinputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}
