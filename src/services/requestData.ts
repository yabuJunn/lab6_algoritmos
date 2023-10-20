export const requestData = async (url: string) => {
    const data = await fetch(url)
    const dataJSON = await data.json()
    if (dataJSON.hasOwnProperty('results')) {
        return dataJSON.results
    } else {
        return dataJSON
    }
    
}

export const data = async (url: string) => {
    try {
        const data = await fetch(url).then(res => res.json())
        console.log(data.results)
        return data.results
    } catch (error) {
        console.error(error)
    }
}
