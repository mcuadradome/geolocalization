/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.uniminuto.model;

import java.io.Serializable;
import jakarta.persistence.Basic;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.NamedQueries;
import jakarta.persistence.NamedQuery;
import jakarta.persistence.Table;
import jakarta.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author User
 */
@Entity
@Table(name = "spatial_ref_sys")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "SpatialRefSys.findAll", query = "SELECT s FROM SpatialRefSys s"),
    @NamedQuery(name = "SpatialRefSys.findBySrid", query = "SELECT s FROM SpatialRefSys s WHERE s.srid = :srid"),
    @NamedQuery(name = "SpatialRefSys.findByAuthName", query = "SELECT s FROM SpatialRefSys s WHERE s.authName = :authName"),
    @NamedQuery(name = "SpatialRefSys.findByAuthSrid", query = "SELECT s FROM SpatialRefSys s WHERE s.authSrid = :authSrid"),
    @NamedQuery(name = "SpatialRefSys.findBySrtext", query = "SELECT s FROM SpatialRefSys s WHERE s.srtext = :srtext"),
    @NamedQuery(name = "SpatialRefSys.findByProj4text", query = "SELECT s FROM SpatialRefSys s WHERE s.proj4text = :proj4text")})
public class SpatialRefSys implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @Column(name = "srid", nullable = false)
    private Integer srid;
    @Column(name = "auth_name", length = 256)
    private String authName;
    @Column(name = "auth_srid")
    private Integer authSrid;
    @Column(name = "srtext", length = 2048)
    private String srtext;
    @Column(name = "proj4text", length = 2048)
    private String proj4text;

    public SpatialRefSys() {
    }

    public SpatialRefSys(Integer srid) {
        this.srid = srid;
    }

    public Integer getSrid() {
        return srid;
    }

    public void setSrid(Integer srid) {
        this.srid = srid;
    }

    public String getAuthName() {
        return authName;
    }

    public void setAuthName(String authName) {
        this.authName = authName;
    }

    public Integer getAuthSrid() {
        return authSrid;
    }

    public void setAuthSrid(Integer authSrid) {
        this.authSrid = authSrid;
    }

    public String getSrtext() {
        return srtext;
    }

    public void setSrtext(String srtext) {
        this.srtext = srtext;
    }

    public String getProj4text() {
        return proj4text;
    }

    public void setProj4text(String proj4text) {
        this.proj4text = proj4text;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (srid != null ? srid.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof SpatialRefSys)) {
            return false;
        }
        SpatialRefSys other = (SpatialRefSys) object;
        if ((this.srid == null && other.srid != null) || (this.srid != null && !this.srid.equals(other.srid))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.uniminuto.mavenproject1.SpatialRefSys[ srid=" + srid + " ]";
    }
    
}
