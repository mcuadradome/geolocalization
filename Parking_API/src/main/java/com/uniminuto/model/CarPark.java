/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.uniminuto.model;

import java.io.Serializable;
import java.util.Date;
import jakarta.persistence.Basic;
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
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import jakarta.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author User
 */
@Entity
@Table(name = "car_park")
@NamedQueries({
    @NamedQuery(name = "CarPark.findAll", query = "SELECT c FROM CarPark c"),
    @NamedQuery(name = "CarPark.findById", query = "SELECT c FROM CarPark c WHERE c.id = :id"),
    @NamedQuery(name = "CarPark.findByOrigen", query = "SELECT c FROM CarPark c WHERE c.origen = :origen"),
    @NamedQuery(name = "CarPark.findByDestino", query = "SELECT c FROM CarPark c WHERE c.destino = :destino"),
    @NamedQuery(name = "CarPark.findByDepartureTime", query = "SELECT c FROM CarPark c WHERE c.departureTime = :departureTime"),
    @NamedQuery(name = "CarPark.findByArrivalTime", query = "SELECT c FROM CarPark c WHERE c.arrivalTime = :arrivalTime"),
    @NamedQuery(name = "CarPark.findByTimeOfStay", query = "SELECT c FROM CarPark c WHERE c.timeOfStay = :timeOfStay")})
public class CarPark implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id", nullable = false)
    private Long id;
    @Column(name = "origen", length = 16)
    private String origen;
    @Column(name = "destino", length = 16)
    private String destino;
    @Basic(optional = false)
    @Column(name = "departure_time", nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date departureTime;
    @Basic(optional = false)
    @Column(name = "arrival_time", nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date arrivalTime;
    @Basic(optional = false)
    @Column(name = "time_of_stay", nullable = false)
    private double timeOfStay;
    @JoinColumn(name = "bus_fk", referencedColumnName = "code", nullable = false)
    @ManyToOne(optional = false, fetch = FetchType.EAGER)
    private Bus busFk;
    @JoinColumn(name = "municipality_fk", referencedColumnName = "id", nullable = false)
    @ManyToOne(optional = false, fetch = FetchType.EAGER)
    private Municipality municipalityFk;

    public CarPark() {
    }

    public CarPark(Long id) {
        this.id = id;
    }

    public CarPark(Long id, Date departureTime, Date arrivalTime, double timeOfStay) {
        this.id = id;
        this.departureTime = departureTime;
        this.arrivalTime = arrivalTime;
        this.timeOfStay = timeOfStay;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getOrigen() {
        return origen;
    }

    public void setOrigen(String origen) {
        this.origen = origen;
    }

    public String getDestino() {
        return destino;
    }

    public void setDestino(String destino) {
        this.destino = destino;
    }

    public Date getDepartureTime() {
        return departureTime;
    }

    public void setDepartureTime(Date departureTime) {
        this.departureTime = departureTime;
    }

    public Date getArrivalTime() {
        return arrivalTime;
    }

    public void setArrivalTime(Date arrivalTime) {
        this.arrivalTime = arrivalTime;
    }

    public double getTimeOfStay() {
        return timeOfStay;
    }

    public void setTimeOfStay(double timeOfStay) {
        this.timeOfStay = timeOfStay;
    }

    public Bus getBusFk() {
        return busFk;
    }

    public void setBusFk(Bus busFk) {
        this.busFk = busFk;
    }

    public Municipality getMunicipalityFk() {
        return municipalityFk;
    }

    public void setMunicipalityFk(Municipality municipalityFk) {
        this.municipalityFk = municipalityFk;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof CarPark)) {
            return false;
        }
        CarPark other = (CarPark) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.uniminuto.mavenproject1.CarPark[ id=" + id + " ]";
    }
    
}
