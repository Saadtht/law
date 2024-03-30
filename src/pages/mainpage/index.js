import React from 'react'
import {  Acceuil,  Apropos, FormContact, Prqnous, Services } from '../../components'


function MainPage() {
  return (
    <div>
        <Acceuil/>
        <Services/>
        <Apropos/>
        <FormContact/>
        <Prqnous/>
    </div>
  )
}

export default MainPage