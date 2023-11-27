package com.luxkapotter.backend.repositories

import com.luxkapotter.backend.models.Todo
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import java.util.UUID

@Repository
interface TodoRepository : JpaRepository<Todo, UUID> {
    fun findByTitle(title: String): List<Todo>
}