import bcrypt from 'bcrypt'

const usuarios = [
    {
        nombre: 'Diego ',
        email: 'diego@diego.com',
        confirm: 1,
        password: bcrypt.hashSync('12345678', 10)
    }
]

export default usuarios