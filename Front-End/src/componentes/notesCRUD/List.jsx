import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDeletePost, fetchGetPost } from "../../redux/action/notesAction";
import Modificar from "./Modificar";

export const List = () => {
    const [NoteModificar, setNoteModificar] = useState()
    const dispatch = useDispatch();
    //const { pelicula } = useSelector((store) => store.pelicula);
    //const { notes } = useSelector((store) => store.notes);
    const { viviendas } = useSelector((store) => store.notes);
    const table = "vivienda"
    console.log(viviendas);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleModificar = useCallback((note) => {
        //console.log(peli);
        setNoteModificar(note)
    })

    const handleDelete =  (table, id) => {
         dispatch(fetchDeletePost(table, id));
         dispatch(fetchGetPost(table));

    }

    useEffect(() => {

    }, [viviendas])


    return (
        <div>

            <Modificar vivienda={NoteModificar} />


            <table className="table text-center mt-3 tabla-content">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">dormitorios</th>
                        <th scope="col">direccion</th>
                        <th scope="col">precio</th>
                        <th scope="col">tamano</th>
                        <th scope="col">observaciones</th>
                        <th scope="col">tipoviviendaid</th>
                        <th scope="col">zonaid</th>
                    </tr>
                </thead>
                <tbody>

                    {viviendas.map((vivienda, index) => (
                        <tr key={index}>
                            <td>{vivienda.viviendaid}</td>
                            <td>{vivienda.dormitorios}</td>
                            <td>{vivienda.direccion}</td>
                            <td>{vivienda.precio}</td>
                            <td>{vivienda.tamano}</td>
                            <td>{vivienda.observaciones}</td>
                            <td>{vivienda.tipoviviendaid}</td>
                            <td>{vivienda.zonaid}</td>
                            <td>
                                <button
                                    className="btn btn-success btn-sm float-end mx-2"
                                    onClick={() => { handleModificar(vivienda) }}

                                >
                                    Modify
                                </button>
                            </td>
                            <td>
                                <button
                                    className="btn btn-danger btn-sm float-end"
                                    onClick={() => {
                                        handleDelete(table, vivienda.id)
                                    }}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>);
};