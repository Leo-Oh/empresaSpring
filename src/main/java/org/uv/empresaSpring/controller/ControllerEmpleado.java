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
import org.uv.empresaSpring.dao.DAOEmpleado;
import org.uv.empresaSpring.entity.Empleado;

/**
 *
 * @author leonardo
 */
@RestController
@RequestMapping("api")
public class ControllerEmpleado {

    @Autowired
    private DAOEmpleado daoEmpleado;

    @GetMapping("/empleados")
    public ResponseEntity<List<Empleado>> getEmpleado() {
        List<Empleado> listEmpleado = daoEmpleado.findAll();

        return ResponseEntity.ok(listEmpleado);
    }

    @GetMapping("/empleado/{empleadoId}")
    public ResponseEntity<Empleado> getEmpleadoById(@PathVariable("empleadoId") long empleadoId) {
        Optional<Empleado> optionalEmpleado = daoEmpleado.findById(empleadoId);

        if (optionalEmpleado.isPresent()) {
            return ResponseEntity.ok(optionalEmpleado.get());
        } else {
            return ResponseEntity.noContent().build();
        }

    }

    @PostMapping("/empleado")
    public ResponseEntity<Empleado> createEmpleado(@RequestBody Empleado empleado) {
        Empleado newEmpleado = daoEmpleado.save(empleado);
        return ResponseEntity.ok(newEmpleado);
    }

    @DeleteMapping("/empleado/{empleadoId}")
    public ResponseEntity<Void> deleteEmpleado(@PathVariable("empleadoId") Long empleadoId) {
        daoEmpleado.deleteById(empleadoId);
        return ResponseEntity.ok(null);
    }


    
    @PutMapping("/empleado")
    public ResponseEntity<Empleado> modificar(@RequestBody Empleado empleado) {
        Optional<Empleado> optionalEmpleado = daoEmpleado.findById(empleado.getId());

        if (optionalEmpleado.isPresent()) {
            Empleado updateEmpleado = optionalEmpleado.get();
            updateEmpleado.setNombre(empleado.getNombre());
            updateEmpleado.setDireccion(empleado.getDireccion());
            updateEmpleado.setTelefono(empleado.getTelefono());
            daoEmpleado.save(updateEmpleado);
            return ResponseEntity.ok(updateEmpleado);
        } else {
            return ResponseEntity.notFound().build();
        }

    }
}
