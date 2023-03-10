import React from 'react'
import Logo from './logo'
import MenuTitles from './menuTitles'

function Side() {
    return (
        <>
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                <Logo />
                
                <hr className="sidebar-divider my-0" />
                
                <MenuTitles clase="nav-item active" icon="fas fa-fw fa-tachometer-alt" title=" Dashboard"/>
            
                <hr className="sidebar-divider" />
            
                <div className="sidebar-heading">Secciones</div>
            
                <MenuTitles clase="nav-item" icon="fas fa-fw fa-plus" title=" Crear Producto" link="http://localhost:3030/productos/crear"/>

                <MenuTitles clase="nav-item" icon="fas fa-fw fa-table" title=" Tablas" link="#tabla-productos"/>
        
                <hr className="sidebar-divider d-none d-md-block" />
            </ul>
        </>
    )
}

export default Side