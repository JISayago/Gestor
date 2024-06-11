# **Proyecto Gestor** 
### **1) - Explicación general**

Es un proyecto planteado desde la perspectiba de que existen **2 tipos** de usuarios, un usuario **Admin** y un usuario tipo **Empleado** o **Usuario Simple**.
- **Admin:** el rol administrador es sólo de una persona (Esteban) que va a tener ciertas funciones que puede hacer solo él, como lo son:
  - **_Registro de empleados:_** el administrador debe dar de alta en el sistema a los empleados que van a tener usuario y asignarles a uno o mas locales, contemplando la posibilidad de que un empleado pueda estar en mas de un local. Todos los empleados registrados tienen un usuario creado por defecto armado por la primera letra del nombre y el apellido completo, en caso de usuarios repetidos al segundo creado se le va  agregar una letra del nombre.
  - **_Registro de proveedores:_** el administrador debe dar de alta a todos los proveedores y asignarlos a cada local según corresponda. Al igual que en el caso de los usuarios, pueden estar asignadas a mas de un local.
  - **_Control de Ventas:_** va a poder ver el historial de todas las ventas realizadas por todos los locales.
  - **_Control de Pedidos:_** es un caso similar al de ventas en el que se va a poder visualizar todos los pedidos realizados por cada local, su contenido y el estado de cada uno (_pedido, recibido, pagado, etc_).
  - **_Tareas:_** Aparte de todas esta funciones, el administrador tiene tambien la posibilidad  de ver y usar las funciones de un usuario normal, la unica diferencia en éste sentido con otro usuario es que el administrador puede realziar todas las tareas de un usuario simple en todos los locales, a diferencia de los usuarios simples que sólo van a poder acceder a los locales que se le asignó en su creación.

>_(**Tanto el control de pedidos como el control de ventas va necesitar que los usuarios de cada  local registren en el sistema según corresponda.**)_

- **Empleado-Usuario Simple:** Los empleados o usuarios simples son aquellos que el administrador dió de alta en el sistema. Estan asignados por local (pudiendo estar asignados a mas de un local si fuera necesario).
  - **_Acceso Restringido:_** A diferencia del administrador los usuarios simples tienen el acceso restringido a ciertas partes del sistemas. Como lo son el sector de _**Registro de Usuarios**_, _**Registro de Proveedores**_, _**Control de Ventas**_ y _**Control de Pedidos**_. Cabe destacar el hecho de que en cada local sí van a poder observar tanto el registro de ventas como el de pedidos, pero aclarando que solo se trata del registro del local particular en el que estan trabajando y no el general en el que sólo tiene acceso el administrador.
  - **_Tareas:_** los usuarios van tener la necesidad de registrar los movimientos que se den en su local, siendo de principal interés el **_Registro de Ventas_**, el **_Registro de Pedidos_** y el **_Registro de los Productos_** en el sistema. Gracias a estos registros es que el administrador puede llevar la cuenta de los movimientos de los locales.

****
### **2) - Módulos del Sistema**

El sistema esta planteado en varios módulos que se relacionan entre sí, teniendo siempre en cuenta el rol de usuario que corresponda.
- **_Login_:** El inicio del sistema esta representado por un login, el cual requiere que se ingresen los datos del usuario que esta ingresando al sistema.
- **_Locales_:** Esta es la página principal que se muestra al acceder al sistema. Aquí se van a mostrar los locales a los que esté asignado el usuario, el mismo deberá elegir en qué local va a ingresar para realizar los movimientos/registros corresponidentes. 
- **_Local_:** Una vez seleccionado el local al que se va a ingresar se va a mostrar esta página, la cual va a mostrar las 4 opciones que se pueden realizar en cada local.
  - **Usuarios:** Es básicametne un listado con todos los usuarios asignados al local, mostrando sus datos básicos y el estado de usuario, si estan bloqueados o no, pudiendo desbloquearlos si se requiriese.
  - **Productos:** Esta sección cuenta con un formulario para dar de alta los productos en el sistema. Los productos cargados se asignarán automáticamente al local en el que se estan cargando, pero podrán ser visualizados por todos los locales y usuarios desde la pestaña de stock. En esta formulario se puede tambier editar el producto de ser necesario (_no recomendado_).
  Tambíen cuenta con un historial de los ultimos productos agregados.
  - **Ventas:** Como su nombre lo indica, es el sector de sistema que se va a encargar de registrar las ventas, tambien mostrando el historial de las ultimas ventas realizadas (ordenadas las más recientes al comienzo del historial). 
  Al ingresar en esta opción se va a mostrar el formulario de registro de la venta, el cual pide que se ingrese un codigo de producto para poder cargarlo desde la base de datos controlando stock y precio. Para que sólo quede agregar la cantidad a vender para que el total se calcule automaticamente. En el caso de querer agregar mas de un producto se debe hacer click en el signo mas amarillo para que así agregue un item nuevo. Cada linea tiene la posibilidad de ser eliminada al hacer click en el icono del tacho de basura.
  Por último se debe seleccionar el método de pago, el cuál por defecto está seleccionado en **Efectivo**.
  Los datos como el **_usuario_** que realiza la venta, la **_fecha y hora_**, el **_local_** y el **_número de comprobante_** se generan automáticamente y se registran al apretar el boton de confirmar compra.
  Cada **Venta** queda registrada en el sistema (_es lo que se va a mostrar en el local como historial de ventas, y lo que va a poder ver el administrador en la pestaña de ventas. Resaltando que el administrador verá las ventas de todos los locales_), y va a tener la opcion de ver el comprobante, el cual lleva a una página con el detalle de la venta y con la opción de descargar un pdf cargado con todo el detalle del comprobante. 
  - **Proveedores:** Es un caso muy similar al de ventas, al seleccionar esta opcion nos lleva a un listado con todos los proveedores asignados al local en el que nos encotramos. En cada proveedor del listado hay un icono que nos lleva al armado del pedido.
  En este formulario, que es practicamente igual que el de ventas, se debe cargar el producto a través del código para traerlo de base de datos (*si es la primera vez que se va a pedir el producto se lo debe cargar previamente en el sistema con cantidad 0*), y al igual que ventas registrar el pedido, el cual va a quedar cargado al igual que ventas en un comprobante y va a poder ser visualizado en la pagina de pedidos del local o en el caso del administrador en el historial general de pedidos. 
 > **_Vale la pena aclarar que se trata de un registro local, al pedido hay que realizarlo como normalmente se hace. Lo único que se agrega en este caso es un registro digital de dicho pedido y que pueda ser catalogado como pedido, recibido, pagado, etc. Y que pueda ser visto por el administrador en cualquier momento._**

- **_Proveedores:_** El modulo proveedores, fue explicado parcialmente en el modulo anterior. Pero hay que aclarar que es uno de esos módulos que cambia según el rol, en el caso previo se lo explicó desde el punto de vista de un usuario común de un local. Sin embargo esto cambia si se trata del administrador, ya que en el caso de éste se deberá dar de alta a todos los proveedores asignándolos a los locales correspondientes (ésto permitirá la visualización del proveedor dentro de cada local), sumando también la posibilidad de editar los datos del proveedor, pudiéndolo asignar a otro local en el caso de ser necesario. 
- **_Stock:_** El modulo Stock hace referencia a un listado de todos los productos de todos los locales, en éste caso es accesible desde todos los usuarios. Es mas que nada un control de existencia o de control de cantidades de producto y en qué local hay stock del mismo.
- **_Ventas:_** Ya nombrado previamente, en el caso de los usuarios va a ser visto desde el local para registrar una nueva venta o bien, poder ver el historal de ventas del local. En el caso del administrador va a poder ver el historial de todas las ventas de todos los locales, pudiendo filtrar de ser necesario.
- **_Pedidos:_** Similiar a las ventas, según el usuario cambia su acceso. Aquí también los usuarios comunes solo tienen acceso desde el local a través de los proveedores, deben seleccionar el proveedor para realizar un pedido y aqui aparecerán los últimos pedidos realizados. El administrador, al igual que en ventas va a poder ver el historial de pedidos de todos los locales y el estado de cada uno.
- **_Usuarios:_** Como se explicó previamente es el sector donde sólo el administrador puede dar de alta a los usuarios del sistema asignándolos a cada local. Mientras que en el caso de los usuarios comunes solo podrán acceder desde el local para ver el listado de usuarios asignados a ese local.
- **_Usuario Logeado:_** De momento solo cumple con la funcion de que al hacer click en la imagen de perfil del usuario logeado se permita el cerrar sesión.
- **_Comprobante:_** Su funcion es la de dejar registro tanto de la **Venta** a un cliente como del **Pedido** a un proveedor. La estructura del mismo en ambos casos es similar y permite la descarga de un pdf con el detallle del mismo.

****       
### **3) - Pendientes de Desarrollo**
El sistema cuenta con varias secciones y/o funciones pendientes de desarrollo al dia de la fecha 10/06/2024, siendo las principales:

- **_Buscadores:_** Ningun buscador tiene funcionalidad, deberian poder filtrar por nombre de producto, de local principalmente.
- **_Rango Fechas:_** Por defecto debe buscar todas, pero se tiene que poder filtrar por el rango de fechas incluyendo las dos opciones posibles (fecha desde y fecha hasta).
- **_Conversión y Descarga PDF:_** Al igual que en los casos anteriores, están planteados los inputs/botones pero no la funcionalidad.
- **_Pagina de perfil:_** Ver si se requiere o no de una pagina de perfil de cada usuario.
- **_Bloqueo/desbloqueo Usuario:_** Para desbloquear o bloquear el usuario según corresponda.
- **_Estado Pedido:_** Agregar la funcion del estado del pedido al proveedor si esta pagado, si esta encargado, si esta cancelado, etc.
- **_Comprobante:_** No carga correctamente los valores del usuario de base de datos sino que accede a los datos del "ahora".
- **_Paginación:_** En el caso de todos los listados tengo que agregar si o si las paginaciones porque sino se hara un listado infinito.
- **_Local:_** es cambiar al funcion de inicio una vez seleccionado el local deberia poder volver al menu del local sin la necesidad de tener que seleccionar entre todso los locales.
- **_Registros y Validaciones Pendiente:s_** Solo esta finalizado el de realizar una **Venta** (pero faltan todas las validaciones), pero quedan pendiente: **Proveedores** (admin), **Usuarios** (admin), **Pedidos** (usuario en local), **Productos** (usuario en local). Y el de **Local** no fue contemplado pero faltaria crearlo, claro esta solo para el admin.
- **_Normalziación:_** Normalizar todos los diseños de listados, titulos botones etc. y replantear la posibilidad de estandarizar los componentes para no tener que recurrir al copy paste que tengo ahora.
- **_Responsive:_** Hacer responsive las páginas, que la mayoria no esta planteada para eso.

****
### **4) - Posibles Cambios de Enfoque**

Existen muchas posibilidades de replantear el sistema pero hay algunos cambios que creo que son a mejor. Pero claramente hay que hablarlo. Algunas son:

- **_Rol Usuario:_** de momento está planteado con dos tipos de rol y que todos los empleados registrados tienen un usuario asignado, ahora depende del administrador a quién le da esas credenciales y como lo gestiona. El tema de replantear el rol de usuario viene de la mando de unas cuantas cosas. 
  - **Tipo de Usuario**: Capaz crear 2 usuarios por local genéricos para el uso de todos y no auto-generado. 
  - **Accesso de Modulos**: Aplicado principalmente a la funcionalidad de que si el usuario no es el admin no se le muestre el cartel de acceso restringido, sino que se muestre lo mismo que ve el admin salvo que en vez de mostrar lo de todos los locales se muestre solo del local en el que se encuetra.
  - **Rol**: crear otros tipos de roles y no solo 2 (aunque cuesta mas plata por el tipo de programacion y filtrado).

- **_Pedido_**: En este caso principalmente estamos hablando en el registro del pedido, en primera instancia necesita que si o si exista en el sistam el producto que esta pidiendo por lo que deberia crearlo aún si no se lo tiene en stock. Esto se puede corregir haciendo un pedido no dinámico cargando el producto sino plano, en donde se deje una instancia escrita del pedido. Aunque esto no quita el hecho que una vez llegado el pedido se deba registrar el producto o editar la cantidad en caso de que ya existiese. 

****
### **5) - Datos Necesarios a Preguntar**
Basicamente se los puede dividr en :
- **Usuarios**: Las principales preguntas de este módulo serían.
  - **_¿Va aquerer registrar todos los empleados?_**
  - **_¿Qué datos le gustaría guardar de cada empleado?_**
  - **_¿Quiere que los usaurios tengan un perfil?_**
- **Proveedores**: Las principales preguntas de este módulo serían.
  - **_¿Qué datos le gustaría guardar de cada Proveedor?_**
- **Productos**: Las principales preguntas de este módulo serían.
  - **_¿Qué datos le gustaría guardar de cada Producto?_**
  - **_¿Utilzia algun tipo de codigo para cada Producto?_**
- **Ventas**: Las principales preguntas de este módulo serían.
  - **_¿Cuáles son los medios de pagos que recibe?_**
  - **_¿Si recibe en cuotas, se necesita la cantidad de cuotas?_**
  - **_¿Cuentan con alguna numeración de comprobante?_**
  - **_¿Necesitan algun dato del cliente en el comprobante o en la venta?_**
  

