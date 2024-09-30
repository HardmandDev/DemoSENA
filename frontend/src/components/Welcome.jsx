// components/Welcome.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        } else {
            navigate('/login');
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    if (!user) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <h1>Bienvenido, {user.name} {user.last_name}!</h1>
            <p>Email: {user.email}</p>
            <p>ID: {user.id}</p>
            <button onClick={handleLogout}>Cerrar Sesión</button>
        </div>
    );
};

export default Welcome;
