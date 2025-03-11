import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router';
import axios from 'axios';

export default function Login() {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const handleChange = ({ target }) => {
        const { value, name } = target;
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleClick = async () => {
        const response = await axios.post('http://127.0.0.1:3001/users/login', form);
        console.log(response);
        return response.data;
    }

    return (
        <>
            <Container>
                <input
                    required
                    placeholder='email'
                    type='email'
                    value={form.email}
                    name='email'
                    onChange={handleChange}
                />
                <input
                    required
                    placeholder='senha'
                    type='password'
                    value={form.password}
                    name='password'
                    onChange={handleChange} />
                <button onClick={handleClick}>Login</button>

                <Link>
                    Fazer cadastro
                </Link>
            </Container>
        </>
    )
}