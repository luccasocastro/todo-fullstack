package com.luxkapotter.backend.controllers

import com.luxkapotter.backend.models.Todo
import com.luxkapotter.backend.models.TodoRequestDTO
import com.luxkapotter.backend.services.TodoService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.util.UUID

@RestController
@RequestMapping("/api/todos")
@CrossOrigin(origins = ["*"], allowedHeaders = ["*"])
class TodoController(private val service: TodoService) {

    @PostMapping
    fun createTodo(@RequestBody obj: TodoRequestDTO): ResponseEntity<Todo> {
        val todo = service.insertTodo(obj)
        return ResponseEntity.ok(todo)
    }

    @GetMapping
    fun getAllTodos(): ResponseEntity<List<Todo>> {
        val todos = service.getAll()
        return ResponseEntity.ok(todos)
    }

    @GetMapping("/{id}")
    fun getTodoById(@PathVariable id: UUID): ResponseEntity<Todo> {
        val todo = service.getById(id)
        return ResponseEntity.ok(todo)
    }

    @GetMapping("/{title}")
    fun getTodoByTitle(@PathVariable title: String): ResponseEntity<List<Todo>> {
        val todos = service.getTodoByTitle(title)
        return ResponseEntity.ok(todos)
    }

    @PutMapping("/{id}")
    fun updateTodo(@RequestBody obj: TodoRequestDTO, @PathVariable id: UUID): ResponseEntity<Todo> {
        val todo = service.updateTodo(obj, id)
        return ResponseEntity.ok(todo)
    }

    @DeleteMapping("/{id}")
    fun deleteTodo(@PathVariable id: UUID): ResponseEntity<Void> {
        service.deleteTodoById(id)
        return ResponseEntity.noContent().build()
    }

    @DeleteMapping
    fun deleteAllTodos(): ResponseEntity<Void> {
        service.deleteAllTodos()
        return ResponseEntity.noContent().build()
    }

    @PatchMapping("/realizeTodo/{id}")
    fun realizeTodo(@PathVariable id: UUID): ResponseEntity<Void> {
        service.realizeTodo(id)
        return ResponseEntity.ok().build()
    }
}