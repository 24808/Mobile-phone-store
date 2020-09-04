 import {
   ADD_COUNTER,
   ADD_TO_CARY
 } from "./mutations-types"
 export default {
   [ADD_COUNTER](state, payload) {
     payload.count++;
     console.log(payload.count);
   },
   [ADD_TO_CARY](state, payload) {
     payload.checked = true
     state.cartList.push(payload);
     console.log(state.cartList);
   }
 }
