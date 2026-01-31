const express = require("express");
const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });


async function listTasks(req, res){
    try{
        const tasks = await prisma.task.findMany();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function createTask(req, res) {
    try{
        const data = req.body;
        const task = await prisma.task.create({data: data});
        res.status(201).json(task);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function startsATask(req, res) {
    try{
        const id = parseInt(req.params.id);
        const task = await prisma.task.findUnique({ where: { id } });

        if(!task){
            res.status(404).send("Tarefa não encontrada");
        }

        const updatedTask = await prisma.task.update({
            where: {id: task.id},
            data: {
                startDate: new Date(),
                status: "EM_ANDAMENTO"
            }
        })

        res.status(200).json(updatedTask);

    }catch (error) {
        res.status(500).send(error.message);
    }
    
}


async function concludesATask(req, res) {
    try{
        const id = parseInt(req.params.id);
        const task = await prisma.task.findUnique({where: {id}});

        if(!task){
            res.status(404).send("Tarefa não encontrada");
        }

        const updatedTask = await prisma.task.update({
            where: {id: task.id},
            data: {
                status: "CONCLUIDA"
            }
        })

        res.status(200).json(updatedTask);

    }catch (error){
        res.status(500).send(error.message)
    }
}

async function deleteATask(req, res) {
    try{
        const id = parseInt(req.params.id);
        await prisma.task.delete({where: {id}});

        res.status(204).send();

    }catch (error){
        res.status(500).send(error.message)
    }
}



module.exports = {
    listTasks,
    createTask,
    startsATask,
    concludesATask,
    deleteATask
}