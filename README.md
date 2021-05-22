# curso_test

Característica: Crear solicitudes en el sistema.
Como Usuario de la plataforma
Quiero tener un formulario donde pueda ingresar toda la información de la solicitud
Para que pueda ser aprobada por un administrador.

Escenario: aprobación de solicitud
Dado que estoy en la en la vista de aprobación de solicitud
Cuando presiono el botón “Aprobar”
Entonces el sistema debe enviar notificación al usuario creador de la solicitud vía Email.
