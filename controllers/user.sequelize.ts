import { Request, Response } from 'express';
import User from '../models/user';

export const getUsers = async (req:Request, res:Response)=> {

    const users = await User.findAll();
    if(!users) return res.status(404).json({message: 'Users not found'});

    res.json( {users} );
}

export const getUser = async (req:Request, res:Response) => {

    const { id } = req.params;

    const user = await User.findByPk(id);

    if(!user) return res.status(404).json({message: 'User not found'});

    res.json( {user} );
}

export const postUser = async (req:Request, res:Response) => {

    const { body } = req;

    try{

        const exitEmail = await User.findOne({where: {email: body.email}});
        if(exitEmail) return res.status(400).json({message: 'Email already exists'});

        const user = await User.create(body);
        res.json(user);

    } catch(e){
        res.status(500).json({
            message: 'Talk to the admin',
        })
    }

}

export const putUser = async (req:Request, res:Response) => {

    const { id } = req.params;
    const { body } = req;
    try{
        const user = await User.findByPk(id);
        if(!user) return res.status(404).json({message: 'User not found'});

        await user.update(body);
        res.json(user);

    } catch(e){
        res.status(500).json({
            message: 'Talk to the admin',
        })
    }

}

export const deleteUser = async (req:Request, res:Response) => {

    const { id } = req.params;
    try{

        const user = await User.findByPk(id);
        if(!user) return res.status(404).json({message: 'User not found'});

        await user.destroy();
        res.json({
            message: 'User deleted',
            id
        }); 

    } catch(e){
        res.status(500).json({
            message: 'Talk to the admin',
        })
    }
    
}