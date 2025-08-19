import { useState } from 'react'

import './App.css'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Header from './component/Header'
import { HomeBody } from '../component/bodyComponent/HomeBody'
function App() {
return(
 <>
 <div className='overflow-x-hidden w-full bg-blue-700    '>
  <Header></Header>
  <HomeBody/>
 </div>
 </> 
)
}

export default App
