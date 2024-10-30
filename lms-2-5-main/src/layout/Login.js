import { useContext, useState } from "react"
import { redirect } from "react-router-dom";
import UserContext from "../contexts/UserContext"

var users = [
    {
        id: 1, username: "admin", password: "123", firstName: "Админ",
        lastName: "А", familyName: "А", role: { id: 1, name: "Системийн админ" }
    },
    {
        id: 2, username: "user", password: "123", firstName: "Хэрэглэгч",
        lastName: "А", familyName: "А", role: { id: 2, name: "Системийн хэрэглэгч" }
    },
    {
        id: 3, username: "schooladmin", password: "123", firstName: "Админ",
        lastName: "А", familyName: "А", role: { id: 3, name: "Сургуулийн админ" }
    },
    {
        id: 4, username: "schoolteacher", password: "123", firstName: "Багш",
        lastName: "А", familyName: "А", role: { id: 4, name: "Сургуулийн багш" }
    },
    {
        id: 5, username: "schoolstudent", password: "123", firstName: "Оюутан",
        lastName: "С", familyName: "С", role: { id: 5, name: "Сургуулийн оюутан" }
    }
]
const Login = () => {
    const { setUser } = useContext(UserContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = () => {
        const user = users.find(user => user.username === username && user.password === password)
        if (user) {
            setUser(user)
            redirect("/");
        } else {
            alert('Нэвтрэх эрхгүй байна.')
        }
    }
    return <form className="grid gap-6 mb-6" onSubmit={handleSubmit}>
        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={username} onChange={e => setUsername(e.target.value)} />
        <input type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">Нэвтрэх</button>
    </form>
}

export default Login