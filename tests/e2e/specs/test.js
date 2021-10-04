
describe('Tests del carrito', () => {
  it('Botón para agregar una pizza al carrito', () => {
    cy.visit('/')//visitar ruta raiz home
    const btn = cy.get(':nth-child(1) > .card .btn-danger')//buscar 1º elem card btn-danger
    btn.click({ force: true })//hacer clic
    cy.visit('/carrito')//visitar ruta carrito
    cy.contains("h6", "napolitana")//ver q exista h6 con nombre napolitana
  })

  it('Botón para eliminar una pizza del carrito', () => {
    cy.get('.btn-danger').click()//clic en btn-danger pero en carrito osea a minus(-)
    cy.get("h6").should('not.exist')//corroborar q h6 ya no exista porq quedó en 0
  })
})// estos test 2e2 corresponden a la experiencia del usuario
