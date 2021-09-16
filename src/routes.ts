import { Request, Response } from 'express'
import { createUser } from './services/CreateUser'

export function helloWorld(request: Request, response: Response) {

    const user = createUser({
        name: 'Guilherme',
        email: 'gui@hotmail.com',
        password: '123344'
    })

    console.log(user.email, user.name)

    return response.json({message: 'Hello World'})
}