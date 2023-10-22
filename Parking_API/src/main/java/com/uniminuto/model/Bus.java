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
@Table(name = "bus")
@NamedQueries({
    @NamedQuery(name = "Bus.findAll", query = "SELECT b FROM Bus b"),
    @NamedQuery(name = "Bus.findByCode", query = "SELECT b FROM Bus b WHERE b.code = :code"),
    @NamedQuery(name = "Bus.findByPassengers", query = "SELECT b FROM Bus b WHERE b.passengers = :passengers")})
public class Bus implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @Column(name = "code", nullable = false, length = 10)
    private String code;
    @Basic(optional = false)
    @Column(name = "passengers", nullable = false)
    private int passengers;
    @JoinColumn(name = "conductor_fk", referencedColumnName = "id", nullable = false)
    @ManyToOne(optional = false, fetch = FetchType.EAGER)
    private Conductor conductorFk;
//    @OneToMany(cascade = CascadeType.ALL, mappedBy = "busFk", fetch = FetchType.LAZY)
//    private List<CarPark> carParkList;

    public Bus() {
    }

    public Bus(String code) {
        this.code = code;
    }

    public Bus(String code, int passengers) {
        this.code = code;
        this.passengers = passengers;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public int getPassengers() {
        return passengers;
    }

    public void setPassengers(int passengers) {
        this.passengers = passengers;
    }

    public Conductor getConductorFk() {
        return conductorFk;
    }

    public void setConductorFk(Conductor conductorFk) {
        this.conductorFk = conductorFk;
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
        hash += (code != null ? code.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Bus)) {
            return false;
        }
        Bus other = (Bus) object;
        if ((this.code == null && other.code != null) || (this.code != null && !this.code.equals(other.code))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.uniminuto.mavenproject1.Bus[ code=" + code + " ]";
    }
    
}
