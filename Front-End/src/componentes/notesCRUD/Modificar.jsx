import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { fetchAddPost, fetchUpdatePost } from '../../redux/action/notesAction';
import { userFormHook } from '../../hooks/userFormHook';

const Modificar = ({ vivienda }) => {
    const dispatch = useDispatch();

    const { FormHook, handleInputChange, setFormHook, reset } = userFormHook({
        viviendaid: "",
        dormitorios: "",
        direccion: "",
        precio: "",
        tamano: "",
        observaciones: "",
        tipoviviendaid: "",
        zonaid: "",
    });

    const getValues = () => {
        if (vivienda) {

            const {
                viviendaid,
                dormitorios,
                direccion,
                precio,
                tamano,
                observaciones,
                tipoviviendaid,
                zonaid,

            } = vivienda

            setFormHook({
                viviendaid,
                dormitorios,
                direccion,
                precio,
                tamano,
                observaciones,
                tipoviviendaid,
                zonaid,
            })
            //console.log(FormHook);
        } else {
            //console.log(pelicula);
        }
    }


    const handleModify = (e) => {
        e.preventDefault() 
        console.log(FormHook);
        dispatch(fetchUpdatePost("vivienda", vivienda.viviendaid, FormHook));
        reset();
    }


    useEffect(() => {
        getValues()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [vivienda])

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(fetchAddPost("vivienda", FormHook));
        reset();
    }
    
    return (
        <div>
            <div className="container mt-5">
                <hr />
                <div className="row">
                    <div className="col-12">
                        <h3 className="text-center">Vivienda</h3>
                        <form className="form-group" onSubmit={handleSubmit}>
                            <h1>id</h1>
                            <input
                                value={FormHook.viviendaid}
                                id="inputviviendaid"
                                type="number"
                                className="form-control mt-2"
                                name="viviendaid"
                                autoComplete="off"
                                placeholder="0"
                                required
                                disabled
                                onChange={handleInputChange}
                            />
                            <h1>dormitorios</h1>
                            <input
                                value={FormHook.dormitorios}
                                id="inputdormitorios"
                                type="number"
                                className="form-control mt-2"
                                name="dormitorios"
                                autoComplete="off"
                                placeholder="0"
                                required
                                onChange={handleInputChange}
                            />
                            <h1>direccion</h1>
                            <input
                                value={FormHook.direccion}
                                id="inputdireccion"
                                type="text"
                                className="form-control mt-2"
                                name="direccion"
                                autoComplete="off"
                                placeholder="direccion"
                                required

                                onChange={handleInputChange}
                            />
                            <h1>precio</h1>
                            <input
                                value={FormHook.precio}
                                id="inputprecio"
                                type="number"
                                className="form-control mt-2"
                                name="precio"
                                autoComplete="off"
                                placeholder="0"
                                required
                                onChange={handleInputChange}
                            />
                            <h1>tamano</h1>
                            <input
                                value={FormHook.tamano}
                                id="inputtamano"
                                type="number"
                                className="form-control mt-2"
                                name="tamano"
                                autoComplete="off"
                                placeholder="0"
                                required
                                onChange={handleInputChange}
                            />
                            <h1>observaciones</h1>
                            <input
                                value={FormHook.observaciones}
                                id="inputobservaciones"
                                type="text"
                                className="form-control mt-2"
                                name="observaciones"
                                autoComplete="off"
                                placeholder="observaciones"
                                required
                                onChange={handleInputChange}
                            />
                            <h1>tipoviviendaid</h1>
                            <input
                                value={FormHook.tipoviviendaid}
                                id="inputtipoviviendaid"
                                type="number"
                                className="form-control mt-2"
                                name="tipoviviendaid"
                                autoComplete="off"
                                placeholder="0"
                                required
                                onChange={handleInputChange}
                            />
                            <h1>zonaid</h1>
                            <input
                                value={FormHook.zonaid}
                                id="inputzonaid"
                                type="number"
                                className="form-control mt-2"
                                name="zonaid"
                                autoComplete="off"
                                placeholder="0"
                                required
                                onChange={handleInputChange}
                            />

                            <div className="d-grid gap-2 mx-auto mt-2">

                                <button
                                    value="Save"
                                    type="submit"
                                    className="btn btn-outline-dark"
                                >
                                    Agregar
                                </button>

                                <button
                                    value="Save"
                                    className="btn btn-outline-dark"
                                    onClick={() => { handleModify() }}
                                >
                                    Modificar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modificar