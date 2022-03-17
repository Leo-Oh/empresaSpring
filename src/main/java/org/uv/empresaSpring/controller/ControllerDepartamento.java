/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package org.uv.empresaSpring.controller;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.uv.empresaSpring.dao.DAODepartamento;
import org.uv.empresaSpring.entity.Departamento;

/**
 *
 * @author leonardo
 */
@RestController
@RequestMapping("api")
public class ControllerDepartamento {

    @Autowired
    private DAODepartamento daoDepartamento;

    @GetMapping("/departamentos")
    public ResponseEntity<List<Departamento>> getDepartamento() {
        List<Departamento> listDepartamento = daoDepartamento.findAll();

        return ResponseEntity.ok(listDepartamento);
    }


    @GetMapping("/departamento/{departamentoId}")
    public ResponseEntity<Departamento> getDepartamentoById(@PathVariable("departamentoId") long departamentoId) {
        Optional<Departamento> optionalDepartamento = daoDepartamento.findById(departamentoId);

        if (optionalDepartamento.isPresent()) {
            return ResponseEntity.ok(optionalDepartamento.get());
        } else {
            return ResponseEntity.noContent().build();
        }

    }

    @PostMapping("/departamento")
    public ResponseEntity<Departamento> createDepartamento(@RequestBody Departamento departamento) {
        Departamento newDepartamento = daoDepartamento.save(departamento);
        return ResponseEntity.ok(newDepartamento);
    }

    @DeleteMapping("/departamento/{departamentoId}")
    public ResponseEntity<Void> deleteDepartamento(@PathVariable("departamentoId") Long departamentoId) {
        daoDepartamento.deleteById(departamentoId);
        return ResponseEntity.ok(null);
    }

    @PutMapping("/departamento")
    public ResponseEntity<Departamento> modificar(@RequestBody Departamento departamento) {
        Optional<Departamento> optionalDepartamento = daoDepartamento.findById(departamento.getId());

        if (optionalDepartamento.isPresent()) {
            Departamento updateDepartamento = optionalDepartamento.get();
            updateDepartamento.setNombre(departamento.getNombre());
            daoDepartamento.save(updateDepartamento);
            return ResponseEntity.ok(updateDepartamento);
        } else {
            return ResponseEntity.notFound().build();
        }

    }

}
