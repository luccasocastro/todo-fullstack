package com.luxkapotter.backend.services

import com.luxkapotter.backend.models.Todo
import com.luxkapotter.backend.models.TodoRequestDTO
import com.luxkapotter.backend.repositories.TodoRepository
import org.springframework.stereotype.Service
import java.util.*

@Service
class TodoService(private val todoRepository: TodoRepository) {

    fun getAll(): List<Todo> {
        return try {
            todoRepository.findAll()
        }catch (ex: Exception){
            throw Exception("Error retrieving all Todos", ex)
        }
    }

    fun getById(id: UUID): Todo {
        return try {
            todoRepository.findById(id).get()
        }catch (ex: Exception){
            throw Exception("Error retrieving Todo with id: $id", ex)
        }

    }

    fun getTodoByTitle(title: String): List<Todo> {
        return try {
            todoRepository.findByTitle(title)
        }catch (ex: Exception){
            throw Exception("Todo with title '$title' not found", ex)
        }
    }

    fun insertTodo(obj: TodoRequestDTO): Todo {
        return try {
            val todo = Todo(
                title = obj.title,
                content = obj.content
            )
            todoRepository.save(todo)
        }catch(ex: Exception){
            throw Exception("Error inserting Todo", ex)
        }
    }

    fun updateTodo(obj: TodoRequestDTO, id: UUID): Todo {
        return try {
            val todo: Todo = getById(id)
            todo.title = obj.title
            todo.content = obj.content
            todoRepository.save(todo)
        }catch(ex: Exception){
            throw Exception("Error updating Todo with id: $id", ex)
        }
    }

    fun deleteTodoById(id: UUID) {
        return try {
            todoRepository.deleteById(id)
        }catch(ex: Exception){
            throw Exception("Error deleting Todo with id: $id", ex)
        }
    }

    fun deleteAllTodos(){
        return try{
            todoRepository.deleteAll()
        }catch(ex: Exception){
            throw Exception("Error deleting all todos!", ex)
        }
    }

    fun realizeTodo(id: UUID) {
        try{
            val todo = getById(id)
            todo.realized = true
            todoRepository.save(todo)
        } catch (ex: Exception){
            throw Exception("Error realizing Todo", ex)
        }
    }

}