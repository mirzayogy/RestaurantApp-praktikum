import ApiManager from "./ApiManager"

export const Restaurants = async restaurants => {
    try {
        const result = await ApiManager('/list',{
            method: 'GET',
            headers: {
                "Content-Type" : "application/json"
            },
            data: restaurants
        })

        return result
    } catch (error) {
        return error
    }
}