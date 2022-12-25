import { Router } from "express";
import { deleteUser, getUser, getUsers, postUser, putUser } from "../controllers/users";

const users_router = Router();

users_router.get('/', getUsers);
users_router.get('/:id', getUser);
users_router.post('/', postUser);
users_router.put('/:id', putUser);
users_router.delete('/:id', deleteUser);

export default users_router;