"use client";

import { useState } from "react";
import { Button, TextField } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

type Inputs = {
    input1: { value: string, error: boolean, message: string };
    input2: { value: string, error: boolean, message: string };
    input3: { value: string, error: boolean, message: string };
    input4: { value: string, error: boolean, message: string };
    input5: { value: string, error: boolean, message: string };
    input6: { value: string, error: boolean, message: string };
};

type FormEditProps = {
    handleClickSaveEdit: () => void;
};

export function FormEdit({ handleClickSaveEdit }: FormEditProps) {

    const inputsConf = [
        { id: 1, name: 'Nombre' },
        { id: 2, name: 'Apellido' },
        { id: 3, name: 'Teléfono' },
        { id: 4, name: 'Correo' },
        { id: 5, name: 'Contraseña' },
        { id: 6, name: 'Confirmar contraseña' }
    ];

    const [inputs, setInputs] = useState<Inputs>({
        input1: { value: '', error: false, message: '' },
        input2: { value: '', error: false, message: '' },
        input3: { value: '', error: false, message: '' },
        input4: { value: '', error: false, message: '' },
        input5: { value: '', error: false, message: '' },
        input6: { value: '', error: false, message: '' },
    });

    const getInputValue = (key: keyof Inputs) => inputs[key].value;
    const getInputHasError = (key: keyof Inputs) => inputs[key].error;
    const getInputErrorMessage = (key: keyof Inputs) => inputs[key].message;

    const isValidFill = (value: string) => {
        return (value.length <= 0 || value.trim() == '') ? false : true;
    };

    const isValidPhone = (phone: string) => {
        return /^\d{10}$/.test(phone);
    };

    const isValidEmail = (email: string) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const arePasswordsEqual = (password: string, confirmPassword: string) => {
        return password === confirmPassword;
    };

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        validateForm(name, value);
    };

    const validateForm = (name: string, value: string) => {
        let hasError: boolean = false;
        hasError = !isValidFill(value);
        setInputs(prevState => ({
            ...prevState,
            [name]: { value: value, error: hasError, message: (hasError ? 'Este campo es requerido' : '') },
        }));
        console.log(hasError, 'Cambio', inputs);

        if (!hasError) {
            switch (name) {
                case 'input3':
                    hasError = !isValidPhone(value);
                    setInputs(prevState => ({
                        ...prevState,
                        [name]: { value: value, error: hasError, message: (hasError ? 'Este debe ser un número' : '') },
                    }));
                    break;
                case 'input4':
                    hasError = !isValidEmail(value);
                    setInputs(prevState => ({
                        ...prevState,
                        [name]: { value: value, error: hasError, message: (hasError ? 'El correo es invalido' : '') },
                    }));
                    break;
                case 'input5':
                    hasError = !arePasswordsEqual(value, inputs.input6.value);
                    setInputs(prevState => ({
                        ...prevState,
                        [name]: { value: value, error: hasError, message: (hasError ? 'Las contraseñas deben ser iguales' : '') },
                    }));
                    if (hasError) {
                        let copyValue = inputs.input6;
                        setInputs(prevState => ({
                            ...prevState,
                            input6: { value: copyValue.value, error: true, message: 'Las contraseñas deben ser iguales' },
                        }));
                    } else if (inputs.input6.error) {
                        let copyValue = inputs.input6;
                        setInputs(prevState => ({
                            ...prevState,
                            input6: { value: copyValue.value, error: false, message: '' },
                        }));
                    }
                    break;
                case 'input6':
                    hasError = !arePasswordsEqual(inputs.input5.value, value);
                    setInputs(prevState => ({
                        ...prevState,
                        [name]: { value: value, error: hasError, message: (hasError ? 'Las contraseñas deben ser iguales' : '') },
                    }));
                    if (hasError) {
                        let copyValue = inputs.input5;
                        setInputs(prevState => ({
                            ...prevState,
                            input5: { value: copyValue.value, error: true, message: 'Las contraseñas deben ser iguales' },
                        }));
                    } else if (inputs.input5.error) {
                        let copyValue = inputs.input5;
                        setInputs(prevState => ({
                            ...prevState,
                            input5: { value: copyValue.value, error: false, message: '' },
                        }));
                    }
                    break;
                default:
                    break;
            }
            console.log(hasError, 'Cambio2', inputs);
        }
    };

    const areAllFieldsCorrect = () => {
        let validError = Object.values(inputs).every(input => input.error === false);
        let validValues = Object.values(inputs).every(input => input.value !== '');
        return (validError && validValues);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        for (const [key, { value }] of Object.entries(inputs)) {
            validateForm(key, value);
        }
        console.log(inputs);
        if (areAllFieldsCorrect()) {
            handleClickSaveEdit();
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div style={{
                marginTop: '25px', display: 'flex', flexDirection: 'column', alignItems: 'center',
                gap: '1.875em'
            }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: '0.938em', rowGap: '1.25em' }}>
                    {inputsConf.map((item) => (
                        <TextField key={`input${item.id}`} label={item.name} variant="outlined" sx={{ width: '300px' }}
                            name={`input${item.id}`} value={getInputValue(`input${item.id}` as keyof Inputs)}
                            error={getInputHasError(`input${item.id}` as keyof Inputs)}
                            helperText={getInputErrorMessage(`input${item.id}` as keyof Inputs)}
                            onChange={handleInputChange}
                            type={(item.id == 5 || item.id == 6) ? 'password' : (item.id == 3) ? 'tel'
                                : (item.id == 4) ? 'email' : 'text'}
                            InputProps={{
                                endAdornment: (
                                    getInputHasError(`input${item.id}` as keyof Inputs) ? <InputAdornment position="end">
                                        <ErrorOutlineIcon style={{ color: 'red' }} />
                                    </InputAdornment> : null
                                ),
                            }} />
                    ))}
                </div>

                <Button type="submit" variant="contained" sx={{ width: "500px" }} disabled={!areAllFieldsCorrect()}>
                    EDITAR
                </Button>
            </div>
        </form>
    );
}