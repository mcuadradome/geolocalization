/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.uniminuto.model;

import java.io.Serializable;
import java.util.List;

import jakarta.persistence.Basic;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.NamedQueries;
import jakarta.persistence.NamedQuery;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.xml.bind.annotation.XmlRootElement;
import jakarta.xml.bind.annotation.XmlTransient;

/**
 *
 * @author User
 */
@Entity
@Table(name = "admins_park")
@NamedQueries({
    @NamedQuery(name = "AdminsPark.findAll", query = "SELECT a FROM AdminsPark a"),
    @NamedQuery(name = "AdminsPark.findById", query = "SELECT a FROM AdminsPark a WHERE a.id = :id"),
    @NamedQuery(name = "AdminsPark.findByName", query = "SELECT a FROM AdminsPark a WHERE a.name = :name")})
public class AdminsPark implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id", nullable = false)
    private Long id;
    @Basic(optional = false)
    @Column(name = "name", nullable = false, length = 2147483647)
    private String name;
//    @OneToMany(cascade = CascadeType.ALL, mappedBy = "adminFk", fetch = FetchType.EAGER)
//    private List<Municipality> municipalityList;

    public AdminsPark() {
    }

    public AdminsPark(Long id) {
        this.id = id;
    }

    public AdminsPark(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

//    @XmlTransient
//    public List<Municipality> getMunicipalityList() {
//        return municipalityList;
//    }
//
//    public void setMunicipalityList(List<Municipality> municipalityList) {
//        this.municipalityList = municipalityList;
//    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof AdminsPark)) {
            return false;
        }
        AdminsPark other = (AdminsPark) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.uniminuto.mavenproject1.AdminsPark[ id=" + id + " ]";
    }
    
}
