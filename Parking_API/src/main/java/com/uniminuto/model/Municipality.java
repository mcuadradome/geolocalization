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
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
@Table(name = "municipality")
@NamedQueries({
    @NamedQuery(name = "Municipality.findAll", query = "SELECT m FROM Municipality m"),
    @NamedQuery(name = "Municipality.findById", query = "SELECT m FROM Municipality m WHERE m.id = :id"),
    @NamedQuery(name = "Municipality.findByName", query = "SELECT m FROM Municipality m WHERE m.name = :name"),
    @NamedQuery(name = "Municipality.findByLat", query = "SELECT m FROM Municipality m WHERE m.lat = :lat"),
    @NamedQuery(name = "Municipality.findByLon", query = "SELECT m FROM Municipality m WHERE m.lon = :lon"),
    @NamedQuery(name = "Municipality.findByCapacity", query = "SELECT m FROM Municipality m WHERE m.capacity = :capacity")})
public class Municipality implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id", nullable = false)
    private Long id;
    @Basic(optional = false)
    @Column(name = "name", nullable = false, length = 255)
    private String name;
    @Basic(optional = false)
    @Column(name = "lat", nullable = false, length = 16)
    private String lat;
    @Basic(optional = false)
    @Column(name = "lon", nullable = false, length = 16)
    private String lon;
    @Basic(optional = false)
    @Column(name = "capacity", nullable = false)
    private int capacity;
    @JoinColumn(name = "admin_fk", referencedColumnName = "id", nullable = false)
    @ManyToOne(optional = false, fetch = FetchType.EAGER)
    private AdminsPark adminFk;
//    @OneToMany(cascade = CascadeType.ALL, mappedBy = "municipalityFk", fetch = FetchType.LAZY)
//    private List<CarPark> carParkList;

    public Municipality() {
    }

    public Municipality(Long id) {
        this.id = id;
    }

    public Municipality(String name, String lat, String lon, int capacity) {
        this.name = name;
        this.lat = lat;
        this.lon = lon;
        this.capacity = capacity;
        this.adminFk = new AdminsPark(1L);
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

    public String getLat() {
        return lat;
    }

    public void setLat(String lat) {
        this.lat = lat;
    }

    public String getLon() {
        return lon;
    }

    public void setLon(String lon) {
        this.lon = lon;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public AdminsPark getAdminFk() {
        return adminFk;
    }

    public void setAdminFk(AdminsPark adminFk) {
        this.adminFk = adminFk == null ? new AdminsPark(1L) : null;
    }

//    @XmlTransient
//    public List<CarPark> getCarParkList() {
//        return carParkList;
//    }
//
//    public void setCarParkList(List<CarPark> carParkList) {
//        this.carParkList = carParkList;
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
        if (!(object instanceof Municipality)) {
            return false;
        }
        Municipality other = (Municipality) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.uniminuto.mavenproject1.Municipality[ id=" + id + " ]";
    }
    
}
