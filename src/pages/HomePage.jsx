import { Link } from 'react-router-dom';
const HomePage = (params) => {
    return (
        <div>
            <header className="flex justify-between p-2 shadow">
                <div className="flex items-center ml-4">
                    <p className="text-lg font-bold">Finlet</p>
                </div>
                <div className="flex gap-x-4">
                    <div className="flex gap-x-8 items-center justify-end w-100">
                        <a href="/">Home</a>
                        <a href="/pricing">Pricing</a>
                    </div>
                    <div className="flex items-center">
                        <Link className="bg-blue-400 p-2 rounded text-white font-medium w-20 text-center" to="/login" style={{background:"#305CDE"}}>Login</Link>
                    </div>
                </div>
            </header>
            <content className='bg-red-400'>
                
            </content>
        </div>
    )
}

export default HomePage