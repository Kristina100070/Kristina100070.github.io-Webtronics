import { useState } from 'react';
import Styles from './styles.module.scss'

export const BgEffectCircle = () => {
  const position = [
    {
        top: '499px',
        left: '294px'
    },
    {
        top: '388px',
        left: '1425px'
    },
  ]
  return (<>
  {position.map((item) => (
     <div className={Styles.bg_effect} style={{top: item.top, left: item.left}} />
  ))}
 </>)
  
}