const grid = new Muuri('.grid', {
	layout: {
		rounding: false
	}
});

window.addEventListener('load', () => {
	grid.refreshItems().layout();
	document.getElementById('grid').classList.add('imagenes-cargadas');

	// agregando los Listener para el filtro de imagenes

	const enlaces = document.querySelectorAll('#filtros a');
	enlaces.forEach((elemento) => {
		elemento.addEventListener('click', (elemento) => {
			evento.preventDefault();
				enlaces.forEach((enlace) => enlace.classList.remove('activo'));
					evento.target.classList.add('activo');

					const categoria = evento.target.innerHTML.toLowerCase();
					categoria === 'todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`);	
				});


			});

		// agregamos los Listener para la barra de busqueda

		document.querySelector('#barra').addEventListener('input', (evento) => {
			const busqueda = evento.target.value;
			grid.filter((item) => item.getElement().dataset.etiquetas.includes(busqueda));
		});

		// agregarndo los LIstener para las imagenes
		const overlay = document.getElementById('overlay');
		document.querySelectorAll('.grid .item img').forEach((elemento) => {
			elemento.addEventListener('click', () => {
				const ruta = elemento.getAttribute('src');
				const descripcion = elemento.parentNode.parentNode.dataset.descripcion;

				overlay.classList.add('activo');
				document.querySelector('#overlay img').src = ruta;
				// en  este secot trabajamos con el overlay // <---!----
				document.querySelector('#overlay .descripcion').innerHTML = descripcion;

			});
		});

		// agregando los Listener del boton cerrar

		document.querySelector('#btn').addEventListener('click', () => {
			overlay.classList.remove('activo');
		});

		//Listener del overlay
		overlay.addEventListener('click', (evento) => {
			evento.target.id === 'overlay'? overlay.classList.remove('activo'): '';
		});

});