import { Component, Input, trigger, state, style, transition, animate, keyframes } from '@angular/core';

export const pageTransition =
  trigger('showPage', [
    state('on', style({ transform: 'translateY(0)' })), 
    transition('void => on', [
      style({ transform: 'scale(0.9)'}), 
      animate(400)
    ]), 
    transition('on => void', [
      animate(300, style({ opacity: 0}))
    ])  
  ])


    
    
