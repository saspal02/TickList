import {useParams, Link} from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from './security/AuthContext'

function WelcomeComponent() {

    const {username } = useParams()

    const authContext = useAuth()

    const [message, setMessage] = useState(null)



    function successfulResponse(response) {
        console.log(response)
        //setMessage(response.data)
        setMessage(response.data.message)
    }

    function errorResponse(error) {
        console.log(error)
    }


    return (
        <div className="WelcomeComponent">
            <h1>Welcome {username}</h1>
            <div>
                Manage your todos - <Link to="/todos">Go here</Link>
            </div>
            <div className="text-info">{message}</div>
        </div>
    )
}

export default WelcomeComponent