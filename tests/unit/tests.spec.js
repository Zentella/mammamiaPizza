import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import storeConfig from './mocks/store-config'

const localVue = createLocalVue()
localVue.use(Vuex)
const store = new Vuex.Store(storeConfig)// simula el store

describe("Tests de vuex", () => {// funcion callback

    const pizza = { cant: 1, id: "P003" }//pizza estatica

//test unitari para probar q pizzas se agregen al carro
    it('Acción para agregar una pizza al carrito', () => {
        expect(store.state.carrito).toHaveLength(0)// cantidad en cero del carrito(vacio)
        store.dispatch('addToCart', pizza.id)//pasamos como payload el id de la pizza estatica
        expect(store.state.carrito).toEqual([pizza])
        // test pass
    })

//test unitari para probar incremento en el carro
    it('Acción para aumentar la cantidad de una pizza en el carrito', () => {
        store.dispatch('plus', pizza.id)//dispatch para ejecutar funcion plus
        expect(store.state.carrito[0].cant).toBe(2)//la cantidad debe ser 2
    })

})