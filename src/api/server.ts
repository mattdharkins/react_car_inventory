

let token = 'f5d35f28139e413b21f0b3f6976087afe92acfdd71daef36'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://car-inventory-81.herokuapp.com/api/cars`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },

    create: async ( data: any = {}) => {
        const response = await fetch(`https://car-inventory-81.herokuapp.com/api/cars`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },

    update: async ( id: string, data: any={}) => {
        const response = await fetch(`https://car-inventory-81.herokuapp.com/api/cars/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        
    },

    delete: async ( id: string ) => {
        const response = await fetch(`https://car-inventory-81.herokuapp.com/api/cars/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        
    }
}