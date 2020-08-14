import { Router } from "express";
const router = Router();

import { getPets, createPet, getPet, updatePet, deletePet } from "../controllers/pet.controller";

router.get('/pets', getPets);
router.post('/pets', createPet);
router.get('/pets/:id', getPet);
router.put('/pets/:id', updatePet);
router.delete('/pets/:id', deletePet);

export default router