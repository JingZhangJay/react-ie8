import axios from "axios";


export let getVerificationCode = async () => {
    let response = await axios({
        url: '/user/code',
        method: 'post',
        params: {
            codeType: 'loginCode'
        }
    })
    return response.data
}

export let getVerificationCode = async () => {
    let response = await axios({
        url: 'user/login',
        method: 'post',
        params: {
            codeType: 'loginCode'
        }
    })
    return response.data
}


