import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Pet } from "../entity/Pet";

export const getPets = async (req: Request, res: Response): Promise<Response> => {
    const pets = await getRepository(Pet).find();
    return res.json(pets)
}

export const getPet = async (req: Request, res: Response): Promise<Response> => {
    const pet = await getRepository(Pet).findOne(req.params.id);
    return res.json(pet)
}

export const createPet = async (req: Request, res: Response): Promise<Response> => {
    const newPet = await getRepository(Pet).create(req.body);
    const savePet = await getRepository(Pet).save(newPet)
    return res.json(savePet)
}

export const updatePet = async (req: Request, res: Response): Promise<Response> => {
    const pet = await getRepository(Pet).findOne(req.params.id);
    if(pet){
        await getRepository(Pet).merge(pet, req.body);
        const updatePet =  await getRepository(Pet).save(pet)
        return res.json(updatePet)
    }else{
        return res.status(404).json({msg: "Not user Found"})
    }
}

export const deletePet = async (req: Request, res: Response): Promise<Response> => {
    const pet = await getRepository(Pet).delete(req.params.id);
    return res.json(pet)
}