const BASEURL = "http://localhost:4000/api/v1";


export const apiGetAllData = async (table) => {
    try {
        const url = `${BASEURL}/${table}`;
        const resp = await fetch(url);
        const data = await resp.json();
        console.log(data);
        return await data.data;

    } catch (error) {
        console.log(error);
    }
};

export const apiGetData = async (table, id) => {
    try {
        const url = `${BASEURL}/${table}/${id}`;
        const resp = await fetch(url);
        const data = await resp.json();
        //console.log(data);
        return await data.data;

    } catch (error) {
        console.log(error);
    }
};

export const apiPostData = async (table, data) => {
    try {
        const url = BASEURL + `/${table}/new`;
        const request = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        };
        const response = await fetch(url, request)
        console.log('====================================');
        console.log(response.json());
        console.log('====================================');
        //return response.json().data;

    } catch (error) {
        console.log(error);
    }
};

export const apiPutData = async (table, id, data) => {
    try {
        console.log(table, id, data);
        const url = `${BASEURL}/${table}/update/${id}`;
        const request = {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        };
        const response = await fetch(url, request)
        console.log(response);
        return response;

    } catch (error) {
        console.log(error);
    }
};

export const apiDeleteData = async (table, id) => {
    try {
        console.log(table,id);
        const url = `${BASEURL}/${table}/delete`;
        console.log(url);
        const request = {
            method: 'DELETE'
        };
        const response = await fetch(url, request)
        return response.json();

    } catch (error) {
        console.log(error);
    }
};