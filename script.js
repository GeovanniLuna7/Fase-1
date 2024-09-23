////// Referenciar el botón de registro
const botonRegistrar = document.getElementById('registrar');

//// Asignar evento clic al botón de registro
botonRegistrar.addEventListener('click', function() {
    try {
        ////// Contener el uso de callback a una función embebida para la limpieza de campos.
        const limpiarCampos = () => {
            document.getElementById('nombreRemitente').value = '';
            document.getElementById('ciudadRemitente').value = '';
            document.getElementById('estadoRemitente').value = '';
            document.getElementById('domicilioRemitente').value = '';
            document.getElementById('codigoPostalRemitente').value = '';
            document.getElementById('telefonoRemitente').value = '';

            document.getElementById('nombreDestinatario').value = '';
            document.getElementById('ciudadDestinatario').value = '';
            document.getElementById('estadoDestinatario').value = '';
            document.getElementById('domicilioDestinatario').value = '';
            document.getElementById('codigoPostalDestinatario').value = '';
            document.getElementById('telefonoDestinatario').value = '';

            document.getElementById('descripcion').value = '';
            document.getElementById('peso').value = '';
            document.getElementById('largo').value = '';
            document.getElementById('ancho').value = '';
            document.getElementById('alto').value = '';
            document.getElementById('fechaSalida').value = '';
            document.getElementById('fechaLlegada').value = '';
            document.getElementById('precio').value = '';
        };

        /////////// Crear constantes que referencien a los campos capturados
        const nombreRemitente = document.getElementById('nombreRemitente').value;
        const ciudadRemitente = document.getElementById('ciudadRemitente').value;
        const estadoRemitente = document.getElementById('estadoRemitente').value;
        const domicilioRemitente = document.getElementById('domicilioRemitente').value;
        const codigoPostalRemitente = document.getElementById('codigoPostalRemitente').value;
        const telefonoRemitente = document.getElementById('telefonoRemitente').value;

        const nombreDestinatario = document.getElementById('nombreDestinatario').value;
        const ciudadDestinatario = document.getElementById('ciudadDestinatario').value;
        const estadoDestinatario = document.getElementById('estadoDestinatario').value;
        const domicilioDestinatario = document.getElementById('domicilioDestinatario').value;
        const codigoPostalDestinatario = document.getElementById('codigoPostalDestinatario').value;
        const telefonoDestinatario = document.getElementById('telefonoDestinatario').value;

        const descripcion = document.getElementById('descripcion').value;
        const peso = document.getElementById('peso').value;
        const largo = document.getElementById('largo').value;
        const ancho = document.getElementById('ancho').value;
        const alto = document.getElementById('alto').value;
        const fechaSalida = document.getElementById('fechaSalida').value;
        const fechaLlegada = document.getElementById('fechaLlegada').value;
        const precio = document.getElementById('precio').value;

        /////// Verificar que no existan campos vacíos
        if (
            nombreRemitente === '' || ciudadRemitente === '' || estadoRemitente === '' || 
            domicilioRemitente === '' || codigoPostalRemitente === '' || telefonoRemitente === '' ||
            nombreDestinatario === '' || ciudadDestinatario === '' || estadoDestinatario === '' || 
            domicilioDestinatario === '' || codigoPostalDestinatario === '' || telefonoDestinatario === '' ||
            descripcion === '' || peso === '' || largo === '' || ancho === '' || 
            alto === '' || fechaSalida === '' || fechaLlegada === '' || precio === ''
        ) {
            throw new Error('Por favor, complete todos los campos.');
        }

        ///// Crear elementos de columna para cada campo capturado
        const columnas = document.createElement('tr');
        const columnaRemitente = document.createElement('td');
        const columnaDestinatario = document.createElement('td');
        const columnaMercancia = document.createElement('td');

        ////////////// Asignar los valores a las columnas
        columnaRemitente.textContent = `${nombreRemitente}, ${ciudadRemitente}, ${estadoRemitente}, ${domicilioRemitente}, ${codigoPostalRemitente}, ${telefonoRemitente}`;
        columnaDestinatario.textContent = `${nombreDestinatario}, ${ciudadDestinatario}, ${estadoDestinatario}, ${domicilioDestinatario}, ${codigoPostalDestinatario}, ${telefonoDestinatario}`;
        columnaMercancia.textContent = `${descripcion}, ${peso}, ${largo}, ${ancho}, ${alto}, ${fechaSalida}, ${fechaLlegada}, ${precio}`;

        //// Crear fila y agregar columnas a la fila
        const fila = document.createElement('tr');
        fila.appendChild(columnaRemitente);
        fila.appendChild(columnaDestinatario);
        fila.appendChild(columnaMercancia);

        ///// Agregar fila a la tabla
        const tablaBody = document.getElementById('tablaBody');
        tablaBody.appendChild(fila);

        /////////// Limpiar campos después del registro
        limpiarCampos();
    } catch (error) {
        alert(error.message);
    }
});
