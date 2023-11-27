package com.luxkapotter.backend.models

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import jakarta.persistence.Table
import java.util.UUID

@Entity
@Table(name = "tb_todos")
data class Todo(
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    val id: UUID? = null,
    var title: String,
    var content: String,
    var realized: Boolean = false
) {}
