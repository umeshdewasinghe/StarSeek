import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './Firebase';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                sessionStorage.setItem('uid', user.uid);
                navigate("/home");
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }

    return (
        <>
            <main className="min-h-screen flex items-center justify-center bg-gray-900">
                <section className="bg-white rounded-lg shadow-lg p-8">
                    <div className="text-center mb-6">
                        <p className="text-3xl font-bold text-gray-900">FocusApp</p>
                    </div>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="email-address" className="block mb-2 text-sm font-medium text-gray-700">Email</label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                required
                                placeholder="Email address"
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            />
                        </div>

                        <div className="mb-4">
                            <button onClick={onLogin} className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                                Login
                            </button>
                        </div>
                    </form>
                    <p className="text-sm text-gray-700 text-center">
                        No account yet? {' '}
                        <NavLink to="/register" className="font-semibold text-blue-500 hover:underline">
                            Sign up
                        </NavLink>
                    </p>
                </section>
            </main>
        </>
    )
}

export default Login;
