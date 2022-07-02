export const GetNotesByName = (name = '', peliculas) => {

    if (peliculas.length!==0){
        name = name.toLocaleLowerCase();
        let pelicuFilter = peliculas.filter( peli => peli.title.toLocaleLowerCase().includes( name )  );
        return pelicuFilter
    }
}
