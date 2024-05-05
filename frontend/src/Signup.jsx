import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './Firebase';

const Signup = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();

        // Check if passwords match
        if (password !== confirmPassword) {
            setError("Passwords don't match");
            return;
        }

        // Proceed with signup if passwords match
        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                navigate("/");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };

    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-900">
            <section className="bg-white rounded-lg shadow-lg p-8 mb-5">
                <h1 className="text-2xl font-bold mb-4 text-gray-900">FocusApp</h1>
                <form>
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="name@flowbite.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Create a password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-700">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="text-red-500 mb-2">{error}</p>}
                    <button
                        type="submit"
                        onClick={onSubmit}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Sign up
                    </button>
                </form>
                <p className="mt-4 text-sm text-gray-900">
                    Already have an account?{' '}
                    <NavLink to="/" className="font-semibold text-blue-500 hover:underline">
                        Sign in
                    </NavLink>
                </p>
            </section>
        </main>
    );
};

export default Signup;
