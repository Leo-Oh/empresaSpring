/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package org.uv.empresaSpring.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.uv.empresaSpring.entity.Departamento;

/**
 *
 * @author leonardo
 */
public interface DAODepartamento extends JpaRepository<Departamento, Long>{
    
}
