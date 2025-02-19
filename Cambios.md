# Generales
  - **Modulo de Balances** ( *Ingresos*,*Egresos* ): Incluyendo gastos por afuera como los de alquiler, luz, sueldos, etc. No solo el pago a proveedores.
  -  Convertir la web a una visual 100% mobile. Inlcuyendo formularios (especialmente **ventas** y **pedidos**).
  - **Modulo de Rentabilidad**: Claramente relacionada con el de balances. Poder visualizar la rentabilidad de productos y locales.
  - Agregar la posibilidad de registrar ventas con ofertas. Registrar esa **venta** con el precio del producto de descuento para poder calcular la rentabilidad total.
  - Testear el aplicativo **(Treinta)** para ver como gestiona el tema de *balances* - *ventas* - *pedidos* - *rentabilidad*.
  - **Modulo Ventas**: Poder hacer un filtrado de las ventas, el chabon quiere por ***Local*,*Vendedor*, *Fechas*, *Producto***. Aumentar el filtrado de datos ya sea por inputs o por consultas a bbdd.
  - **Modulo Cuenta Corriente**: Relacionado al *Tipo de Usuario*, Va a ser manejado por el **Admin** y por el **Encargado**.
  - **Modulo Notificaciones**: Por casos de deuda, quieren quenerar un mensaje generico de deuda. Para ser mandado por Whatsapp.

# Usuarios
  - Agregar tipos de ususarios (cada uno tiene una responsabilidad distinta en cada local).(***Admin*,*Encargado*,*Vendedor***)
  - Combinar las ventas de la aplicacion Treinta, para que queden registradas en la aplicacion principal.
  - Los ***Vendedores*** tienen que tener un registro de sus ventas, con la utilidad de que solo puedan ser vistas sus propias ventas y no la del resto de vendedores.
  -  Los usuarios ganan por comision, por lo que se debe incluir un registro de las ventas de cada vendedor para poder agruparla por semana.
  
# Productos
  - Cambiar el codigo numérico por un código de barras.
  - Incluir el **precio de compra** y **precio de venta**.
  - Clarificar el tema de identificacion del producto para poder hacer la consulta de stock general.

# Modificaciones en Aplicación Actual:


- **Modulos:**
  - **Usuario:** Cambio total en el routeo (Autenticacion y funcionalidad) de las páginas debido al tipo de usuario. Hay que agregar la lógica en las páginas para poder habilitar ciertos sectores y funcionalidades según corresponda. Sumado a la pagina de perfil de cada uno. Tambien a la forma de asignar los tipos de usuario y responsabilidades.
  - ***Balance - Rentabilidad - Cuenta Corriente***: Hay que pensar la lógica completa. Se debe agregar si o si tablas en bbdd y cada pagina dedidada a la visualizacion de cada una.
  - **Notificaciones**: También se debe desarrollar una pagina dedicada a este sector, sumado al hecho de que la logica de fondo tiene que ser asociada con la api de Whatsapp.
  - **Ventas**: Se tiene que modificar lo que está hecho, porque al querer que se visualice solo por vendedor, se tiene que modificar el frontend de como se esta mostrando actualmente. Se puede pensar en separar una pagina con el formulario venta por un lado y agregar una pagina de perfil del vendedor (usuario) donde, a parte de mostrar datos basicos, se puede agregar el apartado de historial de ventas. Esos datos tienen que ser visibles solo para el **administrador** y/o **encargado**.
  Aparte se debería tener en cuenta la posbilidad de agregar un detalle en la venta por si se tratase de una devolucion de producto.
  - **Pedidos**: Teniendo en cuenta el tipo de interaccion que se va atener con los pedidos, se debe modificar el tipo de acceso, ya que solo pueden gestionarlo **admin** y **encargados**. Pero no deben ser accesibles por nadie más. (agregar la posibilidad de marcar el estado del pedido)
***