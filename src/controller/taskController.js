const express = require("express");
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const server = express();

server.use(express.json());

async function listTasks(req, res){
    try{
        const tasks = await prisma.task.findMany();
        res.status(200).json(tasks);
    }catch (error) {
        res.status(200).send();
    }
}

async function createTask(req, res) {
    try{
        const data = req.body();
        const task = await prisma.task.create(data);
        res.status(201).json(task);
    }catch (error) {
        res.status(200).send();
    }
}


module.exports = {
    listTasks,
    createTask
}