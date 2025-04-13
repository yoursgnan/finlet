import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import illustration from '../assets/Invoice.mp4'
const LoginPage = (params) => {
    const [isLoginForm,setIsLoginForm] = useState(true)
    return (
        <div className="flex h-screen" style={{background:"white"}}>
            <div className="w-[55%] p-4 flex justify-center items-center flex-col">
                <div>
                    <p className='text-3xl m-4 font-bold'>Finlet</p>
                </div>
                <div>
                <video className="w-80" autoPlay muted playsInline>
                <source src={illustration} type="video/mp4" />
                Your browser does not support the video tag.
                </video>
                </div>
                <p>Accouting & Invoicing Software</p>
                <p>Designed to make life easy</p>
            </div>

            {/* Right Side - 40% */}
            <div className="w-[50%] p-4 relative">
            <AnimatePresence mode="wait">
                {isLoginForm ? (
                    <motion.div
                        key="login"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex justify-center items-center"
                    >
                        <div className="w-[70%] h-[80%] gap-y-2 flex flex-col justify-center p-16 bg-blue-100">
                            <div className="mb-4">
                                <p className="text-2xl font-medium">Welcome back.</p>
                                <p className="text-sm text-gray-500">Start managing your finances faster and better</p>
                            </div>
                            <input className="border rounded p-2 font-medium" placeholder="Email/Phone" autoFocus={true}/>
                            <input className="border rounded p-2 font-medium" placeholder="Password" type="password"/>
                            <button className="text-white p-2 rounded text-white font-bold" style={{background:"#305CDE"}}>Login</button>
                            <p className="text-sm self-start text-left">
                                Not an existing user?{' '}
                                <a className="text-blue-400 cursor-pointer" onClick={() => setIsLoginForm(false)} style={{color:"#305CDE"}}>
                                    Create One
                                </a>
                            </p>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="signup"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex justify-center items-center"
                    >
                        <div className="w-[70%] h-[80%] gap-y-2 flex flex-col justify-center p-16 bg-blue-100">
                            <a className="text-sm cursor-pointer" onClick={() => setIsLoginForm(true)} style={{color:"#305CDE"}}>
                                Go Back To Login
                            </a>
                            <div className="mb-4">
                                <p className="text-2xl font-medium">Let’s go.</p>
                                <p className="text-sm text-gray-500">Start managing your finances faster and better</p>
                            </div>
                            <input className="border rounded p-2 font-medium" placeholder="Email/Phone" />
                            <input className="border rounded p-2 font-medium" placeholder="Your Name" />
                            <input className="border rounded p-2 font-medium" placeholder="Password" type="password"/>
                            <button className="p-2 rounded text-white font-bold" style={{background:"#305CDE"}}>Create Account</button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            </div>
        </div>
    )
}

export default LoginPage