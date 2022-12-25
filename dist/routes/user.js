"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = require("../controllers/users");
const users_router = (0, express_1.Router)();
users_router.get('/', users_1.getUsers);
users_router.get('/:id', users_1.getUser);
users_router.post('/', users_1.postUser);
users_router.put('/:id', users_1.putUser);
users_router.delete('/:id', users_1.deleteUser);
exports.default = users_router;
//# sourceMappingURL=user.js.map